import React, { Component } from 'react'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import fm from 'front-matter'
import Post from './post'

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.content = [];

    this.getPosts()
  }

  getPosts() {
    const cwd = process.cwd()
    let posts = readdirSync(join(cwd, 'posts'))

    posts.forEach(post => {
      let file = readFileSync(join(cwd, 'posts', post), 'utf-8')
      this.content.push(fm(file))
    })
  }

  render() {
    console.log('this.content', this.content)
    return (
      <div>
        {this.content.map(post => <Post post={ post }/>)}
      </div>
    )
  }
}
