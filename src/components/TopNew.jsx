import React from 'react'

import top1 from '../assets/top/top (1).PNG'
import top2 from '../assets/top/top (2).png'
import top3 from '../assets/top/top (3).png'
import top4 from '../assets/top/top (4).png'
import top5 from '../assets/top/top (5).png'
import top6 from '../assets/top/top (6).png'
import { FaArrowRight } from "react-icons/fa6";



const TopNew = () => {
  return (
<div className='flex-col max-w-[1400px] mx-auto mt-5  text-center items-center justify-center '>
<h2 className=' text-5xl font-medium w-fit mx-auto'>Top New Musical Instruments & Gear</h2>

<div className='lg:flex  lg:max-w-[1370px] md:max-w-[738px] max-[425px]:max-w-[395px] w-full justify-center mt-4 mx-auto lg:px-4   sm:grid sm:grid-cols-3 max-[425px]:grid max-[425px]:grid-cols-2  '>

    <a className='flex-col max-w-[245px] w-full justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7 md:mx-4 '><p className='p-1 text-white text-xs'>1</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top1} className='w-[120px] h-[120px] px-10'></img></div>
        <div><p className='text-xs text-[#362D2D]'>Shure SM57 Cardioid Dynamic
</p></div>
    </a>

    <a className='flex-col max-w-[245px] w-full justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7  md:mx-4 '><p className='p-1 text-white text-xs'>2</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top2} className='w-[120px] h-[120px] '></img></div>
        <div><p className='text-xs '>Behringer UB-Xa 16-voice Bi-timbral Polyphonic Analog Synthesizer
</p></div>
    </a>

    <a className='flex-col max-w-[245px] w-full justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7  md:mx-4 '><p className='p-1 text-white text-xs'>3</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top3} className='w-[120px] h-[120px] '></img></div>
        <div><p className='text-xs text-[#362D2D]'>Supro 1614RT Amulet 1 x 12-inch 15-watt Tube Combo Amp
</p></div>
    </a>

    <a className='flex-col max-w-[195px] md:max-w-[245px] w-full justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7  md:mx-4 '><p className='p-1 text-white text-xs'>4</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top4} className='w-[120px] h-[120px] px-10'></img></div>
        <div><p className='text-xs text-[#362D2D]'>Audio-Technica AT2035
</p></div>
    </a>

    <a className='flex-col  max-w-[195px] md:max-w-[245px] w-full justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7  md:mx-4 '><p className='p-1 text-white text-xs'>5</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top5} className='w-[120px] h-[120px] py-5 '></img></div>
        <div><p className='text-xs text-[#362D2D]'>Boss Katana head MkII
</p></div>
    </a>

    <a className='flex-col  max-w-[195px] max-w-[245px] w-full  justify-center items-center'>
        <div className=' rounded-full bg-blue-900 h-7 w-7  md:mx-4 '><p className=' p-1 text-white text-xs'>6</p></div>
        <div className='flex max-w-[195px] md:max-w-[221px]  mx-auto w-full h-[135px]  items-center justify-center'><img src={top6} className='w-[120px] h-[120px] px-2'></img></div>
        <div><p className='text-xs text-[#362D2D]'>Gibson Kirk Hammett "Greeny" Les Paul Standard Electric Guitar - Greeny Burst
</p></div>
    </a>

    <a className='lg:flex max-w-[245px]  w-full items-center justify-center md:hidden max-[425px]:hidden sm:hidden '>
        <div className='flex-col  max-w-[135px] w-full h-[135px] items-center text-center justify-center rounded-full border-[.1px] border-gray-400  hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 '>
        <p className='text-[#0072BA] font-bold mt-10'>SEE ALL</p>
        <div className='flex w-full justify-center'>
        <FaArrowRight color='C7C5C1' size={30} className=''></FaArrowRight>
        </div>
        </div>
        </a>

       
<a className='md:flex-col md:col-start-2 max-[425px]:col-start-1 max-[425px]:col-end-3   mx-auto w-[160px] lg:hidden '>
        <p className='text-[#0072BA] font-bold'>SEE ALL</p>
        <div className='flex w-full justify-center'>
        <FaArrowRight color='C7C5C1' size={30} className=''></FaArrowRight>
        </div>
        </a>
</div>

    </div>
  )
}

export default TopNew