import React from 'react';
import PropTypes from 'prop-types';

// Header.propTypes = {
    
// };

function Header({ content }) {
    return (
        <div className='font-semibold'>
            {content}
        </div>
    );
}

export default Header;