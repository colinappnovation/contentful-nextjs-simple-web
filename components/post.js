import Link from 'next/link'

function Post({ id, title, date, slug }) {
    return (
      <div className="container" key={id}>
        <div className="text">
          <h2>
            <Link href="/posts/[id]" as={`posts/${slug}`} >
              <a>{title} </a>         
            </Link>
          </h2>
          <p>DATE: {date}</p>
        </div>
        <style jsx>{`
            div.text {
                border-bottom: 2px solid #ccc
            }
      `}</style>
      </div>
     
    )
  }
  
  export default Post