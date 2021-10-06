import React from 'react'
import { UpperFooterBigText, UpperFooterButtons, UpperFooterContent, UpperFooterOuter } from './UpperFooter.elements'

const UpperFooter = () => {
    return (
        <UpperFooterOuter>
            <div className="container">
                <UpperFooterContent>
                    <UpperFooterBigText>
                        Bingung mau mulai dari mana?<br/>
                        Kami dengan senang hati membantu Anda
                    </UpperFooterBigText>
                    <UpperFooterButtons>
                        <a href="#">Whatsapp</a>
                        <a href="#">Email</a>
                    </UpperFooterButtons>
                </UpperFooterContent>
            </div>
        </UpperFooterOuter>
    )
}

export default UpperFooter
