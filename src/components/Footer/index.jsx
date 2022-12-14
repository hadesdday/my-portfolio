/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./styles.scss";

function Footer(props) {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    Hieu
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/hieu-nguyen-453717252/" className="footer__social-link" target="_blank" title="LinkedIn">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="tel:0389122575" className="footer__social-link" target="_blank" title='Phone'>
                        <i className="bx bx-phone"></i>
                    </a>
                    <a href="skype:live:.cid.c6b96d8d881d64cb?chat" className="footer__social-link" target="_blank" title='Skype'>
                        <i className="bx bxl-skype"></i>
                    </a>
                    <a href="mailto:vanhieu270801@gmail.com" className="footer__social-link" target="_blank" title='Email'>
                        <i className="bx bx-envelope"></i>
                    </a>
                    <a href="https://github.com/hadesdday/" className="footer__social-link" target="_blank" title='Github'>
                        <i className='bx bxl-github'></i>
                    </a>
                </div>
                <span className="footer__copy">© {year} Nguyen Van Hieu. All rights reserved</span>
            </div>
        </footer>
    );
}

export default Footer;