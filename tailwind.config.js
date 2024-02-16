/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#fb7413",
        "LightGrey": "#959eac",
        "DarkGrey": "	#7c8798",
        "DarkBlue": "#252d37",
        "VeryDarkBlue": "	#121417",
      },
    },
  },
  plugins: [],
};
