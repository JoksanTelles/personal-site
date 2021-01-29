import React from 'react'

const CardLevel = ( { Title, Category, Description, CSS, SkillLevel } ) => (
    <div className="CardLevel">

        <div className="levelbox">
            <span className="percentage">{ SkillLevel }%</span>
            <svg viewBox="0 0 36 36">
                <path className="base"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"    
                />
                
                <path className={ CSS }
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
        </div>

        <div className="content">
            <h4 className="title">{ Title }</h4>
            <span className="badge">{ Category }</span>
            <p className="description">{ Description }</p>
        </div>

    </div>
)

export default CardLevel