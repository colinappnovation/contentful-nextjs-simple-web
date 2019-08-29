import { useEffect, useState } from 'react'
import Post from '../components/post'
import Layout from '../components/layout'

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

const HomePage = () => {  
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
        <h1 className="uppercase text-4xl text-gray-800">Insights</h1>
        <p className="text-xl mb-5 text-gray-600">To understand the future you have to be grounded in the now. We guide our clients as their industries evolve with the changing digital landscape.</p>
        <div className="flex flex-wrap mb-4">
        {posts.length > 0
          ? posts.map(p => (  
              <Post     
                title={p.fields.title}
                date={p.fields.date}
                slug={p.fields.slug}
                hero={p.fields.hero}
                standfirst={p.fields.standfirst}
                author={p.fields.blogger}
                key={p.sys.id}
              />
            ))
          : null}
          </div> 
      </Layout>
    )
  }
  
  export default HomePage