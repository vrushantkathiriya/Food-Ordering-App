import React, { Fragment } from 'react'
import classes from "./Header.module.css";
import mainheaderImage from "../../assests/headerBanner.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
      <Fragment>
        <header className={classes.header}>
          <h1>Food Ordering App</h1>
          <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}> 
          <img src={mainheaderImage} alt='A table full of delicious food!' />
        </div>
      </Fragment>
  )
}

export default Header;
