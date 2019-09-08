import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../lib/api'

/*
    Use effect means no SSR therefore no content on view source etc.
 */

const BlogListing = (props) => {

	const { blogs } = props

	// const [ blogListing, setBlogListing ] = useState([]);
    // const { filter } = props;
	// async function getEntries(filter) {
    //     console.log('filter which came in:', filter)
	// 	const entries = await client.getEntries({
	// 		content_type: 'post',
	// 		'sys.id[ne]': filter
	// 	});
	// 	const { items } = entries;

	// 	const listing = items.map((b) => {
	// 		const { title, slug } = b.fields;
	// 		return { title, slug };
	// 	});

	// 	return listing;
	// }

	// useEffect(() => {		
	// 	async function getBlogs() {
	// 		const blogs = await getEntries(filter);
	// 		console.log('fetching blogs for sidebar...', blogs);
	// 		setBlogListing(blogs);
	// 	}
	// 	getBlogs();
	// }, [filter]);

	return (
		<div className="float-right bg-gray-200 p-4 m-5 w-1/4">
	    	<h2 className="uppercase mb-5 font-bold">More from the blog</h2>
			<ul className="list-none">
				{blogs.length > 0 ? (
					blogs.map((b) => {
						return (
							<li key={b.id} className="mb-2">
								<Link href="/posts/[id]" as={`${b.slug}`}>
									<a className="hover:underline">{b.title} </a>
								</Link>
							</li>
						);
					})
				) : null}
			</ul>
		</div>
	);
};

export default BlogListing;
