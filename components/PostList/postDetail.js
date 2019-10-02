import Link from 'next/link'
import day from 'dayjs'
import Author from '../Author'

function PostDetail(props) {
   
    const { slug, title, standfirst, date } = props
    const fdate = day(date).format("DD MMMM YYYY")  
    const { url: hero }  = props.hero  

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
              <p className="text-sm mt-1 text-gray-600">{fdate}</p>
              <p className="text-gray-700 text-base">{standfirst}</p>
          </div>
          <Author {...props.blogger} standfirst apollo={1} />
        </div>
      </div>
    )
  }
  
  export default PostDetail