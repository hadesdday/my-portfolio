/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./styles.scss";

function ScrollToTop(props) {
    window.addEventListener("scroll", function () {
        const scrollup = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollup.classList.add("show");
        else scrollup.classList.remove("show");
    });
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollToTop;