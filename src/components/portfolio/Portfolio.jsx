import './Portfolio.scss'

const items = [
  {
    id: '1',
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia temporibus, autem asperiores aspernatur facilis tempore aliquam dolores rerum iusto dolorum alias libero quis amet incidunt voluptatibus repudiandae totam?',
  },
  {
    id: '2',
    title: 'Next.js Commerce',
    img: 'https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia temporibus, autem asperiores aspernatur facilis tempore aliquam dolores rerum iusto dolorum alias libero quis amet incidunt voluptatibus repudiandae totam?',
  },
  {
    id: '3',
    title: 'Javascript app',
    img: 'https://media.istockphoto.com/id/641130656/photo/html-web-design-code-for-developers-and-designers.jpg?s=1024x1024&w=is&k=20&c=zPLhgKpmQp4JACyU4UY2Rb2SH2XsIW3RLLkGf7o3MzI=',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia temporibus, autem asperiores aspernatur facilis tempore aliquam dolores rerum iusto dolorum alias libero quis amet incidunt voluptatibus repudiandae totam?',
  },
  {
    id: '4',
    title: 'Music app',
    img: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg',
    desc: '      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla officia temporibus, autem asperiores aspernatur facilis tempore aliquam dolores rerum iusto dolorum alias libero quis amet incidunt voluptatibus repudiandae totam?',
  },
]

const Single = ({ item }) => {
  return <section>{item.title}</section>
}

const Portfolio = () => {
  return <div className="portfolio">{items.map(item=>(
    <Single item={item} key={item.id}/>
  ))}</div>
}

export default Portfolio
