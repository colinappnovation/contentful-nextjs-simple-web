
const Author = ({fullname, jobTitle, profilePicture, profilepicture, jobtitle}) => {
  
    let img = ''
    if (profilepicture !== undefined) {
      // Prismic
      img = profilepicture.url
    } else {
      // Allow apollo and/or REST API usage
      img = profilePicture.url || profilePicture.fields.file.url
    }

    return (
        <div className="flex items-center">
            <picture>
              <source srcSet={`${img}?fm=webp`} type="image/webp"></source>
              <img className="w-10 h-10 rounded-full mr-4" src={`${img}`} alt={`Avatar of ${fullname}`} />
            </picture>            
            <div className="text-sm">
              <p className="text-gray-500 text-sm">{fullname}</p>
              <p className="text-gray-500 text-sm mt-0">{jobTitle || jobtitle}</p>
            </div>
          </div>
    )
 
}

export default Author