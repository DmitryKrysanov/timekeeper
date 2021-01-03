import React from 'react';

interface IIcon {
  path: string;
  color?: string;
}

export default function Icon({path, color}: IIcon) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill={color || '#666666'} />
    </svg>
  );
}
