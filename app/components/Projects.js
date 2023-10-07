// 'use client'

import React from 'react'
import { getData } from '../api/api'

const Projects = async() => {

    // const [websiteData, setWebsiteData] = useState([]);

    const websiteData = await getData()

    // useEffect(()=>{
    //     const fetchData = async() =>{
    //         const data = getData();
    //         setWebsiteData(data);
    //     }
    //     fetchData()
    // },[])



  return (
    <div id='projects' className='px-5'  >
        {websiteData.map(item=>(
            <div key={item.job_title} >
                <h1>{item.job_title}</h1>
                <div>{item.job_description}</div>
            </div>
  ))}
    </div>
  )
}

export default Projects