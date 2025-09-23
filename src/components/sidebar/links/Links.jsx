import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggeredChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
      staggeredDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: 50,
  },
}

const Links = () => {
  const items = ['Homepage', 'Services', 'Portfolio', 'Content', 'About']

  return (
    <motion.div className="links" variants={variants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {' '}
          {item}
        </a>
      ))}
    </motion.div>
  )
}

export default Links
