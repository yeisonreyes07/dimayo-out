
import Video1 from './videos/1.mp4'
import Video2 from './videos/2.mp4'
import Video3 from './videos/3.mp4'
import Video4 from './videos/4.mp4'

import './App.css'

function App() {

  console.log(Video1)
  
  return (
    <>
      <div className='flex flex-col justify-center items-center ghap-2 ' >
      <h1 className='rainbow-text pb-5'> Welcome to Dimayo out of context </h1>
      <div className='flex flex-col md:flex-row justify-center items-center ghap-2 ' >
      <div className='flex w-full md:w-1/4' >
        <video width="100%" height="100%" controls loop autoPlay muted >
          <source src={Video1} type="video/mp4"   />
  
        </video>
        </div>
        <div className='flex w-full md:w-1/4' >
        <video width="100%" height="100%" controls loop autoPlay muted >
          <source src={Video2} type="video/mp4"   />
  
        </video>
        </div>
        <div className='flex w-full md:w-1/4' >
        <video width="100%" height="100%" controls loop autoPlay muted >
          <source src={Video3} type="video/mp4"   />
  
        </video>
        </div>
        <div className='flex w-full md:w-1/4' >
        <video width="100%" height="100%" controls loop autoPlay muted >
          <source src={Video4} type="video/mp4"   />
  
        </video>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
