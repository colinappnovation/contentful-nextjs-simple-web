import { withData } from 'next-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// can also be a function that accepts a `context` object (SSR only) and returns a config
const httpLink =
	new createHttpLink({
		// Additional fetch() options like `credentials` or `headers`
		uri: 'https://graphql.contentful.com/content/v1/spaces/gb95exrubjhf/environments/master' // Server URL
	})


const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.ACCESS_TOKEN}`
		}
	}
});

const config = {
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
}


export default withData(config);
