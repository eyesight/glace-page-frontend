import { motion } from 'framer-motion';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

type Props = {
	links: Array<any>;
};

const Footer = ({ links }: Props) => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
			}}
			className='footer'
		>
			<div className='footer__inner'>
				<div className='footer__wrap'>
					<div className='footer__left'>
						<p className='copyright'>copyright © {new Date().getFullYear()}</p>
					</div>
					<div className='footer__right'>
						<nav className='footer-nav'>
							<ul className='footer-nav__wrapper'>
								{links?.map((link) => (
									<li className='footer-nav__item' key={link.id}>
										<NavLink to={`/info/${link.id}`} className='footer-nav__link'>
											{link.attributes.pagename}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
