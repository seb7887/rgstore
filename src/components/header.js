import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import gastbyLogo from '../images/gatsby-icon.png';

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' };
}

const NavLink = props => <Link getProps={isActive} {...props} />;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <img
        src={gastbyLogo}
        alt="Gatsby Logo"
        style={{ width: '50px', height: '50px' }}
      />
      <h1 style={{ margin: 0 }}>
        <NavLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </NavLink>
      </h1>

      <NavLink
        to='/products'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Products
      </NavLink>
      <NavLink
        to='/blog'
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Blog
      </NavLink>

      {/* Shopping Cart Summary */}
      <div
        className='snipcart-summary snipcart-checkout'
        style={{
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <div><strong>My Cart</strong></div>
        <div><span  style={{ fontWeight: 'bold'}} className='snipcart-total-items'></span>{' '}Items in Cart</div>
        <div>Total Price{' '}<span style={{ fontWeight: 'bold' }} className='snipcart-total-price'></span></div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
