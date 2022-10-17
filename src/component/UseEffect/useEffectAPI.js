import React from 'react'
import {useState, useEffect } from 'react';

// import App from './App';
const UseEffectAPI = () => {
  // when we use useState it re_render in our component
  const[users,setUsers]=useState([]); 
  // waiting result
  const getUsers=async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/photos");
    setUsers(await response.json())
    // console.log(data);

  }

  // useEfect
  useEffect(() => {
    getUsers();
  }, [])
  
  return (
    <>
      <div className='.container-fluid mt-5 pl-20'>
        <div className='row text-center'>

          {/* mapping user using call back function ()=>{} */}
          {
            users.map((currElem)=> {
                return (
  
                   
            <div className="col-10 col-md-4 mt-5 " key={currElem.id} >
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image"> <img src={currElem.thumbnailUrl} alt="l" className="rounded" width="155" /> </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft">{currElem.id}</h4>
                  <span className="text-left work">{currElem.title} </span>
                  <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column  ">
                      <span className="articles">Articles</span> <span className="number1">38</span> </div>
                    <div className="d-flex flex-column  ">
                      <span className="followers">Followers</span> <span className="number2">{currElem.id}</span> </div>
                    <div className="d-flex flex-column  ">
                      <span className="rating">Rating</span> <span className="number3">{currElem.id}</span> </div>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
       
  
                )
            })

          }

        

         

        </div>

      </div>

    </>
  )
}

export default UseEffectAPI