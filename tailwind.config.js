/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lightgray: '#828282',
      card: '#fbfbfb',
      button: '#cbfcd4',
      primary_text: '#053716',
      background: '#f7f5f4',
      product_background: '#ede4dd',
      main_banner: '#2b8a3f',
      sub_banner: '#25ec49',
    },
  },
  plugins: [],
}
