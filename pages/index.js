// import Post from '../components/post';
import Layout from '../components/layout';
import withData from '../lib/apollo';
// import PostList from '../components/PostList';

import dynamic from 'next/dynamic'

const PostList = dynamic(
  () => import('../components/PostList'),
  { ssr: true }
)

// REST API BASED
// import api from '../lib/api'

// HOOKS EXAMPLE
// import { useEffect, useState } from 'react';

/*
  TAKE NOTE:
    Using React Hooks has the sideaffect of bypassing SSR capabilities of Next.js! 
    So the page would be delivered, then hydrated client side ALWAYS!
*/

const HomePage = withData((props) => {
	// useState React Hook for functional components
	// const [ posts, setPosts ] = useState([]);

	// async function fetchEntriesForContentType(content_type) {
	//   // ES6 object shorthand feature
	// 	const entries = await client.getEntries({ content_type });
	// 	if (entries.items) return entries.items;
	// 	console.log(`Error getting Entries for ${contentType.name}.`);
	// }

	// // React Hooks in action! Without the [] at end of function as second param, infinite loop occurs!
	// useEffect(() => {
	// 	async function getPosts() {
	// 		const allPosts = await fetchEntriesForContentType('post');
	// 		console.log('Fetching records for homepage');
	// 		setPosts([ ...allPosts ]);
	// 	}
	// 	getPosts();
	// }, []);

	//   const { data } = useQuery(GET_POSTS, {
	// 	notifyOnNetworkStatusChange: true
	//   });

	return (
		<Layout>
			<h1 className="uppercase text-4xl text-gray-800">Insights</h1>
			<p className="text-xl mb-5 text-gray-600">
				To understand the future you have to be grounded in the now. We guide our clients as their industries
				evolve with the changing digital landscape.
			</p>
			<div className="flex flex-wrap mb-4">
				<PostList />
			</div>
		</Layout>
	);
});

// STANDARD APPROACH using getInitialProps
// Intentionally left here for example.

// HomePage.getInitialProps = async () => {
//    return {
//      posts: await api.getPosts()
//    }
// }

export default HomePage;
