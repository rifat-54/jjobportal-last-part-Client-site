import React, { useEffect, useState } from 'react';
import useAllJobs from '../../hooks/useAllJobs';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import HotJobCard from '../Home/HotJobCard';

const AllJobs = () => {
    const[sort,setSort]=useState(false)
    const[search,setSearch]=useState('')
    const [minSelary,setMinselary]=useState('')
    const [maxSelary,setMaxselary]=useState('')
    const {jobs}=useAllJobs(sort,search,minSelary,maxSelary)
    const {loading}=useAuth()
    if(loading){
        return <p>loading data...</p>
    }

    
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-16'>All Jobs</h2>
            <div className='px-5 items-center lg:px-10  my-10 flex gap-3 bg-slate-400 py-6 mx-auto w-11/12'>
                <button onClick={()=>setSort(!sort)} className={`${sort?'btn-success':'btn-neutral'} btn`}>Sort By Salery</button>
                <input onKeyUp={(e)=>setSearch(e.target.value)} className='input w-full max-w-2xl' type="text" placeholder='search by location' />
                <div className='space-y-3'>
                <input onKeyUp={(e)=>setMinselary(e.target.value)} className='input w-full max-w-2xl' type="number" placeholder='min selary' />
                <input onKeyUp={(e)=>setMaxselary(e.target.value)} className='input w-full max-w-2xl' type="number" placeholder='max selary' />

                </div>
            </div>
            <div className='grid mt-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;