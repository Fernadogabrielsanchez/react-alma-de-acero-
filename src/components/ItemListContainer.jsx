
import  {useState,useEffect } from 'react'
import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList'
import CircularProgressWithLabel from '@mui/material/CircularProgress'

const ItemListContainer =({greeting}) =>{

    const[products, setProducts] = useState([]);
    const[error, setError]= useState(false);
    const[loaded,setLoaded]=useState(true);

    useEffect(()=>{
        const getProducts= async()=>{
            try{
                const response= await fetch('https://fakestoreapi.com/products');
                const data= await response.json();
                setProducts(data);
            }
            catch(err){
                setError(true);
                console.err(err);
            }
            finally{
                setLoaded(false)
            }
        }
        getProducts();
    },[]);

    const OnAdd = ()=>{
        console.log(`gracias por tu compra`) 
       }

    return(

        <>
         <h1>{greeting}</h1>
         {loaded ? <CircularProgressWithLabel color="dark"/>:<ItemList products={products}/>}
        <ItemCount stock = {5} OnAdd={OnAdd} />
        </>
       
        

    )



}
export default ItemListContainer