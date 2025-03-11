import React, { useState } from 'react'

const App = () => {
 
 
  const [red,setRed]=useState('')
  const [yellow,setYellow] =useState('')
  const [green,setGreen]=useState('bg-green-600')

  const [isRedButtonClicked,setIsRedButtonClicked] =useState(false);
  const [isYellowButtonClicked,setIsYellowButtonClicked]= useState(false);
  const [isGreenButtonClicked,setIsGreenButtonClicked]= useState(true);
 
  return (
    
    <div className={`flex flex-col min-h-screen items-center justify-center bg-gradient-to-tl from-zinc-900 to-zinc-700  text-white  `}>
      <h1 className='text-3xl font-bold mb-5 text-blue-500'>Traffic Light</h1>
      <div className='flex flex-col justify-evenly items-center bg-zinc-700  w-44 h-100 rounded-md'
        >
        <button className={` ${isRedButtonClicked?red:'bg-zinc-800'} p-1 rounded-full w-20 h-20 cursor-pointer`} onClick={()=>{
          
       
        
          setRed('bg-red-600')
          setIsRedButtonClicked(!isRedButtonClicked)
          setIsGreenButtonClicked(false);
          setIsYellowButtonClicked(false);
        }}>
          
          </button>
        <button className={` ${isYellowButtonClicked?yellow:'bg-zinc-800'} p-1 rounded-full w-20 h-20 cursor-pointer`} onClick={()=>{
          
          
        
          setYellow('bg-yellow-600')
          setIsYellowButtonClicked(!isYellowButtonClicked)
          setIsRedButtonClicked(false);
          setIsGreenButtonClicked(false);
        }}>

        </button>
        <button className={`  ${isGreenButtonClicked?green:'bg-zinc-800'} p-1 rounded-full w-20 h-20 cursor-pointer`} onClick={()=>{
          
       
        
          setGreen('bg-green-600')
          setIsGreenButtonClicked(!isGreenButtonClicked)
          setIsRedButtonClicked(false);
          setIsYellowButtonClicked(false);
          }}>

          </button>
      </div>
          <h1 className=
          {`${isRedButtonClicked && 'text-red-400' || isYellowButtonClicked && 'text-yellow-400' || isGreenButtonClicked && 'text-green-400'}
           mt-3 text-xl`}>
          {isRedButtonClicked &&`It's the Red Signal!!` || isYellowButtonClicked && `It's the Yellow Signal` || isGreenButtonClicked && `It's the Green Signal`}</h1>
         
         <h1 className='text-xl text-violet-400'>{!isRedButtonClicked && !isYellowButtonClicked && !isGreenButtonClicked && 'No Signal detected!!'}</h1>
    </div>
  )
}

export default App
