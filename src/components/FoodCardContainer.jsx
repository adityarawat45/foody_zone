import React, { useEffect, useState } from 'react'

const BASE_url = "http://localhost:9000"

const FoodCardContainer = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const[error,setError] = useState(null)

  const  fetchData =  async () => {
     try{
      setLoading(true);
      const response = await fetch(BASE_url)
      const result = await response.json()
      setData(result)
      setLoading(false);
      console.log(data)
     }
     catch(e) {
      setError(e)
     }
  }

  useEffect(()=>{
    fetchData();
  },[])

  if (error) return <div className='text-black'>{error}</div>
  if(loading) return <div className='text-black'>Loading...</div>
  return (
    <div className="bg-cover bg-center h-full" style={{backgroundImage: "url('public/images/bg.png')"}}>
     <div className='flex flex-wrap gap-4 p-5 rounded-lg justify-center'> {
      data?.map((food)=>(<div className='w-2/5 rounded-lg flex p-3 flex-row bg-opacity-35 backdrop-blur-md items-center justify-center border border-gray-800' key={food.name}>
         
     <div >
      <img className="w-full h-full"src={BASE_url + food.image}></img>
     </div>


     <div className='p-4 gap-2 flex flex-col justify-start'>
  <h3 className='text-2xl px-2'>{food.name}</h3>
  <p className='p-2'>{food.text}</p>
  <button className=' bg-yellow-600 max-w-lg text-white font-normal text-sm px-2 py-1 rounded-md'>
    {food.price + "$"}
  </button>
</div>


      </div>)
      )}
      </div>
    </div>
  )
}
 
export default FoodCardContainer
