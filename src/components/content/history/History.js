import React from 'react';
import history_style from './History.module.css';
import spoon from '../../../assets/spoon.svg';
import menu_image from '../../../assets/menu.png';
import Items from './items/Items';

function History() {
    const items =[[
        {name:'Chapel Hill Shiraz',price:56,origin:'AU | Bottle'},
        {name:'Catena Malbee',price:58,origin:'AU | Bottle'},
        {name:'La Vieillw Rose',price:44,origin:'FR | 750 Ml'},
        {name:'Rhino Pale Ale',price:31,origin:'CA | 750 Ml'},
        {name:'Irish Guinness',price:26,origin:'IE | 750 Ml'},
    ],
    [
        {name:'Aperol Sprtiz',price:20,origin:'Aperol | Villa Marchesi Prosecco | Soda | 30 Ml'},
        {name:"Dark 'N' Stormy",price:16,origin:'Dark Rum | Ginger Beer | Slice Of Lime'},
        {name:'Daiquiri',price:10,origin:'Rum | Citrus Juice | Sugar'},
        {name:'Old Fashioned',price:35,origin:'Bourbon | Brown Sugar | Angostura Bitters'},
        {name:'Negroni',price:50,origin:'Gin | Sweet Vermouth | Campari | Orange Garnish'},
    ]
    ]
  return(
  <div className={history_style.history_grid}>
    <div className={history_style.history_head}>
        <div>
            <p>Menu That Fits You Platte</p>    
        </div>
        <div>
            <img src={spoon} alt='spoon'/>
        </div>    
        <div>
            <h1>Today's Special</h1>
        </div>       
    </div>
    <div className={history_style.history_items_left}>
        <Items name='Wine & Beer' items={items[0]}/>
    </div>
    <div className={history_style.history_items_image} >
        <img src={menu_image} alt="menu_image"/>
    </div>
    <div className={history_style.history_items_right}> 
        <Items  name='Cocktails' items={items[1]}/>
    </div>
    <div>
        <button> View More</button>
    </div>
  </div>
)}

export default History;
