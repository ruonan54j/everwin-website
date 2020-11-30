import React, { useState, useEffect } from 'react'
import GetQuoteBox from './GetQuoteBox'
import HeaderImage from './HeaderImage'
import ServiceNav from './ServiceNav'

function Services() {
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (window.location.href.includes('service-shipping')) {
            setPage(0)
        } else if (window.location.href.includes('about')) {
            setPage(1)
        } else if (window.location.href.includes('service')) {
            setPage(2)
        }
    }, [])

    return (
        <div>
            <HeaderImage classStyle="shipping-header" text="SHIPPING" />
            <div className="service-page row">
                <div className="service-L">
                    <GetQuoteBox />
                    <HeaderImage />
                    <ServiceNav />
                </div>

                <div className="service-R">
                    <h1>
                        Make your trusted ocean freight forwarding partner.{' '}
                    </h1>
                    <p>
                        Everwin is a trusted and dependable partner for
                        international ocean freight forwarding by its valued
                        clients. Through our global transportation network and
                        overseas logistics partners, we ship all commodities -
                        including temperature controlled and dangerous goods. We
                        offer charters for very large or specialty cargo,
                        provide 24 hour customer support team, and much more.{' '}
                        <br />
                        <br />
                        Everwin provides worldwide logistical services to
                        facilitate the worldwide shipment of your sea and air
                        freight. Below are some of the different areas we
                        service for shipping your cargo by sea and air..... (to
                        be filled)
                    </p>
                    <div className="row no-gutters">
                        <div className="col">
                            <h1>Courier</h1>
                            <ul>
                                <li>
                                    Everwin courier , China – Canada traffic
                                </li>
                                <li>
                                    Fedex, UPS, DHL, integrate service provider
                                    accounts.
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Mailing</h1>
                            <ul>
                                <li>
                                    Post service with coordinate multiple States
                                </li>
                                <li>Posts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col">
                            <h1>Customs brokage</h1>
                            <ul>
                                <li>
                                    Professional team with decades experience of
                                    liaison with Customs
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Local transport</h1>
                            <ul>
                                <li>
                                    Dedicated Service – Trucking, Van, Motor
                                </li>
                                <li>FTL</li>
                                <li>LTL</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services
