import React from 'react';

interface SakuraIconProps {
  className?: string;
  size?: number;
}

export const SakuraIcon: React.FC<SakuraIconProps> = ({ className = 'w-4 h-4', size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Anime Sakura Flower 5-Petal SVG */}
      <path
        d="M12 2C13.5 5 16 7 19 6.5C18 9.5 19.5 12.5 22 13.5C19 15 17.5 18 17 21C14.5 19.5 11.5 20.5 10 23C9 20 6.5 18.5 3.5 19C4.5 16 3 13 1 11.5C4 10 5.5 7 6 4C8.5 5.5 11.5 4.5 12 2Z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="12" cy="12" r="2.5" fill="#FFE4E6" opacity="0.9" />
      <circle cx="12" cy="12" r="1" fill="#E87898" />
    </svg>
  );
};
