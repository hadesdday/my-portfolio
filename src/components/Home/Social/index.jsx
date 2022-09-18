/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./styles.scss";

function Social(props) {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/hieu-nguyen-aab67314b/" className="home__social-icon" target="_blank" title="LinkedIn">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="tel:039122575" className="home__social-icon" target="_blank" title='Phone'>
                <i className="uil uil-phone-alt"></i>
            </a>
            <a href="skype:live:.cid.c6b96d8d881d64cb?chat" className="home__social-icon" target="_blank" title='Skype'>
                <i className="uil uil-skype-alt"></i>
            </a>
            <a href="mailto:ngvhieu27801.it@gmail.com" className="home__social-icon" target="_blank" title='Email'>
                <i className="uil uil-envelope"></i>
            </a>
        </div>
    );
}

export default Social;;