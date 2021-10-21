import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Home = props => {
  return (
    <div className="container">
      <div>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </div>
      <div>
        <ul>
          {props.data.map(({ show }) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?title=${show.title}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  return {
    data,
  }
}

export default Home
