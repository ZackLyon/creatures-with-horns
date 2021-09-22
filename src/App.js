import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import Dropdown from './Dropdown/Dropdown.js';
import Acknowledgement from './Acknowledgement.js';

export default class App extends Component {
  state = {
    keyword: '',
    horns: ''
  }

  handleKeywordChange = (e) => {
    this.setState({keyword: e.target.value});
  }

  handleHornsChange = (e) => {
    this.setState({horns: e.target.value});
  }

  render() {
    //filter images for keywords and horns then filter which images are included in both
    const filteredKeywordImages = images.filter(image => (!this.state.keyword) || image.keyword === this.state.keyword);

    const filteredHornsImages = images.filter(el => (!this.state.horns) || el.horns === Number(this.state.horns));

    const filteredImages = filteredKeywordImages.filter(item => filteredHornsImages.includes(item) === true);

    // filter keyword and horns options available
    const allKeywords = images.map(image => image.keyword);
    const filteredKeywordOptions = [...new Set(allKeywords)]; //remove duplicates
    filteredKeywordOptions.sort();

    const allHorns = images.map(image => image.horns);
    const filteredHornsOptions = [...new Set(allHorns)]; //remove duplicates
    filteredHornsOptions.sort((a, b) => a - b);


    return (
      <div className="App">
        <Header />
        <Dropdown 
          filteredOptions={filteredKeywordOptions}
          handleChange={this.handleKeywordChange}
        />
        <Dropdown 
          filteredOptions={filteredHornsOptions}
          handleChange={this.handleHornsChange}
        />
        <ImageList 
        keyword={this.state.keyword}
        selectedImages={filteredImages}
        />
        <Acknowledgement />
      </div>
    );
  }
}

// now I know that main branches aren't made by default!
