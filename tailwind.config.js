/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                120: "30rem",
            },
            colors: {
                glare: "#22d3ee",
                "glare-dark": "#0d9488",
            },
            opacity: {
                0: "0",
                0.3: "0.3",
                0.4: "0.4",
            },
            animation: {
                text: "gradient-x 5s ease infinite",
                gradient: "gradient 3s ease infinite",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "gradient-xy": "gradient-xy 15s ease infinite",
            },
            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 100%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 100%",
                        "background-position": "right center",
                    },
                },
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center center",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            backgroundSize: {
                "50%": "50%",
                "200%": "100%",
                "400%": "400%",
            },
            zIndex: {
                1: "1",
            },
        },
    },
    plugins: [],
};
