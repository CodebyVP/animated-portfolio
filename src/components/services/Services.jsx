import './services.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView={'animate'}
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on Helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Tech Stack </motion.b>{' '}
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">Html</h2>
          <img
            src="./public/html_Logo.png"
            className="serviceTagImg"
            alt="htmlLogoImg"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">CSS</h2>
          <img
            src="./public/CSS_logo.png"
            className="serviceTagImg"
            alt="cssLogoImg"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">JAVASCRIPT</h2>
          <img
            src="./public/javascript-logo.png"
            className="serviceTagImg"
            alt="Javascript"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">React</h2>
          <img
            src="./public/React.png"
            className="serviceTagImg"
            alt="Javascript"
          />
        </motion.div>
      </motion.div>
      {/* bottom divs */}
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">Framer motion</h2>
          <img
            src="./public/framer-motion-logo.svg"
            className="serviceTagImg"
            alt="htmlLogoImg"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">SCSS</h2>
          <img
            src="./public/CSS_logo.png"
            className="serviceTagImg"
            alt="cssLogoImg"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading"></h2>
          <img
            src="./public/javascript-logo.png"
            className="serviceTagImg"
            alt="Javascript"
          />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2 className="box-heading">Node Js</h2>
          <img
            src="./public/javascript-logo.png"
            className="serviceTagImg"
            alt="Javascript"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
