// import type { Config } from 'tailwindcss';

// const config: Config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       colors: {
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         chart: {
//           '1': 'hsl(var(--chart-1))',
//           '2': 'hsl(var(--chart-2))',
//           '3': 'hsl(var(--chart-3))',
//           '4': 'hsl(var(--chart-4))',
//           '5': 'hsl(var(--chart-5))',
//         },
//         brand: {
//           primary: '#7E44D5',
//           'primary-dark': '#9453CA',
//           'primary-darker': '#9A4BB8',
//           accent: '#D3907B',
//           lavender: '#DCC1F0',
//           'dark-bg': '#0B0B0F',
//           surface: '#121217',
//           text: '#EDECF3',
//         },
//       },
//       keyframes: {
//         'accordion-down': {
//           from: {
//             height: '0',
//           },
//           to: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//         },
//         'accordion-up': {
//           from: {
//             height: 'var(--radix-accordion-content-height)',
//           },
//           to: {
//             height: '0',
//           },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% 0' },
//           '100%': { backgroundPosition: '200% 0' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         'fade-in': {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         aurora: {
//           from: {
//             backgroundPosition: '50% 50%, 50% 50%',
//           },
//           to: {
//             backgroundPosition: '350% 50%, 350% 50%',
//           },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//         shimmer: 'shimmer 2s infinite',
//         float: 'float 6s ease-in-out infinite',
//         'fade-in': 'fade-in 0.5s ease-out',
//         aurora: 'aurora 60s linear infinite',
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };
// export default config;

import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Libre Bodoni for stylized display headings
        display: ['Libre Bodoni', ...fontFamily.serif],
        // Keep sans-serif for body text (Inter/system font)
        sans: [...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // --- NEW MCGROW PALETTE (Simplified HSL to use in JS/Components) ---
        mcgrow: {
          background: 'hsl(260, 20%, 98%)',
          primary: 'hsl(263, 66%, 55%)', // Medium Purple
          'primary-dark': 'hsl(263, 70%, 45%)', // Darker Purple
          'primary-darker': 'hsl(263, 75%, 35%)', // Deepest Purple
          accent: 'hsl(340, 85%, 60%)', // Bright Magenta
          muted: 'hsl(260, 20%, 90%)',
        },
        // --- End New Palette ---

        // Default shadcn/ui colors (these just read the CSS variables)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Legacy brand colors updated to match the new scheme for button styles
        brand: {
          primary: 'hsl(263, 66%, 55%)',
          'primary-dark': 'hsl(263, 70%, 45%)',
          'primary-darker': 'hsl(263, 75%, 35%)',
          accent: 'hsl(340, 85%, 60%)',
          lavender: 'hsl(260, 60%, 85%)', // Lighter lavender for badges/backgrounds
          'dark-bg': '#0B0B0F', // Keeping dark colors for reference/theme toggle
          surface: '#121217',
          text: '#EDECF3',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        aurora: 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
