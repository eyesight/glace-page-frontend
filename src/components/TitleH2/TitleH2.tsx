import './TitleH2.scss';

type Props = {
  title: string,
  theClass: string
}

const TitleH2 = ({ title, theClass }: Props) => {
  return (
    <h2 className={`title-h2 ${theClass}`}>
      {title}
    </h2>
  );
};

export default TitleH2;
