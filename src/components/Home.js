import React from 'react'
import styled from 'styled-components'
import { BsFillPersonFill } from "react-icons/bs";

const Home = () => {
  return (
    <Wrapper id='home'>
        <h2>Hi There!</h2>
        <h1>I am a <span> Web Developer! </span></h1>
        <p>A Fullstack web developer with no experience on Real Life projects</p>
        <button>ABout Me <BsFillPersonFill/> </button>
        <img src='ola' alt={'Me'} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 100vh;
    h1{
        font-size: 40px;
        font-family: sans-serif
    }
    h1 span{
        color: #bc8cf2;
    }
`

export default Home
