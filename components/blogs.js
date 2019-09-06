import client from '../lib/client'
import { useEffect, useState } from 'react'

/*
  Use effect means no SSR therefore no content on view source etc.
 */

const BlogListing = (props) => {    
    const [blogListing, setBlogListing] = useState([])

    async function getEntries(filter) {
        const entries = await client.getEntries({
             content_type: 'post',
             'sys.id[ne]': filter
         })       
        const { items } = entries
        
        const listing = items.map(b => {
         const { title } = b.fields
         return { title }
        })   

        return listing
     }

    useEffect(() => {
        const { filter } = props;  
        async function getBlogs() {
            const blogs = await getEntries(filter)
            console.log('fetching blogs for sidebar...', blogs)
            setBlogListing(blogs)
        }
        getBlogs()
    }, [])

    return (
        <div>
            {console.log('In the component..', blogListing)}
            <h2>More from the blog</h2>
            <ul>
            {blogListing.length > 0 ? (
                blogListing.map(b => {              
                   return <li>{b.title}</li>                       
                })
            ) : null }
            </ul>
        </div>
    )
}

export default BlogListing