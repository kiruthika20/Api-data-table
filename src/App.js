import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css';
import ApiTable from "./ApiTable.js"

function App() {

  const [datas, setData]= useState([])
  
 
  useEffect(()=>{
    axios
      .get('http://timeapi.kaaylabs.com/api/v1/project_view/')
      .then( response =>{
        setData(response.data.data)
      })
  },[])
  const [table,setTable]= useState("")

  function filteringtable(rows) {
    
    
      return rows.filter((row)=>row.status.indexOf(table)>-1)
    }
  

  return (

    <div>
    
    <pre className="folder">The below Dropbox displays the unique values of Status present in the API .</pre>
      <br/>
      <select className="class1"  onChange={(e)=>setTable(e.target.value)} >
      
      
      {datas.map(state => state.status).filter((valuee, a, aa) => aa.indexOf(valuee) === a).map(item => (
          <option  value={item}>{item}</option>
        )
          )}
      </select>
      
      <div>
        <br/>
        <ApiTable probs={filteringtable(datas)} />
      </div>
      
    </div>
  )
} 

export default App;
