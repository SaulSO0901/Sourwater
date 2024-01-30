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
  import { Link } from "react-router-dom";

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
    setAd(true);
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
    setAcc(false);
    setCa(false)
    setCc(false);
    setPf(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
  };

  const handleCat2 = () => {
    setCat(false);
  };

  const handleGtr = () => {
    setGtr(true);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleGtr2 = () => {
    setGtr(false);
    
  };
  const handleStd = () => {
    setGtr(false);
    setStd(true);
    setMic(false);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleStd2 = () => {
    setGtr(false);
  };

  const handleMic = () => {
    setGtr(false);
    setStd(false);
    setMic(true);
    setLiv(false);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

   
  };
  
  const handleMic2 = () => {
    setMic(false);
  };
  const handleLiv = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(true);
    setSft(false);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false)
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleLiv2 = () => {
    setLiv(false);
  };
  const handleSft = () => {
    setGtr(false);
    setStd(false);
    setMic(false);
    setLiv(false);
    setSft(true);
    setBss(false);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

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
    setBss(true);
    setKey(false);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);


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
    setKey(true);
    setDrm(false);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

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
    setDrm(true);
    setDj(false);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

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
    setDj(true);  
    setOrc(false);
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

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
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleOrc2 = () => {
    setOrc(false);
  };
  const handleCa = () => {
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
    setAcc(false);
    setCa(true);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleCa2 = () => {
    setCa(false);
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
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  
  const handleAcc2 = () => {
    setAcc(false);
  };


 const handleCC = () => {
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
  setAcc(false);
  setCa(false);
  setCc(true);
  setPf(false);
  setGex(false);
  setOne(false);   
  setTwo(false); 
  setThr(false);
  setFour(false);
  setAd(true);


  };
  
  const handleCC2 = () => {
    setCc(false);
  };
  const handlePF = () => {
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
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(true);
    setGex(false);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);


  };
  
  const handlePF2 = () => {
    setPf(false);
  };

  const handleGEX = () => {
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
    setAcc(false);
    setCa(false);
    setCc(false);
    setPf(false);
    setGex(true);
    setOne(false);   
    setTwo(false); 
    setThr(false);
    setFour(false);
    setAd(true);

  };
  {/*Deals Hooks*/}
  const [deal, setDeal] = useState(false);

  const handleDeal= () => {
    setDeal(!deal);
    setUg(false);
  };
  
  const handleDeal2= () => {
    setDeal(false);
  };
  {/*Used Gear Hooks*/}
  const [ug, setUg] = useState(false);

  const handleUG= () => {
    setUg(!ug);
    setDeal(false);
  };
  
  const handleUG2= () => {
    setUg(false);
  };

  return (
    <div className='flex h-10 my-2 border-b-[.7px] border-b-C7C5C  items-center justify-center md:px-4 h-14 xl:h-full  hidden md:flex      '>

        <Link to='/store' onMouseEnter={handleCat}   onMouseLeave={handleCat2} className='flex max-w-[223px]  min-w-[181px]   w-full h-[40px]  justify-center items-center hover:bg-[#EFEFEF]  text-[#362D2D] hover:text-[#0072BA] cursor-pointer'>
        <div className='font-medium '><p>Shop By Category</p></div>
       <div className="flex " >
        
        <div onMouseLeave={handleGtr2}
            className={
              cat
                ? "flex relative w-0 h-0   cursor-pointer top-0 left-0    ease-in-out duration-0 " 
                : "ease-in-out duration-0 fixed left-[-100%]"
            } >
            
         <div className="flex  absolute 2xl:-mx-[168px] xl:-mx-[157px] lg:-mx-[148px] xl:my-5 lg:my-[27px] md:-mx-[148px] md:my-[27px] bg-white   border-b-[.1px] border-C7C5C1 border-[.1px] ">
              <div className="flex w-72 h-[579px]     ">
 <div className="flex-col w-full  ">
                <ul className="text-[#362D2D]">
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
                  <li onMouseEnter={handleMic} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Microphones</p>
                    {mic ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleLiv} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Live Sound</p>
                    {liv ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleSft} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Software & Plug-ins</p>
                    {sft ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>


                  <li onMouseEnter={handleBss} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bass</p>
                    {bss ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>


                  <li onMouseEnter={handleKey} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">keyboards</p>
                    {key ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>



                  <li onMouseEnter={handleDrm} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Drums</p>
                    {drm   ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  
                  </li>
                  <li onMouseEnter={handleDj} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">DJ / Electronic</p>
                    {dj ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}

                  </li>
                  <li onMouseEnter={handleOrc} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Band & Orchestra</p>
                    {orc ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleCa} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Commercial Audio</p>
                    {ca ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>




                  <li onMouseEnter={handleAcc} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Accesories</p>
                    {acc ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleCC} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Content Creators</p>
                    {cc ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handlePF} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Explore our <b>product finders</b></p>
                    {pf ? (
            <AiFillCaretLeft className="" size={15} />
          ) : (
            <AiFillCaretRight className="" size={15} />
          )}
                  </li>
                  <li onMouseEnter={handleGEX} className="flex items-center justify-between p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Gear Exchange</p>
                  </li>
                </ul>
               
               
              </div>
                     











              <div onMouseLeave={handleGtr2}  
              className={gtr?"flex w-0 -my-[2px] cursor-pointer top-0 ease-in-out duration-0 z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                  
                      <div onMouseEnter={handleAd} className="flex-col  bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]  w-56 items-center justify-center "
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
              className={std?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                 
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0  h-full  ease-in-out duration-0 "
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
              className={mic?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                 
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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
              className={liv?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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


















{/*Software Section*/}
                <div onMouseLeave={handleSft2} 
              className={sft?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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






























{/*Bass Section*/}
                <div onMouseLeave={handleBss2} 
              className={bss?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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




















{/*Keyboards Section*/}
                <div onMouseLeave={handleKey2} 
              className={key?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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
<div   className={four?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0   ease-in-out duration-0"
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




















                
{/*Drums Section*/}
                <div onMouseLeave={handleDrm2} 
              className={drm?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white   border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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







{/*DJ Sectiom*/}
                <div onMouseLeave={handleDj2} 
              className={dj?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white   border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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
              className={orc?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
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




























{/*Commercial Audio Section*/}


                <div onMouseLeave={handleCa2} 
              className={ca?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Commercial Audio & Install</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
            

                  <li  onMouseEnter={handleOne}   className="flex justify-between  p-[7px] border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p  className="">Commercial Audio & Installed Sound</p>
                    <MdChevronRight size={20}></MdChevronRight>

                  </li>
               
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Commercial Audio Deals</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Commercial Installs</p>
                 
                  </li>
                 
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF] font-medium text-[#0072BA]">
                    <p className="  ">Cable Finder</p>
                  </li>
               
                  
                  </div>
                </ul>
                
                      </div>
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]   w-56 items-center justify-center "
                :"hidden"}>
<li className="flex items-center justify-center  h-[529px] p-[22px] ">

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
                    <p className="">Commercial Speakers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Commercial Power Amplifiers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="">Mixer Amplifiers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className="   ">Zone & Matrix Amplifiers</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Wall & Zone Controllers</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Conference Systems</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Video Projectors & Screens</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">CD,DVD, & Media Players</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Cables & Wire</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Power Conditioners</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Commercial Audio Accessories</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">Commercial Audio Design & Installation</p>
                    </li>
                 
                 
                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                            </div>
                            
                      </div>
                      </div>
                      </div>
                      </ul>

                     

                 
                      
                      </div>
                      </div>
              

                    
                </div>


















{/*Accessories Section*/}

<div onMouseLeave={handleAcc2} 
              className={acc?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseEnter={handleAd} className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
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
             
                      <ul className={ad?"flex-col border-l-[.1px] h-[532px]  w-56 items-center justify-center "
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























{/*Content CreatorsSection*/}


<div onMouseLeave={handleCC2} 
              className={cc?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div  className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[348px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Content Creators</h1>
                      <p className="w-[100px]">View all</p>
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
          
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Podcasting</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Livestreaming</p>
                 
                  </li>
                 
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Video Creators</p>
                  </li>
               
                  
                  </div>
                </ul>
                
                      </div>
             

                     

                 
                      
                      </div>
                      </div>
              

                    
                </div>









{/*Product Finders*/}

<div onMouseLeave={handlePF2} 
              className={pf?"w-0  flex -my-[2px] cursor-pointer top-0  h-[583px] ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div  className="flex-col bg-white  border-C7C5C1 border-[.1px] ">
                     <div className="flex items-center justify-between hover:bg-[#EFEFEF]  border-b-[.7px] border-b-C7C5C1">
                      <h1 onMouseEnter={handleHdr}  className="p-2 w-[448px] text-2xl  text-[#362D2D] hover:text-[#0072BA] ">Product Finders</h1>
                 
                    </div>
                      <div className="flex border-b-[.0px] border-b-C7C5C1 h-full   ">
                      <div className=" w-56  ">
                
                      <ul className="">
          
                 
                  <div onMouseEnter={handleAd}>
                
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Guitar Gallery</p>
                 
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Cable Finder</p>
                 
                  </li>
                 
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Case Finder</p>
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Mesa/Boogie Amp Customizer</p>
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">Westone Audio In-ear Customizer</p>
                  </li>
                  <li className="flex justify-between  p-[7px] hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA]">
                    <p className="  ">64 Audio In-ear Customizerr</p>
                  </li>
                  </div>
                </ul>
                
                      </div>
             

                     

                 
                      
                      </div>
                      </div>
              

                    
                </div>
              </div>
        </div>
        
         </div>
         </div>
         <div className="">
          {cat ? (
            <AiFillCaretUp className="" size={15} />
          ) : (
            <AiFillCaretDown className="" size={15} />
          )}
         </div>
         </Link>





























{/*End of categories Section*/}



   <div className='flex max-w-[192px]   min-w-[122px]   w-full h-[40px]   items-center justify-center hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA] cursor-pointer'><Link className="flex w-full h-full items-center justify-center text-center" to='/store'><p className='w-full h-full py-2 font-medium font-medium'>What's New</p></Link> </div>
     
{/*Deals Section*/}

        <Link to='/store' onMouseEnter={handleDeal} onTouchStart={handleDeal} onMouseLeave={handleDeal2} className='flex max-w-[161px] min-w-[88px]   w-full h-[40px]  justify-center items-center hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA] cursor-pointer'><p className='font-medium'>Deals</p>
        <div className="flex-col items-center  ">

        <div
        className={
              deal
                ? "w-0 h-0 relative flex cursor-pointer top-0 left-0 z-20  ease-in-out duration-0  z-10"
                : "ease-in-out duration-0 fixed left-[-100%]"
            }
          >
            <div className=" absolute block  xl:-mx-[92px] lg:-mx-[63px] xl:my-5 lg:my-[27px] md:-mx-[56px] md:my-[27px] w-60 border-C7C5C1 border-[.1px] bg-white items-center justify-center text-[#362D2D]">
            <div onMouseEnter={handleOne2} className="flex  h-12 justify-center items-center hover:bg-[#EFEFEF] border-b-[.7px] border-b-C7C5C1">
            <h1 className=" text-2xl text-[#362D2D]"><b>DEAL</b>ZONE</h1>
            </div>
              <div className="flex">

        <div className="flex-col w-full">
                <ul className="">
                  <li onMouseEnter={handleOne} className="flex p-2 justify-between  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Shop By Category</p>
                

<div   className={one?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0   ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"} >
                      <div onMouseLeave={handleOne2}  className="flex-col bg-white mx-[63px]  -my-[56px] h-fit border-C7C5C1 border-[.1px]">
                    
                      <ul  className="flex-col  w-[237px] ">
                      <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className="">Guitar Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Studio & Recording Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className="">Live Sound Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className="   ">Band & Orchestra Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Drums & Percussion Deals</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Software &Plugins Deals</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Accessories Deals</p>
                  </li> 
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Bass Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
                    <p className=" ">Keyboards & Synthesizer Deals</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] ">
                    <p className=" ">DJ Equipment Deals</p>
                  </li>

                </ul>
                <div onMouseEnter={handleOne2} className=" h-full w-10">
                  </div>
                
                            </div>
                            
                  
                      </div>
                    
                      {one ? (
            <AiFillCaretRight className="" size={15} />
          ) : (
            <AiFillCaretLeft className="" size={15} />
          )}

                  </li>
                  <li  onMouseEnter={handleOne2} className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Demos</p>
                  </li>
                  <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Rebates & Promos</p>
                  </li>
                  <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Price Drops</p>
                  </li>
                  <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Bundles</p>
                  </li>
                  <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Bonus Back</p>
                  </li>
                  <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Used</p>
                  </li>
                  <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">B-Stcok</p>
                  </li>
                </ul>
              </div>
              </div>
              </div>
              </div>
              </div>
              
              <div className="">
          {deal ? (
            <AiFillCaretUp className="" size={15} />
          ) : (
            <AiFillCaretDown className="" size={15} />
          )}
         </div>
        </Link>
      
        {/*Used Gear Section*/}
        <Link to='/store' onMouseEnter={handleUG} onTouchStart={handleUG} onMouseLeave={handleUG2}  className='flex max-w-[197px] min-w-[126px]    w-full h-[40px]    justify-center items-center hover:bg-[#EFEFEF]   text-[#362D2D] hover:text-[#0072BA] cursor-pointer'><p className='font-medium'>Used Gear</p>
        <div className="flex-col items-center  ">

<div
className={
      ug
        ? "flex relative w-0 h-0 mx-auto cursor-pointer top-0 left-0  ease-in-out duration-0  z-10"
        : "ease-in-out duration-0 fixed left-[-100%]"
    }
  >
    <div className=" absolute block xl:-mx-[127px] lg:-mx-[93px] xl:my-5 lg:my-[27px]  md:-mx-[92px] md:my-[27px] w-60 border-C7C5C1 border-[.1px] bg-white items-center justify-center text-[#362D2D]">
    <div onMouseEnter={handleTwo2} className="flex  h-12 justify-center items-center hover:bg-[#EFEFEF] border-b-[.7px] border-b-C7C5C1">
    <h1 className=" text-2xl text-[#362D2D]"><b>GEAR</b>EXCHANGE</h1>
    </div>
      <div className="flex">

<div className="flex-col w-full">
        <ul className="">
          <li onMouseEnter={handleTwo} className="flex p-2 justify-between  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
        
            <p className=" text-[#362D2D]  ">Shop By Category</p>
<div   className={two?"-my-[1px]  w-0 h-0 flex cursor-pointer top-0   ease-in-out duration-0"
        : "ease-in-out duration-0 fixed left-[-100%]"} >
              <div onMouseLeave={handleTwo2}  className="flex-col bg-white mx-[63px] -my-[56px] h-fit border-C7C5C1 border-[.1px]">
            
              <ul  className="flex-col  w-[237px] ">
              <li  className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Guitars</p>
          </li>
          <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D] ">Used Effects & Pedals</p>
          </li>
          <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Amplifiers</p>
          </li>
          <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className=" text-[#362D2D]  ">Used Basses</p>
          </li>
          <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Keyboards & Synthesizers</p>
          </li>
          <li className="p-2  border-b-[.7px] border-b-C7C5C1 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D] ">Used Microphones & Wireless</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Live Sound & Lighting</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Studio & Recording</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Drum & Percussion</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Band & Orchestra</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used DJ / Electronic</p>
          </li>
          <li className="p-2   hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
            <p className="text-[#362D2D]  ">Used Folk Instruments</p>
          </li>
        </ul>
        <div onMouseEnter={handleTwo2} className=" h-full w-10">
         

         
          </div>
                    </div>
                    
          
              </div>
            
              {one ? (
    <AiFillCaretRight className="" size={15} />
  ) : (
    <AiFillCaretLeft className="" size={15} />
  )}

          </li>
         
<li onMouseEnter={handleTwo2} className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className="">What is Gear Exchange?</p>
          </li>
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className=" ">How it Works</p>
          </li>
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className="">Seller Fees</p>
          </li>
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className="   ">Create a Listing</p>
          </li>
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className=" ">My Messages</p>
          </li> 
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className=" ">My Purchases</p>
          </li> 
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className=" ">Help Center</p>
          </li> 
          <li className="p-2 hover:bg-[#EFEFEF] text-[#362D2D] hover:text-[#0072BA] border-b-[.7px] border-b-C7C5C1">
            <p className=" ">Bass Deals</p>
          </li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div className=" ">
  {ug ? (
    <AiFillCaretUp className="" size={15} />
  ) : (
    <AiFillCaretDown className="" size={15} />
  )}
 </div>

</Link>


        <div className='flex  h-[40px] max-w-[160px]  min-w-[88px]  w-full justify-center items-center text hover:bg-[#EFEFEF]  text-[#362D2D] hover:text-[#0072BA] cursor-pointer'><Link className="flex w-full h-full items-center justify-center text-center" to='/store'><p className='w-full h-full py-2 font-medium'>Rentals</p></Link></div>
        <div className='flex  h-[40px] max-w-[227px] min-w-[156px]   w-full  justify-center items-center hover:bg-[#EFEFEF]  text-[#362D2D] hover:text-[#0072BA] cursor-pointer'><Link className="flex w-full h-full items-center justify-center text-center" to='/store'><p className='w-full h-full py-2 font-medium'>Articles & Videos</p></Link></div>
        <div className='flex  h-[40px] max-w-[177px]   w-full  justify-center items-center hover:bg-[#EFEFEF]  text-[#362D2D] hover:text-[#0072BA] cursor-pointer hidden lg:flex'><Link className="flex w-full h-full items-center justify-center text-center" to='/store'><p className='w-full h-full py-2 font-medium'> Giveaway</p></Link></div>
        <div className='flex  h-[40px] max-w-[230px]   w-full  justify-center items-center hover:bg-[#EFEFEF]  text-[#362D2D] hover:text-[#0072BA] cursor-pointer hidden lg:flex'><Link className="flex w-full h-full items-center justify-center text-center" to='/store'><p className='w-full h-full py-2 font-medium '>Sourwater Card</p></Link></div>






    </div>
  )
}

export default Header