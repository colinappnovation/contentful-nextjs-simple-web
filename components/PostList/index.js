import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Post from '../post'

export const GET_POSTS = gql`
	{
		postCollection(order: [date_DESC], limit: 6) {
			items {
				sys {
					id
				}
				title
				date
				slug
				standfirst
				blogger {
					fullname
					jobTitle
					profilePicture {
						url
					}
				}
				hero {
					url
				}
			}
		}
	}
`

function PostList() {
	const { data, error, loading } = useQuery(GET_POSTS, {
		notifyOnNetworkStatusChange: true
	})

	if (error) return <div>Error loading posts...</div>
  	if (loading) return <div>Loading...</div>

	const { postCollection } = data

	return (
		postCollection.items.map((p) => <Post key={p.sys.id} {...p} />)
	)
}

export default PostList;

