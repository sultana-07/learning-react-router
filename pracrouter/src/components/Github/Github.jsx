import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
function Github() {

  const {username} = useParams()

    const [name,setName] = useState("")
    const [followers,setfollowers] = useState("")
    const [img,setImg] = useState("")

    const fetchapi = async() => {
        const res = await fetch(`https://api.github.com/users/${username? username :"hiteshchoudhary"}`)
        const data = await res.json()
        setName(data.name)
        setfollowers(data.followers)
        setImg(data.avatar_url)
    }
    fetchapi()
  return (
    <div className='w-full flex justify-center mt-5'>
       
       <div className="w-[300px] rounded-md border">
  <img
    src={img}
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-semibold">{name}</h1>
    <p className="mt-3 text-sm text-gray-600">
      {followers}
    </p>
    <button
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div>

    </div>
   

  )
}

export default Github
