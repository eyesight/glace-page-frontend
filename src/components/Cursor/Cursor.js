import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.scss';

const Cursor = props => {
    return (
        <div className="custom-cursor">
            <div className="custom-cursor__eye">
                <svg
                    className="custom-cursor__eye-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 93.453 69.057">
                    <g className="Icon_feather-eye" transform="translate(0.5 -4)">
                        <path
                            d="M1.5,38.528S17.764,6,46.227,6,90.953,38.528,90.953,38.528,74.689,71.057,46.227,71.057,1.5,38.528,1.5,38.528Z"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="4"
                        />
                        <path
                            d="M37.9,25.7A12.2,12.2,0,1,1,25.7,13.5,12.2,12.2,0,0,1,37.9,25.7Z"
                            transform="translate(20.528 12.83)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="4"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};

Cursor.propTypes = {

};

export default Cursor;