import React from 'react';
import "./styles.scss";

function Others(props) {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level"><i className='bx bxl-git' style={{ color: '#F74E28' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">npm</h3>
                            <span className="skills__level"><i className='bx bx-package' style={{ color: '#CC3534' }}></i></span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level"><i className='bx bxl-figma' style={{ color: '#24292F' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className="skills__level"><i className='bx bxl-visual-studio' style={{ color: '#21A4F1' }}></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="skills__title">Others</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Problem solving</h3>
                            <span className="skills__level"><i className='bx bx-bulb' style={{ color: '#24292F' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Teamwork</h3>
                            <span className="skills__level"><i className='bx bx-group' style={{ color: '#24292F' }}></i></span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Time management</h3>
                            <span className="skills__level"><i className='bx bx-time' style={{ color: '#24292F' }}></i></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Reading documentation</h3>
                            <span className="skills__level"><i className='bx bx-book-open' style={{ color: '#24292F' }}></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Others;