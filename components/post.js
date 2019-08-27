import Link from 'next/link'

function Post({ id, title, slug, hero}) {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-1">
        <img class="w-full" src={`${hero.fields.file.url}?w=900&fit=scale&h=450`}></img>
        <div className="px-6 py-4" key={id}>
          <div className="font-bold text-xl mb-2">           
              <Link href="/posts/[id]" as={`posts/${slug}`} >
                <a>{title} </a>         
              </Link>
              <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Post