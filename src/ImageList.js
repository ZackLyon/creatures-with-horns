import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    render() {
        return (
            <div className="images-container">
                {
              
                    this.props.selectedImages.map(image => <ImageItem
                       key={image.title}
                       title={image.title}
                       url={image.url}
                       description={image.description}
                       keyword={image.keyword}
                       horns={image.horns}
                       />)
                }
            </div>
        )
    }
}
