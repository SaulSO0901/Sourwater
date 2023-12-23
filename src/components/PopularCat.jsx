import React from 'react'
import pop1 from '../assets/pop-1.png'
import pop2 from '../assets/pop-2.PNG'
import pop3 from '../assets/pop-3.PNG'
import pop4 from '../assets/pop-4.PNG'
import pop5 from '../assets/pop-5.PNG'
import pop6 from '../assets/pop-6.PNG'
import pop7 from '../assets/pop-7.PNG'
import pop8 from '../assets/pop-8.PNG'
import pop9 from '../assets/pop-9.PNG'
import pop10 from '../assets/pop-10.PNG'
import pop11 from '../assets/pop-11.PNG'
import pop12 from '../assets/pop-12.PNG'


const PopularCat = () => {
  return (
    <div className='flex-col max-w-[1400px] w-full h-fit my-4 mx-auto select-none '>
       
        <div className='flex mx-auto h-fit justify-center items-center  text-center'>
        <h2 className=' text-5xl text-[#362D2D] font-medium'>Popular Categories</h2>
        </div>

        <div className='grid grid-cols-6 gap-3 my-10  px-6 mx-auto justify-center items-start h-full w-full max-[425px]:h-[0px] hidden  lg:grid  '>
            
            <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center  border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-8 rounded-full' src={pop1} alt="pop1" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Guitars</p>
           </a>

           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-2 rounded-full' src={pop2} alt="pop2" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Studio & Recording</p>
           </a>

           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-4 rounded-full' src={pop3} alt="pop3" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Drums & Percussion</p>
           </a>
           
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-9 ' src={pop4} alt="pop4" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Bass</p>
           </a>

           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-4 ' src={pop5} alt="pop5" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Keyboards & Synth</p>
           </a>
           
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-8 ' src={pop6} alt="pop6" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Live Sound & Lights</p>
           </a>

           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-6 ' src={pop7} alt="pop7" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Software & Plug-ins</p>
           </a>
           
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-6' src={pop8} alt="pop8" />
           </div>
           <p className=' mt-4 text-sm font-medium'>DJ Equipments</p>
           </a>
 
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-14 rounded-full' src={pop9} alt="pop9" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Microphones</p>
           </a>
           
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-12 rounded-full' src={pop10} alt="pop10" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Band & Orchestra</p>
           </a>

           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center   max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-4 ' src={pop11} alt="pop11" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Accesories</p>
           </a>
           
           <a href='*' className='flex-col p-10 lg:p-2 lg:py-8 items-center justify-center text-center  max-w-[224px] max-h-[224px] h-full w-full'>
           <div  className='flex  w-36 h-36 items-center justify-center border-C7C5C1 border-[.1px] ring-b-1 hover:ring-4 ring-inset  hover:ring-[#0072BA] ease-in-out duration-200 rounded-full'>
            <img className=' p-8 ' src={pop12} alt="pop12" />
           </div>
           <p className=' mt-4 text-sm font-medium'>Content Creators</p>
           </a>


        </div>

        {/*Tablet and mobile section*/}
        <div className='grid grid-cols-2 gap-1  my-10 px-6 mx-auto justify-center items-start h-full md:visible lg:hidden max-[375px]:hidden '>
            
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 ml-2 w-8  h-10 items-center justify-center ' src={pop1} alt='pop1'></img>
        <p className='text-sm font-semibold ml-4'>Guitars </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 ml-2 w-8  h-10 items-center justify-center ' src={pop2} alt='pop2'></img>
        <p className='text-sm font-semibold ml-4'>Studio & Recording </p>
            </a>

       
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex py-1 ml-2 w-8  h-10 items-center justify-center ' src={pop3} alt='pop3'></img>
        <p className='text-sm font-semibold ml-4'>Drums & Percussion </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 ml-2 w-8  h-10 items-center justify-center ' src={pop4} alt='pop4'></img>
        <p className='text-sm font-semibold ml-4'>Bass</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex px-1 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop5} alt='pop5'></img>
        <p className='text-sm font-semibold ml-4'>Keyboards & Synth </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop6} alt='pop6'></img>
        <p className='text-sm font-semibold ml-4'>Live Sound & Lights</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop7} alt='pop7'></img>
        <p className='text-sm font-semibold ml-4'>Software & Plug-ins</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 py-3  ml-2 w-8  h-10 items-center justify-center ' src={pop8} alt='pop8'></img>
        <p className='text-sm font-semibold ml-4'>DJ Equipment</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-2 px-3 ml-2 w-8  h-10 items-center justify-center ' src={pop9} alt='pop9'></img>
        <p className='text-sm font-semibold ml-4'>Microphones</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 ml-2 w-8  h-10 items-center justify-center ' src={pop10} alt='pop10'></img>
        <p className='text-sm font-semibold ml-4'>Band & Orchestra</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop11} alt='pop11'></img>
        <p className='text-sm font-semibold ml-4'>Accesories</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] rounded-full'>
        <img className='flex p-1 ml-2 w-8  h-10 items-center justify-center ' src={pop12} alt='pop12'></img>
        <p className='text-sm font-semibold ml-4'>Content Creators</p>
            </a>

        </div>
{/*Mobile section*/}
<div className='hidden max-[375px]:gridy mx-auto my-10 px-2 '>
<a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop1} alt='pop1'></img>
        <p className='text-sm font-semibold ml-4'>Guitars </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop2} alt='pop2'></img>
        <p className='text-sm font-semibold ml-4'>Studio & Recording </p>
            </a>

       
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop3} alt='pop3'></img>
        <p className='text-sm font-semibold ml-4'>Drums & Percussion </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] l'>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop4} alt='pop4'></img>
        <p className='text-sm font-semibold ml-4'>Bass</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex px-2 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop5} alt='pop5'></img>
        <p className='text-sm font-semibold ml-4'>Keyboards & Synth </p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop6} alt='pop6'></img>
        <p className='text-sm font-semibold ml-4'>Live Sound & Lights</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop7} alt='pop7'></img>
        <p className='text-sm font-semibold ml-4'>Software & Plug-ins</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 py-3  ml-2 w-8  h-10 items-center justify-center ' src={pop8} alt='pop8'></img>
        <p className='text-sm font-semibold ml-4'>DJ Equipment</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 px-3 ml-2 w-8  h-10 items-center justify-center ' src={pop9} alt='pop9'></img>
        <p className='text-sm font-semibold ml-4'>Microphones</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop10} alt='pop10'></img>
        <p className='text-sm font-semibold ml-4'>Band & Orchestra</p>
            </a>
                   
            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] l'>
        <img className='flex p-2 py-3 ml-2 w-8  h-10 items-center justify-center ' src={pop11} alt='pop11'></img>
        <p className='text-sm font-semibold ml-4'>Accesories</p>
            </a>

            <a href='*' className='flex h-[52px] items-center border-C7C5C1 border-[.1px] '>
        <img className='flex p-2 ml-2 w-8  h-10 items-center justify-center ' src={pop12} alt='pop12'></img>
        <p className='text-sm font-semibold ml-4'>Content Creators</p>
            </a>
</div>
    </div>
  )
}

export default PopularCat