import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
    return (
        <Global styles={css `
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Urbanist:wght@100;400;500;700&display=swap');
            :root {
                --elmoo-blue: #3768E9;
                --elmoo-purple: #593ED7;
                --elmoo-banana: #FFD661;
                --elmoo-gray: #F2F2F2;

                --radius-md: 10px;
                --radius-lg: 20px;
            }
            * {
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
            }
            body {
                font-size: 15px;
                font-family: 'Open Sans', sans-serif;
                padding-top: 70px;
            }
            .container {
                max-width: 100%;
                width: 1200px;
                /* display: flex; */
                margin: auto;
            }
        `
        }/>
    )
}

export default GlobalStyles
