import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      xs: "8px",
      sm: "10px",
      md: "12px",
      lg: "14px",
      xl: "16px",
      screen: "24px",
      full: "1024px",
    },
    extend: {
      boxShadow: {
        "submit-shadow": " 0px 0px 23px 2px rgba(103,136,255,0.77)",
      },
      fontSize: {
        heading_2xs: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        heading_xs: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],

        heading_sm: [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "500",
            letterSpacing: "-0.5%",
          },
        ],
        heading_base: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        heading_md: [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        heading_lg: [
          "56px",
          {
            lineHeight: "64px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        //sub-heading
        subHeading_xs: [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        subHeading_sm: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        subHeading_md: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        subHeading_lg: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        //label
        label_xs: [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        label_sm: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        label_md: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        label_lg: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
            letterSpacing: "0px",
          },
        ],
        //paragraph
        paragraph_xs: [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        paragraph_sm: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        paragraph_md: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        paragraph_lg: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        paragraph_xl: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
      },
      colors: {
        black: {
          //
          0: "#000",
          50: "#020303",
        },
        gray: {
          0: "#FFFFFF",
          50: "#F5F7FA",
          100: "#F2F5F8",
          200: "#E1E4EA",
          300: "#CACFD8",
          400: "#99A0AD",
          500: "#717784",
          600: "#525866",
          700: "#2B303B",
          800: "#222530",
          900: "#181B25",
          950: "#0E121B",
        },
        gray_alpha: {
          0: "#898e9f",
          50: "#99A0AD29",
          100: "#99A0AD3D",
          200: "#0E121B08",
          300: "#0E121B1A",
          400: "#0E121B3D",
        },
        blue: {
          50: "#6788FF",
          800: "#1B1A38",
          900: "#000517",
          //

          100: "#D6E3FF",
        },
        blue_alpha: {
          0: "#6694FF3D",
          50: "#6694FF29",
          100: "#6694FF14",
        },
        sky: {
          50: "#EBF8FF",
          100: "#D6F1FF",
          200: "#C2EBFF",
          300: "#99DDFF",
          400: "#66CCFF",
          500: "#47C2FF",
          600: "#35ADE9",
          700: "#2597D0",
          800: "#1F7EAD",
          900: "#18658C",
          950: "#124B68",
        },
        sky_alpha: {
          0: "#66CCFF3D",
          50: "#66CCFF29",
          100: "#47C2FF14",
        },
        teal: {
          50: "#E4FBF8",
          100: "#D0FBF5",
          200: "#C2F5EE",
          300: "#84EBDD",
          400: "#3FDEC9",
          500: "#22D3BB",
          600: "#1DAF9C",
          700: "#178C7D",
          800: "#1A7569",
          900: "#16645A",
          950: "#0B473F",
        },
        teal_alpha: {
          0: "#3FDEC93D",
          50: "#3FDEC929",
          100: "#3FDEC914",
        },
        green: {
          50: "#E0FAEC",
          100: "#D0FBE8",
          200: "#C2F5DA",
          300: "#84EBB4",
          400: "#3EE089",
          500: "#1FC16B",
          600: "#1DAF61",
          700: "#178C4E",
          800: "#1A7544",
          900: "#16643B",
          950: "#0B4727",
        },
        green_alpha: {
          0: "#3EE0893D",
          50: "#3EE08929",
          100: "#3EE08914",
        },
        yellow: {
          50: "#FFF9EB",
          100: "#FFEFCC",
          200: "#FFEDC2",
          300: "#FFE099",
          400: "#FFD166",
          500: "#F6B51E",
          600: "#E5A81A",
          700: "#C99A2C",
          800: "#A78025",
          900: "#86661D",
          950: "#634C18",
        },
        yellow_alpha: {
          0: "#FFD1663D",
          50: "#FFD16629",
          100: "#FFD16614",
        },
        orange: {
          50: "#FFF1EB",
          100: "#FFE4D6",
          200: "#FFD6C2",
          300: "#FFBB99",
          400: "#FF9966",
          500: "#FF8547",
          600: "#E97135",
          700: "#D05E25",
          800: "#AD4E1F",
          900: "#8C3E18",
          950: "#682F12",
        },
        orange_alpha: {
          0: "#FF99663D",
          50: "#FF996629",
          100: "#FF996614",
        },
        red: {
          50: "#FFEBEC",
          100: "#FFD6D9",
          200: "#FFC2C7",
          300: "#FF99A1",
          400: "#FF6673",
          500: "#FB3747",
          600: "#E93544",
          700: "#D02533",
          800: "#AD1F2B",
          900: "#8C1821",
          950: "#68121A",
        },
        red_alpha: {
          0: "#FF66733D",
          50: "#FF667329",
          100: "#FF667314",
        },
        pink: {
          50: "#FEECFB",
          100: "#FFD6EB",
          200: "#FFC2E0",
          300: "#FF99CC",
          400: "#FF66B2",
          500: "#FB4BA3",
          600: "#E9358F",
          700: "#D0257A",
          800: "#AD1F66",
          900: "#8C1852",
          950: "#68123D",
        },
        pink_alpha: {
          0: "#FF66B23D",
          50: "#FF66B229",
          100: "#FF66B214",
        },
        purple: {
          50: "#EFEBFF",
          100: "#DDD6FF",
          200: "#CCC2FF",
          300: "#AA99FF",
          400: "#8A6FF6",
          500: "#7E52F4",
          600: "#693EE0",
          700: "#5B2CC9",
          800: "#4C25A7",
          900: "#3D1D86",
          950: "#351A75",
        },
        purple_alpha: {
          0: "#8A6FF63D",
          50: "#8A6FF629",
          100: "#8A6FF614",
        },
      },
    },
  },
  plugins: [],
};
export default config;
