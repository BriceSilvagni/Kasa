import React from 'react'
import { useState, useRef } from 'react'
import Arrow from '../../assets/images/Arrow.svg'

function Collapse({ collapseClass, title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    const [toggle, setToggle] = useState(false)
    const modularRef = useRef()

    return (
        <div className={collapseClass + 'collapse-container'}>
            <button
                className="headband"
                type="button"
                onClick={() => setIsOpen(!isOpen) & setToggle(!toggle)}
            >
                <h2 className="headband-title about">{title}</h2>
                <div className="headband-arrow-container">
                    <img
                        className="toggle"
                        src={Arrow}
                        alt="Boutton d'ouverture fermeture"
                        style={
                            toggle
                                ? { transform: 'rotate(-180deg)' }
                                : { transform: 'rotate(0deg)' }
                        }
                    ></img>
                </div>
            </button>
            <div
                className="modular"
                ref={modularRef}
                style={
                    isOpen
                        ? { height: modularRef.current.scrollHeight + 'px' }
                        : { height: '0px' }
                }
            >
                <div className="content">{description}</div>
            </div>
        </div>
    )
}

export default Collapse
