import React, { useState } from "react";



const AdsValue = () => {

  
  const [ad1, setAd1] = useState(false);
  const [ad2, setAd2] = useState(false);
  const [ad3, setAd3] = useState(false);
  const [ad4, setAd4] = useState(false);
  const [ad5, setAd5] = useState(false);
  const [ad6, setAd6] = useState(false);

  

  const handleAd1 = () => {
    setAd1(true);   
    
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
    <div  onMouseEnter={handleAdex} className='flex-col max-w-[1400px] w-full 2xl:mx-[132px] xl:mx-5 justify-center items-center text-center py-4'>
     
      <h2 onMouseEnter={handleAdex} className="text-5xl font-medium my-10 mx-[440px]">Get More At Sourwater</h2>
    

      <div onMouseEnter={handleAdex} className='flex w-full justify-center py-2 '>
        
<a href="*" onMouseEnter={handleAd1} onMouseLeave={handleAdex} className={ad1?'flex-col w-[219.5px] h-[154px] rounded-md  border-[1px] border-[#0072BA]  hover:shadow-2xl hover:scale-110 ease-in-out duration-200 mx-2' 
: 'flex-col w-[219.5px] h-[154px] rounded-md border-C7C5C1 border-[.1px] mx-2  ease-in-out duration-200'}>

<div  className={ad1?'w-16 h-16 rounded-full mx-[72px] -my-10 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px] z-10 '}></div>

<div  className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad1?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>

<div onMouseEnter={handleAdex} className='flex-col w-[219.5px] h-[154px] rounded-md  border-C7C5C1 border-[.1px] hover:border-[#0072BA]  mx-2 '>
<div className='w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px]'></div>

<div className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
</div>
</div>

<div className='flex-col w-[219.5px] h-[154px] rounded-md  border-C7C5C1 border-[.1px] hover:border-[#0072BA] mx-2   '>
<div className='w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px]'></div>

<div className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
</div>
</div>

<div className='flex-col w-[219.5px] h-[154px] rounded-md  border-C7C5C1 border-[.1px] hover:border-[#0072BA] mx-2   '>
<div className='w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px]'></div>

<div className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
</div>
</div>

<div className='flex-col w-[219.5px] h-[154px] rounded-md  border-C7C5C1 border-[.1px] hover:border-[#0072BA]  mx-2 '>
<div className='w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px]'></div>

<div className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
</div>
</div>

<div className='flex-col w-[219.5px] h-[154px] rounded-md  border-C7C5C1 border-[.1px] hover:border-[#0072BA]  mx-2 '>
<div className='w-16 h-16 rounded-full mx-[72px] -my-10 bg-white border-C7C5C1 border-[.1px]'></div>

<div className='flex-col justify-center items-center text-center my-11'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
</div>
</div>


      </div>

      
    </div>
  )
}

export default AdsValue