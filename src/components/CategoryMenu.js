import React, { useState } from 'react'
import { useCategoryData } from './CategoryData'
import { useKeywordData } from './KeywordData'

const Menu = ({ setData }) => {
    
    const categoryData = useCategoryData()
    const keywordData = useKeywordData()

    const [tab, setTab] = useState(0)
    const [currentItem, setitem] = useState("");

    return(
        <div className="category-menu">     
        {/*
            <div className="tabs">
             <ul>
                <li className={`${tab === 0 ? 'is-active' : ''}`}>     
                    <a                                                
                        onClick={() => setTab(0)}>                                    
                        Kategori                           
                    </a>  
                    </li>
                    <li className={`${tab === 1 ? 'is-active' : ''}`}>
                        <a                                       
                        onClick={() => setTab(1)}>                                    
                        Område                           
                        </a> 
                    </li>
                </ul>
            </div>
        */}
            <aside className="menu">      
            {tab === 0 ? (                              
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    categoryData.map(({title, services}, index) => {
                    return(                                        
                            <li key={index} >
                            <div className={`category-button ${currentItem === title ? 'is-active' : ''}`}                         
                                onClick={() => {
                                    setData({title, services})
                                    setitem(title)
                                }}>                                    
                            {title}                        
 
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>    
            ) : (             
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    keywordData.map(({title, services}, index) => {
                    return(                                        
                            <li key={index} >
                            <div className={`category-button ${currentItem === title ? 'is-active' : ''}`}                         
                                onClick={() => {
                                    setData({title, services})
                                    setitem(title)
                                }}
                                >
                                  
                            {title}                                       
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>   
            ) }   
            </aside>
        </div>
               
    )
}

export default Menu

