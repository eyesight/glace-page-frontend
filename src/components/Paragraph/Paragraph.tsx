import './Paragraph.scss';

type Props = {
    text: string,
  }

const Paragraph = ({ text }: Props) => {
    return (
        <p className="paragraph">
            {text}
        </p>
    );
};

export default Paragraph;