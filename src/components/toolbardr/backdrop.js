import React, { Component } from 'react'
import './backdrop.css'

const Backdrop = props => (
     <div className="backdrop" onClick={props.isBackDrop}/>
)

export default Backdrop;