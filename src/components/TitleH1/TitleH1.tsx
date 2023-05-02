import { motion } from 'framer-motion';
import './TitleH1.scss';
import { slideIn } from '../../helper/constants/animationVariants';

type Props = {
	text: string;
	positioningClass: boolean;
};

const TitleH1 = ({ text, positioningClass }: Props) => {
	return (
		<motion.h1
			key='anyComponentH1'
			initial='initial'
			animate='animate'
			exit='exit'
			variants={slideIn}
			className={`title-h1 ${positioningClass ? 'title-h1--left' : ''}`}
		>
			{text}
		</motion.h1>
	);
};

TitleH1.defaultProps = {
	text: 'Titel H1',
	positioningClass: false,
};

export default TitleH1;
