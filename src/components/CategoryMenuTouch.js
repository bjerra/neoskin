import React, { useState } from 'react'
import { useCategoryData } from './CategoryData'

const Menu = ({ setData }) => {
    
    const categoryData = useCategoryData()
    const keywordData =[]
    const [tab, setTab] = useState(-1)

    return(
        <div className="category-menu">
            <div className="tabs">
             <ul>
                <li className={`${tab === 0 ? 'is-active' : ''}`}>     
                    <a onClick={() => setTab(tab === 0 ? -1 : 0)}>                                    
                        Kategori                           
                    </a>  
                    </li>
                    {/*
                    <li className={`${tab === 1 ? 'is-active' : ''}`}>
                        <a onClick={() => setTab(tab === 1 ? -1 : 1)}>                                    
                        Område                           
                        </a> 
                    </li>
                     */}
                </ul>
            </div>
            
            <aside className="menu">      
            {tab === 0  &&                 
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    categoryData.map(({title, services}, index) => {
                    return(                                        
                            <li key={index} >
                            <div className={`category-button`}                         
                                onClick={() => {
                                    setData({title, services})
                                    setTab(-1)
                                }}>                                    
                            {title}                        
 
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>                         
            }
             {tab === 1  &&        
               
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    keywordData.map(({title, services}, index) => {
                    return(                                        
                            <li key={index} >
                            <div className={`category-button`}                         
                                onClick={() => {
                                    setData({title, services})
                                    setTab(-1)
                                }}
                                >
                                    
                            {title}                        
                               
                           
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>   
            }   
            </aside>
        </div>
               
    )
}

export default Menu