import React from 'react'
import m from 'marked'

export default (props) => {
  console.log('props', props)
  let {title, date} = props.post.attributes
  let body = { __html: m(props.post.body) }

  return (
    <div>
      <h3>{ title }</h3>
      <h4>{ date }</h4>
      <div dangerouslySetInnerHTML={ body }></div>
    </div>
  )
}
