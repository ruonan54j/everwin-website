import whoPic from '../../images/who-we-are.png'

function WhoWeAre() {
    return (
        <div id='who-we-are'>
            <div className="row">
                <div className="col-md" id='who-we-are-L'>
                    <h1>WHO WE ARE</h1>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company based in Shanghai, China,
                        but operates overseas for international projects.
                    </p>

                    <button className='theme-btn'>LEARN MORE</button>
                </div>
                <div className="col-md" id='who-we-are-R'>
                    <img src={whoPic} width='80%' />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre
