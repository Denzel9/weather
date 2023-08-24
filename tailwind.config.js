const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      base: '#ACA0B7',
      white: colors.white,
      gray: colors.gray,
      transparent: colors.transparent,
      purple: '#8884d8',
    },
    extend: {
      backgroundImage: {
        Cloudly:
          'url(https://images.unsplash.com/photo-1559206596-11b41d1eebae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
        Razor:
          "url('https://images.unsplash.com/photo-1585074245704-62bd99f04219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        Sunny:
          'url(https://images.unsplash.com/photo-1600152983255-f295d9174e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)',
        Night:
          'url(https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80https://images.unsplash.com/photo-1483699606544-d42248fceac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1902&q=80)',
      },
    },
  },
  plugins: [],
}
