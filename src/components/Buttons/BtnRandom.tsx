import React from 'react';
import './BtnRandom.scss'

type Props = {
    onClickFunc: React.MouseEventHandler<HTMLButtonElement>,
    text: string,
  }

const BtnRandom = ({ onClickFunc, text }: Props) => {
    return (
        <button onClick={onClickFunc} type="button" className='btn-random'>
            <span className='btn-random__txt'>
                {text}
            </span>
            <svg className='btn-random__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.49 25.499">
                <g id="rotate-left-69_fcac0f11-7f02-430e-b9ef-c20dafa082ee" transform="translate(-0.61 -4.942)">
                    <path className="btn-random" d="M10.074,19.038A11.735,11.735,0,1,1,13.435,26" transform="translate(-4.39)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path className="btn-random" d="M2,23l3.684,5.389,4.88-4.487" transform="translate(0 -9.351)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
        </button>
    );
};

export default BtnRandom;