import React from 'react';
import styles from './login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faKey } from '@fortawesome/free-solid-svg-icons'

function Login() {

  const 

  const adminLoginSubmitHandler = (event) => {
    event.preventDefault()

  }

  return (
    <>
      <form onSubmit={adminLoginSubmitHandler} className={styles['admin-login-form']}>
        <div className={styles['admin-login-header']}>ADMIN LOGIN</div>
        <div className={styles['admin-login-input-container']}>
          <label className={styles['admin-login-label']} for="mobile">
            Phone Number
          </label>
          <div className={styles['admin-input-container']}>
            <FontAwesomeIcon icon={faPhone} className={styles['fas']} />
            <span className={styles['admin-between-line']}></span>
            <input type="text" name="mobile" placeholder="Phone Number"></input>
          </div>

          <label className={styles['admin-login-label']} for="mobile">
            Password
          </label>
          <div className={styles['admin-input-container']}>
            <FontAwesomeIcon icon={faKey} className={styles['fas']} />
            <span className={styles['admin-between-line']}></span>
            <input type="password" name="password" placeholder="Password"></input>
          </div>
        </div>
        <div className={styles['admin-login-button-container']}>
          <span className={`${styles['span']} ${styles['span-1']}`}></span>
          <span className={`${styles['span']} ${styles['span-2']}`}></span>
          <span className={`${styles['span']} ${styles['span-3']}`}></span>
          <span className={`${styles['span']} ${styles['span-4']}`}></span>
          <button type="submit" className={styles['admin-login-button']}>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login