import React, { useState } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../book.css";
import BookHeader from '../components/BookHeader'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// using hooks
function Books() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${book}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {setResult(data.data)})
        setBook("")
    }

    return (
        <div>
            <BookHeader />
            <Form.Text>Find books enlighten your mind!</Form.Text>
            <Form inline onSubmit={handleSubmit}>
                <Row>
                    <Col xs={8}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={book} onChange={event => setBook(event.target.value)} />
                    </Col>
                    <Col>
                    <Button variant="outline-success" type="submit">Search</Button>
                    </Col>
                </Row>

            </Form>
            <BooksList result={result}/>
        </div>
    )
}

// using stateful 
// class Books extends Component {
//     constructor() {
//         super();
//         this.state = { books: [], searchTerm: ""};
//     }

//     handleChange = (event) => {
//         this.setState({ searchTerm: event.target.value })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let searchTerm = this.state.searchTerm
//         this.searchBooks(searchTerm)
//     }

//     searchBooks = (searchTerm="Top pick") => {
//         fetch(URL + `&query=${searchTerm}`)
//         .then(response => response.json())
//         .then(booksData => this.setState({ books: booksData.result}))
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Row>
//                         <Col xs={4}>
//                         <Form.Group controlId="forSearchBooks">
//                             <Form.Control type="text" placeholder="search books" value={this.state.searchTerm} onChange={this.handleChange} />
//                             <Form.Text> Find books enlighening your mind! </Form.Text>
//                         </Form.Group>
//                         </Col>
//                     </Row>
//                     <Button variant="primary" type="submit">Search</Button>
//                 </Form>
//                 <BooksList books={this.state.books} />
//             </div>
            
//         )
//     }
// }

export default Books;