import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AppliedLoans() {
  
  const [appliedLoans, setappliedLoans] = useState([])


  useEffect(()=>{
    async function getLoansData(){
      let response =  await axios.get('http://localhost:1234/appliedNewLoans')
      setappliedLoans(response.data)
    }

    getLoansData()
      
  },[])


  return (
    <div className='container'>
        <div className='row'>
            <div className='offset-md-2 col-md-8'>
             {
               appliedLoans?appliedLoans.map((l,index)=>(
             
                  <div key={index} className="card mb-4"  >
               
                <div className="card-body">
                        <h2>{l.title}</h2>
                        <small>Applied Date:  08-08-2024</small>
                      <table className='table '>
                          <tbody>
                                 <tr >
                                    <th rowSpan={5} className='text-center'>
                                       <img src={l.logo} alt='' width={150} height={150}/>
                                    </th>
                                 </tr>
                                <tr>
                                    <th>Applied Amount</th>
                                    <td>{l.loanAmountToApply}</td>
                                </tr>
                                <tr>
                                    <th>Intrest Rate</th>
                                    <td>{l.interestRates}</td>
                                </tr>
                                
                                <tr>
                                    <th>Term Length</th>
                                    <td>{l.TermLenghth}</td>
                                </tr>
                                <tr>
                                    <th>Processing Fee</th>
                                    <td>{l.ProcessingFee}</td>
                                </tr>
                                
                                <tr >
                                    
                                   <td colSpan={3} className='text-center  text-white'>
                                       {
                                         l.approved?(<p className='bg-success mt-3 p-1'>Application Approved</p>):(l.rejected?(<p className='bg-danger mt-3 p-1'>Application Rejected</p>):(<p className='bg-secondary mt-3 p-1'>Application Pending</p>))
                                       }

                                   </td>
                                </tr>
                          </tbody>
                      </table>
                </div>
                  </div>
             
                )                 
               ):
               <p>Loading...</p>
             }
            </div>
        </div>

    </div>
  )
}
