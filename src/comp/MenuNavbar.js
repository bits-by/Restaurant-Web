import React from 'react'

const MenuNavbar = ({ filterItem ,menuList}) => {
    return (
        <div>
            <nav className="menu-navbar">
                <div className="btn-group">

                {
                    menuList.map((curElem) => {
                        return(
                        <button className="btn-group__item" onClick={()=> filterItem(curElem)}>{curElem}</button>
                        )
                    })
                }
                </div>
            </nav>
        </div>
    )
}

export default MenuNavbar
