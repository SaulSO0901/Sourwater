import {React,useState} from 'react'
import tile1 from '../assets/tiles/tile (1).png'
import tile2 from '../assets/tiles/tile (2).png'
import tile3 from '../assets/tiles/tile (3).png'
import tile4 from '../assets/tiles/tile (4).png'
import tile5 from '../assets/tiles/tile (5).png'
import tile6 from '../assets/tiles/tile (6).png'

const Tiles = () => {
  const [dtl, setDtl] = useState(false);
  const [dtl2, setDtl2] = useState(false);
  const [dtl3, setDtl3] = useState(false);
  const [dtl4, setDtl4] = useState(false);
  const [dtl5, setDtl5] = useState(false);
  const [dtl6, setDtl6] = useState(false);


  const handleDtl = () => {
    setDtl(true);
  };
  
  const handleDtl2 = () => {
    setDtl2(true);
  };
  
  const handleDtl3 = () => {
    setDtl3(true);
  };
  
  const handleDtl4 = () => {
    setDtl4(true);
  };
  
  const handleDtl5 = () => {
    setDtl5(true);
  };
  
  const handleDtl6 = () => {
    setDtl6(true);
  };

  const handleDtlex = () => {
    setDtl(false);
    setDtl2(false);
    setDtl3(false);
    setDtl4(false);
    setDtl5(false);
    setDtl6(false);
  };

  return (
    <div className='grid lg:grid-cols-3 gap-2 max-w-[1400px] my-5  px-6 mx-auto select-none
    md:grid-cols-2
    max-[425px]:flex-col'>

<a onMouseOver={handleDtl} onMouseLeave={handleDtlex} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile1} className={dtl?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
  <a onMouseOver={handleDtl2} onMouseLeave={handleDtlex} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile2} className={dtl2?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl2?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
  
<a onMouseOver={handleDtl3} onMouseLeave={handleDtlex} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile3} className={dtl3?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl3?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
  
<a onMouseOver={handleDtl4} onMouseLeave={handleDtlex} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile4} className={dtl4?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl4?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
  
<a onMouseOver={handleDtl5} onMouseLeave={handleDtlex} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile5} className={dtl5?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl5?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
  
<a onMouseOver={handleDtl6} onMouseLeave={handleDtl6} className='flex items-center justify-center max-h-72 h-full bg-black'>
  <img src={tile6} className={dtl6?' w-full h-full object-cover  ease-in-out duration-100  opacity-50':'w-full h-full object-cover  ease-in-out duration-100'}></img>
  <button className={dtl6?'bg-white absolute  h-10 w-fit rounded-md font-medium px-6 duration-100  ':'hidden'}>GET DETAILS</button>
  </a>
    </div>
  )
}

export default Tiles