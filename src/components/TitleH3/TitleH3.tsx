import './TitleH3.scss';

type Props = {
  title: string,
  theClass: string
}

const TitleH3 = ({ title, theClass }: Props) => {
  return (
    <h3 className={`title-h3 ${theClass}`}>
      {title}
    </h3>
  );
};

TitleH3.defaultProps = {
  theClass: ''
}

export default TitleH3;