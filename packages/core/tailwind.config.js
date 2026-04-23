/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#058c8c',
          dark: '#046363',
          darker: '#023b3b',
          light: '#8ccaca',
          lighter: '#b2dbdb',
          lightest: '#e6f4f4',
        },
        // Accent Colors
        accent: {
          terracotta: {
            DEFAULT: '#a1665e',
            dark: '#935d56',
            light: '#d4b9b5',
          },
          gold: '#d09958',
          orange: '#ec9a29',
          purple: '#9747ff',
          green: '#138c05',
        },
        // Neutral Colors
        neutral: {
          black: '#000000',
          900: '#141414',
          800: '#323232',
          700: '#434343',
          600: '#626262',
          500: '#717171',
          400: '#939393',
          300: '#b6b6b6',
          200: '#d9d9d9',
          100: '#eeeeee',
          50: '#f5f5f5',
          white: '#ffffff',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#61b258',
          light: '#e7f3f4',
        },
        warning: {
          DEFAULT: '#d6b739',
          light: '#f7ebc6',
        },
        error: {
          DEFAULT: '#8c1305',
          light: '#ffa18a',
        },
        info: {
          DEFAULT: '#71c5e6',
          light: '#eaf6fb',
        },
      },
      fontFamily: {
        primary: ['iA Writer Quattro S', 'system-ui', '-apple-system', 'sans-serif'],
        secondary: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        accent: ['Acme', 'display', 'sans-serif'],
        display: ['Metal', 'display', 'sans-serif'],
        mono: ['Roboto', 'monospace'],
      },
      fontSize: {
        xs: ['0.5rem', { lineHeight: '0.75rem' }],      // 8px
        sm: ['0.75rem', { lineHeight: '1rem' }],        // 12px
        base: ['1rem', { lineHeight: '1.5rem' }],       // 16px
        md: ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        lg: ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        xl: ['1.5rem', { lineHeight: '2rem' }],         // 24px
        '2xl': ['2rem', { lineHeight: '2.5rem' }],      // 32px
        '3xl': ['2.25rem', { lineHeight: '2.75rem' }],  // 36px
        '4xl': ['3rem', { lineHeight: '3.5rem' }],      // 48px
        '5xl': ['4rem', { lineHeight: '4.5rem' }],      // 64px
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        0: '0',
        1: '0.25rem',    // 4px
        2: '0.5rem',     // 8px
        3: '0.75rem',    // 12px
        4: '1rem',       // 16px
        5: '1.25rem',    // 20px
        6: '1.5rem',     // 24px
        8: '2rem',       // 32px
        10: '2.5rem',    // 40px
        12: '3rem',      // 48px
        16: '4rem',      // 64px
        20: '5rem',      // 80px
        24: '6rem',      // 96px
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',   // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [],
}
