import "./style.css";

import star from "../../image/star.png";

const Card = (props) => {
  console.log(props.coverImg)
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  const image = props.coverImg

  return (
   
      <div className="card">
          {
              badgeText && 
              <div className="card--badge">{badgeText}</div>
          }
          <img 
              src={`../../image/${image}`} 
              
              className="card--image" 
              alt={props.coverImg}
          />
          <div className="card--stats">
              <img src={star} className="card--star"  alt="Star"/>
              <span>{props.stats.rating}</span>
              <span className="gray">({props.stats.reviewCount}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <p className="card--title">{props.title}</p>
          <p className="card--price">
              <span className="bold">From ${props.price}</span> / person
          </p>
      </div>
  )
};
export default Card;
