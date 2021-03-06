import Link from 'next/link'

import Author from '../components/Author'
import Date from '../components/Date'

const Post = (props) => {
   
    const { slug, title, standfirst, date } = props 
    const hero  = props.hero.url || props.hero.fields.file.url
    const authorFields = props.blogger.fields || props.blogger

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-1">
        <picture>
          <source srcSet={`${hero}?fm=webp&w=384&fit=fill&h=192`} type="image/webp"></source>
          <img className="w-full" src={`${hero}?w=384&fit=fill&h=192`}></img>
        </picture>        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">           
              <Link href="/posts/[id]" as={`posts/${slug}`} >
                <a>{title} </a>         
              </Link>
              <Date dt={date} />
              <p className="text-gray-700 text-base">{standfirst}</p>
          </div>
          <Author {...authorFields} />
        </div>
      </div>
    )
  }
  
  export default Post