import { EndpointAssets } from '../../helper/constants/routes';
import './Image.scss';

type Props = {
    image: ImageType,
    imageUrl: string,
    caption: string
  }

const Image = ({ image, imageUrl, caption }: Props) => {
    return (
        <figure className="image container">
            <img className='image__img' alt='' src={imageUrl ? imageUrl : (image?.data ? `${EndpointAssets}${image.data.attributes.url}` : 'http://placekitten.com/200/300')} />
            <figcaption className='image__caption'>{caption}</figcaption>
        </figure>
    );
};

export default Image;