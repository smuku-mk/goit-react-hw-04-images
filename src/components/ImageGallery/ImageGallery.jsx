import { Component } from 'react';
import css from './ImageGallery.module.css';

import { fetchImages } from '../../services';
import { ImageGalleryItem, Button, Loader } from './components';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query } = this.props;
    this.setState({ loading: true });
    const response = await fetchImages({ query });
    this.setState({
      images: response,
      loading: false,
    });
  };

  handleBtnClick = async () => {
    const { page } = this.state;
    const { query } = this.props;
    const nextPage = page + 1;
    this.setState({ loading: true });
    const response = await fetchImages({ query: query, page: nextPage });
    this.setState(prevState => ({
      images: [...prevState.images, ...response],
      page: nextPage,
      loading: false,
    }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <ul className={css.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={this.props.handleImgOpenClick}
            />
          ))}
        </ul>
        {images.length ? <Button onClick={this.handleBtnClick} /> : ''}
        {loading && <Loader />}
      </>
    );
  }
}
