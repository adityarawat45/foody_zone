import React from 'react'

const FilterContainer = () => {
  return (
    <div className="bg-slate-900 flex flex-row items-center py-6 gap-5 justify-center pt-3">
      <button className=" bg-yellow-600 text-white rounded-md py-1 px-2 text-sm font-normal">All</button>
      <button className="  bg-yellow-600 text-white rounded-md py-1 px-2 text-sm font-normal">Breakfast</button>
      <button className="  bg-yellow-600 text-white rounded-md py-1 px-2 text-sm font-normal">Lunch</button>
      <button className="  bg-yellow-600 text-white rounded-md py-1 px-2 text-sm font-normal">Dinner</button>
    </div>
  )
}
export default FilterContainer
