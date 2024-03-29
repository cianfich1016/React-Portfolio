//Import React and Link as part of the react router dom to work with HashRouter and Route
import React from 'react';
import {Link} from 'react-router-dom'

//Inline styling
const styles ={
    header: {
        marginLeft: 20,
        fontSize: 50,
        color: 'cyan',
    },
    bar:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    nav: {
        fontSize: '1.6rem',
        color: 'cyan',
        textDecoration: "underline",
        padding: 10,
    }
};

function Navigation({currentPage, handlePageChange}){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <h1 style = {styles.header} className="navbar-brand" href="/">Rachel Cianfichi</h1>
                <div style = {styles.bar} class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {/*Use Link to work with react router for creating route change for a linkable item */}
                            {/*Handle page change as well on the click of the link. */}
                            {/*Use ternary operator to determine if link is active to change styling */}
                            <Link style = {styles.nav} class="nav-link" to="/about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link style = {styles.nav} class="nav-link" to="/portfolio" onClick={() => handlePageChange('Portfolio')}className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link style = {styles.nav} class="nav-link" to="/contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link style = {styles.nav} class="nav-link" to="/resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
//Export function
export default Navigation;