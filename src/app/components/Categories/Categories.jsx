import React from 'react'
import { Check } from 'react-bootstrap-icons'


const Categories = () => {
  return (
    <div className='pt-5 pl-24 pr-20 md:pl-12 md:pr-10 w-screen flex flex-col justify-center items-start gap-12 bg-white pb-[100px] min-h-[90vh] ' >
        <span className='text-4xl text-[#590D22]'>AUTOMATION OF UTILITY OPERATIONS AND REVENUE COLLECTION SYSTEMS</span>
        <span className='font-light text-black '>Our utility debt collection scheme optimize the billing and payments experience that enhance your ability to satisfy and engage with your customers real-time.

        </span>
        <button className="text-lg text-white text-center w-[300px] h-[60px] bg-[#800F2F] md:text-sm md:w-[220px] md:h-[50px] border-black border hover:text-[#800F2F] hover:shadow-[inset_20rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]">
      
              LEARN MORE
        </button>
        <ul>
            <li className='text-green-500 pb-4'> <Check className='inline text-2xl'/> <span className='text-black'>We provide a virtual collection arrangement through a management suite called ' virtual collection Agent ' that improve collection rates and reduce disconnections.</span></li>
            <li className='text-green-500 pb-4'> <Check className='inline text-2xl'/> <span className='text-black'>Take advantage of our state -of- the -art technology to improve customers satisfaction.</span></li>
            <li className='text-green-500 pb-4'> <Check className='inline text-2xl'/> <span className='text-black'>Reduce your PCI-compliance burden through secure call center payments.</span></li>
            <li className='text-green-500 pb-4'> <Check className='inline text-2xl'/> <span className='text-black'>Engage and inform your customers using the latest methods,including text to pay,mobile wallets and live chat.</span></li>

        </ul>

    </div>
  )
}

export default Categories