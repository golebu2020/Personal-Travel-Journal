// 126, 168

export default function ListItem(props){
  return (
    <div className="list-item-parent">
      <div className="list-item">        
        <img className="list-item--coverImg" src={props.item.imageUrl} alt="" />
        <div className="list-item--texts">
          <div className="texts-location">
            <img src="./images/location.png" alt="" />
            <span className="list-item-country">{props.item.location.toUpperCase()}</span>
            <span className="list-item-google-map"><a href="https://www.google.com">View on Google Maps</a></span>
          </div>
          <h1 className="texts-title">{props.item.title}</h1>
          <div className="texts-date">
            <span>{props.item.startDate}</span>
            <span> - </span>
            <span>{props.item.endDate}</span>
          </div> 
          <p className="texts-desc">{props.item.description}</p>                  
        </div>     
      </div>
      <br />
      <br />
      <hr className="list-item-hr" />
    </div>
   
  )
}