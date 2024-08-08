import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AllLoans() {

  const [loans, setLoans] = useState([])

  useEffect(()=>{
    async function getLoansData(){
      let response =  await axios.get('http://localhost:1234/loans')
      setLoans(response?.data)
    }

    getLoansData()
      
  },[])

  // const getLoansData = async()=>{
     
  // }
  return (
    <div className='container'>
        <div className='row'>
            <div className='offset-md-2 col-md-8'>
             {
               loans?loans.map((l,index)=>(
              
                  <div key={index} className="card mb-4"  >
               
                <div className="card-body">
                      <table className='table '>
                          <tbody>
                                 <tr >
                                    <th rowSpan={6} className='text-center'>
                                       <img src={l.logo} alt='' width={150} height={150}/>
                                    </th>
                                 </tr>
                                <tr>
                                    <th>Loan Amount</th>
                                    <td>{l.loanAmount}</td>
                                </tr>
                                <tr>
                                    <th>Intrest Rate</th>
                                    <td>{l.interestRates}</td>
                                </tr>
                                <tr>
                                    <th>Min CreditScore</th>
                                    <td>{l.Mincreditscore}</td>
                                </tr>
                                <tr>
                                    <th>Term Length</th>
                                    <td>{l.TermLenghth}</td>
                                </tr>
                                <tr>
                                    <th>Processing Fee</th>
                                    <td>{l.ProcessingFee}</td>
                                </tr>
                                
                                <tr>
                                    
                                    <td colSpan={3} className='text-center mt-3' >
                                       <button className='btn btn-sm btn-success mt-3 '>Apply Now</button>
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
