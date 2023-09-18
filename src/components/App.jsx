import { useState } from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = data => {
    const { input } = data;
    setQuery(input);
  };

  const handleImgOpenClick = image => {
    setSelectedImage(image);
  };

  const handleImgCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Searchbar data={handleSubmit} />
      <ImageGallery query={query} onClick={handleImgOpenClick} />
      {selectedImage && (
        <Modal
          onClose={handleImgCloseClick}
          imgSrc={selectedImage.largeImageURL}
          imgAlt={selectedImage.tags}
        />
      )}
    </>
  );
};