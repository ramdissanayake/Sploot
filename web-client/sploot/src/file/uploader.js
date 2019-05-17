import React from 'react';
import ImageUploader from 'react-images-upload';

export default class Uploader extends React.Component {
 
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
    
    selectFile=(e)=>{
       
        e.preventDefault();
        var reader = new FileReader();
        
        reader.onload = ()=>{
            var imageURL= reader.result;
            var output = document.getElementById('output');
            // output.src = imageURL;
            this.props.addImage(this.dataURItoBlob(imageURL),imageURL);
      
        }
        
        reader.readAsDataURL(e.target.files[0])
    
    }

    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
 
        return new Blob([ab], {type: mimeString});
    
    
    }

   




    render() {
        return (
             <div className="imDropZone"> 
            {/* <i class="fa fa-file-photo-o fa-5x"/> */}
            <p>
            Drop Photos Or Click Here
             <br/>
            <label>
            <a> <i class="fa fa-plus-circle fa-5x"/> </a>
             <input multiple  type="file" onChange={this.selectFile} className="btn btn-link"/>
            </label>
            </p> 
 
            
            
            
        </div>
        );
    }
}