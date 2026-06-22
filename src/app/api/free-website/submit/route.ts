import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

// Helper to generate a random 6-character uppercase alphanumeric ID
function generateApplicationId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'FW-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Spam Protection Checks
    // Honeypot check (field is hidden from users, if filled it's a bot)
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.warn('⚠️ Spam submission blocked via honeypot.');
      return NextResponse.json(
        { success: false, error: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Math Captcha validation
    const mathAnswer = parseInt(body.captchaAnswer, 10);
    const mathExpected = parseInt(body.captchaExpected, 10);
    if (isNaN(mathAnswer) || mathAnswer !== mathExpected) {
      return NextResponse.json(
        { success: false, error: 'Incorrect security answer. Please try again.' },
        { status: 400 }
      );
    }

    // 2. Extract application fields
    const {
      websiteType,
      name,
      businessName,
      email,
      phone,
      whatsapp,
      city,
      country,
      businessType,
      businessAge,
      industry,
      description,
      hasDomain,
      willingToPayDomain,
      hasHosting,
      willingToPayHosting,
      hasLogo,
      logoUrl,
      hasPhotos,
      productsCount,
      productCategories,
      needsOnlinePayment,
      needsShippingOptions,
      servicesList,
      needsOnlineBooking,
      serviceArea,
      featuresWanted,
      contentStatus,
      socialMedia,
      timeline,
      referralSource,
    } = body;

    // Generate unique application ID
    const appId = generateApplicationId();

    // 3. Save to Supabase (if configured)
    if (supabase) {
      const { error: dbError } = await supabase.from('free_website_applications').insert([
        {
          application_id: appId,
          status: 'pending',
          website_type: websiteType,
          applicant_name: name,
          business_name: businessName,
          email,
          phone,
          whatsapp: whatsapp || null,
          city,
          country,
          business_type: businessType,
          business_age: businessAge,
          industry,
          description,
          has_domain: !!hasDomain,
          willing_to_pay_domain: willingToPayDomain || null,
          has_hosting: !!hasHosting,
          willing_to_pay_hosting: willingToPayHosting || null,
          has_logo: !!hasLogo,
          logo_url: logoUrl || null,
          has_photos: !!hasPhotos,
          products_count: productsCount || null,
          product_categories: productCategories || null,
          needs_online_payment: needsOnlinePayment !== undefined ? !!needsOnlinePayment : null,
          needs_shipping_options: needsShippingOptions !== undefined ? !!needsShippingOptions : null,
          services_list: servicesList || null,
          needs_online_booking: needsOnlineBooking !== undefined ? !!needsOnlineBooking : null,
          service_area: serviceArea || null,
          features_wanted: featuresWanted || [],
          content_status: contentStatus || null,
          social_media: socialMedia || null,
          timeline: timeline || null,
          referral_source: referralSource || null,
        },
      ]);

      if (dbError) {
        console.error('❌ Supabase DB Save Error:', dbError);
        // We continue to email notifications even if DB save fails to not lose the lead entirely
      }
    } else {
      console.warn('⚠️ Supabase not configured. Application processed in sandbox/fallback mode.');
    }

    // 4. Send Emails via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';
    const emailTo = process.env.EMAIL_TO || 'marutidigitalweb@gmail.com';

    if (resendApiKey) {
      try {
        // Send Notification Email to Maruti Digital Team
        const teamEmailHtml = `
          <div style="font-family: sans-serif; max-width: 600px; color: #15171f;">
            <h2 style="color: #FF6D5A; border-bottom: 2px solid #FF6D5A; padding-bottom: 8px;">New Free Website Application Received</h2>
            <p><strong>Application ID:</strong> ${appId}</p>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
            
            <h3>Step 1: Website Details</h3>
            <p><strong>Website Type:</strong> ${websiteType}</p>
            
            <h3>Step 2: Business & Applicant Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 4px 0; width: 140px;"><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Business Name:</strong></td><td>${businessName}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>WhatsApp:</strong></td><td>${whatsapp || 'N/A'}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Location:</strong></td><td>${city}, ${country}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Business Type:</strong></td><td>${businessType}</td></tr>
              <tr><td style="padding: 4px 0;"><strong>Business Age:</strong></td><td>${businessAge}</td></tr>
            </table>

            <h3>Step 3: Industry & Work Description</h3>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Description:</strong> ${description}</p>

            <h3>Step 4 & 5: Infrastructure</h3>
            <p><strong>Has Domain:</strong> ${hasDomain ? 'Yes' : 'No'} ${!hasDomain ? `(Willing to Pay: ${willingToPayDomain})` : ''}</p>
            <p><strong>Has Hosting:</strong> ${hasHosting ? 'Yes' : 'No'} ${!hasHosting ? `(Willing to Pay: ${willingToPayHosting})` : ''}</p>

            <h3>Step 6: Logo & Photos</h3>
            <p><strong>Has Logo:</strong> ${hasLogo ? 'Yes' : 'No'} ${logoUrl ? `(<a href="${logoUrl}">View Uploaded Logo</a>)` : ''}</p>
            <p><strong>Has Photos:</strong> ${hasPhotos ? 'Yes' : 'No'}</p>

            <h3>Step 7: Category-Specific Answers</h3>
            ${
              websiteType === 'E-commerce' || websiteType === 'Both'
                ? `
              <p><strong>Products Count:</strong> ${productsCount || 'N/A'}</p>
              <p><strong>Product Categories:</strong> ${productCategories || 'N/A'}</p>
              <p><strong>Needs Online Payment:</strong> ${needsOnlinePayment ? 'Yes' : 'No'}</p>
              <p><strong>Needs Shipping Options:</strong> ${needsShippingOptions ? 'Yes' : 'No'}</p>
              `
                : ''
            }
            ${
              websiteType !== 'E-commerce'
                ? `
              <p><strong>Services List:</strong> ${servicesList || 'N/A'}</p>
              <p><strong>Needs Online Booking:</strong> ${needsOnlineBooking ? 'Yes' : 'No'}</p>
              <p><strong>Service Area:</strong> ${serviceArea || 'N/A'}</p>
              `
                : ''
            }

            <h3>Step 8: Features & Timeline</h3>
            <p><strong>Features Wanted:</strong> ${
              Array.isArray(featuresWanted) && featuresWanted.length > 0 
                ? featuresWanted.join(', ') 
                : 'None selected'
            }</p>
            <p><strong>Content Ready:</strong> ${contentStatus}</p>
            <p><strong>Social Media Links:</strong> ${socialMedia || 'None'}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>

            <h3>Step 9: Feedback</h3>
            <p><strong>Heard About Us:</strong> ${referralSource || 'N/A'}</p>
          </div>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: `Maruti Digital Applications <${emailFrom}>`,
            to: [emailTo],
            subject: `🚨 New Free Website Application - ${businessName}`,
            html: teamEmailHtml,
          }),
        });

        // Send Confirmation Email to the Applicant
        const applicantEmailHtml = `
          <div style="font-family: sans-serif; max-width: 600px; color: #15171f; line-height: 1.6;">
            <div style="background-color: #0b0d19; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Application Received! 🎉</h1>
            </div>
            <div style="padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; border-top: none;">
              <p>Hi ${name},</p>
              <p>Thank you for applying for a free website from <strong>Maruti Digital</strong>! We are excited to learn more about <strong>${businessName}</strong>.</p>
              
              <div style="background-color: #f7fafc; border-left: 4px solid #FF6D5A; padding: 12px 16px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px;"><strong>Your Application ID:</strong> <span style="font-family: monospace; font-size: 16px; font-weight: bold; color: #FF6D5A;">${appId}</span></p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #718096;">Please keep this ID for any future queries.</p>
              </div>

              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team reviews every application personally (we approve about 60% of applications).</li>
                <li>We will review your submission and contact you within <strong>3–5 business days</strong> by email, WhatsApp, or phone.</li>
                <li>If approved, we will schedule a kick-off call to plan and build your professional website at zero fee.</li>
              </ul>

              <p>If you have any questions or need to add details to your application, feel free to reply to this email.</p>
              
              <p style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #a0aec0;">
                Best regards,<br />
                <strong>Maruti Digital Team</strong><br />
                <a href="https://marutidigital.in" style="color: #FF6D5A; text-decoration: none;">marutidigital.in</a>
              </p>
            </div>
          </div>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: `Maruti Digital <${emailFrom}>`,
            to: [email],
            subject: `We received your application! (ID: ${appId}) — Maruti Digital`,
            html: applicantEmailHtml,
          }),
        });

        console.log(`✉️ Confirmation and team emails sent successfully via Resend API.`);
      } catch (emailErr) {
        console.error('❌ Resend Email Sending Error:', emailErr);
      }
    } else {
      console.warn('⚠️ RESEND_API_KEY environment variable not configured. Skipping email triggers.');
    }

    return NextResponse.json({
      success: true,
      applicationId: appId,
      applicantName: name,
    });
  } catch (error) {
    console.error('❌ Application Submission Endpoint Error:', error);
    return NextResponse.json(
      { success: false, error: 'An internal server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
