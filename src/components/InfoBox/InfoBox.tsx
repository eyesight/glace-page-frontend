import './InfoBox.scss';

type Props = {
    title: string,
    text: string,
  }

const InfoBox = ({ title, text }: Props) => {
    return (
        <div className="info-box">
            <h3 className="title-h3 info-box__title">{title}</h3>
            <p className="info-box__text">{text}</p>
        </div>
    );
};

export default InfoBox;