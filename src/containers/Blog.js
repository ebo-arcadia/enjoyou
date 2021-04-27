import React from 'react';

export default function Blog() {
    const articles = [
        {id: 1, text: "Ultimate guide for React-Redux", posted: false },
        {id: 2, text: "Daily meditation", posted: false },
        {id: 3, text: "10 days with family in Maryland", posted: false }
    ]

    return (
        <div>
            <h1>Write things that matter!</h1>
            <BlogList articles={articles} />
            <AddArticle />
        </div>
    );

    function BlogList( {articles} ) {
        return (
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.text}</li>
                ))}
            </ul>
        );
    }

    function AddArticle() {
        return (
            <form>
                <input placeholder="Add article" />
                <button type="submit">Post</button>
            </form>
        )
    }

}