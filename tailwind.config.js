/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg-primary': 'var(--bg-primary)',
        'green-500': 'var(--green-500)',
        'grey-400': 'var(--grey-400)',
        'grey-800': 'var(--grey-800)',
        'grid-bg': 'var(--grid-bg)',
        'info-50': 'var(--info-50)',
        'info-500': 'var(--info-500)',
        'info-600': 'var(--info-600)',
        'neutral-400': 'var(--neutral-400)',
        'neutral-500': 'var(--neutral-500)',
        'primary-100': 'var(--primary-100)',
        'primary-500': 'var(--primary-500)',
        'primary-custom-color': 'var(--primary-custom-color)',
        'white-100': 'var(--white-100)',
        'white-50': 'var(--white-50)',
      },
      fontFamily: {
        'jp-semi-bold': ['Noto_Sans_JP-SemiBold', 'Helvetica', 'sans-serif'],
        'jp-semi-regular': ['Noto_Sans_JP-Regular', 'Helvetica', 'sans-serif'],
        'jp-semi-medium': ['Noto_Sans_JP-Medium', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'container-drop-shadow': 'var(--container-drop-shadow)',
        'field-active': 'var(--field-active)',
      },
      textColor: {
        'text-main': 'var(--text-main)',
        'text-content': 'var(--text-content)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
