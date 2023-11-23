import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import bf from "../assets/ad.JPG"
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

const Header = () => {
    const [cat, setCat] = useState(false);
    const [gtr, setGtr] = useState(false);
    const [elc, setElc] = useState(false);
    const [acg, setAcg] = useState(false);
    const [ad, setAd] = useState(true);
    const [amp, setAmp] = useState(false);
    const [mre, setMre] = useState(false);


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
                ? "w-0 h-0 flex cursor-pointer top-0  h-full   ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"
            } >
         <div className="flex absolute block my-10 -mx-40  border-b-[.0px]  border-C7C5C1 border-[.1px] ">
              <div className="flex w-72    ">
 <div className="flex-col w-full ">
                <ul className="">
                  <li onMouseEnter={handleGtr}   className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#2b1010] ">Guitars</p>
                    {gtr ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>

                  <li onMouseLeave={handleGtr2}  className=" p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Software & Plug-ins</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">DJ / Electronic</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Band & Orchestra</p>
                  </li>
                  <li className=" p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Commercial Audio</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Accesories</p>
                  </li>
                  <li className=" p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Content Creators</p>
                  </li>
                  <li className=" p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Explore our <b>product finders</b></p>
                  </li>
                  <li className="p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Gear Exchange</p>
                  </li>
                </ul>
             

              </div>
                     
              <div onMouseLeave={handleGtr2} 
              className={gtr?"w-0 h-0 flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[448px] text-3xl  border-b-[.7px] border-b-C7C5C1">Guitars</h1>

                      <div className="flex border-b-[.0px] border-b-C7C5C1   ">
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
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF]  text-[#0072BA]">
                    <p className=" ">Guitar Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">Guitar Deals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">News & Research</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">New Arrivals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">Shop By Brand</p>
                

                  </li>
                  <li className="flex justify-between p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">Cable Finder</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">Case Finder</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] text-[#0072BA]">
                    <p className="  ">Guitar Workshop</p>
                 
                  </li>
                  
                  </div>
                </ul>
                
                      </div>
             
                      {/*ElECTRIC GUITAR SECTION*/}
                      <ul className={ad?"flex-col border-l-[.1px]  p-[6.2px] w-52 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center p-2">
<img src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={elc?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleElc2}  className="flex-col  border-b-[.0px]   border-C7C5C1 border-[.1px] ">

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
                      <div onMouseLeave={handleAcg2}  className="flex-col  border-b-[.0px]   border-C7C5C1 border-[.1px] ">

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
                      <div onMouseLeave={handleAmp2}  className="flex-col  border-b-[.0px]   border-C7C5C1 border-[.1px] ">

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
                      <div onMouseLeave={handleMre2}  className="flex-col  border-b-[.0px]   border-C7C5C1 border-[.1px] ">

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