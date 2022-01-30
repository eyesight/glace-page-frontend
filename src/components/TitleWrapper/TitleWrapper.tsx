import './TitleWrapper.scss';

type Props = {
  title: string,
  children: React.ReactNode,
}

const TitleWrapper = ({ title, children }: Props) => {
  return (
    <header className="title-wrapper">
      <h1 className="title-h1">
        {title}
      </h1>
      {children}
    </header>
  );
};

export default TitleWrapper;