import React, {useEffect, useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import Listado from "../mocks/Listado";
import { useParams } from 'react-router-dom';





function ItemDetailContainer() {

    

    const [productos, setProductos] = useState([]);
    const { id } = useParams();


  
        useEffect(() => {
            const myPromise = new Promise((resolve, reject ) => {
               resolve(Listado)
            });
            myPromise.then(function (result) {
                let single = result.find(element => {return element.id == id});
                setProductos(single);
            });

        }, []);
 console.log(productos);

    return <>
   
                <ItemDetail productos={productos}/>

    </>
    
}
export default ItemDetailContainer;