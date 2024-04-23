import React, { useState } from "react";
import value1 from '../assets/adsValue/value1.PNG'
import value2 from '../assets/adsValue/value2.PNG'
import value3 from '../assets/adsValue/value3.PNG'
import value4 from '../assets/adsValue/value4.JPG'
import value5 from '../assets/adsValue/value5.PNG'
import value6 from '../assets/adsValue/value6.PNG'

import { Link } from "react-router-dom";

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
    <div  onMouseEnter={handleAdex} className='flex-col max-w-[1400px] w-full  max-[425px]:mt-[530px] max-[375px]:mt-[400px] max-[325px]:mt-[300px] mx-auto justify-center items-center text-center py-4  '>
     
      <h2 onMouseEnter={handleAdex} className=" text-5xl max-[425px]:text-4xl font-medium my-10 mx-auto max-[375px]:mx-[10px] text-[#362D2D]">Get More at Sourwater</h2>
    

      <div onMouseEnter={handleAdex} className='lg:flex w-full max-w-[1400px] max-h-[502px] min-h-[210px] h-fit justify-center items-center py-2 px-6 md:grid md:grid-cols-3 gap-3 max-[767px]:grid max-[767px]:grid-cols-3 gap-3 max-[320px]:px-0'>
        
      <Link to='/store'  onMouseEnter={handleAd1} onMouseLeave={handleAdex} className={ad1?'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col    max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad1?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value4" src={value1}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div className="-mb-4"><p className=' text-xs'>Helping you buy music gear with confidence.</p></div>

</div>
<div  className={ad1?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<Link to='/store' onMouseEnter={handleAd2} onMouseLeave={handleAdex} className={ad2?'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad2?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 -mb-2 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-3" alt="value2" src={value2}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-[44px] md:my-5 max-[425px]:my-2'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>55-point-guitar<br className="md:hidden lg:inline "></br></p></div>
<div className="mb-[52px]"><p className=' text-xs'>Guitar perfection<br></br> right out of the box.</p></div>

</div>
<div  className={ad2?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>



{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<Link to='/store' onMouseEnter={handleAd3} onMouseLeave={handleAdex} className={ad3?'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad3?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full my-1 p-1" alt="value4" src={value3}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>Fast,Free Shipping<br className="md:hidden lg:inline "></br></p></div>
<div className="mb-[67px]"><p className=' text-xs'>Even on the small stuff</p></div>

</div>
<div  className={ad3?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>

{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<Link to='/store' onMouseEnter={handleAd4} onMouseLeave={handleAdex} className={ad4?'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col    max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad4?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value4" src={value4}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>Free Sourwater <br className="md:hidden lg:inline "></br>Support</p></div>
<div className="-mb-4"><p className=' text-xs'>Got a question?<br></br> We're here to help.</p></div>

</div>
<div  className={ad4?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>

{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<Link to='/store' onMouseEnter={handleAd5} onMouseLeave={handleAdex} className={ad5?'flex-col max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad5?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value4" src={value5}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>FREE 2-year warranty<br className="md:hidden lg:inline "></br></p></div>
<div className="mb-[67px]"><p className=' text-xs'>Buy with confidence.</p></div>

</div>
<div  className={ad5?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>



{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<Link to='/store' onMouseEnter={handleAd6} onMouseLeave={handleAdex} className={ad6?'flex-col   max-w-[219.5px] md:max-w-[240.5px] min-w-[99px]  lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w-[219.5px] md:max-w-[240.5px] min-w-[99px] lg:h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1  md:my-4 ease-in-out duration-200'}> 


<div  className={ad6?'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full mx-auto lg:-my-11 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit my-2 p-2" alt="value6" src={value6}></img>


</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex w-full items-center  justify-center'><p className=' text-[#0072BA] font-medium w-full'>Easy Payments<br className="md:hidden lg:inline "></br></p></div>
<div className="mb-[67px]"><p className=' text-xs'>Up to 48 months.</p></div>

</div>
<div  className={ad6?'flex w-full h-fit  justify-center text-center text-[#0072BA] ease-in-out duration-200': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>


</Link>

{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}

      </div>

      
    </div>
  )
}

export default AdsValue