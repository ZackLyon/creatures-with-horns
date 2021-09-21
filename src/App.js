
import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';

export default class App extends Component {
  state = {
    keyword: ''
  }
  

  selectorChange = (e) => {
    this.setState({keyword: e.target.value});
  }

  render() {
    const filteredImages = images.filter(image => (!this.state.keyword) || image.keyword === this.state.keyword);

    const allKeywords = images.map(image => image.keyword);
    const filteredOptions = [...new Set(allKeywords)];
    filteredOptions.sort();

    return (
      <div className="App">
        <Header />
        <select onChange={this.selectorChange}>
          <option value="">All</option>
          {
          filteredOptions.map(item => <option value={item} key={item}>{item}</option>)
          }
        </select>
        <ImageList 
        keyword={this.state.keyword}
        selectedImages={filteredImages}
        />
      </div>
    );
  }
}
