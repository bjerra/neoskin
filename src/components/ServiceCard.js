import React from 'react'

const ServiceCard = ({title, info, time, price, url }) => (   
    <div class="box">
        <div class="card">
            <div class="card-content">
                <p class="title">
                    {title}
                </p>
                <p class="subtitle">
                    {info}
                </p>
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
                   <a href={url}>BOKA</a>
                </span>
                </p>
            </footer>
            </div>
            
    </div>
)

export default ServiceCard