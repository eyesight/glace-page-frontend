import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = forwardRef(({ children }, ref) => {
    return (
        <main className="content" ref={ref}>
            {children}
        </main>
    );
});

Content.propTypes = {
    children: PropTypes.element.isRequired
};

export default Content;