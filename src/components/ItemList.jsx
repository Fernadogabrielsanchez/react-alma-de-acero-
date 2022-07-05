import Item from '../components/Item'


const ItemList =({products}) =>{
    return(
        <div>
            {products.map((product)=>(
                <Item key={product.id} product={product}/>
            ))}
        </div>
    );
};
export default ItemList