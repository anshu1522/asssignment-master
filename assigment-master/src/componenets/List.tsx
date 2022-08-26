import React from 'react'
import {IonIcon} from "react-ion-icon";

interface IProps {
  crypto:{
    coinType:string
    img:string
    price:number 
    tvl:number 
    percent:number
  }[]
}
const List:React.FC<IProps> = ({crypto}) => {
  const renderList = ():JSX.Element[]=>{
    return crypto.map((crypto)=>{
     return (
      <div className="card">
      <div className="icon">
         <div className='__icon'>
          <img className='iconImg' src={crypto.img}/>
         </div>
      </div>
      <div className="content">
        <span className='spanTest'>{crypto.coinType}</span>
        <div className='priceDiv'>
          <h3>${crypto.price}</h3>
          <span className={(crypto.percent>0 ? 'green' : 'red')}>{crypto.percent}%</span>
        </div>
        <span  className='spanTest'>price</span>
        <div className='priceDiv'>
          <h3>${crypto.tvl}</h3>
        </div>
        <span className='spanTest'>TVL</span>
        <div className='popularDiv'>
        <img className='popularImg' src="2.png"/>
        <img className='popularImg' src="5.png"/>
        <img className='popularImg' src="3.png"/>
        </div>
        <span className='spanTest'>popular Pair</span>
       </div>
    </div>
     )
    })
  }
  return (
    <div className='mainConatiner'>
      <div className='trendingAsstes'>Trending Assetes</div>
        <div className="container">
        
          {renderList()}

        </div>

    </div>
  )
}

export default List