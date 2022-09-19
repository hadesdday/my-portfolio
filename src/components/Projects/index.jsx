import React from 'react';
import { useState } from 'react';
import "./styles.scss";

function Projects(props) {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I Did</span>
            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-tablet projects__icon"></i>
                        <h3 className="projects__title">dev<br />d</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">dev d1</h3>
                            <p className="projects__modal-description">Your description  here</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infoooooo ooooo</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooo oooooo1</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infoooo ooooooo2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-tablet projects__icon"></i>
                        <h3 className="projects__title">dev d2</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">dev d3</h3>
                            <p className="projects__modal-description">Your description  here123</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooooooo oo321</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooooooooo 1231</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooooooo12 3oo2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-tablet projects__icon"></i>
                        <h3 className="projects__title">dev<br />d23</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">dev d34</h3>
                            <p className="projects__modal-description">Your description here1423</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infoooooo123ooo oo321</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooooo321oooo 1231</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Infooooooo543oo12 3oo2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;