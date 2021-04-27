import React from 'react';

export default function Blog() {
    const article = [
        {id: 1, text: "Ultimate guide for React-Redux", posted: false },
        {id: 2, text: "Daily meditation", posted: false },
        {id: 3, text: "10 days with family in Maryland", posted: false }
    ]

    return (
        <div>
            <h1>Write things that matter!</h1>
            <BlogList article={article} />
            <AddArticle />
        </div>
    );
    
}