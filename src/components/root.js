import React, { Component } from 'react'
// var Router = require('react-router')
// var RouteHandler = Router.RouteHandler
// import Head from './head'
// import Body from './body'

class Root extends Component {
  constructor(props) {
    super(props)
    console.log('props: ', props)
  }

  render() {
    return (
      <html>
        {/*<Head/>*/}
        <body>
          {/*<Body/>*/}
          <p>Testing</p>
          {/* <RouteHandler {...this.props} /> */}
        </body>
      </html>
    )
  }
}

export default Root
