import React,{Fragment} from 'react'
import "./DataItem.css"

//displaying each data item
const DataItem = ({item,imageData,ind}) => {
    return (
          <Fragment >
            <div className=" col-sm-6 col-md-4 card_item">
                  <div>
                    <p>Name : <strong>{item.name}</strong></p>
                    <p>Style : <i>{item.style}</i></p>
                    <p>ABV : {item.abv}</p>
                    <p>IBU : {item.ibu.length===0?0:item.ibu}</p>
                    <p>Ounces : {item.ounces}</p>
                 </div>
                       
                
                 <img src={imageData[ind].image} alt=""/>
                 
            </div>
          </Fragment>
            
       
    )
}

export default DataItem
