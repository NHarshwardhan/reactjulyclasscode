import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Applications({ name }) {
  const [appliedLoans, setappliedLoans] = useState([]);
  
  const navigate = useNavigate()

  useEffect(() => {
    async function getLoansData() {
      let response = await axios.get("http://localhost:1234/appliedNewLoans");
      setappliedLoans(response.data);
    }

    getLoansData();
  }, []);

  const pendlingApplication = appliedLoans.filter(l=>l.approved===false && l.rejected===false)
  const approvedApplication = appliedLoans.filter(l=>l.approved===true && l.rejected===false)
  const rejectedApplication = appliedLoans.filter(l=>l.approved===false && l.rejected===true)


  const approve = (loanInfo)=>{
     const loanData= {...loanInfo,approved:true}
     axios.put(`http://localhost:1234/appliedNewLoans/${loanData.id}`,loanData,{headers:{"Content-Type":'application/json'}})
          .then(response=>{
              navigate('/managerdb')
          })
          .catch(err=>{
             console.log(err)
          })
      
  }
  
  const reject = (loanInfo)=>{
    const loanData= {...loanInfo,rejected:true}
    axios.put(`http://localhost:1234/appliedNewLoans/${loanData.id}`,loanData,{headers:{"Content-Type":'application/json'}})
         .then(response=>{
            navigate('/managerdb')
         })
         .catch(err=>{
            console.log(err)
         })
  }
  return (
    <div className="container">
        {
            name==='allApp' && (<div className="row">
                <div className="offset-md-2 col-md-9">
                  {appliedLoans ? (
                    appliedLoans.map((l, index) => (
                      <div key={index} className="card mb-5">
                        <div className="card-body">
                          <table className="table ">
                            <tbody>
                                <tr>
                                    <td colSpan={3} className="text-end">
                                      <img alt=""
                                            width={50}
                                            height={50}
                                            src={l.logo}
                                          />
                                    </td>
                                </tr>
                              <tr>
                                <td>
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td >
                                          <img alt="" className="mt-5"
                                            width={100}
                                            height={100}
                                            src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <table className="table ">
                                    <tbody>
                                      <tr>
                                        <th>Applicant</th>
                                        <td>{l.name}</td>
                                      </tr>
                                      <tr>
                                        <th>Gender</th>
                                        <td>{l.gender}</td>
                                      </tr>
                                      <tr>
                                        <th>Age</th>
                                        <td>31</td>
                                      </tr>
                                      <tr>
                                        <th>Salary</th>
                                        <td>{l.salary}</td>
                                      </tr>
                                      <tr>
                                        <th>Credit Score</th>
                                        <td>{l.Mincreditscore}</td>
                                      </tr>
        
                                     
                                    </tbody>
                                  </table>
                                </td>
        
                                <td>
                                  <table className="table ">
                                    <tbody>
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
        
                                      
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
        
                              <tr>
                                <td colSpan={3} className="text-center  text-white">
                                  {l.approved ? (
                                    <p className="bg-success mt-3 p-1">
                                      Application Approved
                                    </p>
                                  ) : l.rejected ? (
                                    <p className="bg-danger mt-3 p-1">
                                      Application Rejected
                                    </p>
                                  ) : (
                                    <p className="bg-secondary mt-3 p-1">
                                      Application Pending
                                    </p>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>)
        }
        {
             name==='pendingApp' && (<div className="row">
                <div className="offset-md-2 col-md-9">
                  {appliedLoans ? (
                    pendlingApplication.map((l, index) => (
                      <div key={index} className="card mb-5">
                        <div className="card-body">
                          <table className="table ">
                            <tbody>
                                <tr>
                                    <td colSpan={3} className="text-end">
                                      <img alt=""
                                            width={50}
                                            height={50}
                                            src={l.logo}
                                          />
                                    </td>
                                </tr>
                              <tr>
                                <td>
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td >
                                          <img alt="" className="mt-5"
                                            width={100}
                                            height={100}
                                            src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <table className="table ">
                                    <tbody>
                                      <tr>
                                        <th>Applicant</th>
                                        <td>{l.name}</td>
                                      </tr>
                                      <tr>
                                        <th>Gender</th>
                                        <td>{l.gender}</td>
                                      </tr>
                                      <tr>
                                        <th>Age</th>
                                        <td>31</td>
                                      </tr>
                                      <tr>
                                        <th>Salary</th>
                                        <td>{l.salary}</td>
                                      </tr>
                                      <tr>
                                        <th>Credit Score</th>
                                        <td>{l.Mincreditscore}</td>
                                      </tr>
        
                                     
                                    </tbody>
                                  </table>
                                </td>
        
                                <td>
                                  <table className="table ">
                                    <tbody>
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
        
                                      
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
        
                              <tr>
                                <td colSpan={3} className="text-center  text-white">
                                  {l.approved ? (
                                    <p className="bg-success mt-3 p-1">
                                      Application Approved
                                    </p>
                                  ) : l.rejected ? (
                                    <p className="bg-danger mt-3 p-1">
                                      Application Rejected
                                    </p>
                                  ) : (
                                    <p className="bg-secondary mt-3 p-1">
                                      Application Pending
                                    </p>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                 <td colSpan={3} className="text-center">
                                     <button onClick={()=>approve(l)} className="btn btn-success">Approve</button> 
                                     &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                     <button onClick={()=>reject(l)} className="btn btn-danger">Reject</button>
                                 </td>
                               
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>)
        }
         {
             name==='approvedApp' && (<div className="row">
                <div className="offset-md-2 col-md-9">
                  {appliedLoans ? (
                    approvedApplication.map((l, index) => (
                      <div key={index} className="card mb-5">
                        <div className="card-body">
                          <table className="table ">
                            <tbody>
                                <tr>
                                    <td colSpan={3} className="text-end">
                                      <img alt=""
                                            width={50}
                                            height={50}
                                            src={l.logo}
                                          />
                                    </td>
                                </tr>
                              <tr>
                                <td>
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td >
                                          <img alt="" className="mt-5"
                                            width={100}
                                            height={100}
                                            src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <table className="table ">
                                    <tbody>
                                      <tr>
                                        <th>Applicant</th>
                                        <td>{l.name}</td>
                                      </tr>
                                      <tr>
                                        <th>Gender</th>
                                        <td>{l.gender}</td>
                                      </tr>
                                      <tr>
                                        <th>Age</th>
                                        <td>31</td>
                                      </tr>
                                      <tr>
                                        <th>Salary</th>
                                        <td>{l.salary}</td>
                                      </tr>
                                      <tr>
                                        <th>Credit Score</th>
                                        <td>{l.Mincreditscore}</td>
                                      </tr>
        
                                     
                                    </tbody>
                                  </table>
                                </td>
        
                                <td>
                                  <table className="table ">
                                    <tbody>
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
        
                                      
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
        
                              <tr>
                                <td colSpan={3} className="text-center  text-white">
                                  {l.approved ? (
                                    <p className="bg-success mt-3 p-1">
                                      Application Approved
                                    </p>
                                  ) : l.rejected ? (
                                    <p className="bg-danger mt-3 p-1">
                                      Application Rejected
                                    </p>
                                  ) : (
                                    <p className="bg-secondary mt-3 p-1">
                                      Application Pending
                                    </p>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>)
        }
          {
             name==='rejectedApp' && (<div className="row">
                <div className="offset-md-2 col-md-9">
                  {appliedLoans ? (
                    rejectedApplication.map((l, index) => (
                      <div key={index} className="card mb-5">
                        <div className="card-body">
                          <table className="table ">
                            <tbody>
                                <tr>
                                    <td colSpan={3} className="text-end">
                                      <img alt=""
                                            width={50}
                                            height={50}
                                            src={l.logo}
                                          />
                                    </td>
                                </tr>
                              <tr>
                                <td>
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td >
                                          <img alt="" className="mt-5"
                                            width={100}
                                            height={100}
                                            src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <table className="table ">
                                    <tbody>
                                      <tr>
                                        <th>Applicant</th>
                                        <td>{l.name}</td>
                                      </tr>
                                      <tr>
                                        <th>Gender</th>
                                        <td>{l.gender}</td>
                                      </tr>
                                      <tr>
                                        <th>Age</th>
                                        <td>31</td>
                                      </tr>
                                      <tr>
                                        <th>Salary</th>
                                        <td>{l.salary}</td>
                                      </tr>
                                      <tr>
                                        <th>Credit Score</th>
                                        <td>{l.Mincreditscore}</td>
                                      </tr>
        
                                     
                                    </tbody>
                                  </table>
                                </td>
        
                                <td>
                                  <table className="table ">
                                    <tbody>
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
        
                                      
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
        
                              <tr>
                                <td colSpan={3} className="text-center  text-white">
                                  {l.approved ? (
                                    <p className="bg-success mt-3 p-1">
                                      Application Approved
                                    </p>
                                  ) : l.rejected ? (
                                    <p className="bg-danger mt-3 p-1">
                                      Application Rejected
                                    </p>
                                  ) : (
                                    <p className="bg-secondary mt-3 p-1">
                                      Application Pending
                                    </p>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>)
        }
      
      
    </div>
  );
}
