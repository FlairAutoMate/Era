import React from 'react';

interface NarrativeSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: React.ReactNode;
  reversed?: boolean;
  cta?: React.ReactNode;
}

export default function NarrativeSection({ title, subtitle, description, image, reversed = false, cta }: NarrativeSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`space-y-4 ${reversed ? 'md:col-start-2' : ''}`}>
          {subtitle && (
            <span className="text-sm font-semibold tracking-widest text-era-ink-900 uppercase block mb-4">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-era-ink-900 leading-[1.1] text-pretty">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-era-ink-700 font-light leading-relaxed text-pretty">
              {description}
            </p>
          )}
          {cta && (
            <div className="pt-2">
              {cta}
            </div>
          )}
        </div>
        <div className={`flex justify-center ${reversed ? 'md:col-start-1' : ''}`}>
          {image}
        </div>
      </div>
    </section>
  );
}
