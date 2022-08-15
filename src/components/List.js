import "./list.css";
import SingleColor from "./SingleColor";
const List = ({list}) => {
  return <div className="list">
    {list.map((color,index)=>{
      return <SingleColor {...color} index={index} hexColor={color.hex} key={index} />
    })}
  </div>;
};

export default List;
