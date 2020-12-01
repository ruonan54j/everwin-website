import shipped from '../../images/shipped-icon.png'
import warehouse from '../../images/warehouse-icon.png'
import business from '../../images/business-icon.png'

function ServiceIntro() {
    return (
        <div id='service-landing'>
          <div className='d-flex justify-content-center'>
            <div className='service-box'>
              <img src={shipped} height='100px'/>
              <h2>SHIPPING</h2>
              <p>143 countries</p>
            </div>
            <div className='service-box'>
              <img src={warehouse} height='80px' style={{marginBottom:'1em'}}/>
              <h2>WAREHOUSE AND FULLFILLMENT</h2>
            </div>
            <div className='service-box'>
              <img src={business} height='80px' style={{marginBottom:'1em'}}/>
              <h2>Business solutions</h2>
              <p>24/7 support</p>
            </div>
          </div>
        </div>

    )
    
}

export default ServiceIntro