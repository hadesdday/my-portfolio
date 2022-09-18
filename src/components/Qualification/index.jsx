/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import "./style.scss";

function Qualification(props) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">
                Qualification
            </h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HCMC University of Agriculture and Forestry</h3>
                                <span className="qualification__subtitle">At here, i have accumulated knowledge about programming through subject projects</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2019 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <a href="https://github.com/hadesdday/app-chat" target={'_blank'}>
                                    <h3 className="qualification__title">App Chat</h3>
                                    <span className="qualification__subtitle">This is my personal project that i have applied  ReactJS and Firebase to this project</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"> </i>
                                        2022
                                    </div>
                                </a>
                            </div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <a href="https://github.com/hadesdday/movies-app" target={'_blank'}>
                                    <h3 className="qualification__title">Movies App</h3>
                                    <span className="qualification__subtitle">A movies app that i have applied ReactJS to this project and using axios to get movies data from api</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"> </i>
                                        2022
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;