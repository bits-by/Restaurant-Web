import React, {useState} from 'react'
import "./style.css";
import Menu from "./menuapi.js"
import MenuCard from "./MenuCard.js"
import MenuNavbar from './MenuNavbar';

const uniqueList = [
    ... new Set(
    Menu.map((curElem) => {
    return curElem.category;
    })
    ),
    
]

const Restarant = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <>           
        <MenuNavbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
         
        </>
    );
}

export default Restarant;
