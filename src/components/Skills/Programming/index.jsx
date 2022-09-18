import React from 'react';
import "./styles.scss";

function Programming(props) {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Programming Languages</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__level"><i className='bx bxl-javascript' style={{ color: '#F9DC5C' }}></i></span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level"><i className='bx bxl-java' style={{ color: 'red' }}></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="skills__title mt-20">Frameworks & Platforms</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level"><i className='bx bxl-react' style={{ color: '#4AD5FF' }}></i></span>
                    </div>
                </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">jQuery</h3>
                            <span className="skills__level"><i className='bx bxl-jquery' style={{ color: '#78CFF5' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Styled Components</h3>
                            <span className="skills__level"><i className='bx bxs-component' style={{ color: '#D1649B' }}></i></span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level"><i className='bx bxl-bootstrap' style={{ color: '#6C10F4' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">SASS</h3>
                            <span className="skills__level"><i className='bx bxl-sass' style={{ color: '#D1649B' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Material UI</h3>
                            <span className="skills__level"><i class='bx bxs-package' style={{ color: '#007FFF' }}></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programming;