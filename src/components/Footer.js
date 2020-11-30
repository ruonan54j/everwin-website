import { NavLink } from 'react-router-dom'

import logo from '../images/logo.png'
import phone from '../images/phone.png'
import whatsapp from '../images/whatsapp.png'
import mail from '../images/mail.png'
import wechat from '../images/wechat.png'
import skype from '../images/skype.png'

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <NavLink to="/">
                        <img src={logo} alt='logo' width='200px'/>
                    </NavLink>
                </div>
                <div className="col">
                    <h1>Go to</h1>
                    <div className='footer-link'>
                        <NavLink to="/">
                            About
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <NavLink to="/">
                            Get Quote
                        </NavLink>
                    </div>
                </div>
                <div className="col">
                    <h1>Services</h1>
                    <div className='footer-link'>
                        <NavLink to="/">
                            Shipping
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <NavLink to="/">
                            Warehouse and FullFillment
                        </NavLink>
                    </div>
                    <div className='footer-link'>
                        <NavLink to="/">
                            Business Solutions
                        </NavLink>
                    </div>
                </div>
                
                <div className="col">
                    <h1>Contacts</h1>
                    <div className='row no-gutters'>
                        <img src={phone} height='20px' className='contact-img'/>
                        <p className='contact-item'>86-21-52868600 ext 807</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={mail} height='20px' className='contact-img'/>
                        <p className='contact-item'>benjamin@evertowin.com</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={whatsapp} height='20px' className='contact-img'/>
                        <p className='contact-item'><strong>WhatsApp </strong>86-13918261314</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={skype} height='20px' className='contact-img'/>
                        <p className='contact-item'><strong>Skype </strong>benjamin.cjm</p>  
                    </div>
                    <div className='row no-gutters'>
                        <img src={wechat} height='20px' className='contact-img'/>
                        <p className='contact-item'><strong>WeChat </strong>jiaming_1230</p>  
                    </div>
                </div>
            </div>
            <div id='address-footer'>
                <p>
                    Address: Regent Sunshine Building - Rm 12A10, No. 19 Wu Ning
                    Road, Shanghai, 200042, China
                </p>
            </div>
        </div>
    )
}

export default Footer
