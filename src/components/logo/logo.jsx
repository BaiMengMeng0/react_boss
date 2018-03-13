import React from 'react'
import jobImg from './job.png'
import './logo.less'
export default class Logo extends React.Component{
  render(){
    return(
      <div className='logo_container'>
        <img src={jobImg} alt="logo"/>
      </div>
    )
  }
}