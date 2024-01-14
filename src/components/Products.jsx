import React from 'react'
import { images} from '../constants';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
const Products = () => {
  return (
   
<div className="grid grid-cols-5 w-full  mt-4 border-[.1px] border-C7C5C1  ">

<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product1} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1  text-sm  font-medium text-[#362D2D]">ESP James Hetfield Signature Vulture - Black Satin</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$5,699.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $119/month with
48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product2} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm font-medium text-[#362D2D]">Gibson Kirk Hammett "Greeny" Les Paul Standard Electric Guitar - Greeny Burst</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$3,199.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $89/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product22} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD EC-1000 Baritone Electric Guitar - Charcoal Metallic Satin</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,299.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $28/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(10)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product4} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD MH-1000 Baritone Electric Guitar - Black Satin</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,199.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $25/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(6)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product5} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD EC-1000 Electric Guitar - Vintage Black</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,099.000</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $23/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>
{/*//////////////////////////////////*/}

<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product6} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD M-1000 Electric Guitar - Snow White</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,399.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $30/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(5)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product7} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD James Hetfield Iron Cross SW - Snow White</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,599.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $34/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(15)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product8} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD M-Black Metal - Black Satin</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,099.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $23/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(9)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product9} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD EX-7 Baritone Black Metal Electric Guitar - Black Satin</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,049.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $22/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(4)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product10} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">ESP LTD TE-1000 Electric Guitar - Snow White</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,299.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $28/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(25)</p>
</div>
</div>

{/*///////////////////////////////////////////*/}
<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product11} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Epiphone Firebird Electric Guitar - Vintage Sunburst</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$649.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $19/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(45)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product12} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Fender American Ultra Stratocaster - Black with Roasted Maple Fingerboard</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$$2,199.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $46/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(8)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product21} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Epiphone 1958 Korina Flying V Left-handed Electric Guitar - Natural</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,299.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $37/month with 36 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(10)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product14} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Gibson Custom 1968 Les Paul Custom Reissue - Ebony</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$6,199.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $173/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(12)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product15} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Squier Paranormal Jazzmaster XII 12-string Electric Guitar - Lake Placid Blue</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$499.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $38/month with 12 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(17)</p>
</div>
</div>
{/*////////////////////////////////////////*/}

<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product16} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Epiphone Les Paul Standard '50s Electric Guitar - Lemon Burst</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$649.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $19/month with 36 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(811)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product17} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Ibanez Genesis Collection RG550 - Purple Neon</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$999.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $21/month with 48 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(55)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product18} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Jackson Pro Series Rhoads RRT3 - Ivory with Black Pinstripes</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,049.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $30/month with 36 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(23)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product19} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Jackson Rhoads JS32T - White with Black Bevels</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$369.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $32/month with 12 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(30)</p>
</div>
</div>


<div className="flex-col p-2 mt-2 text-center border-b-[.1px] border-C7C5C1 ">
  <Link className="flex-col w-full justify-center text-center">
<img src={images.product20} className="max-w-[199px] max-h-[219px] mx-auto"></img>
<p className="w-full h-[50px] mt-1 text-sm  font-medium text-[#362D2D]">Jackson Pro Series Dave Davidson Signature Warrior WR7 - Natural Walnut</p>
</Link>
<p className="w-full mt-2 font-medium text-[#ED2C2C]">$1,449.00</p>
<p className="w-full my-2 px-2 text-sm font-medium text-[#362D2D]">Or $41/month with 36 month financing</p>
<div className="flex w-full mt-4 justify-center items-center">
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D]">(11)</p>
</div>
</div>
{/*////////////////////////////*/}




{/*///////////////////////////////////////////////*/}
</div>
  )
}

export default Products