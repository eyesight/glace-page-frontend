import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

type Props = {
	links: Array<any>;
};

const Footer = ({ links }: Props) => {
	const [footerLinks, setfooterLinks] = useState({});

	console.log(links);
	return (
		<footer className='footer'>
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
		</footer>
	);
};

export default Footer;
