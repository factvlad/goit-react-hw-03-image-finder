import s from "./ImageGallaryItem.module.scss"

function ImageGalleryItem({ webformat, id, largeImg, tags, renderImgInModal }) {
  return (
    <li className={ s.imageGalleryItem } key={ id } onClick={ renderImgInModal }>
      <img className={ s }
        src={ webformat }
        alt={ tags }
        title={ largeImg } />
    </li>
  );
}

export default ImageGalleryItem;
