import './TitleH1.scss';

type Props = {
  text:  string
}

const TitleH1 = ({ text }: Props) => {
  return (
    <h1 className="title-h1">
      {text}
    </h1>
  );
};

TitleH1.defaultProps = {
  text: 'Titel H1'
};

export default TitleH1;