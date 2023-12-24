import React from 'react'
import ad1 from  '../assets/ad1.2.png'
import ad1m from '../assets/ad1m.JPG'
import ad2 from  '../assets/ad2.png'
import ad3 from  '../assets/ad3.png'
import ad4 from  '../assets/ad4.JPG'

const Ads = () => {
  return (
    <div className='flex-col max-w-[1400px] w-full mx-auto my-5'>
<div className='flex max-[425px]:flex-col   max-h-[345px] w-full h-full px-4 '>

 <div className='flex  max-w-[930px] lg:min-w-[650px]  w-full px-1 my-2 '>
<img className=' hidden lg:flex' alt='ad1' src={ad1}></img>
<img className=' lg:hidden ' alt='ad1m' src={ad1m}></img>

</div>

<div className='flex max-w-[469px] w-full px-1 my-2 '>
<img className='' alt='ad2' src={ad2}></img>
</div>

  


<div className='flex max-w-[469px] w-full px-1 md:hidden my-2 '>
<img className='  ' alt='ad4' src={ad4}></img>
</div>


</div>
<div className='flex w-full max-h-[145px] my-4 px-5 hidden md:flex'>
<img src={ad3} alt='ad3' ></img>
</div>
      

    </div>
  )
}

export default Ads