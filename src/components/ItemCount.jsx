import React , {useState} from 'react'

const ItemCount = ({stock ,OnAdd, initial=1 }) => {
    const [cuenta, setcuenta] = useState(initial)
const sumar =()=>{
    if (cuenta<stock){
        setcuenta(cuenta + 1)
    }
}
   const restar = ()=>{
    if(cuenta>stock){
        setcuenta(cuenta - 1)
    }
   }


  return (
    <>
    <div>
        <button onClick={restar}>-</button>
        <p>{cuenta}</p>
        <button onClick={sumar}>+</button>
    </div>
    <button onClick={OnAdd}>comprar carrito</button>
    </>

  )
}

export default ItemCount