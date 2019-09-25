import Layout from '../components/layout'
import api from '../lib/api'

const ContactUs = (props) => {
  console.log(props)
	return (
		<Layout>
			<h1 className="text-6xl">How will your business reach ahead?</h1>
			<p>
				Our local teams are working today to create the business of tomorrow. Get in touch and let's find out
				how we transform your industry, together.
			</p>
			<div className="max-w-sm w-full lg:max-w-full lg:flex mt-5">
      { props.locations.map(l => (

	
			<div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
				<div className="mb-8">					
					<div className="text-gray-900 font-bold text-xl mb-2">{l.name}</div>
					<p>{l.address}</p>
					<p>{l.telephone}</p>
					</div>
				</div>

	  ))}
	  </div>
		
		</Layout>
	);
};

ContactUs.getInitialProps = async () => {
	const locations = await api.getLocations();
	return {
		locations: locations.items.map((l) => {
			const { name, address, telephone } = l.fields;
			return { name, address, telephone };
		})
	};
};

export default ContactUs;
