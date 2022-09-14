import React from 'react';
import Personal from './Others';
import Programming from './Programming';
import "./styles.scss";

function Skills(props) {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My technical level
            </span>
            <div className="skills__container container grid">
                <Programming />
                <Personal />
            </div>
        </section>
    );
}

export default Skills;