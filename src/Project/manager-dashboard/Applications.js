import axios from "axios";
import React, { useEffect, useState } from "react";

import DisplayLoanInfo from "./DisplayLoanInfo";

export default function Applications({ name }) {
  const [appliedLoans, setappliedLoans] = useState([]);
  


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



  return (
    <div className="container">
       
        {
             name==='allApp' &&  <DisplayLoanInfo name="allApp" data={appliedLoans}/>
        }
         
        {
             name==='pendingApp' &&  <DisplayLoanInfo name="pendingApp" data={pendlingApplication}/>
        }
        {
             name==='approvedApp' &&  <DisplayLoanInfo name="approvedApp" data={approvedApplication}/>
        }
        {
             name==='rejectedApp' &&  <DisplayLoanInfo name="rejectedApp" data={rejectedApplication}/>
        }
         
      
      
    </div>
  );
}
