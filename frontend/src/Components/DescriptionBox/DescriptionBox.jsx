import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(133)</div>
            </div>
            <div className="descriptionbox-description">
                <p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It involves transactions between two parties, usually a business and a consumer, where the payment and delivery of products or services are conducted online. 
                    E-commerce relies on technology and digital platforms,
                    including websites, mobile apps, and social media to make buying and selling possible.</p>
                <p>Online shopping
                    Online marketplaces
                    Electronic payments
                    Online banking
                    Supply chain management
                    Inventory management
                    Data collection and security
                    Shipping services
                    E-commerce has been growing steadily since the first online transaction in 1994. It can drive value for retailers of all sizes by: Attracting more customers, Creating alternative revenue streams,
                    and Driving efficient sales.</p>
            </div>

        </div>
    )
}

export default DescriptionBox
