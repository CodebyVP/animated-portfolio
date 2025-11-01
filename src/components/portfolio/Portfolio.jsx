import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: '1',
    title: 'ApnaCart',
    img: './Apna.png',
    desc:
      'ApnaCart is a E-commerce website for men, women and kids From this platform you will be able to buy all fashion products online with best of the prices.' +
      'TachStack:- JavaScript, Html,Css ',
    deploy: 'https://apna-cart-three.vercel.app/',
    github: 'https://github.com/VinayPrajapati04/ApnaCart',
  },
  {
    id: '2',
    title: 'Avni computer solution. ',
    img: './AvniImg.png',
    desc: `It's a computer services shop website it's an e-commerce platform offering a diverse range of tech solutions.This is servier provider website. TachStack:- JavaScript, HTML,CSS`,
    deploy: 'https://avni-computer-solution-new.vercel.app/',
    github: 'https://github.com/VinayPrajapati04/AvniComputerSolutionNew',
  },
  {
    id: '3',
    title: 'Movie star web',
    img: './public/movieStar.PNG',
    desc: 'MovieStar: Your cinematic hub! Catch the latest news, trailers, and reviews. Join a vibrant community of film lovers. Lights, camera, action – let the movie magic begin. TachStack:- JavaScript, HTML,CSS',
    deploy: 'https://mini-project-3rd-year.vercel.app/',
    github: 'https://github.com/VinayPrajapati04/MiniProject_3rd_Year',
  },
  {
    id: '4',
    title: 'Todo App',
    img: 'TodoApp.PNG',
    desc: 'A simple and efficient task management app that allows users to add, edit, and delete tasks. Stay organized and keep track of your daily activities with ease.',
    deploy: 'https://todo-app-kappa-gules.vercel.app/',
    github: 'https://github.com/VinayPrajapati04/Todo-App',
  },
]

const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.div className="textContainerBtn">
              {/* <button>Deploy</button>
              <button>Github</button> */}

              <a href={item.deploy} target="_blank" rel="noopener noreferrer">
                <button>Deploy Link</button>
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
