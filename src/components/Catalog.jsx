import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import Products from "./Products";

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
  const [prsx, setPrsx] = useState(false);
  const [nav, setNav] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleStk = () => {
    setStk(!stk);
  };

  const handlePro = () => {
    setPro(!pro);
  };

  const handleEsp = () => {
    setEsp(!esp);
  };

  const handleGbs = () => {
    setGbs(!gbs);
  };

  const handleJks = () => {
    setJks(!jks);
  };

  const handleFnd = () => {
    setFnd(!fnd);
  };

  const handleEph = () => {
    setEph(!eph);
  };

  const handleSqr = () => {
    setSqr(!sqr);
  };

  const handleHbn = () => {
    setHbn(!hbn);
  };

  const handlePrf = () => {
    setPrf(!prf);
  };

  const handlePrs = () => {
    setPrs(!prs);
  };

  const handlePrt = () => {
    setPrt(!prt);
  };

  const handlePrfo = () => {
    setPrfo(!prfo);
  };

  const handlePrfi = () => {
    setPrfi(!prfi);
  };

  const handlePrsx = () => {
    setPrsx(!prsx);
  };

  const handleNav2 = () => {
    setNav(false);
  };
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      onAuxClick={handleNav2}
      className={
        nav
          ? "flex-col max-w-[1488px]   w-full mt-8  mx-auto "
          : "flex-col max-w-[1488px]   w-full mt-8  mx-auto "
      }
    >
      <p className="w-full min-[1px]:hidden md:flex text-sm font-light text-[#362D2D]">
        Guitars/Electric Guitars
      </p>

      <h2 className="min-[1px]:hidden md:flex  mt-4 py-4 text-4xl font-medium text-[#362D2D] border-b-[.7px] border-b-C7C5C1">
        Electric Guitars
      </h2>
      <div className="flex h-fit  min-[1px]:flex md:hidden mx-auto text-[#8A8A8A] font-medium ">
        <h2 className="w-full  text-2xl font-medium text-[#362D2D] border-b-[.7px] border-b-C7C5C1">
          Electric Guitars
        </h2>
        <p className="w-full border-b-[.7px] border-b-C7C5C1'">
          1-42 of 2111 Products
        </p>
      </div>

      <div className="flex  w-full ">
        <div className="md:flex min-[1px]:hidden min-[770px]:max-w-[250px] md:max-w-[200px] w-full h-[1742px] mt-4 border-[.1px] border-C7C5C1 border-l-[.0px]  border-b-[.0px] ">
          <div className="flex-col">
            <div className="flex-col  border-b-[.1px] border-b-C7C5C1">
              <h2 className="py-4 text-2xl font-medium  text-[#0072BA] border-b-[.1px] border-b-C7C5C1">
                Refine Your Search
              </h2>
              <p className="py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1">
                Availability{" "}
              </p>
              <Link
                to="/store"
                onMouseEnter={handleStk}
                onMouseLeave={handleStk}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={stk ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">In Stock (15)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handlePro}
                onMouseLeave={handlePro}
                className="flex my-2 mb-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={pro ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D]">Pre-order (25)</p>
              </Link>
            </div>

            <div className="flex-col">
              <h2 className="py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1">
                Brand
              </h2>

              <Link
                to="/store"
                onMouseEnter={handleEsp}
                onMouseLeave={handleEsp}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={esp ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">ESP (15)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleGbs}
                onMouseLeave={handleGbs}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={gbs ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Gibson (12)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleJks}
                onMouseLeave={handleJks}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={jks ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Jackson (7)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleFnd}
                onMouseLeave={handleFnd}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={fnd ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Fender (6)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleEph}
                onMouseLeave={handleEph}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={eph ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Epiphone (6)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleSqr}
                onMouseLeave={handleSqr}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={sqr ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Squire (5)</p>
              </Link>
              <Link
                to="/store"
                onMouseEnter={handleHbn}
                onMouseLeave={handleHbn}
                className="flex mt-4"
              >
                <input
                  className="p-2 mr-2"
                  type="checkbox"
                  checked={hbn ? true : false}
                ></input>
                <p className="text-sm text-[#362D2D] ">Harley Benton (15)</p>
              </Link>

              <div className="flex-col">
                <h2 className="py-4 text-2xl  text-[#362D2D] border-b-[.1px] border-b-C7C5C1">
                  Price range
                </h2>

                <Link
                  to="/store"
                  onMouseEnter={handlePrf}
                  onMouseLeave={handlePrf}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prf ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$100 to $200 (5)</p>
                </Link>
                <Link
                  to="/store"
                  onMouseEnter={handlePrs}
                  onMouseLeave={handlePrs}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prs ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$200 to $300 (5)</p>
                </Link>
                <Link
                  to="/store"
                  onMouseEnter={handlePrt}
                  onMouseLeave={handlePrt}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prt ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$500 to 7500 (15)</p>
                </Link>
                <Link
                  to="/store"
                  onMouseEnter={handlePrfo}
                  onMouseLeave={handlePrfo}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prfo ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$1000 to $1500 (15)</p>
                </Link>
                <Link
                  to="/store"
                  onMouseEnter={handlePrfi}
                  onMouseLeave={handlePrfi}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prfi ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$1500 to $2000 (10)</p>
                </Link>
                <Link
                  to="/store"
                  onMouseEnter={handlePrsx}
                  onMouseLeave={handlePrsx}
                  className="flex mt-4"
                >
                  <input
                    className="p-2 mr-2"
                    type="checkbox"
                    checked={prsx ? true : false}
                  ></input>
                  <p className="text-sm text-[#362D2D] ">$300 and over (8)</p>
                </Link>
                <div className="flex mt-4 items-center">
                  $
                  <input className="w-14 mx-1 border-[.1px] border-C7C5C1"></input>
                  To$
                  <input className=" w-14 mx-1 border-[.1px] border-C7C5C1"></input>
                  <Link to="/store">
                    <AiFillCaretRight></AiFillCaretRight>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*///////////////////////////////////////////////////////*/}
        <div className="flex-col  w-full xl:ml-12 md:ml-4 mt-4  py-4 ">
          <div className="flex w-full items-center justify-between ">
            <Menu
              as="div"
              className="relative  text-left min-[1px]:w-full md:w-fit "
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#8A8A8A] max-[425px]:text-[#0072BA] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Most Popular
                  <AiFillCaretDown
                    className="-mr-1 h-5 w-5 text-[#8A8A8A] max-[425px]:text-[#0072BA]"
                    aria-hidden="true"
                  />
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
                <Menu.Items className="absolute left-0 z-10  w-56 origin-top-right  rounded-sm bg-white shadow-lg ring-1 ring-[#C7C5C1] ring-opacity-5 focus:outline-none">
                  <div className="py-1 cursor-pointer ">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A] "
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Most Popular
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Customers rating
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Lightest Guitar
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Newest Arivals
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Price:High-Low
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Price:Low-High
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-[#8A8A8A]"
                              : "text-[#8A8A8A] max-[425px]:text-[#0072BA]",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Brand:A-Z
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className="flex min-[1px]:hidden md:flex  h-fit  mx-auto text-[#8A8A8A] font-medium ">
              <p>1-42 of 2111 Products</p>
            </div>

            <div className="md:flex min-[1px]:hidden  h-8 mr-4 items-center justify-center text-[#8A8A8A] font-medium">
              <p className="">Page</p>
              <div className="  px-4 mx-2 border-[.1px] border-C7C5C1 shadow-sm">
                1
              </div>
              <p className="mr-1">of 81</p>
              <Link className="py-2 px-4 hover:bg-[#ed592c] hover:text-white">
                <AiFillCaretRight size={20} />
              </Link>
            </div>
            {/*navbar*/}
            <div
              onClick={handleNav}
              className="md:hidden min-[1px]:flex w-full text-[#0072BA] select-none"
            >
              <AiOutlineMenu className="ml-2" size={20}></AiOutlineMenu>
              <p className="ml-2 w-full">Filter</p>
              <div
                className={
                  nav
                    ? "fixed overflow-y-scroll w-[100%] z-50 left-[0%] top-[0%]   bg-white h-full border-r border-r-[#C7C5C] ease-in-out duration-500"
                    : "ease-in-out duration- fixed left-[100%]"
                }
              >
                <div className="text-[#362D2D] ">
                  <Link to="/store" className="flex-col">
                    <div className="flex w-full p-4 border-b border-b-[#C7C5C] justify-end text-[#0072BA] font-medium ">
                      <p>Close</p>
                    </div>

                    <div className="p-2  text-start text-[#8A8A8A] font-medium  ">
                      Refine Your Search
                    </div>
                    <div className="p-2 mt-4 text-[#8A8A8A] font-medium">
                      Availability
                    </div>
                    <div className="flex pb-4 border-b border-b-[#C7C5C]">
                      <Link
                        to="/store"
                        onMouseEnter={handleStk}
                        onMouseLeave={handleStk}
                        className="flex mt-4 mr-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={stk ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          In Stock{" "}
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (15)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePro}
                        onMouseLeave={handlePro}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={pro ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Pre-order{" "}
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (25)
                        </p>
                      </Link>
                    </div>

                    <div className="p-2 mt-4 text-[#8A8A8A] font-medium ">
                      Brand
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/store"
                        onMouseEnter={handleEsp}
                        onMouseLeave={handleEsp}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={esp ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Esp
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (15)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleGbs}
                        onMouseLeave={handleGbs}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={gbs ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Gibson
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (12)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleJks}
                        onMouseLeave={handleJks}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={jks ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Jackson
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (7)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleFnd}
                        onMouseLeave={handleFnd}
                        className="flex mt-4 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={fnd ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Fender
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (6)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleEph}
                        onMouseLeave={handleEph}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={eph ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Epiphone
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (5)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleSqr}
                        onMouseLeave={handleSqr}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={sqr ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Squire
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (5)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handleHbn}
                        onMouseLeave={handleHbn}
                        className="flex mt-4  p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={hbn ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          Harley Benton
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (15)
                        </p>
                      </Link>
                    </div>

                    <div className="p-2 mt-4 text-[#8A8A8A] font-medium border-t border-t-[#C7C5C]">
                      Price Range
                    </div>
                    <div className="flex-col pb-4 border-b border-b-[#C7C5C]">
                      <Link
                        to="/store"
                        onMouseEnter={handlePrf}
                        onMouseLeave={handlePrf}
                        className="flex mt-4 mr-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prf ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $100 to $200
                        </p>{" "}
                        <p className="w-full  px-2 text-right text-[#8A8A8A] text-sm">
                          (5)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePrs}
                        onMouseLeave={handlePrs}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prs ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $200 to 300
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (5)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePrt}
                        onMouseLeave={handlePrt}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prt ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $500 to $750
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (15)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePrfo}
                        onMouseLeave={handlePrfo}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prfo ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $1000 to $1500
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (15)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePrfi}
                        onMouseLeave={handlePrfi}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prfi ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $1500 to $2000
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (10)
                        </p>
                      </Link>
                      <Link
                        to="/store"
                        onMouseEnter={handlePrsx}
                        onMouseLeave={handlePrsx}
                        className="flex mt-4 ml-1 p-2  h-10 w-full items-center bg-[#EFEFEF] rounded "
                      >
                        <input
                          className="p-2 mr-4 justify-between "
                          type="checkbox"
                          checked={prsx ? true : false}
                        ></input>
                        <p className=" text-[#8A8A8A font-medium w-full ">
                          $3000 and over
                        </p>{" "}
                        <p className="w-full  px-2 text-right  text-[#8A8A8A] text-sm">
                          (8)
                        </p>
                      </Link>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Products></Products>
        </div>
      </div>
      <div className="flex w-full min-w-[280px] mt-4 justify-center">
        <button className="p-2 md:px-3 mx-1 bg-[#ed592c] text-white font-bold ">
          1
        </button>
        <button className="p-2 md:px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          2
        </button>
        <button className="p-2 md:px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          3
        </button>
        <button className="p-2 md:px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          4
        </button>
        <button className="p-2 md:px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          5
        </button>
        <button className="p-2 v mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          6
        </button>
        <button className="hidden md:flex p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          7
        </button>
        <button className="hidden md:flex p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          8
        </button>
        <button className="hidden md:flex p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          ...
        </button>
        <button className="hidden md:flex x p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          88
        </button>
        <button className="hidden md:flex  p-2 px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          89
        </button>
        <button className="flex md:hidden p-2 md:px-3 mx-1 bg-white hover:bg-[#ed592c] hover:text-white font-bold">
          Next
        </button>
      </div>
    </div>
  );
};

export default Catalog;
