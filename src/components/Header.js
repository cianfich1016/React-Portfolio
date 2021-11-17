import React, {useState, useEffect} from 'react';
import Navigation from "./Navigation"


function Header(){  
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

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

    return(
        <div >
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default Header;