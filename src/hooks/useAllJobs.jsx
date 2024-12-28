import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useAllJobs = (sort,search,minSelary,maxSelary) => {
  const {setLoading} = useAuth();
  const [jobs, setJobs] = useState([]);
  console.log(sort);
  useEffect(() => {
    try {
        fetch(
            `https://job-portal-server-for-recruiter-part3-neon-omega.vercel.app/jobs?sort=${sort}&search=${search}&min=${minSelary}&max=${maxSelary}`
          )
          .then(res=>res.json())
          .then(data=>setJobs(data))
     
    } catch (error) {
      console.log(error);
    }
  }, [sort,search,minSelary,maxSelary]);
  

  return {jobs};
};

export default useAllJobs;
