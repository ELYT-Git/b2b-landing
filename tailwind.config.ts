import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xs": "360px",
        "md5": "1370px",
      },
      maxWidth: {
        container: '1570px',
        halfContainer: '685px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        bgGray: 'linear-gradient(0deg, #ECF1F9 0%, #ECF1F9 100%), linear-gradient(75deg, rgba(108, 4, 253, 0.73) 0%, rgba(194, 25, 203, 0.60) 100%)',
        bgPurple: 'linear-gradient(0deg, #3A2969 0%, #3A2969 100%), linear-gradient(75deg, rgba(108, 4, 253, 0.73) 0%, rgba(194, 25, 203, 0.60) 100%)',
      },
      fontSize: {
        header1: '52px',

        subtitle1: '24px',
        subtitle2: '18px',
      },
    },
  },
  plugins: [],
}
export default config
