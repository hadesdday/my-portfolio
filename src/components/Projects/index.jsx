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
                {/* <div className="projects__content">
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
                </div> */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-clipboard-alt projects__icon"></i>
                        <h3 className="projects__title">Trello<br />Clone</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Trello Clone</h3>
                            <p className="projects__modal-description">A simplified version of Trello Board with CRUD functionalities using ReactJS<br /> ( This project is still in progress )</p>
                            <p className='project__title'>Team Size : 1</p>
                            <p className='project__title'>Responsibilities</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implemented basic user interface of the application</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Self-taught ReactJS , NodeJS</p>
                                </li>
                            </ul>
                            <p className='project__title'>Accomplishments</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned more new hooks in ReactJS</p>
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
                                    <p className="projects__modal-info">NodeJS</p>
                                </li>
                            </ul>
                            <p className="project__title">Github : <a href='https://github.com/hadesdday/fe-kanban-board' target={'_blank'}>Go to repository <i className="uil uil-arrow-right projects__button-icon"></i></a></p>
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
                    {/* <div>
                        <i className="uil uil-hourglass projects__icon"></i>
                        <h3 className="projects__title">Coming<br />Soon</h3>
                    </div> */}
                    <div>
                        <i className="uil uil-chat projects__icon"></i>
                        <h3 className="projects__title">News<br />Application</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">News Application</h3>
                            <p className="projects__modal-description">A news application was built using Angular</p>
                            <p className='project__title'>Team Size : 2</p>
                            <p className='project__title'>Responsibilities</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Developed API for scraping articles from Vietnamnet</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implemented user interface from design</p>
                                </li>
                            </ul>
                            <p className='project__title'>Accomplishments</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned basic knowledge about Angular</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned how to handle data from API</p>
                                </li>
                            </ul>
                            <p className='project__title'>Technologies</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Angular</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">NodeJS</p>
                                </li>
                            </ul>
                            <p className="project__title">Github : <a href='https://github.com/hadesdday/news-app' target={'_blank'}>Go to repository <i className="uil uil-arrow-right projects__button-icon"></i></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    {/* <div>
                        <i className="uil uil-hourglass projects__icon"></i>
                        <h3 className="projects__title">Coming<br />Soon</h3>
                    </div> */}
                    <div>
                        <i className="uil uil-chat projects__icon"></i>
                        <h3 className="projects__title">E-commerce<br />Website</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(4)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>
                    <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">E-commerce Website</h3>
                            <p className="projects__modal-description">A e-commerce website for selling household goods using Java Servlet</p>
                            <p className='project__title'>Team Size : 2</p>
                            <p className='project__title'>Responsibilities</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Developed functionalities for administrator</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Implemented user interface from design</p>
                                </li>
                            </ul>
                            <p className='project__title'>Accomplishments</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned basic knowledge about Java Servlet</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Learned more new queries in MySQL</p>
                                </li>
                            </ul>
                            <p className='project__title'>Technologies</p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Java Servlet</p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">MySQL</p>
                                </li>
                            </ul>
                            <p className="project__title">Github : <a href='https://github.com/hadesdday/ecommerce-houseware' target={'_blank'}>Go to repository <i className="uil uil-arrow-right projects__button-icon"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;