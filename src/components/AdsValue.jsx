import React, { useState } from "react";
import value1 from '../assets/value1.PNG'
import value2 from '../assets/value2.PNG'
import value3 from '../assets/value3.PNG'
import value5 from '../assets/value5.PNG'
import value6 from '../assets/value6.PNG'


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
    <div  onMouseEnter={handleAdex} className='flex-col max-w-[1400px] w-full 2xl:mx-[132px] max-[425px]:my-[530px]  xl:mx-5 justify-center items-center text-center py-4 '>
     
      <h2 onMouseEnter={handleAdex} className="text-5xl max-[425px]:text-4xl font-medium my-10 mx-[440px] md:mx-[220px] max-[425px]:mx-[10px] text-[#362D2D]">Get More At Sourwater</h2>
    

      <div onMouseEnter={handleAdex} className='lg:flex w-full max-w-[1400px] max-h-[502px] min-h-[210px] h-fit justify-center items-center py-2 px-6 md:grid md:grid-cols-3 gap-3 max-[425px]:grid max-[425px]:grid-cols-3 gap-3'>
        
<a href="*" onMouseEnter={handleAd1} onMouseLeave={handleAdex} className={ad1?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-105 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad1?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value1" src={value1}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad1?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<a href="*" onMouseEnter={handleAd2} onMouseLeave={handleAdex} className={ad2?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-110 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad2?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-2" alt="value2" src={value2}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad2?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<a href="*" onMouseEnter={handleAd3} onMouseLeave={handleAdex} className={ad3?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-110 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad3?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value3" src={value3}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad3?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<a href="*" onMouseEnter={handleAd4} onMouseLeave={handleAdex} className={ad4?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-110 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad4?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value4" src={value1}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad4?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<a href="*" onMouseEnter={handleAd5} onMouseLeave={handleAdex} className={ad5?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-110 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad5?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit rounded-full p-1" alt="value5" src={value5}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad5?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}
<a href="*" onMouseEnter={handleAd6} onMouseLeave={handleAdex} className={ad6?'flex-col max-w-[219.5px] md:max-w-[240.5px]  lg:max-h-[154px]  md:max-h-[182px] min-w-[99px] w-full h-full rounded-md  lg:border-[1px] border-[#0072BA]  md:border-0 mx-1 md:my-4  lg:over:shadow-2xl lg:hover:scale-110 md:hover:scale-100 ease-in-out duration-200 ' 
: 'flex-col  max-w[219.5px] md:max-w-[240.5px] min-w-[99px] lg:max-h-[154px]  md:max-h-[182px] w-full h-full rounded-md border-C7C5C1 lg:border-[.1px] md:border-0 mx-1 lg:my-0  md:my-4 ease-in-out duration-200'}>

<div  className={ad6?'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white  border-[#0072BA] border-[1px]  ease-in-out duration-200 z-10' 
:'w-16 h-16 rounded-full  lg:mx-[72px] md:mx-[80px] lg:-my-10 md:my-2 bg-white border-C7C5C1 border-[.1px] z-10 '}>
<img className="w-fit h-fit p-2  my-2" alt="value6" src={value6}></img>

</div>

<div  className='flex-col justify-center items-center text-center lg:my-11 md:my-6'>
<div className='flex my-1 w-full items-center justify-center'><p className=' text-[#0072BA] font-medium w-full'>Dedicated Sales<br className="md:hidden lg:inline "></br> Engineer</p></div>
<div><p className=' text-sm'>Helping you buy music gear with confidence</p></div>
<div  className={ad6?'flex w-full h-8  justify-center text-center text-[#0072BA] ease-in-out duration-100': 'hidden ease-in-out duration-200'}><p className="w-full h-full">Learn more</p></div>
</div>
</a>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////*/}

      </div>

      
    </div>
  )
}

export default AdsValue