import React, {useEffect, useState} from 'react';
import './App.css';


function Item({match}) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
      images:{}
  });

  const fetchItem = async () => {
      const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
      const item = await data.json();
      console.log(item);
      setItem(item.data.item);
  }
  return (
    <div >
       <h1>{item.description}</h1>
       <img src={item.images.icon} alt="" />
    </div>
  );
}

export default Item;
