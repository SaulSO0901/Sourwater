import React, { useState } from "react";
import { images} from '../constants';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
const Products = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav2 = () => {
    setNav(false);
  };
 const handleNav = () => {
    setNav(!nav);
  };
  return (
   
<div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[1px]:grid-cols-1 max-w-[1190px]   w-full  mt-4 border-[.1px] border-C7C5C1  ">

<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product1} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP James Hetfield Signature Vulture - Black Satin</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[60px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP James Hetfield Signature Vulture - Black Satin</p>
<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$5,699.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $119/month with
48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>
</div>


<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
<Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product2} className="md:max-w-[199px] max-w-[149px] max-h-[219px] mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Gibson Kirk Hammett "Greeny" Les Paul Standard Electric Guitar </p>
</Link>


<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Gibson Kirk Hammett "Greeny" Les Paul Standard Electric Guitar - Greeny Burst</p>
<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$3,199.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $89/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product22} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2  mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD EC-1000 Baritone Electric Guitar - Charcoal Metallic Satin</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD EC-1000 Baritone Electric Guitar - Charcoal Metallic Satin</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,299.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $28/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(10)</p>
</div>
</div>
</div>


<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product4} className="md:max-w-[199px] max-w-[149px] max-h-[219px]  mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD MH-1000 Baritone Electric Guitar - Black Satin</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD MH-1000 Baritone Electric Guitar - Black Satin</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$$1,199.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $25/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(10)</p>
</div>
</div>
</div>


<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product5} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2  mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD EC-1000 Electric Guitar - Vintage Black</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD EC-1000 Electric Guitar - Vintage Black</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,099.000</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $23/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>
</div>


{/*//////////////////////////////////*/}


<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product6} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD M-1000 Electric Guitar - Snow White</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD M-1000 Electric Guitar - Snow White</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,399.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $30/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(15)</p>
</div>
</div>
</div>





<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product7} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD James Hetfield Iron Cross SW - Snow White</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD James Hetfield Iron Cross SW - Snow White</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,599.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $34/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(15)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product8} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD M-Black Metal - Black Satin</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD M-Black Metal - Black Satin</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,099.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $23/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(9)</p>
</div>
</div>
</div>





<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product9} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD EX-7 Baritone Black Metal Electric Guitar - Black Satin</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD EX-7 Baritone Black Metal Electric Guitar - Black Satin</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,049.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $22/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(29)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product10} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP LTD TE-1000 Electric Guitar - Snow White</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">ESP LTD TE-1000 Electric Guitar - Snow White</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,299.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $28/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(25)</p>
</div>
</div>
</div>
{/*///////////////////////////////////////////*/}

<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product11} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Epiphone Firebird Electric Guitar - Vintage Sunburst</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Epiphone Firebird Electric Guitar - Vintage Sunburst</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$649.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $19/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(35)</p>
</div>
</div>
</div>




<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product12} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Fender American Ultra Stratocaster - Black</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Fender American Ultra Stratocaster - Black with Roasted Maple Fingerboard</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$2,199.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $46/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(8)</p>
</div>
</div>
</div>





<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product21} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Epiphone 1958 Korina Flying V Left-handed Electric Guitar - Natural</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Epiphone 1958 Korina Flying V Left-handed Electric Guitar - Natural</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,299.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $36/month with 36 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(18)</p>
</div>
</div>
</div>


<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product14} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Gibson Custom 1968 Les Paul Custom Reissue - Ebony</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Gibson Custom 1968 Les Paul Custom Reissue - Ebony</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$6,199.0</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $173/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(12)</p>
</div>
</div>
</div>





<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product15} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Squier Paranormal Jazzmaster XII 12-string Electric Guitar - Lake Placid Blue</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Squier Paranormal Jazzmaster XII 12-string Electric Guitar - Lake Placid Blue</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$499.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $38/month with 12 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(22)</p>
</div>
</div>
</div>


{/*////////////////////////////////////////*/}

<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product16} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Epiphone Les Paul Standard '50s Electric Guitar - Lemon Burst</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Epiphone Les Paul Standard '50s Electric Guitar - Lemon Burst</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$649.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $19/month with 36 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(811)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product17} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Ibanez Genesis Collection RG550 - Purple Neon</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Ibanez Genesis Collection RG550 - Purple Neon</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$999.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $21/month with 48 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(55)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product18} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Jackson Pro Series Rhoads RRT3 - Ivory with Black Pinstripes</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Jackson Pro Series Rhoads RRT3 - Ivory with Black Pinstripes</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,049.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $30/month with 36 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(91)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product19} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Jackson Rhoads JS32T - White with Black Bevels</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Jackson Rhoads JS32T - White with Black Bevels</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$369.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $32/month with 12 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(31)</p>
</div>
</div>
</div>



<div className="md:flex-col min-[1px]:flex md:max-w-[237px] max-h-[410px]  w-full h-full p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-fit md:w-full justify-center text-center">
<img src={images.product20} className="md:max-w-[199px] max-w-[149px] max-h-[219px] px-2 mx-auto"></img>
<p className="w-full hidden md:flex h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">Jackson Pro Series Dave Davidson Signature Warrior WR7</p>
</Link>

<div className='flex-col'>
<p className="w-full md:hidden h-[80px]  text-left justify-normal text-sm font-medium text-[#362D2D]">Jackson Pro Series Dave Davidson Signature Warrior WR7 - Natural Walnut</p>

<p className="w-full mt-2  text-left md:text-center font-semibold text-lg text-[#ED2C2C]">$1,449.00</p>
<p className="w-full  my-2 md:px-2 text-left md:text-center md:text-sm font-medium text-[#362D2D]">Or $41/month with 36 month financing</p>
<div className="flex  w-full mt-4 text-left md:text-center md:justify-center md:items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(11)</p>
</div>
</div>
</div>

{/*////////////////////////////*/}




{/*///////////////////////////////////////////////*/}
</div>
  )
}

export default Products