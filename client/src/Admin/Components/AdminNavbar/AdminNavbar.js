import styles from './AdminNavbar.module.css'
import logo from '../../../components/Navbar/img/img1.png'

const AdminNavbar = (props) => {
  return (
    <div className={styles['admin-navbar']}>
      <img src={logo} className={styles['admin-navbar-pic']}></img>
      <div className={styles['admin-navbar-elements']}>
        <div className={styles['admin-navbar-element']}>
          Donors
        </div>
        <div className={styles['admin-navbar-element']}>
          New Admin
        </div>
        <div className={styles['admin-navbar-element']}>
          Logout
        </div>
        <div className={styles['admin-navbar-element']}>
          Logs
        </div>
      </div>
      <div className={styles['admin-navbar-user']}>
        <p>Admin Panel</p>
        <p>Logged In As: John Doe</p>
      </div>
    </div>
  )
}

export default AdminNavbar