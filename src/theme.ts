import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        dark: {
            100: '#1e1e2d',
            200: '#1a1a27',
            300: '#565674',
            400: '#4c4e6f',
            500: '#9899ac',
            600: '#2B2B40'
            
        },
        sysblue: {
            100 : '#009ef7',
            

        },
        sysgray: {
            100: '#CDCDDE',

        }
    }
})

export default theme;