import './FullscreenImage.scss';

type Props = {
    image: string,
    altText: string,
  }

const FullscreenImage = ({ image, altText }: Props) => {
    return (
        <figure className="fullscreen-image">
            <img
                className="fullscreen-image__image"
                src={image}
                alt={altText}
            />
        </figure>
    );
};

export default FullscreenImage;