import React, { useState } from 'react';

import './App.css';
import List from './componenets/List';


interface IState {
  crypto:{
    coinType:string
    img:string
    price:number 
    tvl:number 
    percent:number
  }[]
}

function App() {
  const [crypto,setCrypto] = useState<IState["crypto"]>([{
    coinType:'Bitcoin(BTC)',
    img:'11.png',
    price:24512,
    tvl:78500,
    percent:10
  },
  {
    coinType:'Ethereium(ETH)',
    img:'2.png',
    price:94512,
    tvl:60000,
    percent:-12.32
  },
  {
    coinType:'Riple(RIP)',
    img:'3.png',
    price:7412,
    tvl:50140,
    percent:-11.23
  },
  {
    coinType:'Neo(NEO)',
    img:'4.png',
    price:2512,
    tvl:40000,
    percent:10
  },
  {
    coinType:'Monero(MON)',
    img:'5.png',
    price:4412,
    tvl:47580,
    percent:30
  }


])

  return (
    <div className="App">
        <List crypto={crypto} />
    </div>
  );
}

export default App;
