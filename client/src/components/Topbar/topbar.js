import React from 'react';
import styles from './topbar.module.css';
import logo from './img/img1.png';

function Topbar() {
  return (
    <>
        <div className={styles.container}>
            <img src={logo}></img>
        <div>topbar</div>
        </div>
    </>
  );
}

export default Topbar