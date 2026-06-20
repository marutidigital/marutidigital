'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
  gigCount: number;
  priceFrom: number;
  colorClass: string;
}

const COLOR_CLASSES: Record<string, { border: string; bg: string; text: string }> = {
  orange:  { border: 'border-orange-500/30',  bg: 'bg-orange-500/10',  text: 'text-orange-400'  },
  blue:    { border: 'border-blue-500/30',    bg: 'bg-blue-500/10',    text: 'text-blue-400'    },
  green:   { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  purple:  { border: 'border-violet-500/30',  bg: 'bg-violet-500/10',  text: 'text-violet-400'  },
  pink:    { border: 'border-pink-500/30',    bg: 'bg-pink-500/10',    text: 'text-pink-400'    },
  amber:   { border: 'border-amber-500/30',   bg: 'bg-amber-500/10',   text: 'text-amber-400'   },
  red:     { border: 'border-red-500/30',     bg: 'bg-red-500/10',     text: 'text-red-400'     },
  cyan:    { border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400'    },
  indigo:  { border: 'border-indigo-500/30',  bg: 'bg-indigo-500/10',  text: 'text-indigo-400'  },
  teal:    { border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    text: 'text-teal-400'    },
  lime:    { border: 'border-lime-500/30',    bg: 'bg-lime-500/10',    text: 'text-lime-400'    },
  rose:    { border: 'border-rose-500/30',    bg: 'bg-rose-500/10',    text: 'text-rose-400'    },
  sky:     { border: 'border-sky-500/30',     bg: 'bg-sky-500/10',     text: 'text-sky-400'     },
  fuchsia: { border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-400' },
  yellow:  { border: 'border-yellow-500/30',  bg: 'bg-yellow-500/10',  text: 'text-yellow-400'  },
};

export default function CategoryCard({ slug, name, description, icon, gigCount, priceFrom, colorClass }: CategoryCardProps) {
  const colors = COLOR_CLASSES[colorClass] || COLOR_CLASSES.blue;

  return (
    <Link
      href={`/services/${slug}`}
      className={`n8n-card group flex flex-col justify-between h-full border ${colors.border} hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="space-y-3">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl ${colors.bg} border ${colors.border}`}>
          {icon}
        </div>

        {/* Title */}
        <div>
          <h3 className={`text-sm font-bold ${colors.text} group-hover:opacity-90 transition-opacity`}>
            {name}
          </h3>
          <p className="text-[11px] text-n8ntext-base leading-relaxed mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-n8nfg-light flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-n8ntext-light">
          <span className={`font-bold ${colors.text}`}>{gigCount}</span> services
          <span>·</span>
          <span>from <span className="font-semibold text-n8ntext-base">${priceFrom}</span></span>
        </div>
        <ArrowRight size={14} className={`${colors.text} group-hover:translate-x-1 transition-transform`} />
      </div>
    </Link>
  );
}
