import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/VideoActions';
import VideoList from '../components/VideoList.js'

class Video extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchVideo()
  }

  leadingPage = () => {
    return this.props.loading
  }

  render() {
    console.log(this.props.catPics)
    console.log(this.props.loading)
    return (
      <div className="App">
        <h1>CatBook</h1>
        <VideoList catPics={this.props.catPics}/>
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
    fetchVideo: () => dispatch(fetchVideo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)

