import React from 'react';
import { useState, useRef } from 'react';

export default function Blog() {

    const [articles, setArticles] = useState([
        {id: Math.random(), text: "Ultimate guide for React-Redux", posted: false },
        {id: Math.random(), text: "Daily meditation", posted: false },
        {id: Math.random(), text: "10 days with family in Maryland", posted: true }
    ])

    return (
        <div>
            <h1>Write things that matter!</h1>
            <BlogList articles={articles} />
            <AddArticle setArticles={setArticles}/>
        </div>
    );

    function BlogList( {articles, setArticles} ) {
        function handleToggleArticle(article) {
            const postedArticles = articles.map((a) => 
                a.id === article.id 
                    ? { 
                        ...a, posted: !a.posted
                    } : a 
                );
            console.log(postedArticles)
            setArticles(postedArticles)
        }

        return (
            <ul>
                {articles.map((article) => (
                    <li style={{color: article.posted ? 'red': "green"}} key={article.id}>{article.text}
                    <button onDoubleClick={() => handleToggleArticle(article)}>Reviewed</button>
                    </li>
                ))}
            </ul>
        );
    }

    function AddArticle( {setArticles} ) {
        const inputValue = useRef();

        function handleAddArticle(event) {
            event.preventDefault();
            let text = event.target.elements.addArticle.value
            let article = { id: Math.random(), text, posted: false};
            setArticles(previousArticles => {
                return previousArticles.concat(article)
            });
            inputValue.current.value = ""
        }

        return (
            <form onSubmit={handleAddArticle}> 
                <input name="addArticle" placeholder="Add article" ref={inputValue} />
                <button type="submit">Post</button>
            </form>
        )
    }

}