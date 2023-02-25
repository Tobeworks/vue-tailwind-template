/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,vue}'],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#003566',
                50: '#1F93FF',
                100: '#0A89FF',
                200: '#0075E0',
                300: '#005FB8',
                400: '#004A8F',
                500: '#003566',
                600: '#00182E',
                700: '#000000',
                800: '#000000',
                900: '#000000'
            },
            'secodary': {
                DEFAULT: '#FFD60A',
                50: '#FFF5C2',
                100: '#FFF1AD',
                200: '#FFEA84',
                300: '#FFE45C',
                400: '#FFDD33',
                500: '#FFD60A',
                600: '#D1AE00',
                700: '#997F00',
                800: '#615100',
                900: '#292200'
            },
            'dark-blue': {
                DEFAULT: '#000814',
                50: '#0051CC',
                100: '#0049B7',
                200: '#00398E',
                300: '#002966',
                400: '#00183D',
                500: '#000814',
                600: '#000000',
                700: '#000000',
                800: '#000000',
                900: '#000000'
            },
            yellow: {
                DEFAULT: '#F59E0B',
                '50': '#FCE4BB',
                '100': '#FBDCA8',
                '200': '#FACD81',
                '300': '#F8BD59',
                '400': '#F7AE32',
                '500': '#F59E0B',
                '600': '#C07C08',
                '700': '#8A5906',
                '800': '#543603',
                '900': '#1E1401'
            },
            gray: {
                DEFAULT: "#4b5563",
                "50": "#f9fafb",
                "100": "#f9fafb",
                "200": "#d1d5db",
                "300": "#9ca3af",
                "400": "#6b7280",
                "500": "#4b5563",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827"
            },
            "dark-gray": {
                "50": "#fef2f2",
                "100": "#5e5f68",
                "200": "#54555e",
                "300": "#4a4b54",
                "400": "#40414a",
                "500": "#363740",
                "600": "#2c2d36",
                "700": "#22232c",
                "800": "#181922",
                "900": "#0e0f18"
            },
            "red": {
                "50": "#fee2e2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d"
            },
            silver: "#FBFCFF",
            purple: '#7e5bef',
            pink: {
                "50": "#ff7bff",
                "100": "#ff71ff",
                "200": "#ff67f9",
                "300": "#ff5def",
                "400": "#ff53e5",
                "500": "#ff49db",
                "600": "#f53fd1",
                "700": "#eb35c7",
                "800": "#e12bbd",
                "900": "#d721b3"
            },
            "orange": {
                "50": "#ffaa7b",
                "100": "#ffa071",
                "200": "#ff9667",
                "300": "#ff8c5d",
                "400": "#ff8253",
                "500": "#ff7849",
                "600": "#f56e3f",
                "700": "#eb6435",
                "800": "#e15a2b",
                "900": "#d75021"
            },
            "green": {
                "50": "#45ff98",
                "100": "#3bf68e",
                "200": "#31ec84",
                "300": "#27e27a",
                "400": "#1dd870",
                "500": "#13ce66",
                "600": "#09c45c",
                "700": "#00ba52",
                "800": "#00b048",
                "900": "#00a63e"
            },
            white: '#fff',
            indigo: {
                "50": "#7f80d3",
                "100": "#7576c9",
                "200": "#6b6cbf",
                "300": "#6162b5",
                "400": "#5758ab",
                "500": "#4d4ea1",
                "600": "#434497",
                "700": "#393a8d",
                "800": "#2f3083",
                "900": "#252679"
            },
            dark: {
                "00": "#F3F3F3",
                "01": "#7F879E",
                "02": "#F4F6F8",
                "03": "#1B2124",
                "04": "#252A3F",
                "05": "#F6F8F9",
            },
            alert: "#E60019",
            cgreen: "#D9FF9C",
            "light-blue": "#9CC4FF",
        },
        fontSize: {
            xs: '0.7rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            "2xl": '1.563rem',
            "3xl": '1.953rem',
            "4xl": '2.441rem',
            "5xl": '3.052rem',
        },
        fontFamily: {
            poppins: ["Poppins"],
            "poppins-semi-bold": ["Poppins SemiBold"],
            "poppins-bold": ["Poppins Bold"],
            "poppins-light": ["Poppins Light"],
        },
        plugins: [
            require('@tailwindcss/typography'),
            require('@tailwindcss/forms'),
        ],
    },
}
