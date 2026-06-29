import React from 'react';

interface LogoProps {
  className?: string;
  dotColor?: string;
}

export default function Logo({ className = "h-8", dotColor = "#C8A96B" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 160 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Modern wordmark - ERA */}
      <g fill="currentColor">
        {/* E - Minimalist and architectural */}
        <path d="M15 12H42V18H22V24H40V29H22V36H42V42H15V12Z" />
        
        {/* R - Sophisticated curve */}
        <path d="M52 12H72C79 12 84 16.5 84 23.5C84 29 80 34 74 36L86 42H77L67 36H59V42H52V12ZM59 18V30H71C74.5 30 77 27.5 77 23.5C77 19.5 74.5 18 71 18H59Z" />
        
        {/* A - The peak / geometric apex */}
        <path d="M108 12L126 42H118L114 35H102L98 42H90L108 12ZM108 21L104 30H112L108 21Z" />
      </g>
      
      {/* The 'Living Data' Pulse Dot - now square */}
      <rect x="134" y="34" width="8" height="8" fill={dotColor} />
      
      {/* Subtle Horizon Line - representing 'over time' value */}
      <rect x="15" y="47" width="130" height="1" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

