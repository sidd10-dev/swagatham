import React from 'react';
import Navbar from '../Navbar/navbar';
import styles from './index.module.css';
import Topbar from '../Topbar/topbar';

function Index() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.name}>index</div>
    </>
  );
}


export default Index