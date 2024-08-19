import { useState, useEffect } from "react";

function BaiHai() {
  const storage = JSON.parse(localStorage.getItem("jobs"))
  const [job,setJob] = useState('');
  const [jobs,setJobs] = useState( storage ?? []); 

const hand = () => {
  if (!job.trim()) {
    alert("Vui lòng nhập dữ liệu");
    return false;
  } else {
    const jobt = { id: job, Checked: false };
    const newJobs = [...jobs, jobt];
    setJobs(newJobs);
    setJob("");

    localStorage.setItem("jobs", JSON.stringify(newJobs));
  }
};

const handle = (id) => {
  const current = jobs.filter((item) => item.id !== id);
  setJobs(current);
  localStorage.setItem("jobs", JSON.stringify(current));
};

const toggleChecked = (id) => {
  setJobs((prev) =>
    prev.map((job) =>
      job.id === id ? { ...job, Checked: !job.Checked } : job
    )
  );
};
useEffect(() => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}, [jobs]);

  return (
    <>
      <div className="Top">
        <h1>My To Do List</h1>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button className="Add" onClick={hand}>
          Add
        </button>
      </div>
      <div>
        {jobs.map((job) => (
          <li
            key={job.id}
            onClick={() => toggleChecked(job.id)}
            className={job.Checked ? "Checked" : ""}
          >
            {job.id}
            <button onClick={() => handle(job.id)} className="Close">
              X
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default BaiHai;
/*import { useState } from "react";
import _ from "lodash";
function BaiHai(){
    
    const storage = JSON.parse(localStorage.getItem("jobs"))
    const [job,setJob] = useState('');
    const [jobs,setJobs] = useState( storage ?? []);
    
    const hand=()=>{
        if(!job.trim()){
            alert("vui lòng nhập dữ liệu")
            return false;
        }
        else{
        const jobt = {id:job, Checked:false}
        setJobs(prev =>{const newsJobs= [...prev,jobt ]
        const json = JSON.stringify(newsJobs)
        localStorage.setItem("jobs",json)
        return newsJobs
        } )
        setJob("")
    }
   
    }
    const handle = (id) =>{
        let current = JSON.parse(localStorage.getItem("jobs"));
        current = current.filter(item =>item.id !==id);
        setJobs(current)
        const json = JSON.stringify(current)
        localStorage.setItem("jobs",json)
    }  
    const toggleChecked = (id) => {
        setJobs((prev) =>
          prev.map((job) =>
            job.id === id ? { ...job, Checked: !job.Checked } : job
          )
        );
        // Update localStorage with the new Checked status
        localStorage.setItem("jobs", JSON.stringify(jobs));
      };
    
    return <>
             <div className="Top">
             <h1>My To Do List</h1>
               <input value={job}
                onChange={e =>setJob(e.target.value)}/>
               <button  className="Add" onClick={hand}>Add</button>
             </div>
             <div>{jobs.map((job,index)=>(
             <li  className={job.Checked ? "Checked" : ""}  key={job.id}  onClick={() => toggleChecked(job.id)}>{job.id}
             <button onClick={()=>handle(job.id)} className="Close">X</button>
             </li>))}          
             </div>
            </>
    
}
export default BaiHai;
*/