import Link from 'next/link'
import day from 'dayjs'

function PostDetail(props) {
   
    const { slug, title, standfirst, date } = props
    const fdate = day(date).format("DD MMMM YYYY")  
    const { url: hero }  = props.hero
    // const { id } = props.sys      
    const { fullname, jobTitle, profilePicture } = props.blogger

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
          <div className="flex items-center">
            <picture>
              <source srcSet={`${profilePicture.url}?fm=webp`} type="image/webp"></source>
              <img className="w-10 h-10 rounded-full mr-4" src={`${profilePicture.url}`} alt={`Avatar of ${fullname}`} />
            </picture>            
            <div className="text-sm">
              <p className="text-gray-500 text-sm">{fullname}</p>
              <p className="text-gray-500 text-sm mt-0">{jobTitle}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default PostDetail