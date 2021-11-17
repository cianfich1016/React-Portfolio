//Import React, useState, and useEffect as well as the Navigation component
import React, {useState, useEffect} from 'react';
import Navigation from "./Navigation"


function Header(){  
    //Set state of current page to home and create a handlePageChange function to set the current page
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        //Check the url upon refreshing page to keep content and not default to Home
        if (window.location.pathname === '/about') {
            setCurrentPage('About')
        }else if (window.location.pathname === '/portfolio') {
            setCurrentPage('Portfolio')
        }else if (window.location.pathname === '/contact') {
            setCurrentPage('Contact')
        }else if (window.location.pathname === '/resume') {
            setCurrentPage('Resume')}
      }, [])

    //Return Navigation component with currentPage and handlePageChange passed through
    return(
        <div >
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}
//Export Header function
export default Header;