import Layout from '../components/layout'
import api from '../lib/api'

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic((props) => import('../components/map'), {
    ssr: false
});

import Head from 'next/head'


const ContactUs = (props) => {
	return (
		<Layout>
			<Head>
				<link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
			</Head>
			<h1 className="text-6xl">How will your business reach ahead?</h1>
			<p className="text-xl mb-5 text-gray-600">
				Our local teams are working today to create the business of tomorrow. Get in touch and let's find out
				how we transform your industry, together.
			</p>
			<div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
      { props.locations.map(l => (

	
			<div key={l.name} className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
				<div className="mb-8">					
					<div className="text-gray-900 font-bold text-xl mb-2">{l.name}</div>
					<p>{l.address}</p>
					<p>{l.telephone}</p>
					</div>
				</div>

	  ))}
	  </div>
		<DynamicComponentWithNoSSR offices={props.locations} />
		</Layout>
	);
};

ContactUs.getInitialProps = async () => {
	const locations = await api.getLocations();
	return {
		locations: locations.items.map((l) => {
			return l.fields
		})
	};
};

export default ContactUs;
