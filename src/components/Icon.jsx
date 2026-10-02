import React from 'react';

export default function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    leaf: <><path d="M20.8 3.2C12.2 3.1 6.3 6.2 4.6 12.3c-1.2 4.2 1.7 7.7 5.5 7.1 5.9-.9 9.7-6.8 10.7-16.2Z"/><path d="M3.5 21c4-5.1 8.1-8.5 13.1-11.3"/></>,
    snow: <><path d="M12 2v20M4.7 6.2l14.6 11.6M19.3 6.2 4.7 17.8M7.8 3.8 12 6l4.2-2.2M7.8 20.2 12 18l4.2 2.2"/></>,
    flask: <><path d="M9 3h6M10 3v5.2L4.8 17a3 3 0 0 0 2.5 4.7h9.4a3 3 0 0 0 2.5-4.7L14 8.2V3"/><path d="M7.2 16h9.6"/></>,
    heart: <path d="M20.8 8.7c0 5.4-8.8 11-8.8 11S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/>,
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".7" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    phone: <path d="M6.5 3.5 9 3l2 5-2.1 1.7a15 15 0 0 0 5.9 5.9l1.7-2.1 5 2 .-0.5 2.5a2 2 0 0 1-2.2 1.6C11.2 18.8 5.2 12.8 4.9 5.7A2 2 0 0 1 6.5 3.5Z"/>
  };
  return <svg {...common}>{paths[name]}</svg>;
}
