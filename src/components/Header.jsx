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
import Studio from "../components/header-sections/Studio"

const Header = () => {
    const [cat, setCat] = useState(false);
    
    const [ad, setAd] = useState(true);
    const [gtr, setGtr] = useState(false);
    const [std, setStd] = useState(false);
    const [mic, setMic] = useState(false);
    const [liv, setLiv] = useState(false);
    const [sft, setSft] = useState(false);
    const [bss, setBss] = useState(false);
    const [key, setKey] = useState(false);
    const [drm, setDrm] = useState(false);
    const [dj, setDj] = useState(false);
    const [orc, setOrc] = useState(false);
    const [ca, setCa] = useState(false);
    const [acc, setAcc] = useState(false);
    const [cc, setCc] = useState(false);
    const [pf, setPf] = useState(false);
    const [gex, setGex] = useState(false);


    

    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [thr, setThr] = useState(false);
    const [four, setFour] = useState(false);
    const [all, setAll] = useState(false);



    const handleOne = () => {
      setAd(false);   
      setTwo(false)
      setOne(true);
    };
    const handleOne2 = () => {
      setOne(false);
    };
    const handleTwo = () => {
      setOne(false)
      setAd(false);
      setThr(false)   

      setTwo(true);   
    };
    const handleTwo2 = () => {
      setTwo(false);   
    };
    
   
    const handleThr= () => {
      setOne(false);   
      setTwo(false);
      setAd(false);   
      setFour(false)
      setThr(true);


    };
    
    const handleThr2= () => {
      setThr(false);
    };

    const handleFour= () => {
      setOne(false);   
      setTwo(false);
      setAd(false);   
      setThr(false);
      setFour(true);

    };
    const hanldeall= () => {
      setOne(false);   
      setTwo(false); 
      setThr(false);
      setFour(false);

    };

    const handleFour2= () => {
      setFour(false);

    };
    
    const handleAd = () => {
      setOne(false);   
      setTwo(false);  
      setThr(false)
      setFour(false);
      setAd(true);   
  


    };
    const handleHdr = () => {
      setOne(false);   
      setTwo(false);
      setThr(false);   
      setFour(false);      
      setAd(true);   

    };
    
   
    const handleCat = () => {
    setCat(!cat);
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);
  };

  const handleCat2 = () => {
    setCat(false);
  };

  const handleGtr = () => {

    setMic(false);
    setStd(false);
    setGtr(true);
  };
  
  const handleGtr2 = () => {
    setGtr(false);
    
  };
  const handleStd = () => {
    setGtr(false);
    setMic(false);
    setStd(true);
  };
  
  const handleStd2 = () => {
    setGtr(false);
  };

  const handleMic = () => {
    setGtr(false);
    setStd(false);
    setLiv(false);
    setMic(true);
   
  };
  
  const handleMic2 = () => {
    setMic(false);
  };
  const handleLiv = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setSft(false);
    setLiv(true);
  };
  
  const handleLiv2 = () => {
    setLiv(false);
  };
  const handleSft = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setBss(false);
    setSft(true);
  };
  
  const handleSft2 = () => {
    setSft(false);
  };

  const handleBss = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setKey(false)
    setDj(false);
    setBss(true);
  };
  
  const handleBss2 = () => {
    setBss(false);
  };

  const handleKey = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setDrm(false);
    setKey(true);
  };
  
  const handleKey2 = () => {
    setKey(false);
  };
  const handleDrm = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDj(false)
    setDrm(true);
  };
  
  const handleDrm2 = () => {
    setDrm(false);
  };
  const handleDj = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setOrc(false);

    setDj(true);
  };
  
  const handleDj2 = () => {
    setDj(false);
  };
  const handleOrc = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(true);
  };
  
  const handleOrc2 = () => {
    setOrc(false);
  };

  const handleAcc = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(true);
  };
  
  const handleOAcc2 = () => {
    setAcc(false);
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

                  <li onMouseEnter={handleStd}  className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Studio & Recording</p>
                    {std ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  
                  </li>
                  <li onMouseEnter={handleMic} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                    {mic ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                    {liv ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleSft} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Software & Plug-ins</p>
                    {sft ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>


                  <li onMouseEnter={handleBss} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                    {bss ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>


                  <li onMouseEnter={handleKey} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                    {key ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>



                  <li onMouseEnter={handleDrm} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                    {drm   ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  
                  </li>
                  <li onMouseEnter={handleDj} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">DJ / Electronic</p>
                    {dj ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}

                  </li>
                  <li onMouseEnter={handleOrc} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Band & Orchestra</p>
                    {orc ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Commercial Audio</p>
                  </li>
                  <li onMouseEnter={handleAcc} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Accesories</p>
                    {acc ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Content Creators</p>
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Explore our <b>product finders</b></p>
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[6px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Gear Exchange</p>
                  </li>
                </ul>
             

              </div>
                     












              <div onMouseLeave={handleGtr2} 
              className={gtr?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl   text-[#362D2D] hover:text-[#0072BA] ">Guitars</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Electric Guitars</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Acoustic Guitars</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Amps & Effects</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

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
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

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
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

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
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">View All Guitar Pedals & Effects</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

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
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>



































{/*Studio Section*/}
                <div onMouseLeave={handleStd2} 
              className={std?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                      <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl   text-[#362D2D] hover:text-[#0072BA] ">Studio & Recording</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Recording</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Computers & Software</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Recording Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Recording Deals</p>
                 
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
             
                      {/*Recording SECTION*/}
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Audio Interfaces</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Studio Monitors</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Studio Mixers & Control surfaces</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Preamp & Channel Strips</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Signal Processing & 500 Series</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">audio Recorders</p>
                  </li>
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA] ">
                    <p className=" ">Audio Players</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Computers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">iOS / iPad</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Pro Tools</p>
                  </li>
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Headphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Studio Furniture</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Acoustic Treatment</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA]">
                    <p className="   ">Audio Engineering Instructional Books</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Podcasting</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Video Creators</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA]">
                    <p className="   ">Video Equipment</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Livestreaming</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

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
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>





















{/*Mic Section*/}
<div onMouseLeave={handleMic2} 
              className={mic?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                      <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl   text-[#362D2D] hover:text-[#0072BA] ">Microphones</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Microphones</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Wireless Systems</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Microphone Accessories</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                 
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Microphones Bundles</p>
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
             
                      {/*Microphones SECTION*/}
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Condenser Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Dynamic Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Ribbon Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Drum Microphone Bundles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Headset Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Lavalier Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">USB Microphones</p>
                  </li>
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA] ">
                    <p className=" ">Shotgun Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA] ">
                    <p className=" ">Drum Microphone Bundles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Microphones</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Handheld Microphone Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Headset Microphone Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Lavalier Microphone Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">In-Ear Monitors</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Wireless Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className="">View All Wireless Systems</p>
                  </li>
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphone Windscreens & Grilles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Microphone Clips</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphone Shockmounts</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA]">
                    <p className="   ">Microphone Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Microphone Pop Filters</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA]">
                    <p className="   ">Microphone Cases & Bgas</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Microphones Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Miscellaneous Mic Accessories</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

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
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>
              




















{/*Live Section*/}
<div onMouseLeave={handleLiv2} 
              className={liv?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                      <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Live Sound & Lighting</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Live Sound Mixers</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PA Systems & Speakers</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Lighting</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Live Sound Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Live Sound Deals</p>
                 
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
                 
                  
                  </div>
                </ul>
                
                      </div>
             
                      {/*Recording SECTION*/}
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Analog Mixers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Digital Mixers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Powered Mixers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Line Mixers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Mixer Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View All Mixers</p>
                  </li>
                 
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">PA Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PA Subwoofers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Stage Monitors</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">PA Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Loudspeaker Managments</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">PA Speaker Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Commercial Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Home Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className="">View All PA Systems</p>
                  </li>

                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Lighting Controllers & Interfaces</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Lighting Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">SpotLights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D]  hover:text-[#0072BA]">
                    <p className="   ">Par Cans</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Color & Wash Lights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Strobes, Lasers. & Effects Lights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Fog & Bubble Machines</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Lighting Stands & Trusses</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Lighting Clamps</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] font-medium text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">View all Lighting</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PA Crossovers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Live Sound Monitoring</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Portable Racks & Cases</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Signal Proccesing & 500 series</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Live Sound Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Staging</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="   ">Drum Shields</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>



















                <div onMouseLeave={handleSft2} 
              className={sft?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl   text-[#362D2D] hover:text-[#0072BA] ">Software & Plug-ins</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">DAW Software</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Plug-ins: Virtual Instruments</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Plug-ins:Virtual Processors</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Software Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Software Deals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Computer Deals</p>
                 
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Pro Tools Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PreSonus Studio One</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Steinberg Cubase</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Image Line FL Studio</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Reason Studios Reason</p>
                  </li>
                  
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all DAW Software</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Virtual Guitar & Bass Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Virtual Drum & Percussion Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Virtual Synth, Keyboard, & Organ Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Virtual Orchestra Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Virtual Instrument Bundles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Sound Module Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Sampling Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Looping Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Virtual Instruments</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Plug-ins Bundles</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Dynamics Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Equalizer Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Reverb & Delay Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Pitch & Harmony Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Effect Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Noise Reduction Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Utility Plug-ins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium  hover:text-[#0072BA]">
                    <p className="   ">View All Virtual Processors</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Notation Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Mastering Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">DJ Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Video Editing Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Instructional Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Utility & Other Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Computers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Audio Engineering Instructional Books</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>































                <div onMouseLeave={handleBss2} 
              className={bss?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Bass</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Bass Guitars</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bass Guitar Amps</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bass Guitar Pedals & Effects</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium   text-[#0072BA] ">
                    <p className=" ">Sourwater Exclusives</p>
                

                  </li>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Bass Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Bass Deals</p>
                 
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Desktop</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Rackmount</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Handheld</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Keytar</p>
                  </li> 
                  
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Synthesizers</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Eurorack Modules</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Eurorack Cases</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Eurorack Path Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Eurorack Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Modular Synthesizers</p>
                  </li>
                
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Eurorack & Modular Synthesizers</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Digital Pianos</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Acoustic Grand Pianos</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Acoustic Upright Pianos</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Clavinovas</p>
                  </li>

                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">View All Pianos</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Electric Organs</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Portable & Arranger Keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Keyboard Workstations</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Beat Production</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Midi Controller</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Accordions</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Theremins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Keyboard Amplifiers</p>
                  </li>
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>





















                <div onMouseLeave={handleKey2} 
              className={key?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Keyboards & Synthesizers</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Synthesizers</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Eurorack & Modular Synthesizers</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Pianos</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Keyboard Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Keyboard Deals</p>
                 
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">4-string Bass Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">5-string Bass Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">6+ string Bass guitar</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Fretless Bass Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Acoustic Bass Guitars</p>
                  </li> <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Left-handed Bass Guitars</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bass Guitars Packages</p>
                  </li>
                  
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Bass Guitars</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitar Combo Amps</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bass Guitar Amp Heads</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitar Amp-Cabinets</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Bass Guitar Amp Accessories</p>
                  </li>
                
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Bass Guitar Amps</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Preamp</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Overdrive</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Distortion</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Compressor</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">DI</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Multi-FX</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Fuzz</p>
                  </li>
                
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">View All Bass Guitar Pedals & Effects</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitar Strings</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar / Instruments Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Wireless Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Bass Bundles</p>
                  </li>
                
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
                </div>




















                

                <div onMouseLeave={handleDrm2} 
              className={drm?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Drums & Percussion</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Acoustic Drums</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Electronic Drums</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Cymbals, Hardware & More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px]  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Concert & Matching Percussion</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <div onMouseEnter={handleAd}>
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Sourwater Exclusives</p>
                  </li>

                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Drum Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Drum Deals</p>
                 
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Acoustic Drums Sets</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Snare Drums</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Drums</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Floor Drums</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Mounted Toms</p>
                  </li> <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Specialty Drums</p>
                  </li>
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Acoustic Drums</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Electronic Drum Sets</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Electronic Drum Modules</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Electronic Drum Controllers &  MUltipads</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Drum Triggers & Pads</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Drum Machines & Samplers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Electronic Cybmal Pads</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Drum Amplifiers</p>
                  </li>
                
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Electronic Drums</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Drum Hardware</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Cymbals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Hand Drums</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">World Percussion</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Meditation & Music Therapy Instruments</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Drums & Percussion Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Drum Microphone Bundles</p>
                  </li>
            
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Concert Percussion</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Marching Percussion</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Marching Accesories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Drums & Percussion Method Books</p>
                  </li>
                
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>








                <div onMouseLeave={handleDj2} 
              className={dj?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">DJ / Electronic</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">DJ Equipment</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PA Systems</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Lighting</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">DJ Bundles</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">DJ Deals</p>
                 
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
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">DJ Controllers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">iPad/Iphone DJ Mixers/Controllers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">DJ Media Player</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Turntables & Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">MIDI Controllers</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Beat Production</p>
                  </li> 
                  
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">DJ Effects</p>
                  </li> 
                  
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">DJ Headphones</p>
                  </li> 
                  
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">DJ Equipment Bundles</p>
                  </li> 
                  
                  
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all DJ Equipment</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">PA Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">PA Subwoofers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Stage Monitors</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">PA Systems</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Loudspeaker Managment</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">PA Speaker Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Commercial Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Home Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all PA Systems</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Lighting Controllers & Interfaces</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Lighting Software</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Spotlights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Par Cans</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Color & Wash Lights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Strobes, Lasers & Effects Lights</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Fog & Bubble Machines</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Lighting Stands & Trusses</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Lighting Clamps</p>
                  </li>

                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">View All Lighting</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Electric Organs</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Portable & Arranger Keyboards</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Keyboard Workstations</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Beat Production</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Midi Controller</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Accordions</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Theremins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Keyboard Amplifiers</p>
                  </li>
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>








































{/*Band & Orchestra Section*/}



<div onMouseLeave={handleOrc2} 
              className={orc?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Band & Orchestra</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Woodwind Instruments</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bass Instruments</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Orchestral String Instruments</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Sourwater Exclusives</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Band & Orchestra Bundles</p>
                 
                  </li>
                 
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Instrumental Rentals</p>
                  </li>
                 
               
                  
                  </div>
                </ul>
                
                      </div>
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Flutes & Piccolos</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Clarinets</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Saxophones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Double Reed Instruments</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Reeds</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Woodwind MouthPieces</p>
                  </li> 
                  
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Woodwind Cases, Covers,& Bags</p>
                  </li> 
                  
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Woodwind Instruments</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Trumpets</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Trombones</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">French Horns</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Euphoniums</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Tubas</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Brass Mouthpieces</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Brass Accessories </p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Brass cases, Covers, & Bags</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Brass Instruments</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Violins</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Violas</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Cellos</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Double Bass</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bows</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Orchestral Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Orchestral Strings</p>
                  </li>
                 

                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">View All Orchestral Strings Instruments</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Concert Percussion</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Band & Orchestra Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bans & Orchestra Method Books</p>
                  </li>
                  
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>



















                <div onMouseLeave={handleOAcc2} 
              className={acc?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col   border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Accessories</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Cables</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                  <li onMouseEnter={handleTwo}  className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Stands</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleThr} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Accessories By Categories</p>
                    <MdChevronRight size={20}></MdChevronRight>
                  </li>
                  <li onMouseEnter={handleFour} className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">More</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px]  hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className=" ">Sourwater Exclusives</p>
                  

                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Accesories Deals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Sweetwarer Merch</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Case Finder</p>
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Cable Finder</p>
                  </li>
               
                  
                  </div>
                </ul>
                
                      </div>
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[529px]  w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">
<img className="" src={bf} alt="Black Friday"></img>
</li>

</ul>
<ul>
<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px] border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphone Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar/Instrument Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Speaker Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Pedalboard Patch Cables</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Eurorack Patch Cables</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Bulk Wire</p>
                  </li> 
                
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View all Cables</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
                        
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleTwo2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div className="flex    ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphone Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Keyboard Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">PA Speaker Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Studio Monitor Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Ligthing Stands & Trusses</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Music Stands </p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Laptop Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Dj Stands</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA] ">
                    <p className=" ">View All Stands</p>
                  </li>
                 
                </ul>
                <div onMouseEnter={handleTwo2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={thr?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleThr2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]    border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Guitar Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Guitar Amp Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitar Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Bass Guitar Amp Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Keyboard Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Drum & Percussion Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Microphone Accessories</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Mixer Accessories</p>
                  </li>

                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] font-medium hover:text-[#0072BA]">
                    <p className="   ">More...</p>
                  </li>
                 
                 
                </ul>
                <div onMouseEnter={handleThr2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                      <ul>
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleFour2}  className="flex-col  border-b-[.0px] border-r-[.0px] h-[529px]   border-C7C5C1 border-[.1px] ">

                      <div onMouseLeave={handleAd} className="flex ">
                      <div className="flex w-56 ">
                  
                      <ul  className="flex-col w-[344px]">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Cases</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Music Education & Learning Books</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Clothing & Merch</p>
                  </li>
                  
                </ul>
                <div onMouseEnter={handleFour2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>
                      
                      </div>
                      </div>
              

                    
                </div>

{/*End of cat Section*/}
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