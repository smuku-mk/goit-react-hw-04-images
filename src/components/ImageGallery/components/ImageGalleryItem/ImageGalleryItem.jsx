import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li key={image.id} className={css.galleryItem}>
      <img
        className={css.galleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
