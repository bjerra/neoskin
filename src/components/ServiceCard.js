import React, { useState } from 'react'



const ServiceCard = ({title, info, time, price, url }) => {

    const [isVisible, toggleInfo] = useState(false)
    return(   
        <div class="box">
            <div class="card" onClick={() => toggleInfo(!isVisible)}>
                <div class="card-content">
                    <p class="title">
                        {title}
                    </p>
                    {isVisible && 
                    <p className="subtitle anim">
                        {info}
                    </p>
                    }
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <span>
                        {time}
                    </span>
                    <span>
                        {price}
                    </span>
                    </p>
                    <p class="card-footer-item">
                    <span>
                    <a href={url} target="_blank">BOKA</a>
                    </span>
                    </p>
                </footer>
                </div>
                
        </div>
    )
}

export default ServiceCard