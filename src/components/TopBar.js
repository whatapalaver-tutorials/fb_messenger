import React from 'react';
import "../App.css";
import PropTypes from 'prop-types';

const TopBar = (props) => {
  return ( 
  <div className="top-bar">
    <i className="icon fab fa-facebook-messenger" />
      <a
        onClick={props.toggleModal}
        className={`username ${props.userPosition || "left"}`}
      >
      {props.loggedUserName}
      </a>
  </div> );
}

TopBar.propTypes = {
  userPosition: PropTypes.string,
  loggedUserName: PropTypes.string,
  toggleModal: PropTypes.func,
}
 
export default TopBar;