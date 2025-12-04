import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    850: '#151f32',
                    900: '#0f172a',
                    950: '#020617',
                },
                // Nebula / Apple Style Colors
                background: '#000000', // Deepest black
                surface: '#0A0A0A',    // Slightly lighter for cards
                primary: '#FFFFFF',    // Pure white text
                secondary: '#86868b',  // Apple-style gray text
                accent: {
                    glow: '#2997ff',   // Apple/Nebula Blue
                    purple: '#bf5af2', // Apple Purple
                }
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Text"',
                    '"Segoe UI"',
                    'Roboto',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ],
                mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
