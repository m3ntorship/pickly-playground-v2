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
      "2xs": [".625rem", "1.4"], //10px
      xs: [".75rem", "1.4"], //12px
      sm: [".875rem", "1.4"], //14px
      base: ["1rem", "1.4"], //16px
      md: ["1.25rem", "1.4"], //20px
      lg: ["1.5rem", "1.4"], //24px
      xl: ["1.75rem", "1.4"], //28px
      "2xl": ["2rem", { lineHeight: "1.3", letterSpacing: "-.05em" }], //32px
      "3xl": ["2.5rem", { lineHeight: "1.3", letterSpacing: "-.05em" }], //40px
      "4xl": ["3rem", { lineHeight: "1.3", letterSpacing: "-.05em" }], //48px
      "8xl": ["6rem", { lineHeight: "1.3", letterSpacing: "-.05em" }], //96px
    },
    extend: {
      spacing: {
        '3xs': '.125rem',
        'xxs': '.25rem',
        'xs': '.5rem',
        's': '.75rem',
        'm':'1rem',
        'l': '1.5rem',
        'xl': '2rem',
        'xxl': '2.5rem',
        '3xl': '3rem',
        '4xl':'4rem',
        '5xl':'8rem'
      }
    }
	},
	variants: {
		extend: {}
	},
	plugins: []
};
