import './Lead.scss';

type Props = {
  text:  string,
}

const Lead = ({ text }: Props) => {
  return (
    <p className={`lead`}>
      {text}
    </p>
  );
};

Lead.defaultProps = {
  text: 'Lead',
  positioningClass: false
};

export default Lead;