/* eslint-disable react/jsx-no-target-blank */
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
                        <i className="uil uil-clapper-board projects__icon"></i>
                        <h3 className="projects__title">Movies<br />App</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Movies App</h3>
                            <p className="projects__modal-description">A movies app that i have applied ReactJS to this project</p>
                            <p className='project__title'>Team Size : 1</p>
                            <p className='project__title'>Responsibilities</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implement user interface</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Get and display data from api</p>
                                </li>
                            </ul>
                            <p className='project__title'>Accomplishments</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned hooks in ReactJS</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned how to get data from api</p>
                                </li>
                            </ul>
                            <p className='project__title'>Technologies</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">ReactJS</p>
                                </li>
                            </ul>
                            <p className="project__title">Github : <a href='https://github.com/hadesdday/movies-app' target={'_blank'}>Go to repository <i className="uil uil-arrow-right projects__button-icon"></i></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-chat projects__icon"></i>
                        <h3 className="projects__title">App<br />Chat</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">App Chat</h3>
                            <p className="projects__modal-description">This is my personal project that i have applied ReactJS and Firebase to this project</p>
                            <p className='project__title'>Team Size : 1</p>
                            <p className='project__title'>Responsibilities</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implement user interface</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Handle data from Firebase</p>
                                </li>
                            </ul>
                            <p className='project__title'>Accomplishments</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned more new hooks in ReactJS</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned queries to handle data with firestore</p>
                                </li>
                            </ul>
                            <p className='project__title'>Technologies</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">ReactJS</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Firebase</p>
                                </li>
                            </ul>
                            <p className="project__title">Github : <a href='https://github.com/hadesdday/app-chat' target={'_blank'}>Go to repository <i className="uil uil-arrow-right projects__button-icon"></i></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-hourglass projects__icon"></i>
                        <h3 className="projects__title">Coming<br />Soon</h3>
                    </div>
                    {/* <span className="projects__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Coming Soon</h3>
                            <p className="projects__modal-description">Coming Soon</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Coming Soon</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Coming Soon</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Coming Soon</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Projects;