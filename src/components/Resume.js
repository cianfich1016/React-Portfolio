//Import React and style sheet
import React from 'react';
import "./style.css"

//Inline styling
const styles = {
    skill: {
        color: "#3A3B3C",
        marginTop: 40,  
        padding: 10, 
    },
    resume: {
        color: "#3A3B3C",
        marginTop: 40, 
    },
    image: {
        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.9)",
        borderRadius: "20px",
        marginLeft: "30px",
        marginRight: "30px",
        backgroundColor: "white",
    }
}

function Resume(){
    return(
        <div style={styles.image}>
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