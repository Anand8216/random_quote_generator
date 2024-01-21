import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [quote, setQuote]=useState()
  const handleSubmit=async ()=>{
   const response= await axios.get("/api/randomquote")
   const quote =response.data.quote.Quote
   console.log(quote);
   setQuote(quote);
   
  }

  return (
    
     <div className='container'>
     
      <div className='card-container'>
        <p className='result'>{quote}</p>
        <button onClick={handleSubmit} className='btn'>
          <span>click me</span>
          </button>
      </div>
     </div>
   
  )
}

export default App
