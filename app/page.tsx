'use client'
import { useState } from 'react';
import { useStore } from '../store';

export default function Home() {

  const { bears, increasePopulation, removeAllBears, test } = useStore();


  return (
    <div>
      <h1>Home Page</h1>
      <h1>{bears} bears around here ...</h1>
      <button onClick={increasePopulation} className='mr-5 bg-rose-500'>Increase Population</button>
      <button onClick={increasePopulation} className='mr-5 bg-rose-500'>-1</button>
      <button onClick={removeAllBears} className='bg-blue-500'>Remove All Bears</button>
    </div>
  )
}
