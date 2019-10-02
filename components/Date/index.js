import day from 'dayjs'

const Date = (props) => {
	const fdate = day(props.dt).format('DD MMMM YYYY');
	return <p className="text-sm mt-1 text-gray-600">{fdate}</p>
}

export default Date
