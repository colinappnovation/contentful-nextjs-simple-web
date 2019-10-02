import Layout from '../components/layout';
import PostList from '../components/PostList';
import { withApollo } from '../lib/apollo'

const HomePage = (props) => {
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
};

export default withApollo(HomePage);
