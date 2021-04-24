import React from 'react';

const ProjectsList = (props) => {
    return (
        <div className="cat-list">
            {props.catPics.map((cat) => <img key={cat.id} src={cat.url} alt="catPic"/> )}
        </div>
  
    )    
}

export default ProjectsList