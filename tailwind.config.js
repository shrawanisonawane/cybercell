/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Police Navy Blue Palette
        navy: {
          950: '#060D1A',
          900: '#0A1428',
          850: '#0D1B36',
          800: '#112244',
          700: '#1E3A8A',
          600: '#2563EB',
          500: '#3B82F6',
          200: '#C7D2FE',
          100: '#E0E7FF',
          50: '#F0F4FF',
        },
        // Police Badge Gold / Warm Amber Accent
        gold: {
          DEFAULT: '#D97706',
          500: '#F59E0B',
          600: '#D97706',
          light: '#FEF3C7',
          50: '#FFFBEB',
        },
        // Primary Palette - Deep Lavender / Indigo Guidance
        primary: {
          50: '#F4F5FF',
          100: '#EBE9FA',
          200: '#D5D2F5',
          300: '#B8B3F0',
          400: '#AFA9EC',
          DEFAULT: '#534AB7',
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#1E1B4B',
        },
        // Secondary Palette - Rose / Pink Emergency Accent
        secondary: {
          50: '#FFF1F2',
          100: '#FDF2F6',
          200: '#FCE7F3',
          300: '#F4C0D1',
          DEFAULT: '#E11D48',
          600: '#BE123C',
          700: '#9F1239',
        },
        // Tertiary Palette - Emerald / Soft Teal Safety Accent
        tertiary: {
          50: '#F0FDF4',
          100: '#EBF9F4',
          200: '#A7F3D0',
          300: '#6EE7B7',
          DEFAULT: '#5DCAA5',
          600: '#0D9488',
          700: '#0F766E',
        },
        // Surface Tints (Less Stark White)
        surface: {
          DEFAULT: '#F8FAFC',
          card: '#F1F5F9',
          tint: '#EEF2FF',
          muted: '#E2E8F0',
        },
        // Neutral Slate / Charcoal
        charcoal: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          100: '#F1F5F9',
        },
        // Legacy alias compatibility
        lavender: {
          light: '#AFA9EC',
          deep: '#534AB7',
          bg: '#F5F4FE',
          100: '#EBE9FA',
          200: '#D5D2F5',
        },
        pink: {
          soft: '#F4C0D1',
          light: '#FDF2F6',
        },
        teal: {
          accent: '#5DCAA5',
          light: '#EBF9F4',
        },
        // Isolated Safety Risk Badges
        risk: {
          low: '#059669',
          'low-bg': '#ECFDF5',
          med: '#D97706',
          'med-bg': '#FFFBEB',
          high: '#DC2626',
          'high-bg': '#FEF2F2',
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Noto Sans Devanagari', 'sans-serif'],
        sans: ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
        body: ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

