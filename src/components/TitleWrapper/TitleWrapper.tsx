import TitleH1 from '../TitleH1/TitleH1';
import './TitleWrapper.scss';

type Props = {
  title: string,
  children: React.ReactNode,
}

const TitleWrapper = ({ title, children }: Props) => {
  return (
    <header className="title-wrapper">
      <TitleH1 text={title} />
      {children}
    </header>
  );
};

export default TitleWrapper;