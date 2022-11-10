// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
	const item = props.item
    const buttonFunction = props.buttonFunction
    return (
		<div>
        <div>{item.name}</div>
        <div>{item.description}</div>
        <div>{item.price}</div>
        <div>{buttonFunction(item)}</div></div>
        
	);
}
