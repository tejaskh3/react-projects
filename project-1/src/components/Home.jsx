import React from 'react'
import '../styles/home.scss'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillAmazonCircle} from 'react-icons/ai'
export default function Home() {
  return (
    <>
    <div className="home" id="home">
      <main>
        <h1>TechStuck</h1>
        <p>Solution to all your tech problems</p>
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="graphics" />
      <p>We are here to help you regarding your tech problem. We are leading tech company aims to increase the problem solvind ability
        among children.
      </p>
    </div>
    <div className="home3" id='about'>
      <div className="">
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate odio quisquam perspiciatis sapiente repellat eligendi rem quos odit, excepturi quo animi dolore ab dignissimos beatae blanditiis vitae corporis autem!
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <h1>Brands</h1>
      <div>
      {/* <h1>Brands</h1> */}

      <article>
        <div style={{
          animation: '0.3s',
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{
          animation: '0.5s',
        }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{
          animation: '0.7s',
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div style={{
          animation: '0.9s',
        }}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
      </div>

    </div>
    </>
  )
}
