import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ imgSrc, imgAlt, onClose }) => {
  return (
    <div onClick={onClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
