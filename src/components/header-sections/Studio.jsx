import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import bf from "../Header"
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
  import { MdChevronRight } from "react-icons/md";

const Studio = () => {


    const [cat, setCat] = useState(false);
    const [gtr, setGtr] = useState(false);
    const [elc, setElc] = useState(false);
    const [acg, setAcg] = useState(false);
    const [ad, setAd] = useState(true);
    const [amp, setAmp] = useState(false);
    const [mre, setMre] = useState(false);
    const [std, setStd] = useState(false);
    
    
    const handleMre= () => {
      setElc(false);   
      setAcg(false);
      setAd(false);   
      setAmp(false);
    setMre(true);
    
    };
    
    const handleMre2= () => {
     
    setMre(false);
    
    };
    const handleAmp= () => {
      setElc(false);   
      setAcg(false);
      setAd(false);   
      setMre(false)
      setAmp(true);
    
    
    };
    
    const handleAmp2= () => {
      setAmp(false);
    };
    const handleAd = () => {
      setElc(false);   
      setAcg(false);  
      setMre(false)
      setAmp(false);
      setAd(true);   
    
    
    
    };
    const handleHdr = () => {
      setElc(false);   
      setAcg(false);   
      setAd(true);   
    
    };
    const handleAcg = () => {
      setElc(false)
      setAd(false);
      setAmp(false)   
    
      setAcg(!acg);   
    };
    const handleAcg2 = () => {
      setAcg(false);   
    };
    
    
    const handleCat = () => {
    setCat(!cat);
    };
    
    const handleElc = () => {
    setAd(false);   
    setAcg(false)
    setElc(true);
    };
    const handleElc2 = () => {
    setElc(false);
    };
    
    const handleCat2 = () => {
    setCat(false);
    };
    
    const handleGtr = () => {
    setGtr(true);
    setStd(false);
    };
    
    const handleGtr2 = () => {
    setGtr(false);
    };
    const handleStd = () => {
    setGtr(false);
    setStd(true);
    };
    
    const handleStd2 = () => {
    setGtr(false);
    };



  return (
   
           <div onMouseLeave={handleStd2} 
              className={std?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex justify-between  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-3xl hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">Studio & Recording</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleElc}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Electric Guitars</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleAcg}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Acoustic Guitars</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleAmp} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Amps & Effects</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleMre} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Guitar Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Guitar Deals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">News & Research</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">New Arrivals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Shop By Brand</p>
                

                  </li>
                  <li className="flex justify-between p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Cable Finder</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Case Finder</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Guitar Workshop</p>
                 
                  </li>
                  
                  </div>
                </ul>
                
                      </div>
             
                      {/*ElECTRIC GUITAR SECTION*/}
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={elc?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleElc2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Solid Body Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Semi-Hollowbody Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Baritone Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">7-String guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">8-String guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Electric Guitar Packs</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Modeling Electric Guitars</p>
                  </li>
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Electric Guitars</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleElc2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={acg?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleAcg2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">6-string Acoustic Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">12-string Acoustic Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Acoustic / Electric Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Left-handed Acoustic Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Acoustic Guitar Packages</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Resonator Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Acoustic Guitars</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleAcg2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={amp?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleAmp2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Amps</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar Pedals & Effects</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Pedalboards & Power supplies</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium ">
                    <p className="   ">View All Guitar Pedals & Effects</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleElc2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={mre?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleMre2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Ukeleles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar Strings</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Folk Instruments</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar Method Books</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleMre2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>
   
  )
}

export default Studio