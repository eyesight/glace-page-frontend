import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Endpoint } from '../../helper/constants/routes';
import { useDispatch } from 'react-redux';
import { enterCursor, leaveCursor, detectCursor } from '../../store/actions/cursor';

const TilesItem = ({ title, image, id }) => {
    const dispatch = useDispatch();

    const detectCursorFunc = (e) => {
        let mousePos = { x: 0, y: 0 }
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        dispatch(detectCursor(mousePos));
    }

    return (
        <div role="listitem" className="tiles__item" onMouseMove={(event) => detectCursorFunc(event)} onMouseEnter={() => dispatch(enterCursor())} onMouseLeave={() => dispatch(leaveCursor())}>
            <Link className="tiles__anchor" to={`/receipt/${id}`} tabIndex={-1}>
                <figure className="tiles__image-wrapper">
                    <img className="tiles__img" alt="" src={image ? `${Endpoint}${image.url}` : "http://placekitten.com/200/300"} />
                </figure>
            </Link>
            <div className="tiles__item-inner">
                <h3 className="tiles__title">
                    <Link className="tiles__anchor" to={`/receipt/${id}`}>
                        {title}
                    </Link>
                </h3>
                <div className="tiles__button-wrap">
                    <button className="tiles__button">
                        <svg
                            className="tiles__icon-smile"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 28">
                            <g className="Smile" transform="translate(-546.252 -647.893)">
                                <g
                                    className="Head"
                                    transform="translate(546.252 647.893)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <circle cx="14" cy="14" r="14" stroke="none" />
                                    <circle cx="14" cy="14" r="13" fill="none" />
                                </g>
                                <g className="Details" transform="translate(553.826 657.963)">
                                    <g className="Eyes" transform="translate(2.466 1.455)">
                                        <line
                                            className="right"
                                            y2="1.693"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        />
                                        <path
                                            className="left"
                                            d="M0,0V1.693"
                                            transform="translate(7.562)"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        />
                                    </g>
                                    <path
                                        className="mouth"
                                        d="M-14707.748-22613.916a10.594,10.594,0,0,0,6.418,2.271,8.435,8.435,0,0,0,5.926-2.271"
                                        transform="translate(14707.748 22621.668)"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    />
                                    <path
                                        className="zunge"
                                        d="M14.855,19.26s-.364,1.287,1.861,1.265,2.048-1.785,2.048-1.785"
                                        transform="translate(-7.574 -10.07)"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        opacity="0"
                                    />
                                </g>
                            </g>
                        </svg>
                        Das nehme ich
                    </button>
                </div>
            </div>
        </div>
    );
};

TilesItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.object,
    id: PropTypes.number.isRequired,
};

export default TilesItem;