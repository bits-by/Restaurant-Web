import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <div>
                <section className="main-card--container">
                {menuData.map((curElem) => {
                    //destructuring.........
                    const {id, name, description, image, category} = curElem;

                    return(

                        <div>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <span className="card-number subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Delectus sed omnis quo in assumenda veniam.</p>
                                    <div>
                                        <img src="images" alt="image" className="card-media" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                    )
                })}

                </section>
        </div>
    )
}

export default MenuCard
