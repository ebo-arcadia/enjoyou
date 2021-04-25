import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/VideoActions';
import VideoList from '../components/VideoList.js'
import VideoSearch from './VideoSearch'

class Video extends Component {   

  componentDidMount() {
    this.props.fetchVideo()
  }

  leadingPage = () => {
    return this.props.loading
  }

  render() {
    // console.log(this.props.catPics)
    // console.log(this.props.loading)
    // console.log(this.props.fetchVideo)
    return (
      <div className="Video">
        <VideoSearch fetchVideo={this.props.fetchVideo}/>
        <VideoList catPics={this.props.catPics}/>
        {this.leadingPage ? <h2>Loading cats images...</h2> : <h2>done loading!</h2>}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    videoItems: state.videoItems,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideo: () => dispatch(fetchVideo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)

