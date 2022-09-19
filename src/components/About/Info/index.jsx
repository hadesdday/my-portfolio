import React from 'react';
import "./styles.scss";

function Info(props) {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="about__icon bx bx-award"></i>
                <h3 className="about__title">
                    Experience
                </h3>
                <span className="about__subtitle">
                    1 Years
                </span>
            </div>
            <div className="about__box">
                <i className="about__icon bx bx-briefcase-alt"></i>
                <h3 className="about__title">
                    Completed
                </h3>
                <span className="about__subtitle">
                    7 Projects
                </span>
            </div>
            <div className="about__box">
                <i className='bx bx-buildings about__icon' ></i>
                <h3 className="about__title">
                    Company
                </h3>
                <span className="about__subtitle">
                    0
                </span>
            </div>
        </div>
    );
}

export default Info;