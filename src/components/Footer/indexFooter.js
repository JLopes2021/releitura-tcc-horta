import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

// To link outside of the website, use normal a tags

const Footer = () => {

    // Function from react-scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Meu Logo que preciso fazer
                        </SocialLogo>
                        <WebsiteRights> JeffLopes © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer