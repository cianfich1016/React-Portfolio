import React, {useEffect, useState} from 'react';
import Navigation from "./Navigation"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"

function Header(){
    const [currentPage, setCurrentPage] = useState('About');

    useEffect(() => {
        // check the url 
        if (window.location.pathname === '/about') {
            setCurrentPage('About')
        }else if (window.location.pathname === '/portfolio') {
            setCurrentPage('Portfolio')
        }else if (window.location.pathname === '/contact') {
            setCurrentPage('Contact')
        }else if (window.location.pathname === '/resume') {
            setCurrentPage('Resume')}
    }, [])
    
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        return <Resume />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
    return(
        <div >
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
        </div>
    )
}

export default Header;