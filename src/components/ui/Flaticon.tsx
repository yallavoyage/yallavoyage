import React from 'react';

export type FlaticonName =
  | 'airplane'
  | 'arabic'
  | 'businesswoman'
  | 'contact-mail'
  | 'customer-service'
  | 'drivers-license'
  | 'honeymoon-trip'
  | 'location'
  | 'passport'
  | 'people'
  | 'road-trip'
  | 'self-service'
  | 'travel-agency'
  | 'travel-bag'
  | 'travel-guide'
  | 'visa'
  | 'website';

export interface FlaticonProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: FlaticonName;
  className?: string;
  size?: number | string;
}

export const Flaticon: React.FC<FlaticonProps> = ({
  name,
  className = 'w-5 h-5 text-current',
  size,
  style,
  ...rest
}) => {
  const sizeStyle: React.CSSProperties = size
    ? {
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        flexShrink: 0,
      }
    : { flexShrink: 0 };

  return (
    <span
      role="img"
      aria-label={name}
      className={`inline-block select-none pointer-events-none transition-colors duration-200 bg-current ${className}`}
      style={{
        maskImage: `url(/icons/${name}.png)`,
        WebkitMaskImage: `url(/icons/${name}.png)`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        ...sizeStyle,
        ...style,
      }}
      {...rest}
    />
  );
};

