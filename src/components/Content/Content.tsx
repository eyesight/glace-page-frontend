import { forwardRef } from 'react';
import './Content.scss';
import { motion } from 'framer-motion';
import { slideIn2 } from '../../helper/constants/animationVariants';

type content = {
	children: React.ReactNode;
};

const Content = forwardRef<HTMLDivElement, content>(({ children }, ref) => {
	return (
		<motion.main
			initial='initial'
			animate='animate'
			exit='exit'
            variants={slideIn2}
			className='content'
			ref={ref}
		>
			{children}
		</motion.main>
	);
});

export default Content;
