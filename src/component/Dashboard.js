import React, { Fragment } from 'react';
import data from '../component/data/user.json'
export default function DashBoard(){
    const result= data.user.map((user, index)=>{
        return <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="pt-6 md:p-5 text-center md:text-left space-y-2">
          <blockquote>
              <div className="flex p-2">
            ID: <p className="text-sm text-red-500 font-semibold">{user.id}</p>
            Name: <p className="text-sm text-red-500 font-semibold">{user.name}</p>
            Age: <p className="text-sm text-red-500 font-semibold">{user.age}</p>
            Gender: <p className="text-sm text-red-500 font-semibold">{user.gender}</p>
            Email: <p className="text-sm text-red-500 font-semibold">{user.email}</p>
            Phone No: <p className="text-sm text-red-500 font-semibold">{user.phoneNo}</p>
            </div>
          </blockquote>
        </div>
      </div>
    })
    return (
       <Fragment>
           {result}
</Fragment>
    )
}