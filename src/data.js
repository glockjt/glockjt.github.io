// IDEA: pages section that would be: ABOUT, PROJECTS, etc

// module.exports = {
//   title: 'My Static Site',
//   routes: [
//     '/'
//   ]
// }


import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import fm from 'front-matter'
import marked from 'marked'

const postDir = join(process.cwd(), 'posts') // IDEA: read the post dir from package.json or config

const postFiles = readdirSync(postDir)

const routes = ['/'];

const posts = postFiles.map(file => {
  let content = readFileSync(join(postDir, file), 'utf-8')
  let matter = fm(content)
  let body = marked(matter.body)
  let excerpt = matter.attributes.excerpt || /<p>(.*?)<\/p>/g.exec(body)[1];
  let slug = matter.attributes.title.replace(/\s+/g, '-').toLowerCase();

  routes.push('/'.concat(slug).concat('/'))

  return {
    ...matter.attributes,
    slug: slug,
    excerpt: excerpt,
    body: body
  }
});

const data = {
  posts,
  routes
}

module.exports = data
