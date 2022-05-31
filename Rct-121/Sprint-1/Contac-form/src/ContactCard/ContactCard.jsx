import { data } from "../Data/Data";
import Details from "../Details/Details";
import "./ContactCard.css";


const Contact = () => {

  return (
    <div  className = "card">
      {data.map((item) => (
        <div key={item.id}>
          <Details item={item}/>
        </div>
      ))}
    </div>
  );
};

export default Contact