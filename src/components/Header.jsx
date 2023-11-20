import React, { useState } from "react";

import {
    AiOutlineSearch,
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineClose,
    AiTwotoneMail,
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiFillCaretRight,
    AiFillCaretLeft,
  } from "react-icons/ai";

const Header = () => {
    const [cat, setCat] = useState(false);
    const [gtr, setGtr] = useState(false);
    const [elc, setElc] = useState(false);

   
    const handleCat = () => {
    setCat(!cat);
  };
  
  const handleElc = () => {
    setElc(!elc);
  };
  const handleElc2 = () => {
    setElc(false);
  };
  
  const handleCat2 = () => {
    setCat(false);
  };

  const handleGtr = () => {
    setGtr(!gtr);
  };
  
  const handleGtr2 = () => {
    setGtr(false);
  };

  return (
    <div className='flex h-10 my-2 border-b-[.7px] border-b-C7C5C px-10 justify-between   '>
        <div  onMouseEnter={handleCat}  onMouseLeave={handleCat2} className='flex w-full justify-center  '><a className='h-full p-2 '>Shop By Category</a>
       <div className="flex" >
        
        <div
            className={
              cat
                ? "w-0 h-0 flex cursor-pointer top-0  h-full border-r border-r-gray-900  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"
            } >
         <div className="flex absolute block my-10 -mx-40  border-C7C5C1 border-[.1px] ">
              <div className="flex border-b-[.7px] border-b-C7C5C1 w-72   ">
 <div className="flex-col   w-full ">
                <ul className="">
                  <li onMouseEnter={handleGtr}   className="flex items-center justify-between p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Guitars</p>
                    {gtr ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>

                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                  </li>
                </ul>
             

              </div>
                     
              <div onMouseLeave={handleGtr2} 
              className={gtr?"w-0 h-0 flex -my-[2px] cursor-pointer top-0  h-full border-r border-r-gray-900  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div className="flex-col    border-C7C5C1 border-[.1px] ">
                      <h1 className="p-2 w-[768px]  border-b-[.7px] border-b-C7C5C1">Guitars</h1>

                      <div className="flex border-b-[.7px] border-b-C7C5C1   ">
                      <div className=" w-96 ">
                  
                      <ul className="">
            

                  <li  onMouseEnter={handleElc} nMouseLeave={handleElc2}  className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]">Electric Guitars</p>
                    
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                  </li>
                </ul>
                
                      </div>
             
                      {/*ElECTRIC GUITAR SECTION*/}
                      <ul className={elc?" hidden"
                :""}>
<h1>AYAYAYAYAYY</h1>

</ul>
<ul>
<div onMouseLeave={handleElc2} className={elc?"-my-[1px] w-0 h-0 flex cursor-pointer top-0  h-full border-r border-r-gray-900  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div  className="flex-col    border-C7C5C1 border-[.1px] ">
                  
                      <h1 className="p-2  border-b-[.7px] border-b-C7C5C1">Guitars</h1>
                      <div className="flex border-b-[.7px] border-b-C7C5C1   ">
                      <div className="flex w-96 ">
                  
                      <ul  className="flex-col p-1 w-[344px]">
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleElc2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      </div>
                      </div>
              

                    
                </div>
              </div>
        </div>
        
         </div>
         </div>
         <div className=" justify-center items-center py-3">
          {cat ? (
            <AiFillCaretUp className="" size={15} />
          ) : (
            <AiFillCaretDown className="" size={15} />
          )}
         </div>
         </div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>What's New</a> 
        
        </div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>Deals</a></div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>Used Gear</a></div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>Rentals</a></div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>Articles & Videos</a></div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '> Giveaway</a></div>
        <div className='flex w-full justify-center'><a className='h-full p-2 '>Sourwater Card</a></div>






    </div>
  )
}

export default Header