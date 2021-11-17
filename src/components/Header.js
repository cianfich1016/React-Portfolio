import React, {useState} from 'react';
import Navigation from "./Navigation"


function Header(){  
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div >
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default Header;