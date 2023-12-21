import React, { useState } from "react";
import value1 from '../assets/value1.PNG'

  
const Testing = () => {
  
const [ad1, setAd1] = useState(false);
const [ad2, setAd2] = useState(false);
const [ad3, setAd3] = useState(false);
const [ad4, setAd4] = useState(false);
const [ad5, setAd5] = useState(false);
const [ad6, setAd6] = useState(false);

  

const handleAd1 = () => {
  setAd1(true);   
  
};


const handleAd2 = () => {
  setAd2(true);   
  
};


const handleAd3 = () => {
  setAd3(true);   
  
};


const handleAd4 = () => {
  setAd4(true);   
  
};


const handleAd5 = () => {
  setAd5(true);   
  
};


const handleAd6 = () => {
  setAd6(true);   
  
};

const handleAdex = () => {
  setAd1(false);
  setAd2(false);
  setAd3(false);
  setAd4(false);
  setAd5(false);
  setAd6(false);   
  
};
  return (
    <div onMouseEnter={handleAdex} className='lg:flex w-full max-w-[1400px] max-h-[902px] min-h-[210px] h-fit justify-center items-center  px-6 md:grid md:grid-cols-3 gap-3 max-[767px]:grid max-[767px]:grid-cols-3 gap-3'>


  <a href="*" onMouseEnter={handleAd1} onMouseLeave={handleAdex} className={ad1?'flex-col px-4   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col px-4   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad1?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value4" src={value1}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div className="-mb-6"><p className=' text-xs'>Helping you buy music gear with confidence.</p></div>

</div>
<div  className={ad1?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</a>
    </div>
  )
}

export default Testing