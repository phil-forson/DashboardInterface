import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        dark: {
            100: '#1e1e2d',
            200: '#1a1a27',
            300: '#565674',
            400: '#4c4e6f',
            500: '#9899ac',
            600: '#2B2B40',
            700: '#151521'
            
        },
        sysblue: {
            100 : '#009ef7',
            200: '#212e48'
        },
        sysgray: {
            100: '#CDCDDE',
        },
        sysred: {
            100: "#f1416c"
        }
    }
})

export default theme;