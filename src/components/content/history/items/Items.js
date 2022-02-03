import React from 'react';
import history_style from '../History.module.css';
function Items({name,items}) {

  return(
  <div>
      <div className={history_style.single_items_title}>{name}</div>
      <div>
        {items.map((item,index)=>(<div key={index}  className={history_style.single_items_body}>
            <div  className={history_style.single_items_body_top}>
              <div className={history_style.single_items_names}>
                <h3>{item.name}</h3>
      
              </div>
              <div className={history_style.single_items_contents} >
                <div className={history_style.single_items_margin}></div>
                <div className={history_style.single_items_price}>
                  ${item.price}
                </div>
              </div>
            </div>
            <div>
              <p>{ item.origin}</p>
            </div>
        </div>)
        )}

      </div>
  </div>
)}

export default Items;

