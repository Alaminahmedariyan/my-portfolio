// Design Tokens Configuration
// Tailwind CSS v4 compatible

export const designTokens = {
  // Premium Design System
  colors: {
    primary: {
      light: 'hsl(210 40% 98%)',
      dark: 'hsl(222.2 47.4% 11.2%)',
    },
    secondary: {
      light: 'hsl(210 40% 96.1%)',
      dark: 'hsl(222.2 47.4% 11.2%)',
    },
    accent: {
      light: 'hsl(258 90% 66%)',
      dark: 'hsl(263 70% 50%)',
    },
    glass: {
      light: 'hsla(0 0% 100% / 0.8)',
      dark: 'hsla(240 10% 4% / 0.8)',
    },
    surface: {
      light: 'hsla(0 0% 100% / 0.9)',
      dark: 'hsla(240 10% 4% / 0.9)',
    },
    destructive: {
      light: 'hsl(0 84.2% 60.2%)',
      dark: 'hsl(0 62.8% 30.6%)',
    },
    success: {
      light: 'hsl(142.1 76.2% 36.3%)',
      dark: 'hsl(142.1 70.6% 29.2%)',
    },
    warning: {
      light: 'hsl(38 92% 50%)',
      dark: 'hsl(32 95% 44%)',
    },
    info: {
      light: 'hsl(221.2 83.2% 53.3%)',
      dark: 'hsl(224.3 76.3% 48%)',
    },
    gradient: {
      primary: 'linear-gradient(135deg, hsl(258, 90%, 66%) 0%, hsl(263, 70%, 50%) 100%)',
      secondary: 'linear-gradient(135deg, hsl(210, 90%, 60%) 0%, hsl(220, 70%, 50%) 100%)',
      glass: 'linear-gradient(135deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.05) 100%)',
    },
  },

  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    accent: '0 0 0 1px var(--color-accent), 0 0 0 4px var(--color-accent/0.1)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
  },

  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Spacing System (8-point grid)
  spacing: {
    px: '1px',
    '0': '0',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
  },

  animation: {
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
    'fade-in': 'fadeIn 0.3s ease-out forwards',
    'fade-up': 'fadeUp 0.5s ease-out forwards',
    'scale-in': 'scaleIn 0.2s ease-out forwards',
  },

  transition: {
    none: 'none',
    all: 'all 0.15s ease',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke 0.15s ease',
    opacity: 'opacity 0.15s ease',
    shadow: 'box-shadow 0.15s ease',
    transform: 'transform 0.15s ease',
    'theme-toggle': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Premium Typography
  typography: {
    fontFamilies: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"Roboto Mono", monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeights: {
      tight: '1.1',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Border Radius (aliases are defined above)

  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },

  // Container Widths
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export type DesignTokens = typeof designTokens;
