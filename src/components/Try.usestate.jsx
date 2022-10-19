import { useState } from 'react';

export default function TryUsestate() {
  const [color, setColor] = useState('Green');

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <button className='bg-white' onClick={() => setColor('Blue')}>Blue</button>
      <h1 className='text-white'>The Color Is {color}</h1>
    </div>
  )
}