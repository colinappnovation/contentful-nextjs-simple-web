import { useEffect, useState } from 'react'
import Post from '../components/post'
import Layout from '../components/layout'

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

function HomePage() {
    async function fetchContentTypes() {
      const types = await client.getContentTypes()
      if (types.items) return types.items
      console.log('Error getting Content Types.')
    }
    async function fetchEntriesForContentType(contentType) {
      const entries = await client.getEntries({
        content_type: contentType.sys.id
      })
      if (entries.items) return entries.items
      console.log(`Error getting Entries for ${contentType.name}.`)
    }
    const [posts, setPosts] = useState([])
    useEffect(() => {
      async function getPosts() {
        const contentTypes = await fetchContentTypes()
        const allPosts = await fetchEntriesForContentType(contentTypes[0])
        setPosts([...allPosts])
        console.log('Fetching records for homepage')
      }
      getPosts()
    }, [])
    return (
      <Layout>
        <div class="flex mb-4"> 
        {posts.length > 0
          ? posts.map(p => ( 
            
                     
              <Post     
                title={p.fields.title}
                date={p.fields.date}
                slug={p.fields.slug}
                hero={p.fields.hero}
              />
              
            ))
          : null}
          </div> 
      </Layout>
    )
  }
  
  export default HomePage