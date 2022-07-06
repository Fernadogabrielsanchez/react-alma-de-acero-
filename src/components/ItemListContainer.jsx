import  {useEffect,useState } from 'react';
import ItemList from '../components/ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


 export const ItemListContainer =({greeting}) =>{

    const[products, setProducts] = useState([]);
    const[loaded,setLoaded]=useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryId]);


    const OnAdd = ()=>{
        console.log(`gracias por tu compra`) 
       }

    return(

        <>
         <h1>{greeting}</h1>
         {loaded ? <CircularProgress color="success" /> : <ItemList products={products} />}
        
        </>  

    )
}

export default ItemListContainer