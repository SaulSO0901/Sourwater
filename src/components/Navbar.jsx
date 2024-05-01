import React, { useState } from "react";
import logo from "../assets/navbar/logo.png";
import guitar from "../assets/navbar/V.png";
import strat from "../assets/navbar/Strat.JPG";
import key from "../assets/navbar/Key.JPG";
import sup from "../assets/navbar/customer-service-support.svg";

import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineClose,
  AiTwotoneMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [acc, setAcc] = useState(false);
  const [con, setCon] = useState(false);
  const [not, setNot] = useState(false);
  const [mail, setMail] = useState(false);
  const [cell, setCell] = useState(false);
  const [supp, setSupp] = useState(false);
  const [crt, setCrt] = useState(false);
  const exit = () => {
    setAcc(false);
    setCon(false);
    setNot(false);
    setCrt(false);
  };

  const handleAcc = () => {
    setAcc(!acc);
  };

  const handleCrt = () => {
    setCrt(!crt);
  };

  const handleCon = () => {
    setCon(!con);
  };

  const handleNot = () => {
    setNot(!not);
  };

  const handleCell = () => {
    setCell(!cell);
  };
  const handleSupp = () => {
    setSupp(!supp);
  };
  const handleMail = () => {
    setMail(!mail);
  };
  return (
    <div className="flex  items-center  justify-center h-[80px] w-full hidden md:flex  px-10 -my-2 mx-auto   text-[#000] border-b-[.7px] border-b-C7C5C select-none">
      <div className="flex items-center h-full">
        <Link to="/home">
          <img
            src={logo}
            className="w-full min-w-[160px] md:max-w-[160px] xl:max-w-[190px]  h-11 "
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex w-full  max-w-[738px] min-w-[138px] items-stretch h-10 mx-2 my-6 border-C7C5C1 border-[.1px] rounded-sm ring-[#C7C5C1] ring-1 hover:ring-4 hover:ring-gray-800  ">
        <button className="h-10 rounded-sm bg-[#EFEFEF] p-4 py-2">
          <AiOutlineSearch size={20}></AiOutlineSearch>
        </button>
        <input
          className="h-10 w-full  bg-[#EFEFEF] justify-start text-[#B0ACAC] outline-none "
          placeholder="Search for sour gear"
        ></input>
      </div>

      {/*Notif section*/}
      <div
        className=" flex h-full items-center p-5 cursor-pointer hover:bg-[#EFEFEF]  "
        onMouseEnter={handleNot}
        onTouchStart={handleNot}
        onMouseLeave={exit}
      >
        <div className=" flex-row items-center">
          {" "}
          <IoNotifications
            color="#362D2D"
            className="h-7 w-7"
          ></IoNotifications>
          <div
            className={
              not
                ? "h-0 w-0 -mx-5 left-0 top-0  ease-in-out duration-0 "
                : "ease-in-out duration-0 fixed left-[-100%]"
            }
          >
            <div className="flex my-6 absolute border-C7C5C1 border-[.5px]  bg-white  ">
              <div className="flex-col ">
                <Link to="/product">
                  <div
                    className={
                      "flex  ring-[#C7C5C1]  ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer "
                    }
                  >
                    <div className="flex my-2 p-4 items-center  ">
                      <img
                        alt="guitar"
                        className=" h-20 w-20 p-1 border-C7C5C1 border-[.8px] "
                        src={guitar}
                      ></img>
                    </div>
                    <div className="flex-col px-2 py-2  ">
                      <button className="p-1 bg-[#428631] rounded-xl items-center ">
                        <p className=" mx-1 text-xs text-[#FFFFFF]">
                          Price drop
                        </p>
                      </button>

                      <div className=" w-40 p-[.5px]">
                        <p className="text-[#362D2D] text-sm font-medium">
                          ESP James Hetfield Signature Vulture-Black Satin
                        </p>
                      </div>
                      <div className="p-[.5px]">
                        <p className=" text-xs text-red-600">$5,699.00</p>
                      </div>
                      <div className="flex p-[.5px] ">
                        {" "}
                        <MdOutlineFavoriteBorder color="#362D2D"></MdOutlineFavoriteBorder>
                        <p className="text-[#362D2D] text-xs font-light ">
                          {" "}
                          Recently viewed{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                <div
                  className={
                    "flex  ring-[#C7C5C1] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer "
                  }
                >
                  <div className="flex items-center my-2 p-4 ">
                    <img
                      alt="strato"
                      className="border-C7C5C1 border-[.8px] h-20 w-20 p-1  "
                      src={strat}
                    ></img>
                  </div>
                  <div className=" px-2 py-2  ">
                    <button className="items-center p-1 bg-[#428631] rounded-xl ">
                      <p className=" mx-1 text-xs text-[#FFFFFF]">Price drop</p>
                    </button>

                    <div className=" w-40 p-[.5px]">
                      <p className="text-[#362D2D] text-sm font-medium ">
                        Fender Mike McCready Stratocaster Electric Guitar -
                        3-color Sunburst{" "}
                      </p>
                    </div>
                    <div className="p-[.5px]">
                      <p className=" text-xs text-red-600">$5,699.00</p>
                    </div>
                    <div className="flex p-[.5px] ">
                      {" "}
                      <MdOutlineFavoriteBorder color="#362D2D"></MdOutlineFavoriteBorder>
                      <p className="text-[#362D2D] text-xs font-light ">
                        {" "}
                        Recently viewed{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    "flex  ring-[#C7C5C1] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 cursor-pointer "
                  }
                >
                  <div className="flex  my-2 p-4 items-center ">
                    <img
                      alt="keyboard"
                      className="h-20 w-20 p-1 py-4 border-C7C5C1 border-[.8px]  "
                      src={key}
                    ></img>
                  </div>
                  <div className=" px-2 py-2   ">
                    <button className="items-center p-1 bg-[#428631] rounded-xl ">
                      <p className=" mx-1 text-xs text-[#FFFFFF]">Price drop</p>
                    </button>

                    <div className=" w-40 p-[.5px]">
                      <p className="text-[#362D2D] text-sm font-medium ">
                        Roland FP-30X Digital Piano with Speakers - Black{" "}
                      </p>
                    </div>
                    <div className="p-[.5px]">
                      <p className=" text-xs text-red-600">$5,699.00</p>
                    </div>
                    <div className="flex p-[.5px] ">
                      {" "}
                      <MdOutlineFavoriteBorder color="#362D2D"></MdOutlineFavoriteBorder>
                      <p className="text-[#362D2D] text-xs font-light ">
                        {" "}
                        Recently viewed{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col h-[410px] w-fit   ">
                <div className="flex items-center h-[136px]   hover:bg-[#f58484] ease-in-out duration-200 ">
                  {" "}
                  <AiOutlineClose
                    color="#362D2D"
                    className=" w-24"
                  ></AiOutlineClose>
                </div>
                <div className="flex items-center h-[136px]    hover:bg-[#f58484] ease-in-out duration-200 ">
                  {" "}
                  <AiOutlineClose
                    color="#362D2D"
                    className=" w-24"
                  ></AiOutlineClose>
                </div>
                <div className="flex items-center h-[136px]    hover:bg-[#f58484] ease-in-out duration-200 ">
                  {" "}
                  <AiOutlineClose
                    color="#362D2D"
                    className=" w-24"
                  ></AiOutlineClose>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Notif section end*/}

      <div className="flex-col h-full items-center p-4 hover:bg-[#EFEFEF] cursor-pointer hidden  lg:flex">
        <ul className="  ">
          <li className=" h-10 w-40 hover:border-b-[#0072BA] hover:border-b-[.1px]  ">
            <p className="text-2xl text-[#0072BA] ">(800)224-4701</p>
          </li>
          <li className="">
            {" "}
            <p className="text-[#362D2D] text-xs mx-1">
              English: (800)222-4700
            </p>
          </li>
        </ul>
      </div>

      {/*Contact us section*/}
      <div
        onMouseEnter={handleCon}
        onTouchStart={handleCon}
        onMouseLeave={exit}
        className="flex min-w-[144px] w-36 h-full  p-2 py-6  items-center   hover:bg-[#EFEFEF]  cursor-pointer  "
      >
        <div className="flex-col items-center  ">
          <p className="text-[#362D2D] text-medium font-medium">Contact Us </p>{" "}
          <p className="text-[#362D2D] text-xs">We’re here to help</p>
          <div
            className={
              con
                ? "w-0 h-0 flex cursor-pointer top-0  border-r border-r-gray-900  ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"
            }
          >
            <div className=" absolute block w-60 my-5 -mx-2  border-C7C5C1 border-[.1px] bg-white ">
              <div className="flex  py-4 border-b-[.7px] border-b-C7C5C1  ">
                <div className="flex mx-2 justify-start items-start   ">
                  <img
                    className="w-24 h-20 p-1 border-C7C5C1  border-[.8px] rounded-full "
                    src={sup}
                    alt="support"
                  ></img>
                </div>

                <div className="flex  ">
                  <ul className="justify-center  items-center">
                    <li>
                      <p className="text-[#362D2D] text-lg font-medium">
                        Need Help?
                      </p>
                    </li>
                    <li>
                      <p className="text-[#362D2D] text-sm">
                        Contact your sales engineer
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-b-[.7px] border-b-C7C5C1">
                <ul className="flex py-2 mx-2 justify-center     ">
                  <li
                    onMouseEnter={handleMail}
                    onMouseLeave={handleMail}
                    className="border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]"
                  >
                    {mail ? (
                      <AiTwotoneMail
                        className="p-1"
                        color="#0072BA"
                        size={60}
                      />
                    ) : (
                      <AiTwotoneMail
                        color="#362D2D"
                        className="p-1"
                        size={60}
                      />
                    )}
                    <p className="mx-3 text-[#362D2D]  ">Email</p>
                  </li>
                  <li
                    onMouseEnter={handleCell}
                    onMouseLeave={handleCell}
                    className="border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]"
                  >
                    {cell ? (
                      <BsPhoneFill
                        className="p-1 py-[7px]"
                        color="#0072BA"
                        size={60}
                      />
                    ) : (
                      <BsPhoneFill
                        color="#362D2D"
                        className="p-1 py-[7px]"
                        size={60}
                      />
                    )}
                    <p className="mx-4 text-[#362D2D]">Call</p>
                  </li>

                  <li
                    onMouseEnter={handleSupp}
                    onMouseLeave={handleSupp}
                    className="border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]"
                  >
                    {supp ? (
                      <BiSupport className="p-1" color="#0072BA" size={60} />
                    ) : (
                      <BiSupport color="#362D2D" className="p-1" size={60} />
                    )}
                    <p className="text-[#362D2D] mx-1">Support</p>
                  </li>
                </ul>
              </div>

              <div className="flex-col  py-2">
                <ul className="">
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className=" text-[#362D2D]  ">Toll free:(800)333-8111</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Español:(800)333-8119</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D] ">Local:(211)777-3111</p>
                  </li>
                  <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                    <p className="text-[#362D2D]  ">Fax:(800)999-8111</p>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center bg-[#f2f1f0] ">
                <uL className="p-4 ">
                  <li className="-my-1">
                    <p>Your cart ID is</p>
                  </li>
                  <li>
                    <p className=" text-2xl">211XS09</p>
                  </li>
                </uL>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {con ? (
            <AiFillCaretUp className="mx-1" size={20} />
          ) : (
            <AiFillCaretDown className="mx-1" size={20} />
          )}
        </div>
      </div>
      {/*Account Section */}
      <div
        onMouseEnter={handleAcc}
        onTouchStart={handleAcc}
        onMouseLeave={exit}
        className="flex h-full p-2 items-center  hover:bg-[#EFEFEF] cursor-pointer  "
      >
        <div className=" items-center">
          {" "}
          <p className="">Acccount </p>
          <div
            className={
              acc
                ? "w-0 h-0  left-0 top-0   ease-in-out duration-0"
                : "ease-in-out duration-0 fixed left-[-100%]"
            }
          >
            <div className="block absolute w-60  my-7  -mx-[138.9px]   border-C7C5C1 border-[.1px] bg-white">
              <div className=" border-b border-b-C7C5C1 ">
                <div className=" flex p-4 w-full justify-center items-center  ">
                  <ul className="">
                    <li className="flex justify-center items-center">
                      {" "}
                      <button className=" px-9 py-3 bg-[#0072BA] ">
                        <p className=" text-lg text-white font-semibold">
                          Log in
                        </p>
                      </button>
                    </li>
                    <li className=" my-2 text-sm">
                      {" "}
                      <p>
                        New here?
                        <div className=" underline text-[#0072BA]">
                          Create your account.
                        </div>{" "}
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="flex-col  py-2">
                  <ul className="">
                    <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                      <p className=" text-[#362D2D]  ">
                        Check Your Order Status
                      </p>
                    </li>
                    <li className="p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] ">
                      <p className="text-[#362D2D]  ">Check yYour List</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {acc ? (
          <AiFillCaretUp className="mx-1" size={20} />
        ) : (
          <AiFillCaretDown className="mx-1" size={20} />
        )}
      </div>
      {/*Shopping Cart Section*/}
      <div
        onMouseEnter={handleCrt}
        onTouchStart={handleCrt}
        onMouseLeave={exit}
        className="flex-col items-center hover:bg-[#EFEFEF] cursor-pointer p-2  "
      >
        <div className="items-center my-4 ">
          <AiOutlineShoppingCart className="h-8 min-w-[37px] "></AiOutlineShoppingCart>
        </div>

        <div
          className={
            crt
              ? "w-0 h-0 left-0 top-0   ease-in-out duration-0"
              : "ease-in-out duration-0 fixed left-[-100%]"
          }
        >
          <div className="block absolute  w-60  my-2 -mx-[168px] border-C7C5C1 border-[.1px] bg-white ">
            <div className=" border-b border-b-C7C5C1  ">
              <div className="flex-col  py-2">
                <ul className="flex  justify-center items-center">
                  <li className="p-2 hover:bg-[#EFEFEF] font-semibold">
                    <p className=" text-[#362D2D]  ">Your Cart Is Empty</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
