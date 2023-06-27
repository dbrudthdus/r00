const HelloWorld = ({product}) => {

	const {pno, pname, price} = product || {pno:-1, pname:'', price:0}

	return ( 
	<div>
		<div>{pno}</div>
		<div>{pname}</div>
		<div>{price}</div>
		{price > 5000 ? <div>고렴이</div> : <div>저렴이</div>}
	</div>  
	);
}
 
export default HelloWorld;