'use client'
import Pagenation from "../components/Pagenation"
import { useState,useEffect } from "react"
import {Paginate} from '../components/Pagenation'

  export default async function Page() {
    const [currentPage,setCurrentPage]=useState(1);
    const [dataPosts,setDataPosts]=useState([])


    useEffect(async()=>{
      
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data=await  res.json()
      setDataPosts(data)

    },[])



   
    const pageSize=10;

    const onPageChange=(page)=>{
        setCurrentPage(page)
        console.log("this function calld successfully",page)
    }


     
    const updateddata=await Paginate(dataPosts, currentPage, pageSize)
    //console.log("updated",updateddata)
      
   return <main>
        <h1>Pagination</h1>
        {
          updateddata.map((post)=>{
                return <p key={post.id}> {post.id}-{post.title}</p>
            })
        }

        <Pagenation
        items={dataPosts.length}   //100
        currentPage={currentPage} //1
        pageSize={pageSize} //10
        onPageChange={onPageChange}
        
        />
    </main>
  }