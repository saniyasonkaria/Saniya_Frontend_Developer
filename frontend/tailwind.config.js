/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      'hero': "url('https://media.istockphoto.com/id/509091116/photo/spaceship-in-space.jpg?b=1&s=170667a&w=0&k=20&c=Cm4D18WKL7_jkHkGNP7xWHwlGSCTDSjRKxqNT71Lwz8=')",
    },}
  },
  plugins: [],
}
