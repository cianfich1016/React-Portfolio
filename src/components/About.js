import React from 'react';
import "./style.css"

const styles = {
    text: {
        marginTop: 20,
        marginRight: 100,
        marginLeft: 100,
        color: "#3A3B3C"
    },
    image: {
        marginTop: 40,
    }   
}

function About() {   
    return (
        <div>
            <img style={styles.image} src="https://res.cloudinary.com/dndp5yqyt/image/upload/ar_1:1,b_rgb:f9f9f9,bo_5px_solid_rgb:3A3B3C,c_fill,g_auto,h_230,r_20,w_230/v1637013191/Portfolio/self_rg4g6r.jpg" /> 
            <p style={styles.text}>Hello! My name is Rachel, and I am a Pure Barre fitness instructor based in Orlando, Florida currently enhancing my web development skills through a Full Stack Web Development Boot Camp at Georgia Institute of Technology. Having studied New Media Communications while in college, I always loved the idea of developing the latest technology.
                <br/>
                <br/>
                Alongside my passion for web development, I also enjoy fitness and exploring the outdoors with family and friends. I feel very strongly about creating an unforgettable experience in everything I do, and I look forward to changing the technological world with my new full stack knowledge.</p>
        </div>
    )
}

export default About;