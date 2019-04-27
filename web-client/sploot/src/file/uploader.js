import React from 'react';
import ImageUploader from 'react-images-upload';

export default class Image extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
            
        });
        this.props.addImage(this.state.pictures);
        // console.log(this.state.pictures)
    }
 
    render() {
        return (
             <div className="imDropZone"> 
            {/* <i class="fa fa-file-photo-o fa-5x"/> */}
            <a> <i class="fa fa-plus-circle fa-5x"/> </a>
            <p>
            Drop Photos here Or
             <button type="file" className="btn btn-link">Click to Upload</button>
            </p> 
           
        </div>
        );
    }
}