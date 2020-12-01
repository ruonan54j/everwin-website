function HowTo() {
    return (
        <div id='how-it-works-landing' className='d-flex justify-content-center'>
          <div id='how-it-works-LC'>
          <form id="how-form">
            <div className='row'>
              <div className="form-group col">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" />
            </div>
              <div className="form-group col">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" />
            </div>
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label for="phone">Phone</label>
                <input type="text" className="form-control" id="phone" />
            </div>
            <button type="submit" className="theme-btn form-btn">GET QUOTE</button>
            </form>
          </div>
          <div id='how-it-works-RC'>
            <h1 id='how-it-works-title'>HOW IT WORKS</h1>
            <div className='row instruction'>
              <h1 className='col-2'>01:</h1> 
              <h2 className='col-10'>Fill out the form.</h2> 
            </div>
            <div className='row instruction'>
              <h1 className='col-2'>02:</h1> 
              <div className='col-10'>
                <h2>Get an instant quote.</h2>
                <p>
                  Once you enter your shipment information on our platform, you’ll be able to compare discounted shipping rates and transit times from different carriers on one page. You can also access other shipping services like air freight, Ocean freight, courier services, and other specialized shipping services.
                </p>
              </div> 
              
            </div>
            <div className='row instruction'>
              <h1 className='col-2'>03:</h1> 
              <h2 className='col-10'>Get instant message updates and one-on-one hospitality services.</h2> 
            </div>
          </div>
        </div>
      
    )
}

export default HowTo