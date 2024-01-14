import React, { useState,Fragment } from "react";
import { Link } from 'react-router-dom'
import { AiFillCaretRight,AiFillCaretDown,} from "react-icons/ai";
import { Menu, Transition } from '@headlessui/react'
import Products from "./Products";
import RecentlyV from './RecentlyV'
const Catalog = () => {

  const [stk, setStk] = useState(false);
  const [pro, setPro] = useState(false);

  const [esp, setEsp] = useState(false);
  const [gbs, setGbs] = useState(false);
  const [jks, setJks] = useState(false);
  const [fnd, setFnd] = useState(false);
  const [eph, setEph] = useState(false);
  const [sqr, setSqr] = useState(false);
  const [hbn, setHbn] = useState(false);

  const [prf, setPrf] = useState(false);
  const [prs, setPrs] = useState(false);
  const [prt, setPrt] = useState(false);
  const [prfo, setPrfo] = useState(false);
  const [prfi, setPrfi] = useState(false);
  const [prsx, setPsx] = useState(false);


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const handleStk = () => {
    setStk(true);
  };
  const handleStk2 = () => {
    setStk(false);
  };

  
  const handlePro = () => {
    setPro(true);
  };
  const handlePro2 = () => {
    setPro(false);
  };

  
  const handleEsp = () => {
    setEsp(true);
  };
  const handleEsp2 = () => {
    setEsp(false);
  };

  const handleGbs = () => {
    setGbs(true);
  };
  const handleGbs2 = () => {
    setGbs(false);
  };

  const handleJks = () => {
    setJks(true);
  };
  const handleJks2 = () => {
    setJks(false);
  };

  const handleFnd = () => {
    setFnd(true);
  };
  const handleFnd2 = () => {
    setFnd(false);
  };

  const handleEph = () => {
    setEph(true);
  };
  const handleEph2 = () => {
    setEph(false);
  };
  const handleSqr = () => {
    setSqr(true);
  };
  const handleSqr2 = () => {
    setSqr(false);
  };

  const handleHbn = () => {
    setHbn(true);
  };
  const handleHbn2 = () => {
    setHbn(false);
  };

  
  const handlePrf = () => {
    setPrf(true);
  };
  const handlePrf2 = () => {
    setPrf(false);
  };

  
  const handlePrs = () => {
    setPrs(true);
  };
  const handlePrs2 = () => {
    setPrs(false);
  };

  
  const handlePrt = () => {
    setPrt(true);
  };
  const handlePrt2 = () => {
    setPrt(false);
  };
  
  const handlePrfo = () => {
    setPrfo(true);
  };
  const handlePrfo2 = () => {
    setPrfo(false);
  };
  
  const handlePrfi = () => {
    setPrfi(true);
  };
  const handlePrfi2 = () => {
    setPrfi(false);
  };

  const handlePsx = () => {
    setPsx(true);
  };
  const handlePsx2 = () => {
    setPsx(false);
  };
  return (
    <div className='flex-col max-w-[1488px] w-full mt-8 mx-auto '>
      <p className='text-sm font-light text-[#362D2D]'>Guitars/Electric Guitars</p>
<h2 className='mt-4 py-4 text-4xl font-medium text-[#362D2D] border-b-[.7px] border-b-C7C5C1'>Electric Guitars</h2>

<div className='flex w-full'>


<div className='flex-col max-w-[250px] w-full h-[1742px] mt-4 border-[.1px] border-C7C5C1 border-l-[.0px]  border-b-[.0px] '>
<div className="flex-col  border-b-[.1px] border-b-C7C5C1">
<h2 className='py-4 text-2xl font-medium  text-[#0072BA] border-b-[.1px] border-b-C7C5C1'>Refine Your Search</h2>
<p to='/store' className='py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1'>Availability </p>
<Link to='/store' onMouseEnter={handleStk} onMouseLeave={handleStk2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={stk ? true : false}></input><p className='text-sm text-[#362D2D] '>In Stock (15)</p></Link>
<Link to='/store' onMouseEnter={handlePro} onMouseLeave={handlePro2} className='flex my-2 mb-4'><input className='p-2 mr-2' type='checkbox' checked={pro ? true : false}></input><p className='text-sm text-[#362D2D]'>Pre-order (25)</p></Link>
</div>

<div className="flex-col">
<h2 className="py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1">Brand</h2>

<Link to='/store' onMouseEnter={handleEsp} onMouseLeave={handleEsp2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={esp ? true : false}></input><p className='text-sm text-[#362D2D] '>ESP (15)</p></Link>
<Link to='/store' onMouseEnter={handleGbs} onMouseLeave={handleGbs2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={gbs ? true : false}></input><p className='text-sm text-[#362D2D] '>Gibson (12)</p></Link>
<Link to='/store' onMouseEnter={handleJks} onMouseLeave={handleJks2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={jks ? true : false}></input><p className='text-sm text-[#362D2D] '>Jackson (7)</p></Link>
<Link to='/store' onMouseEnter={handleFnd} onMouseLeave={handleFnd2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={fnd ? true : false}></input><p className='text-sm text-[#362D2D] '>Fender (6)</p></Link>
<Link to='/store' onMouseEnter={handleEph} onMouseLeave={handleEph2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={eph ? true : false}></input><p className='text-sm text-[#362D2D] '>Epiphone (6)</p></Link>
<Link to='/store' onMouseEnter={handleSqr} onMouseLeave={handleSqr2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={sqr ? true : false}></input><p className='text-sm text-[#362D2D] '>Squire (5)</p></Link>
<Link to='/store' onMouseEnter={handleHbn} onMouseLeave={handleHbn2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={hbn ? true : false}></input><p className='text-sm text-[#362D2D] '>Harley Benton (15)</p></Link>

<div className="flex-col">
<h2 className="py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1">Price range</h2>

<Link to='/store' onMouseEnter={handlePrf} onMouseLeave={handlePrf2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prf ? true : false}></input><p className='text-sm text-[#362D2D] '>$100 to $200 (5)</p></Link>
<Link to='/store' onMouseEnter={handlePrs} onMouseLeave={handlePrs2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prs ? true : false}></input><p className='text-sm text-[#362D2D] '>$200 to $300 (5)</p></Link>
<Link to='/store' onMouseEnter={handlePrt} onMouseLeave={handlePrt2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prt ? true : false}></input><p className='text-sm text-[#362D2D] '>$500 to 7500 (15)</p></Link>
<Link to='/store' onMouseEnter={handlePrfo} onMouseLeave={handlePrfo2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prfo ? true : false}></input><p className='text-sm text-[#362D2D] '>$1000 to $1500 (15)</p></Link>
<Link to='/store' onMouseEnter={handlePrfi} onMouseLeave={handlePrfi2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prfi ? true : false}></input><p className='text-sm text-[#362D2D] '>$1500 to $2000 (10)</p></Link>
<Link to='/store' onMouseEnter={handlePsx} onMouseLeave={handlePsx2} className='flex mt-4'><input className='p-2 mr-2' type='checkbox' checked={prsx ? true : false}></input><p className='text-sm text-[#362D2D] '>$300 and over (8)</p></Link>
<div className="flex mt-4 items-center">$<input className="w-14 mx-1 border-[.1px] border-C7C5C1"></input>To$<input  className=" w-14 mx-1 border-[.1px] border-C7C5C1"></input><Link to='/store'><AiFillCaretRight></AiFillCaretRight></Link></div>
</div>
  
</div>
</div>
{/*///////////////////////////////////////////////////////*/}
<div className="flex-col w-full ml-12 mt-4  py-4 ">
<div className="flex items-center justify-between ">

<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#8A8A8A] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Most Popular
          <AiFillCaretDown className="-mr-1 h-5 w-5 text-[#8A8A8A]" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10  w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-[#C7C5C1] ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Most Popular
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Customers rating
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Lightest Guitar
                </a>
              )}
            </Menu.Item>
        
              <Menu.Item>
                {({ active }) => (
                  <button
                  
                    className={classNames(
                      active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                   Newest Arivals
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Price:High-Low
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Price:Low-High
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-[#8A8A8A]' : 'text-[#8A8A8A]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Brand:A-Z
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    
<div className="flex h-fit mx-auto text-[#8A8A8A] font-medium ">
<p>1-42 of 2111 Products</p>
</div>

<div className="flex h-8 mr-4 items-center justify-center text-[#8A8A8A] font-medium">
<p className="">Page</p>
<div className="  px-4 mx-2 border-[.1px] border-C7C5C1 shadow-sm">1</div>
<p className="mr-1">of 81</p>
<Link className="py-2 px-4 hover:bg-[#ed592c] hover:text-white">
<AiFillCaretRight size={20}  />
</Link>
</div>


</div>
<Products></Products>

<div className="flex w-full mt-4 justify-center">
<button className="p-2 px-3 mx-1 bg-[#ed592c] text-white font-bold ">1</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">2</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">3</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">4</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">5</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">6</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">7</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">8</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">...</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">88</button>
<button className="p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">89</button>

</div>

</div>

    </div>

    </div>
    
  )
}

export default Catalog