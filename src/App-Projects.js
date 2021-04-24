import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/ProjectsActions';
import ProjectsList from '../components/ProjectsList.js'

class Projects extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProjects()
  }

  leadingPage = () => {
    return this.props.loading
  }

  render() {
    // debugger
    console.log(this.props.catPics)
    console.log(this.props.loading)
    return (
      <div className="App">
        <h1>CatBook</h1>
        <ProjectsList catPics={this.props.catPics}/>
        {this.leadingPage ? <h2>Loading cats images...</h2> : <h2>done loading!</h2>}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)

