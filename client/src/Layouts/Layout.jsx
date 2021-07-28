import React from 'react'

export default function Layout(props) {
  return (
    <>
      <main className="home-main">
        {props.children}
      </main>
     
    </>
  )
}
