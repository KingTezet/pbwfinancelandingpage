module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Navy
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors - Supporting Indigo
        secondary: {
          DEFAULT: "#3f51b5", // indigo-500
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Accent Colors - Bright Blue for CTAs
        accent: {
          DEFAULT: "#2196f3", // blue-500
          50: "#e3f2fd", // blue-50
          100: "#bbdefb", // blue-100
          200: "#90caf9", // blue-200
          300: "#64b5f6", // blue-300
          400: "#42a5f5", // blue-400
          500: "#2196f3", // blue-500
          600: "#1e88e5", // blue-600
          700: "#1976d2", // blue-700
          800: "#1565c0", // blue-800
          900: "#0d47a1", // blue-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: "#f8f9fa", // gray-50
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#4caf50", // green-500
          50: "#e8f5e8", // green-50
          100: "#c8e6c9", // green-100
          500: "#4caf50", // green-500
          600: "#43a047", // green-600
          700: "#388e3c", // green-700
        },
        warning: {
          DEFAULT: "#ff9800", // orange-500
          50: "#fff3e0", // orange-50
          100: "#ffe0b2", // orange-100
          500: "#ff9800", // orange-500
          600: "#fb8c00", // orange-600
          700: "#f57c00", // orange-700
        },
        error: {
          DEFAULT: "#f44336", // red-500
          50: "#ffebee", // red-50
          100: "#ffcdd2", // red-100
          500: "#f44336", // red-500
          600: "#e53935", // red-600
          700: "#d32f2f", // red-700
        },
        // Border Colors
        border: {
          DEFAULT: "#e0e0e0", // gray-300
          focus: "#2196f3", // blue-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(26, 35, 126, 0.15)',
        'cta-hover': '0 6px 16px rgba(26, 35, 126, 0.2)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40, end)',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        countUp: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}