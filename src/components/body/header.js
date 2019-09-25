import React from 'react'

export default () => {
  return (
    <header>
      {/* <div className='profile-mask'></div> */}
      {/* <div className='profile'></div> */}
      <div className='intro'>
        <h1> Jonathan Glock </h1>
        <p> A blog mostly about web development but with a personal touch.</p>
        <a href='mailto: glockjt@gmail.com?subject=Hello Jonathan'>glockjt@gmail.com</a>
      </div>
      <style jsx>{`
        header {
          // box-shadow: 0px 0px 15px rgba(0,0,0,0.45);
          background-color: #ffffff;
          width: 100%;
          // position: fixed;
          // left: 0;
          float: left;
          z-index: 300;
          -moz-transition-duration: 0.5s;
          -webkit-transition-duration: 0.5s;
          cursor: pointer;
          display: block;
        }
        // header:hover {
        //   bottom: 0
        // }
        header .intro {
          text-align: center;
          width: 80%;
          float: left;
          margin: 70px 0 70px 10%;
        }
        header .intro p {
          font-family: Roboto Slab, sans-serif;
          margin: 0 0 25px;
        }
        header .intro a {
          background-color: #57ad68;
          font-family: Lato, sans-serif;
          color: #ffffff;
          padding: 10px 20px 12px;
          border-radius: 3px;
          text-decoration: none;
        }
        header .profile {
            box-shadow: 0px 0px 15px rgba(0,0,0,0.45);
            border-radius: 50%;
            background-color: #ffffff;
            width: 120px;
            height: 120px;
            position: absolute;
            top: -60px;
            z-index: 310;
            left: 50%;
            margin-left: -60px;
        }
        header .profile-mask {
            background-color: #ffffff;
            width: 200px;
            height: 75px;
            position: absolute;
            top: 0;
            z-index: 320;
            left: 50%;
            margin-left: -100px;
        }
        h1 {
          font-family: Lato, sans-serif;
          font-weight: bold;
          font-size: 34px;
          line-height: 46px;
          color: #303030;
          margin: 0;
          margin-bottom: 5px;
          padding: 0;
        }
      `}</style>
    </header>
  )
}
