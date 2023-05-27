import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../index.css'

const Experience = () => {
  return (
    <>
        <section id='experience' className='exp_styling'>
        <div className='pl-12 text-white'>
                <div className='mt-28 text-[32px] font-medium'>Experience</div>
                <div><hr className='border-2 border-[#00D1FF] w-56' /></div>
          </div>
          <div className='mt-10'>    
<VerticalTimeline> 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"   
    contentStyle={{ background: '#fff', color: '#1b1818', borderRadius: 20 }}   
  >
    <h3 className='font-bold text-[#000000]'>Nov 2022 - Dec 2022</h3>
    <h3 className="mt-2 text-xl font-bold">Graphic Design & Video Editing <br /> at Prayatna School of Excellence</h3>    
    <ul className='mt-2 list-disc pl-5'>
      <li className='font-medium text-[#000000]'>Utilized crucial design software skills to assist with projects.</li>
      <li className='font-medium text-[#000000]'>Worked as a productive and positive team member to design and edit videos for their YouTube channel and Instagram Page.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"    
    contentStyle={{ background: '#fff', color: '#1b1818', borderRadius: 20 }}
  >
   <h3 className='font-bold text-[#000000]'>Dec 2022 - Jan 2023</h3>
    <h3 className="mt-2 text-xl font-bold">Graphic Design Intern <br /> at Schon Vis</h3>   
    <ul className='mt-2 list-disc pl-5'>
      <li className='font-medium text-[#000000]'>Assisted in the creation of graphic materials for marketing.</li>
      <li className='font-medium text-[#000000]'>Delivered visually compelling graphic elements.</li>
      <li className='font-medium text-[#000000]'>Effectively multitasked and met deadlines.</li>
      <li className='font-medium text-[#000000]'>Collaborated with team members and worked to achieve goals.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"  
    contentStyle={{ background: '#fff', color: '#1b1818', borderRadius: 20 }}   
  >
   <h3 className='font-bold text-[#000000]'>PRESENT</h3>
    <h3 className="mt-2 text-xl font-bold">Currently, I am looking for web development jobs or internship.</h3>  
  </VerticalTimelineElement>
</VerticalTimeline>
          </div>
        </section>
    </>
  )
}

export default Experience
