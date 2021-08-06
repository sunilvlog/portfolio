import React from 'react'
import web from '../src/images/img.svg'
import Common from './Common'

const About = () => {
    return (
        <>
            <Common name="Welcome to about page " visit="/Contact" contentname = " We are team to servive and provide the knowledgble content" imgsrc={web} />
        </>
    );
};

export default About