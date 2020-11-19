import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//Images
import athlete from '../img/athlete-small.png'
import theRacer from '../img/theracer-small.png'
import goodTimes from '../img/goodtimes-small.png'
//Animation
import { motion } from 'framer-motion'
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt='Athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <img src={theRacer} alt='The Racer' />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial='hidden'
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to='/work/good-times'>
          <img src={goodTimes} alt='Good Times' />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0;
  }
`

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 13.4%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
