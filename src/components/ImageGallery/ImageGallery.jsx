import ImageGalleryItem from "./ImageGalleryItem";
import s from "./ImageGallary.module.scss"

function ImageGallery({ arrImage, renderImgInModal }) {
  const renderItem = arrImage.map(
    ({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        webformat={ webformatURL }
        key={ id }
        largeImg={ largeImageURL }
        tags={ tags }
        renderImgInModal={ renderImgInModal }
      />
    )
  );

  return <ul className={ s.imageGallery }>{ renderItem }</ul>;
}
export default ImageGallery;
