/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./styles.scss";

function Social(props) {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/hieu-nguyen-aab67314b/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://www.facebook.com/hill.vng/" className="home__social-icon" target="_blank">
                <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://github.com/hadesdday" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="mailto:ngvhieu27801.it@gmail.com" className="home__social-icon" target="_blank">
                <i className="uil uil-envelope"></i>
            </a>
        </div>
    );
}

export default Social;;