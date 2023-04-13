import './Richtext.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
	text: string;
};

const Richtext = ({ text }: Props) => {
	return (
		<div className='richtext container'>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
		</div>
	);
};

export default Richtext;
