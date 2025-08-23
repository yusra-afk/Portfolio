export default {
    content: ["./*.html", "./assets/**/*.html", "./**/*.js"],
    theme: {
      extend: {
        colors: {
          ink:  { DEFAULT: "#0B0F19", soft:"#111827" },
          paper:{ DEFAULT: "#F8FAFC", soft:"#F1F5F9" },
          night:{ DEFAULT: "#0B1220", soft:"#101826" },
          brand:{ primary:"#2563EB", accent:"#F472B6" }
        },
        boxShadow: { soft: "0 10px 30px -10px rgb(0 0 0 / 0.15)" }
      }
    },
    darkMode: "class",
    plugins: []
  }