import React from 'react'
function Fcomponent({faculty}) {
  return (
    <div className='flex flex-col  md:flex-row max-w-2xl  justify-between box-border m-5 bg-gradient-to-b from-purple-700 to-purple-950 border-2 border-white rounded-3xl'>
  <img
    src={faculty.image}
    className='mt-3 mb-3 mx-auto md:mx-3 h-[220px] w-[220px] rounded-3xl border-white border-4'
  />
  <h1 className='mt-3 select-none mb-3 mx-3 font-semibold text-white text-l text-justify'>
    {faculty.discription}
  </h1>
</div>

  )
}

export default Fcomponent
