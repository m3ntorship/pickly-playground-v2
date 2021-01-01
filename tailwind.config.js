module.exports = {
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#7048E8",
        shd1: "#8360EB",
        shd2: "#9577EE",
        shd3: "#A68EF1",
        shd4: "#B8A4F4",
        shd5: "#CABBF7",
        shd6: "#DCD2F9",
        shd7: "#EDE8FC",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
    },
    boxShadow: {
      soft: "0px 4px 12px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.04)",
      dark:
        "0px 8px 16px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.08);",
      heavy:
        "0px 16px 24px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08);",
      none: "none",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["2rem", { lineHeight: "1.3", letterSpacing: "-.05em" }],
      lg: ["2.5rem", { lineHeight: "1.3", letterSpacing: "-.05em" }],
      xl: ["3rem", { lineHeight: "1.3", letterSpacing: "-.05em" }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
