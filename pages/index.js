import Post from '../components/post';
import Layout from '../components/layout';
import api from '../lib/api'
// import { useEffect, useState } from 'react';

/*
  TAKE NOTE:
    Using React Hooks has the sideaffect of bypassing SSR capabilities of Next.js! 
    So the page would be delivered, then hydrated client side ALWAYS!
*/

const HomePage = (props) => {
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

	return (
		<Layout>
			<h1 className="uppercase text-4xl text-gray-800">Insights</h1>
			<p className="text-xl mb-5 text-gray-600">
				To understand the future you have to be grounded in the now. We guide our clients as their industries
				evolve with the changing digital landscape.
			</p>
			<div className="flex flex-wrap mb-4">
				{props.posts.length > 0 ? (
					props.posts.map((p) => (
						<Post
							title={p.fields.title}
							date={p.fields.date}
							slug={p.fields.slug}
							hero={p.fields.hero}
							standfirst={p.fields.standfirst}
							author={p.fields.blogger}
							key={p.sys.id}
						/>
					))
				) : null}
			</div>
		</Layout>
	);
};

// STANDARD APPROACH using getInitialProps
// Intentionally left here for example.

HomePage.getInitialProps = async () => {
   return {
     posts: await api.getPosts()
   }
}

export default HomePage;
