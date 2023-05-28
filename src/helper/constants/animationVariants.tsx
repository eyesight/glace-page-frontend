export const waveAni = {
	initial: {
		opacity: 1,
		height: 'calc(100vh + 400px)',
		bottom: 0,
	},
	animate: {
		opacity: 1,
		height: 0,
		bottom: 'calc(100% + 500px)',
		transition: {
			duration: 1.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
	exit: { opacity: 0 },
};

export const slideIn = {
	initial: {
		opacity: 1,
		translateY: 50,
	},
	animate: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.3, 
			ease: [0.87, 0, 0.13, 1],
		},
	},
	exit: { opacity: 0 },
};

export const slideIn2 = {
	initial: {
		opacity: 1,
		translateY: 50,
	},
	animate: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.3, 
			ease: [0.87, 0, 0.13, 1],
		},
	},
	exit: { opacity: 0 },
};