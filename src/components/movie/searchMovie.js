import React, { Component } from 'react';
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class searchMovie extends Component {
    render() {
        return (
            <MDBCol md="">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Feel like watching something tonight?
                </h2>
                <section className="dark-grey-text mx-auto mb-5 w-75 text-center">
                    <form className="form-inline mt-4 mb-4">
                        <MDBIcon icon="search" />
                        <input 
                            className="form-control form-control-sm ml-3 w-75" 
                            type="text" 
                            placeholder="action? thriller? sci-fi? drama?" aria-label="Search"

                        />
                    </form>
                    <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">
                        Search
                    </MDBBtn>
    
                </section>
          </MDBCol>

        )
    }
}

export default searchMovie;

