import { nextui } from "@nextui-org/react";  // Use import instead of require

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {
            space: {
              xs: "0.25rem",
              sm: "0.5rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            },
          },
          colors: {
            background: "#F0F9F8", // Soft turquoise for a modern, airy vibe
            foreground: "#1C2938", // Darker slate for readability and contrast
            primary: {
              light: "#AFF3EB",  // Light turquoise for highlights
              DEFAULT: "#33C2BA", // Bold turquoise blue for primary elements
              dark: "#20807D",    // Deeper turquoise for strong CTAs
            },
            secondary: {
              light: "#FFCFD5",   // Soft pinkish-red for secondary highlights
              DEFAULT: "#FF7A85", // Bright coral for secondary buttons/links
              dark: "#D54C52",    // Deep coral for contrast
            },
            success: {
              light: "#B8EEDC",   // Soft mint green for success feedback
              DEFAULT: "#4ADE80", // Bright green for success states (likes, matches)
              dark: "#199948",    // Deep forest green for positive emphasis
            },
            warning: {
              light: "#FFE6A3",   // Pale yellow for subtle warnings
              DEFAULT: "#F59E0B", // Bright amber for warnings and alerts
              dark: "#B7791F",    // Deep gold for critical warnings
            },
            error: {
              light: "#FCA5A5",   // Soft pinkish-red for gentle errors
              DEFAULT: "#EF4444", // Bright red for error notifications
              dark: "#B91C1C",    // Deep red for urgent error highlights
            },
            info: {
              light: "#BFDBFE",   // Soft sky blue for informational elements
              DEFAULT: "#3B82F6", // Bright blue for info popups and notifications
              dark: "#1E40AF",    // Deep blue for important info sections
            },
            neutral: {
              light: "#E2E8F0",   // Light gray for neutral backgrounds
              DEFAULT: "#94A3B8", // Mid gray for inactive elements
              dark: "#475569",    // Darker gray for text and icons
            },
            focus: '#33C2BA',
          },
          typography: {
            fontFamily: "Nunito, sans-serif", // Clean, modern typography for dating vibes
            fontSize: "1rem",
            fontWeight: {
              light: "300",
              normal: "400",
              medium: "500",
              bold: "700",
            },
          },
          borders: {
            radius: {
              sm: "6px",
              md: "12px",
              lg: "18px",
            },
            width: "1.5px",
            color: "#E2E8F0",
          },
          shadows: {
            xs: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            sm: "0px 4px 8px rgba(0, 0, 0, 0.12)",
            md: "0px 8px 16px rgba(0, 0, 0, 0.15)",
          },
        },
        dark: {
          layout: {
            space: {
              xs: "0.25rem",
              sm: "0.5rem",
              md: "1rem",
              lg: "1.5rem",
              xl: "2rem",
            },
          },
          colors: {
            background: "#10151F", // Dark navy for a sleek night mode
            foreground: "#E5E7EB", // Soft white for high contrast in dark mode
            primary: {
              light: "#33D2C7",  // Bright turquoise for primary actions
              DEFAULT: "#1FB6A8", // Bold turquoise for focus elements
              dark: "#0D5D58",    // Deep teal for stronger emphasis
            },
            secondary: {
              light: "#FF8693",   // Light coral for secondary highlights
              DEFAULT: "#FF4C61", // Bright coral for secondary CTAs
              dark: "#B83442",    // Dark coral for bold emphasis
            },
            success: {
              light: "#6EE7B7",   // Mint green for success feedback
              DEFAULT: "#10B981", // Bright green for success elements
              dark: "#065F46",    // Deep green for stronger success elements
            },
            warning: {
              light: "#FDE68A",   // Light gold for warnings in dark mode
              DEFAULT: "#F59E0B", // Bright amber for warning highlights
              dark: "#B45309",    // Deep gold for urgent warnings
            },
            error: {
              light: "#F87171",   // Bright red for non-intrusive errors
              DEFAULT: "#DC2626", // Bold red for error elements
              dark: "#991B1B",    // Deep red for critical errors
            },
            info: {
              light: "#93C5FD",   // Light blue for informational elements
              DEFAULT: "#3B82F6", // Bright blue for information
              dark: "#1E3A8A",    // Dark blue for emphasis
            },
            neutral: {
              light: "#F0F4F8",   // Very light gray with a cool undertone for soft backgrounds
              DEFAULT: "#A8B2BD", // Mid cool gray for neutral elements with a modern look
              dark: "#5C6673",    // Dark cool gray for text, icons, and high-contrast areas
            },
            focus: '#33C2BA',
            
          },
          typography: {
            fontFamily: "Nunito, sans-serif", // Clean, approachable typography for dark mode
            fontSize: "1rem",
            fontWeight: {
              light: "300",
              normal: "400",
              medium: "500",
              bold: "700",
            },
          },
          borders: {
            radius: {
              sm: "6px",
              md: "12px",
              lg: "18px",
            },
            width: "1.5px",
            color: "#4A5568",
          },
          shadows: {
            xs: "0px 2px 5px rgba(255, 255, 255, 0.1)",
            sm: "0px 4px 8px rgba(255, 255, 255, 0.12)",
            md: "0px 8px 16px rgba(255, 255, 255, 0.15)",
          },
        },
      },
    }),
  ],
};
