import React from 'react';
import "../index.css";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome to EnjoYou</h1>
                <Typed 
                    className="typed-text" 
                    strings={["Find a good book","Watch a movie","Learn something new","Find something cool"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop    
                />
            </div>
        </div>
    )
}

export default Header;
