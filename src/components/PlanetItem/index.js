// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  // console.log(planetDetails)
  const {name, imageUrl, description} = planetDetails
  // console.log(name, imageUrl, description)

  return (
    <div className="planet-container">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
