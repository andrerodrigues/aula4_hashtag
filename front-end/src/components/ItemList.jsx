import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({title, items, itemsArray, path, idPath}) => {
    let titlePopular = `${title} populares`;
   // let group5 = (<><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/></>);
    //let group10 = (<><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/><SingleItem/></>); 
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const finalItems  = isHome ? items : Infinity;

    return (
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>{titlePopular}</h2>
                
                {isHome ? (<Link to={path} className='item-list__link'>Mostrar tudo</Link>) : (<></>)}
                
            </div>

            <div className="item-list__container">
                {/* {items === 5 ? group5:group10}  */}
                {itemsArray
                .filter((currentValue, index) => index < finalItems)
                .map((currObj, index) => (
                    <SingleItem 
                    idPath={idPath}
                    {...currObj}
                    key={`${title}-${index}`}/> 
                ))}
            </div>
        </div>
    )
}

export default ItemList;