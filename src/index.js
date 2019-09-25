import React from 'react'
import ReactDomServer from 'react-dom/server'
import Root from './components/root'

export default (locals, callback) => {
  console.log('locals: ', locals)
  // const html = ReactDomServer.renderToStaticMarkup(React.createElement(Root, locals))
  const html = ReactDomServer.renderToStaticMarkup(
    <Root { ...locals } />
  )
  callback(null, '<!DOCTYPE html>' + html)
}
