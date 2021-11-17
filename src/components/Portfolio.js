//Import React
import React from "react";

//Inline sytling
const styles ={
    card: {
        width: "18rem",
        margin: 20,   
    },
    container: {
        display: "flex",
        justifyContent: "space-around", 
        flexFlow: "row wrap",
        marginTop: 0,
        marginBottom: 70
    },
    text: {
        color: "#3A3B3C", 
    },
    links: {
        backgroundColor: "#3A3B3C",  
    },
    link: {
        color: "cyan"
    }
};

function Portfolio(){
    {/*Card for each project*/}
    return(
        <div style={styles.container}>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://user-images.githubusercontent.com/89173968/135728428-03d061c8-c073-4b4b-8167-7a74e4c631a1.png" alt="The Musical Time Machine"/>
            <div style ={styles.text} class="card-body">
                <h5 class="card-title"><u>The Musical Time Machine</u></h5>
                <p class="card-text">HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap, YouTube API, Inshorts News API, GitHub</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://urbaned0ge.github.io/Musical-Time-Machine/" style ={styles.link}class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Musical-Time-Machine" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://raw.githubusercontent.com/cianfich1016/Budget-Tracker/main/public/images/Budget.png" alt="Budget Tracker"/>
            <div style ={styles.text} class="card-body">
                <h5 class="card-title"><u>Budget Tracker</u></h5>
                <p class="card-text">PWA, MongoDB, Mongoose, IndexedDB, Express.js, JavaScript</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://budget-tracker-1016.herokuapp.com/" style ={styles.link}class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Budget-Tracker" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://raw.githubusercontent.com/cianfich1016/Fitness-Tracker/main/public/images/Home.png" alt="Fitness Tracker"/>
            <div class="card-body">
                <h5 style ={styles.text} class="card-title"><u>Fitness Tracker</u></h5>
                <p class="card-text">MongoDB, Mongoose, Node.js, Express.js, GitHub, Heroku</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://fitness-tracker-1016.herokuapp.com/?id=618aee59ead2675090acacc8" style ={styles.link} class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Fitness-Tracker" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://raw.githubusercontent.com/cianfich1016/Note-Taker/main/images/Image1.png" alt="Note Taker"/>
            <div class="card-body">
                <h5 style ={styles.text} class="card-title"><u>Note Taker</u></h5>
                <p class="card-text">HTML, CSS, JavaScript, API Routing, Express.js, GitHub, Heroku</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://note-taker-1016.herokuapp.com/" style ={styles.link} class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Note-Taker" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://raw.githubusercontent.com/cianfich1016/Daily-Planner/main/assets/images/Daily-Planner.png" alt="Daily Planner"/>
            <div class="card-body">
                <h5 style ={styles.text} class="card-title"><u>Daily Planner</u></h5>
                <p class="card-text">HTML, CSS, JavaScript, jQuery, Moment.js, GitHub, Bootstrap</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://cianfich1016.github.io/Daily-Planner/" style ={styles.link}class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Daily-Planner" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
            <div class="card" style={styles.card}>
            <img class="card-img-top" src="https://raw.githubusercontent.com/cianfich1016/Weather-Dashboard/main/assets/images/Weather-Dashboard.png" alt="Weather Dashboard"/>
            <div class="card-body">
                <h5 style ={styles.text} class="card-title"><u>Weather Dashboard</u></h5>
                <p class="card-text">HTML, CSS, JavaScript, jQuery, Moment.js, API, GitHub</p>
            </div>
            <div style ={styles.links} class="card-body">
                <a href="https://cianfich1016.github.io/Weather-Dashboard/" style ={styles.link}class="card-link">Live!</a>
                <a href="https://github.com/cianfich1016/Weather-Dashboard" style ={styles.link}class="card-link">Repository</a>
            </div>
            </div>
        </div>
        
    )
};
//Export function
export default Portfolio;