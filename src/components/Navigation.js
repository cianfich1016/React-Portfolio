import React from 'react';

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

}
function Navigation({currentPage, handlePageChange}){
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <h1 style = {styles.header} className="navbar-brand" href="/">Rachel Cianfichi</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div style = {styles.bar} class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a style = {styles.nav} class="nav-link" href="/about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                        </li>
                        <li class="nav-item">
                            <a style = {styles.nav} class="nav-link" href="/portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a style = {styles.nav} class="nav-link" href="/contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                        </li>
                        <li class="nav-item">
                            <a style = {styles.nav} class="nav-link" href="/resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;