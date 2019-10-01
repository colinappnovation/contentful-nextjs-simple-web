import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Post from '../post';

export const GET_POSTS = gql`
	{
		postCollection(order: [date_DESC], limit: 10) {
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
`;

function PostList() {
	const { data } = useQuery(GET_POSTS, {
		notifyOnNetworkStatusChange: true
	});
	if (data && data.postCollection) {
		return data && data.postCollection.items.map((p) => <Post key={p.sys.id} {...p} />);
	}
	return <div>Loading...</div>;
}

export default PostList;

