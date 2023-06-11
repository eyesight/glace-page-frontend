import { waveAni } from '../../helper/constants/animationVariants';
import './StartAniBox.scss';
import { motion } from 'framer-motion';

const StartAniBox = ({ text = '', anikey='keyStartAniBox' }) => {

	return (
		<motion.div key={anikey} initial='initial' animate='animate' variants={waveAni} className={`startanibox`}>
			<div className='startanibox__box'>
				<motion.p
					animate={{ opacity: 0, visibility: 'hidden', transition: { duration: 0.2, delay: 0.7 } }}
					className='startanibox__text'
				>
					{text}
				</motion.p>
			</div>
			<svg
				className='startanibox__waves'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 400.2 447.5'
			>
				<g className='wave3'>
					<path
						className='st0'
						d='M0.2,374.7c0,0-0.4,29.3,0,52.6c0.3,17.1,57.2,33.7,99.1,3.1c25.5-18.7,73.8-26.5,109.7-1.9c31.4,21.6,73,25.7,100.3,3.4
		c38.3-31.3,91-4.1,91-4.1v-53.1C400.2,374.7,1,373.9,0.2,374.7z'
					/>
				</g>
				<g className='wave2'>
					<path
						className='st1'
						d='M0.2,374.3v42.4c16.2,18.9,67.9,23.8,105.6-4.7c32.1-24.3,72-30.5,111.2,2.8c27.7,23.5,63.6,24,88.2,3.7
		c54.6-44.9,95.1-1.2,95.1-1.2v-43C400.2,374.3,1,373.6,0.2,374.3z'
					/>
				</g>
				<g className='wave1'>
					<path
						className='st2'
						d='M0.2-2c0,0-0.4,380.6,0,404c0.3,17.1,53.2,28.8,89.7,4.8c35.5-23.4,64-32.4,103.1-13.4
		c67.6,32.8,96.6,19.8,127.1,2.2c43.6-25.2,80.1,7.1,80.1,7.1V-2C400.2-2,1-2.8,0.2-2z'
					/>
				</g>
			</svg>
		</motion.div>
	);
};

export default StartAniBox;
