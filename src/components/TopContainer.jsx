import React from 'react'
import FilterContainer from './FilterContainer';

const TopContainer = () => {
  return (
    <div>
       <div className="bg-slate-900 flex justify-between items-center px-8 py-4">
      <h1 className="text-3xl text-yellow-600 font-bold">Foody <span className='text-red-600'>Zone</span></h1>
      <div className="ml-4">
        <input className="border bg-transparent h-10 text-sm p-4 rounded px-4 py-4" type="text" placeholder="Search Food" />
      </div>
    </div>
    <FilterContainer></FilterContainer>
    </div>
  );
}

export default TopContainer
