import Link from 'next/link'
import day from 'dayjs'

function Post({ id, title, slug, hero, standfirst, date, author}) {
  const fdate = day(date).format("DD MMMM YYYY")

    const {fullname, jobTitle} = author.fields
    const { url } = author.fields.profilePicture.fields.file       

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-1">
        <picture>
          <source srcset={`${hero.fields.file.url}?fm=webp&w=900&fit=scale&h=450`} type="image/webp"></source>
          <img className="w-full" src={`${hero.fields.file.url}?w=900&fit=scale&h=450`}></img>
        </picture>        
        <div className="px-6 py-4" key={id}>
          <div className="font-bold text-xl mb-2">           
              <Link href="/posts/[id]" as={`posts/${slug}`} >
                <a>{title} </a>         
              </Link>
              <p className="text-sm mt-1 text-gray-600">{fdate}</p>
              <p className="text-gray-700 text-base">{standfirst}</p>
          </div>
          <div className="flex items-center">
            <picture>
              <source srcset={`${url}?fm=webp`} type="image/webp"></source>
              <img className="w-10 h-10 rounded-full mr-4" src={`${url}`} alt={`Avatar of ${fullname}`} />
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
  
  export default Post