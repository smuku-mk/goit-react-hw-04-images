import { Component } from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    selectedImage: null,
  };

  handleSubmit = data => {
    const { input } = data;
    this.setState({
      query: input,
    });
  };

  handleImgOpenClick = image => {
    this.setState({ selectedImage: image });
  };

  handleImgCloseClick = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { query, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          query={query}
          handleImgOpenClick={this.handleImgOpenClick}
        />
        {selectedImage && (
          <Modal
            onClose={this.handleImgCloseClick}
            imgSrc={selectedImage.largeImageURL}
            imgAlt={selectedImage.tags}
          />
        )}
      </>
    );
  }
}
