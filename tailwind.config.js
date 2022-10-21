/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('../src/assets/images/hompic.jpg')",
        "aboutbg":"url('../src/assets/images/aboutbg.png')",
        "milk":"url('../src/assets/images/milk.jpg')",
        "catering":"url('../src/assets/images/catering.jpg')",
        "isco":"url('../src/assets/images/isco.jpg')",
        "oven":"url('../src/assets/images/oven.jpg')",
        "seeds":"url('../src/assets/images/seeds.jpg')",
        "contact":"url('../src/assets/images/contact.jpg')",
        "form":"url('../src/assets/images/form.jpg')",
        "cto":"url('../src/assets/images/cto.jpg')",
        "plain":"url('../src/assets/images/plainbg.jpg')",
        "orbg":"url('../src/assets/images/newora.jpg')",
        "tall":"url('../src/assets/images/tall.jpg')",
        "shopcto":"url('../src/assets/images/shopcta.jpg')",
        "zurich":"url('../src/assets/images/zurichmap.jpg')",
        "mon":"url('../src/assets/images/mon.jpeg')",
        "ruebg":"url('../src/assets/images/ruebg.jpg')",
        "euaxbg":"url('../src/assets/images/euaxbg.jpg')",
        "shop-bg":"url('../src/assets/images/shop-bg.jpg')",
        "shopbg":"url('../src/assets/images/shopbg.jpg')"
      },
      colors:{
        "yee":"#f78f1e",
        "gee":"#2c2c2d"
      },
      screens :{
        "xs" :"400px"
      }
    },
  },
  plugins: [],
}