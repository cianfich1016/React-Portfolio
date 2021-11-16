import React from 'react';
import "./style.css"

const styles = {
    footer: {
        bottom: 0,
        backgroundColor: "#3A3B3C",
        height: 300,
        display: 'inline',
        width: "auto"
        
    },
    image: {
        padding: 4,
        margin: 10,
    }
    

}

function Footer() {   
    return (
    <div >
    <footer >
        <a href="https://www.linkedin.com/in/rachel-cianfichi-1aa06721a/"><img style={styles.image} src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-linkedin-social-media-justicon-flat-justicon.png" alt="LinkedIn"/></a>
        
        <a href="https://stackoverflow.com/users/16674943/rachel-cianfichi?tab=profile"><img style={styles.image} src="https://img.icons8.com/fluency/64/000000/stackoverflow.png" alt="Stack Overflow"/></a>
        
        <a href="https://github.com/cianfich1016"><img style={styles.image} src="https://img.icons8.com/nolan/64/github.png" alt="GitHub"/></a>
    </footer>
    </div>
    )
}

export default Footer;