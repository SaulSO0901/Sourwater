import React,{useState} from 'react'
import {AiOutlineSearch,AiFillCaretDown,AiFillCaretUp,AiOutlineClose,AiTwotoneMail,AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineFavoriteBorder} from  "react-icons/md";
import logo from '../assets/logo2.png';
import cart from '../assets/cart.png';
import guitar from '../assets/Screenshot 2023-10-01 141836.png'
import strat from '../assets/Strat.JPG'
import key from '../assets/Key.JPG'
import sup from '../assets/customer-service-support.svg'



const Calando2 = () => {
    const [del, setDel] = useState(false);

const handleDel = () => {
 setDel(!del);
};
const handleDel2 = () => {
 setDel(false);
};

 
  return (
   
    <div className='flex my-6 border-C7C5C1 border-[.5px] w-fit '>
    <div  className='flex-col '>

     <div  className={del?' flex  ring-[#C7C5C1] ring-b-1':'flex  ring-[#C7C5C1]  ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer '} >
<div onMouseEnter={handleDel2} className='flex items-center my-2 p-4 '>
 <img className='border-C7C5C1 border-[.8px] h-20 w-20 p-1' src={guitar}></img>
</div>
     <div onMouseEnter={handleDel2}  className='flex-col px-2 py-2  '>
     <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 

     <div className=' p-[.5px] w-40'> 
    <p className='text-[#362D2D] text-sm font-medium'>ESP James Hetfield Signature Vulture-Black Satin</p>

     </div>
    <div  className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
     <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D'></MdOutlineFavoriteBorder>
     <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
     </div>
     </div>

</div>

<div className={del?' flex  ring-[#C7C5C1] ring-b-1':'flex  ring-[#C7C5C1] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer '} >
<div onMouseEnter={handleDel2} className='flex items-center my-2 p-4 '>
 <img className='border-C7C5C1 border-[.8px] h-20 w-20 p-1  ' src={strat}></img>
</div>
     <div onMouseEnter={handleDel2} className=' px-2 py-2  '>
     <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 
    
    <div  className=' p-[.5px] w-40'> 
    <p className='text-[#362D2D] text-sm font-medium '>Fender Mike McCready Stratocaster Electric Guitar - 3-color Sunburst   </p>
    
     </div>
    <div  className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
     <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D'></MdOutlineFavoriteBorder>
     <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
     </div>
     </div>

  
</div>

<div className={'flex  ring-[#C7C5C1] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer '} >
<div className='flex items-center my-2 p-4 '>
 <img alt='keyboard' className='border-C7C5C1 border-[.8px] h-20 w-20 p-1 py-4 ' src={key}></img>
</div>
     <div className=' px-2 py-2   '>
     <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 
    
    <div  className=' p-[.5px] w-40'> 
    <p className='text-[#362D2D] text-sm font-medium '>Roland FP-30X Digital Piano with Speakers - Black   </p>
    
     </div>
    <div className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
     <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D' ></MdOutlineFavoriteBorder>
     <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
     </div>
     </div>



</div>


  </div>
  <div className='flex-col h-[410px] w-fit   '>
       <div  className='flex items-center h-[136px]   hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose color='#362D2D' className=' w-24'></AiOutlineClose></div>
       <div  className='flex items-center h-[136px]    hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose color='#362D2D' className=' w-24'></AiOutlineClose></div>
       <div  className='flex items-center h-[136px]    hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose color='#362D2D' className=' w-24'></AiOutlineClose></div>

       
</div>
  </div>

     







  )
}

export default  Calando2;


