import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "size" | "stroke"> & {
  size?: number;
  stroke?: number;
};

const Icon = ({
  size = 22,
  stroke = 1.8,
  fill = "none",
  children,
  viewBox = "0 0 24 24",
  ...rest
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill={fill}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const IconArrow = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </Icon>
);

export const IconCheck = (p: IconProps) => (
  <Icon size={16} stroke={2.4} {...p}>
    <path d="M4 12l5 5L20 6" />
  </Icon>
);

export const IconMenu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Icon>
);

export const IconClose = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6l-12 12" />
  </Icon>
);

export const IconChip = (p: IconProps) => (
  <Icon size={28} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 4v-2" />
    <path d="M15 4v-2" />
    <path d="M9 22v-2" />
    <path d="M15 22v-2" />
    <path d="M4 9h-2" />
    <path d="M4 15h-2" />
    <path d="M22 9h-2" />
    <path d="M22 15h-2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </Icon>
);

export const IconBroadcast = (p: IconProps) => (
  <Icon size={28} {...p}>
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
    <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
  </Icon>
);

export const IconHandshake = (p: IconProps) => (
  <Icon size={28} {...p}>
    <path d="M11 17l-3-3 5-5 3 3" />
    <path d="M2 13l5-5 3 3" />
    <path d="M22 13l-5-5-3 3" />
    <path d="M14 19l-2 2-3-3" />
    <path d="M17 16l2-2" />
  </Icon>
);

export const IconShield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const IconSpark = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="M5.6 5.6l2.8 2.8" />
    <path d="M15.6 15.6l2.8 2.8" />
    <path d="M5.6 18.4l2.8-2.8" />
    <path d="M15.6 8.4l2.8-2.8" />
  </Icon>
);

export const IconUsers = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M14.5 14c2.5 0 6.5 1.6 6.5 5" />
  </Icon>
);

export const IconGlobe = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </Icon>
);

export const IconPin = (p: IconProps) => (
  <Icon size={18} {...p}>
    <path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

export const IconPhone = (p: IconProps) => (
  <Icon size={18} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z" />
  </Icon>
);

export const IconMail = (p: IconProps) => (
  <Icon size={18} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

export const IconSendPlane = (p: IconProps) => (
  <Icon size={16} stroke={2} {...p}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </Icon>
);

export const IconLI = (p: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 116.5 4.3a1.7 1.7 0 010 3.4zM19 19h-3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V19h-3V9h2.9v1.4h.04c.4-.75 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z" />
  </svg>
);

export const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <path d="M18.244 2H21l-6.56 7.5L22 22h-6.84l-4.66-6.07L4.94 22H2.18l7.04-8.04L2 2h7l4.21 5.57L18.24 2zm-1.2 18h1.62L7.04 4H5.32l11.72 16z" />
  </svg>
);

export const IconIG = (p: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const IconFB = (p: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.93.26-1.56 1.6-1.56h1.7V4.27c-.3-.04-1.32-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.27v2.4H7.4V14h2.74v8h3.36z" />
  </svg>
);
