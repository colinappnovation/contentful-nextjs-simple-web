import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import Layout from '../../components/layout'
import day from 'dayjs'
import ErrorPage from 'next/error'
import client from '../../lib/client'

const Page = props => {
 
    // Loading a page which has been unpublished!
    if (props.item.length == 0) {
     return (
      <ErrorPage statusCode="404" />
     ) 
    }

    const { title, date, body, hero } = props.item[0].fields
    let src = ''
    if (hero) src = hero.fields.file.url

    const fdate = day(date).format("DD MMMM YYYY")

    const getMarkup = () => {
        return {__html: documentToHtmlString(body)};  
    }

    return (
        <Layout>          
            <h1 className='font-bold text-6xl'>{title}</h1>
            <p className="mt-2 mb-2"><strong>Published:</strong> {fdate}</p>    
            <img src={`${src}?w=1440&h=600`} />
            <div id="body" className="mt-8" dangerouslySetInnerHTML={getMarkup()} />
        </Layout>
    )
}
 
Page.getInitialProps = async (context) => {
     const { id } = context.query;  
    
      async function getContentEntry() {
        console.log(`Fetching entry for ${id}`)
        const q = 
          {
              content_type: 'post',
              'fields.slug': id,
            }
  
        
      const entries = await client.getEntries(q)    
      if (entries.items) return entries.items
      console.log(`Error getting entry.`)
    }      

    const item = await getContentEntry()
 
    return {item};
  }

export default Page;