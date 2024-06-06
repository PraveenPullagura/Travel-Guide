import './index.css'

const TravelItem = props => {
  const {travelItemDetails} = props
  const {imageUrl, name, description} = travelItemDetails

  return (
    <li className="list-container">
      <div className="card-container">
        <img src={imageUrl} alt={name} className="image" />
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelItem
