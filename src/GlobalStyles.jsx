import { Global, css } from '@emotion/react'
import React from 'react'

const GlobalStyles = () => {
    return (
        <Global styles={css `
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Urbanist:wght@100;400;500&display=swap');
            :root {
                --elmoo-blue: #3768e9;
                --elmoo-purple: #593ed7;
                --elmoo-banana: #ffd661;

                --radius-md: 10px;
                --radius-lg: 20px;
            }
            * {
                margin: 0px;
                padding: 0px;
            }
            body {
                font-size: 15px;
                font-family: 'Open Sans', sans-serif;
            }
        `
        }/>
    )
}

export default GlobalStyles
