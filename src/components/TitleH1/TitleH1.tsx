import './TitleH1.scss';

type Props = {
  text:  string,
  positioningClass: boolean
}

const TitleH1 = ({ text, positioningClass }: Props) => {
  return (
    <h1 className={`title-h1 ${positioningClass ? 'title-h1--left' : ''}`}>
      {text}
    </h1>
  );
};

TitleH1.defaultProps = {
  text: 'Titel H1',
  positioningClass: false
};

export default TitleH1;