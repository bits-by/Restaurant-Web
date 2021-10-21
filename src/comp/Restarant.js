import React, {useState} from 'react'
import "./style.css";
import Menu from "./menuapi.js"
import MenuCard from "./MenuCard.js"



const Restarant = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    // const [menuList, setMenuList] = useState(uniqueList);



    return (
        <> 
        <MenuCard menuData={menuData}/>
         
        </>
    );
}

export default Restarant;
