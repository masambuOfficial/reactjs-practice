import PropCard from './PropCard';
import './prop.css';
import { Link } from 'react-router-dom';

function Prop() {
  return (
    <div>
        <section id="header" className='header'>
            <h1>Company</h1>
            <p>We specialize in something</p>
          </section>
          <div>
          <PropCard 
            icon="bx bxs-building-house" 
            heading="About" 
            paragraph={
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, nesciunt ducimus animi voluptate unde voluptatibus delectus quibusdam debitis possimus voluptas quam quo labore optio saepe, commodi sit? Modi, architecto nulla. <Link to="/about"
                >Read More</Link>
              </span>
            }
          />
          </div>

          <div style={{backgroundColor:"#ededed"}}>  
          <PropCard 
            icon="bx bx-globe" 
            heading="Our Values" 
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, nesciunt ducimus animi voluptate unde voluptatibus delectus quibusdam debitis possimus voluptas quam quo labore optio saepe, commodi sit? Modi, architecto nulla."
          />
          </div>
          <PropCard 
            icon="bx bxs-rocket" 
            heading="Our Mission" 
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, nesciunt ducimus animi voluptate unde voluptatibus delectus quibusdam debitis possimus voluptas quam quo labore optio saepe, commodi sit? Modi, architecto nulla."
          />
    </div>
  )
}

export default Prop