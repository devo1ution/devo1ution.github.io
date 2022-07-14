import bg from '../public/homebg.jpeg'
import Content from '../components/content'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
function Home() {
  useEffect(() => { document.title = 'Home'; });
  let links = new Map([
    ['Walmart Scratch', "https://satanic-santa.github.io/blocks"],
    ['If you think you\'re smart, this might change your opinion', "https://docs.google.com/document/d/1NVCuk1u35kJRM6FnS8U0PVK47bhrxgMXHlo0rp1HGmM/edit?usp=sharing"],
    ['200 commits and still horrible', 'https://github.com/satanic-santa/spark/tree/master'],
    ['Literally got an A for this', "https://satanic-santa.github.io/buttons/"],
    ['Figuratively got an A for this', "https://satanic-santa.github.io/Dreamsexual/"]
  ])
  return (
    <div className="page">
      <Content image={bg} title={'Welcome!'} content={<>
        <p>Check out some of my other projects:</p><br />
        <ul style={{ listStyleType: "none" }}>
          {
            Array.from(links.entries()).map(([title, link], idx) => {
              return <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .3 * (idx + 2)
                  }
                }
              }}>
                <li key={idx}><a href={link} target="_blank">{title}</a></li>
              </motion.div>
            })
          }
        </ul>
      </>} />
    </div>
  );
}

export default Home;
