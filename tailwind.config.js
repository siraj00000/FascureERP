module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                14: '14px',
            },
            backgroundColor: {
                'main-bg': '#FAFBFB',
                'main-dark-bg': '#20232A',
                'secondary-dark-bg': '#33373E',
                'light-gray': '#F7F7F7',
                'half-transparent': 'rgba(0, 0, 0, 0.5)',
                'bluef': "#404041",
                'yellowf': "#f37216",
                // 'greenfs': "#00bdae",
                'greenfs': "#14a800",
                'darkfs': "#404041",

                'purplefs': "#701a75",
                'primaryfs': "#0c4a6e",
                'secondaryfs': "#0e7490",
                'extrafs': "#0369a1",
                'lightfs': "#a5f3fc"
            },
            colors: {
                'bluefc': "#404041",
                'yellowfc': "#f37216",
                // 'greenfs': "#00bdae",
                'greenfs': "#14a800",
                'darkfs': "#404041",

                'primaryfs': "#0c4a6e",
                'secondaryfs': "#0e7490",
                'extrafs': "#0369a1",
                'lightfs': "#cffafe"
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            width: {
                400: '400px',
                760: '760px',
                780: '780px',
                800: '800px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px',
                20: '20%',
                30: '30%',
                32: '32%',
                50: '50%',
                60: '60%',
                70: '70%',
                80: '80%',
                90: '90%'
            },
            height: {
                80: '80px',
            },
            minWidth: {
                '1/6': '24%',
                '30%': "30%",
                "8%": "80%"
            },
            maxWidth: {
                '8%': '80%',
                90: '90%'
            },
            minHeight: {
                590: '590px',
                200: '200px',
            },
            maxHeight: {
                81: '80vh',
                90: '90vh',
                150: '150px',
                400: '400px'
            },
            backgroundImage: {
                'hero-pattern':
                    "url('/src/data/welcome-bg.svg')",
            }
        }
    },
    plugins: [],
};