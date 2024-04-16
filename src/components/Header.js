import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Header.module.css";
function Header({ soluong, setShowCart }) {
  const onShowCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className={classes.row}>
      <div className={classes.logo}>My Shop</div>
      <Link to="/login" className={classes.login}>Login</Link>
      <Link to="/signup" className={classes.signup}>Signup</Link>
      <Link to="/TestSignup" className={classes.TestSignup}>TestSignup</Link>
      <div className={classes.cart} onClick={onShowCartHandler}>
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>

        <span className={classes.cartamount}>
          <sup>{soluong}</sup>
        </span>
      </div>
    </div>
  );
}

export default Header;
