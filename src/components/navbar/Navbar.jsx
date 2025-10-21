import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.5 }}
        >
         Vinay Prajapati
        </motion.span>
        <div className="social">
          <a href="">
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
            <img src="/youtube.png" alt="" />
            <img src="/dribble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
