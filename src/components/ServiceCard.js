import React, { useState } from 'react'



const ServiceCard = ({title, info, time, price, url }) => {

    const [isVisible, toggleInfo] = useState(false)
    return(   
        <div class="box">
            <div class="card" >
                <div class="card-content">
                    <p class="title">
                        {title}
                    </p>
                    <p class="button" onClick={() => toggleInfo(!isVisible)}>
                        Mer Info
                    </p>
                    {isVisible && 
                    <p className="subtitle">
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