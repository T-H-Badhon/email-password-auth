import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-5'>
            <Link className='mx-2' to='/'>Home</Link>
            <Link className='mx-2' to='/login'>Login</Link>
        </div>
    );
};

export default Header;