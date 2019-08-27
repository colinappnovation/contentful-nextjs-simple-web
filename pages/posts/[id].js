import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import Layout from '../../components/layout'

const Page = props => {
    const { title, date, slug, body, hero } = props.item[0].fields
    let src = ''
    if (hero) src = hero.fields.file.url
       
    const getMarkup = () => {
        return {__html: documentToHtmlString(body)};  
    }

    return (
        <Layout>            
            <img src={`${src}?w=1440&h=600`} />
            <h1>{title}</h1>
            <p><strong>DATE</strong>:{date}</p>        
            <div dangerouslySetInnerHTML={getMarkup()} />
        </Layout>
    )
}
 
Page.getInitialProps = async (context) => {
     const { id } = context.query;  

      const c = require('contentful').createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      })
    
      async function getContentEntry() {
        console.log(`Fetching entry for ${id}`)
        const q = 
          {
              content_type: 'post',
              'fields.slug': id,
            }
  
        
      const entries = await c
      .getEntries(q)    
      if (entries.items) return entries.items
      console.log(`Error getting entry.`)
    }      

    const item = await getContentEntry()
 
    return {item};
  }

export default Page;