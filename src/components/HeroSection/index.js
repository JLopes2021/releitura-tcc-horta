import React, { useState } from 'react'
import styles from '../HeroSection/Hero.module.css'
import { Link } from 'react-router-dom'
import Video from '../../videos/girassol.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Começando a sua Horta </HeroH1>
                <HeroP> 
                   Aqui você encontrará algumas dicas úteis para iniciar a sua horta onde você mora.
                   Se você <span>já quiser</span> saber como criar sua horta, basta apertar no botão <span><Link to="./signin"  className={styles.link} >Começar Horta</Link></span> no menu lá em cima
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                       Quero saber mais! 
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection