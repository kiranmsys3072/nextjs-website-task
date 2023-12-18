import React from 'react'

const About = () => {
  return (
    <section className='w-screen mt-12 '>
    <div className='flex flex-1 justify-start items-center flex-col gap-6'>
      <h5 className='font-bold text-4xl'>Activities</h5>
      <p className='text-2xl uppercase font-light'>Eduhub Institute of Technology</p>
<p className='w-3/5 text-center text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis laudantium molestiae odit veritatis dolor, totam tempore, ipsum debitis perspiciatis, nihil id inventore repudiandae! Ipsa in illo repellat inventore pariatur animi?</p>

    <div className='flex flex-row justify-center items-center gap-6 '>

      <img className='w-1/4 shadow-lg  hover:shadow-2xl' src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg" alt="img-1"/>
      <img className='w-1/4 shadow-lg  hover:shadow-2xl' src="https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400312_640.jpg" alt="img-2"/>
      <img className='w-1/4 shadow-lg  hover:shadow-2xl' src="https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_1280.jpg" alt="img-3"/>

    </div>
    </div>

   </section>
  )
}

export default About 