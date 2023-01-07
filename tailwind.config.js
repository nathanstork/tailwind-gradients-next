/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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
            backgroundSize: {
                "50%": "50%",
                "200%": "100%",
                "400%": "400%",
            },
        },
    },
    plugins: [],
};
