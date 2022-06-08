import {useState, React} from 'react';
import styles from './navbar.module.css';
import logo from './img/img1.png';

function Navbar() {

  const [toggle, setToggle]= useState(false)
  
  function togglebutton(){
    if(toggle)
      setToggle(false)
    else
      setToggle(true)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcont}>
          <img src={logo} className={styles.pic}></img>

          <div className={styles.lines} onClick={togglebutton}>
            <div className={`${styles['line-1']} ${styles['common']} ${toggle ? styles.change: ''}`}></div>
            <div className={`${styles['line-2']} ${styles['common']} ${toggle ? styles.change: ''}`}></div>
            <div className={`${styles['line-3']} ${styles['common']} ${toggle ? styles.change: ''}`}></div>
          </div>
        </div>

        <div className={styles.links}>
          <a href='/' className={styles.navele}>Home</a>
          <a href='/admin' className={styles.navele}>Admin</a>
          <a href='/donate' className={styles.navele}>Donate</a>
          <a href='/about' className={styles.navele}>About</a>
          <a href='/facility' className={styles.navele}>Facility</a>
          <a href='/contact-us' className={styles.navele}>Contact</a>
        </div>        
      </div>
    </>
  );
}

export default Navbar
