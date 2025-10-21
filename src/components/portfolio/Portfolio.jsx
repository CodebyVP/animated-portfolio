import { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: '1',
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg',
    desc: '      Lorem ipsum dolor, ',
  },
  {
    id: '2',
    title: 'Next.js Commerce',
    img: 'https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla',
  },
  {
    id: '3',
    title: 'Javascript app',
    img: 'https://media.istockphoto.com/id/641130656/photo/html-web-design-code-for-developers-and-designers.jpg?s=1024x1024&w=is&k=20&c=zPLhgKpmQp4JACyU4UY2Rb2SH2XsIW3RLLkGf7o3MzI=',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia  repudiandae totam?',
  },
  {
    id: '4',
    title: 'Music app',
    img: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia temporibus, autem asperiores aspernatur facilis tempore aliquam dolores rerum iusto dolorum alias libero quis amet incidunt voluptatibus repudiandae totam?',
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
            <button>See Demo</button>
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
