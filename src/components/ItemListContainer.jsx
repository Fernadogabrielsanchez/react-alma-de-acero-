import ItemCount from '../components/ItemCount'


const ItemListContainer =({hola}) =>{
    const OnAdd = ()=>{
        console.log(`gracias por tu compra`) 
       }

    return(

        <>
         <h1>{hola}</h1>
        <ItemCount stock = {5} OnAdd={OnAdd} />
        </>
       
        

    )
}
export default ItemListContainer