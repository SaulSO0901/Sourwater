import React from 'react'
import footer from '../assets/footer/footer2.png'
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube,AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex-col  mx-auto w-full  lg:h-[550px] md:h-[824px]  mt-24 bg-[#f2f1f0] '>
        <div className='md:flex max-w-[1400px] mx-auto w-full h-fit p-6 mt-6 max-[760px]:flex-col'>

<div className='flex-col justify-start  lg:max-w-[380px] md:max-w-[224px] w-full md:border-r-[.7px]  md:border-C7C5C '>

<div className='lg:flex  w-full   md:grid md:grid-cols-1   '>
<div className='flex justify-center w-full md:max-w-[176px] max-[760px]:w-full lg:h-[192px] '>
 <img src={footer} className=' rounded-full w-[132px] h-[132px]' alt='support'></img>   
</div>





<div className='flex-col md:max-w-[176px] lg:ml-4 w-full h-full justify-between md:items-center md:text-center   '>
    <ul className='flex-col w-full justify-center text-center lg:justify-start lg:text-start  '>
        
<li className='flex w-full'><p className='w-full text-xl font-medium'>NEED HELP?</p></li>
<li  className='w-full'><p className=''>Call Your Sales Engineer.</p></li>
<li  className='w-full'><a href='*' className='text-sm underline'>What is a Sales Engineers?</a></li>
<li  className='w-full'><a href='*' className=' text-lg font-medium'>(800) 224-4701</a></li>
<li  className='w-full'><a href='*' className=' underline'>Email Us</a></li>
<li className='h-[38px] mt-2 items-center  bg-white'><p className='h-full px-2 py-1 font-medium'>Cartd ID: 211XS09</p></li>
</ul>
</div>


</div>

<div className='flex   w-full mt-4   h-fit  justify-center lg:max-w-[379px]  md:max-w-[176px]  max-[767px]:py-4 max-[767px]:border-t-[.7px] max-[767px]:border-b-[.7px] max-[767px]:border-C7C5C '>
<div  className='mx-2'><AiOutlineFacebook size={40} className='lg:mx-2 cursor-pointer' ></AiOutlineFacebook></div>
<div  className='mx-2'> <AiOutlineYoutube  size={40} className='lg:mx-2 cursor-pointer'></AiOutlineYoutube></div> 
<div  className='mx-2'> <AiOutlineInstagram size={40} className='lg:mx-2 cursor-pointer'></AiOutlineInstagram></div> 
<div  className='mx-2'>  <AiOutlineTwitter size={40} className='lg:mx-2 cursor-pointer'></AiOutlineTwitter></div> 
</div>



</div>

<div className='lg:flex  w-full grid grid-cols-2 max-[767px]:max-w-[767px]  max-[767px]:pr-6'  >  
<div className='flex-col lg:max-w-[218px] md:max-w-[207px]  max-[767px]:max-w-[355px]  w-full lg:ml-6'>  
<ul>
<Link to='/store'>
<li className='flex '><div className='w-full h-full py-2 px-2 text-lg font-bold cursor-pointer'>ABOUT SOURWATER</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Carrers</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Environmental & Social Responsibility</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Our Sales Engineers</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Why Choose Sweetwater?</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Tour Our Campus</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Press Releases</div></li>
</Link>


</ul>


</div>



<div className='flex-col lg:max-w-[218px] md:max-w-[207px] max-[767px]:max-w-[355px]  w-full ml-6 md:ml-0'>  
<ul>
<Link to='/store'>
<li className='flex '><div className='w-full h-full py-2 px-2 text-lg font-bold cursor-pointer'>CUSTOMER SERVICE</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Free Shipping Policy</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Order Status</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Return Policy</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Sales and Use Tax Policy</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>SourCare Remote</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>FAQ</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Contact Us</div></li>
</Link>

</ul>


</div>



<div className='flex-col lg:max-w-[218px] md:max-w-[207px] max-[767px]:max-w-[355px]  w-full lg:ml-6'>  
<ul>
<Link to='/store'>
<li className='flex '><div className='w-full h-full py-2 px-2 text-lg font-bold cursor-pointer'>ORDERING</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Free Catalog</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Gift Cards</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Bonus Bucks</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Payment Options</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Shipping and Delivery Times</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Gear Exchange</div></li>
</Link>

</ul>


</div>




<div className='flex-col lg:max-w-[218px] md:max-w-[207px] max-[767px]:max-w-[355px]  w-full ml-6 md:ml-0 '>  
<ul>
<Link to='/store'>
<li className='flex '><div className='w-full h-full py-2 px-2 text-lg font-bold cursor-pointer'>SERVICES</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Guitar Workshop</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Music Store</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Events & Workshops</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Piano Showroom</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2 cursor-pointer'>Music Lessons</div></li>
<li className='flex '><div className='w-full h-full py-2 px-2'>Recording Studio</div></li>
</Link>

</ul>


</div>
</div>
</div>



<div className='flex w-full text-center justify-center border-t-[.7px] border-C7C5C'>
<p className='mt-2 text-sm'><a className='underline  font-medium'>Sourwater Sound</a>, 5501 U.S. Hwy 30 W, Fort Wayne, IN 46818<a className='underline '> Get Directions</a> |<a className='underline'> Phone Hours</a> |<a className='underline '> Store Hours</a></p>
</div>

<div className='flex-col w-full mt-4 text-center justify-center'>
<p className=' font-medium'>Explore our commitments to you</p>
<p className=' text-sm'><a className=' underline'>Terms of Use.</a> <a  className=' underline'> Privacy Policy.</a> <a  className=' underline'> Phone Recording Policy.</a> <a  className=' underline'>Accessibility.</a> <a  className=' underline'> Cookies Settings.</a> <a  className=' underline'>Do Not Sell Or Share My Information.</a></p>
<p className=' text-sm'>If you have any questions, please call us at <a>(800) 224-4701</a></p>
<p className=' mt-4 text-sm'>© 2024 Sweetwater - All rights reserved.</p>
<p className=' text-sm'>© Made by Saul Salazar Ozuna for academic purposes only.</p>
</div>


    </div>
  )
}

export default Footer