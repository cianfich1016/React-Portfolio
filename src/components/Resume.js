//Import React and style sheet
import React from 'react';
import "./style.css"

const styles = {
    skill: {
        color: "#3A3B3C",
        marginTop: 40,   
    },
    resume: {
        color: "#3A3B3C",
        marginTop: 40, 
    }
}

function Resume(){
    return(
        <div>
            <h2 style={styles.skill}>Skills</h2>
            
            <h6><u>Programming Languages/Libraries & Frameworks:</u> JavaScript, Node.js, Express.js, React, HTML, CSS</h6>
            <h6><u>Database:</u> MySQL, NoSQL, Sequelize, MongoDB, Mongoose</h6>
            <h6><u>Applications & Tools:</u> Bootstrap, GitHub, Heroku</h6>
            {/*Downloadable version of resume*/}
            <h2 style={styles.resume}>Resume</h2>
            <a href="https://cianfich1016.github.io/Personal-Portfolio/Assets/images/Rachel%20Cianfichi%20Resume.pdf" alt="Resume Document"><img src="https://img.icons8.com/external-itim2101-flat-itim2101/200/000000/external-resume-human-resources-itim2101-flat-itim2101-2.png" /></a>
        </div>
    )
};

//Export function
export default Resume;