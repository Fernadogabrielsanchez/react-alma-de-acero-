import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/header/NavBar'
import ItemListContainer from'./components/ItemListContainer'

const App = () => {
  return(
    <>
     <NavBar />
     <ItemListContainer
     greeting= {'alma de acero'} />
    </>
  )
    
  }


export default App;
