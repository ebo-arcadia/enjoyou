import React from 'react';
import { useState } from 'react';

export default function Blog() {

    const [articles, setArticles] = useState([
        {id: 1, text: "Ultimate guide for React-Redux", posted: false },
        {id: 2, text: "Daily meditation", posted: false },
        {id: 3, text: "10 days with family in Maryland", posted: false }
    ]) 


    return (
        <div>
            <h1>Write things that matter!</h1>
            <BlogList articles={articles} />
            <AddArticle setArticles={setArticles}/>
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

    function AddArticle( {setArticles} ) {

        function handleAddArticle(event) {
            event.preventDefault();
            let text = event.target.elements.addArticle.value
            let article = { id: 4, text, posted: false};
            setArticles(previousArticles => {
                return previousArticles.concat(article)
            })
        }

        return (
            <form onSubmit={handleAddArticle}> 
                <input name="addArticle" placeholder="Add article" />
                <button type="submit">Post</button>
            </form>
        )
    }

}