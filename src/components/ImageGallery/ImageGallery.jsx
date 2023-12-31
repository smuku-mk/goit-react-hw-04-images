import { useEffect, useState } from 'react';
import css from './ImageGallery.module.css';

import { fetchImages } from '../../services';
import { ImageGalleryItem, Button, Loader } from './components';

export const ImageGallery = ({ query, onClick }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (query) {
      const getImages = async () => {
        try {
          setLoading(true);
          const response = await fetchImages({ query });
          setImages(response.hits);
          setTotalHits(response.total);
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      };

      getImages();
    }
  }, [query]);

  const handleBtnClick = async () => {
    const nextPage = page + 1;
    setLoading(true);
    const response = await fetchImages({ query: query, page: nextPage });
    setImages([...images, ...response.hits]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <>
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        ))}
      </ul>
      {totalHits !== images.length ? (
        <Button onClick={handleBtnClick} />
      ) : (
        <></>
      )}
      {loading && <Loader />}
    </>
  );
};
