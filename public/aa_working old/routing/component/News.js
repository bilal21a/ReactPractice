import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

export default function News(props) {
  let topic = useParams();
  
  return <>
    <Navbar/>
    
    <h1>its news feed from channel{props.channel}</h1>
    <h2>and topic: { topic.param}</h2>
  </>;
}
