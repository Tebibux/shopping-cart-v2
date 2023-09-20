/* eslint-disable react/prop-types */

import propTypes from 'prop-types';
import HeaderNavigation from './navLink';
const Header = ({ cartArray }) => {
	return (
		<div className="header">
			<HeaderNavigation cartArray={cartArray} />
		</div>
	)
}

Header.propTypes = {
	cartArray: propTypes.array,
};

export default Header;