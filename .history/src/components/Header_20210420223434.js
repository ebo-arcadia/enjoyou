import React from 'react';
import "../index.css";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome to EnjoYou. Enjoy the Best of You.</h1>
                <Typed 
                    className="typed-text" 
                    strings={["Learn to code","Read a book","Write a blog post","Share a video"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop    
                />
                <a href=""
            </div>
        </div>
    )
}

export default Header;
