import "./Details.css";
import { useState } from "react";



const Details = ({ item }) => {


  const [set, setState] = useState(true);
  const handleClick = () => {
    setState(!click);
  };


  
  return (
    <div className="cont" onClick={() => handleClick()}>
      <div className="cont-img">
        <img src={item.profile} alt="img" />
      </div>
      <div className="detail">
        <p>{item.username}</p>
        <p>{ set ? item.email :item.number}</p>
      </div>
    </div>
  );
};

export default Details;