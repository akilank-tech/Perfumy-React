import one from "../assests/images/perfume 1.avif"
import two from "../assests/images/perfume 2.avif"
import three from "../assests/images/perfume 3.avif"

function Products(){
  return(
    <div className="products">
      <div className="box">
        <img src={one} alt="perfume 1"></img>
        <p>Fogg Wood Extreme,Eau De Perfume, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={two} alt="perfume 2"></img>
        <p>Fogg Wood Extreme,Eau De Perfume, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="box">
        <img src={three} alt="perfume 3"></img>
        <p>Fogg Wood Extreme,Eau De Perfume, Long-lasting Perfume, 100ml</p>
      </div>
    </div>
  )
}
export default Products