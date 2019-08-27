import {documentToHtmlString} from '@contentful/rich-text-html-renderer'

const Page = props => {
    const { title, date, slug, body } = props.item[0].fields
    const getMarkup = () => {
        return {__html: documentToHtmlString(body)};  
    }

    return (
        <div>
            <h1>{title}</h1>
            <p><strong>DATE</strong>:{date}</p>
            <p><strong>SLUG</strong>: {slug}</p>
            
            <div dangerouslySetInnerHTML={getMarkup()} />
        </div>
    )
}
 
Page.getInitialProps = async (context) => {
     const { id } = context.query;  

      const c = require('contentful').createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      })
    
      async function getContentEntry() {
        console.log(`Fetching entries`)
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