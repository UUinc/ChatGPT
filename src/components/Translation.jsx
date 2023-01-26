import React from 'react'

function Translation({generate, setInput, selectOption, result}) {
  return (
    <div className='translation'>
        <button className='btn-back' onClick={()=>selectOption({})}>Back</button>
        <textarea className='text-area' cols={60} rows={20} onChange={(e)=>setInput(e.target.value)}></textarea>
        <button className='btn-generate' onClick={generate}>Generate</button>
        <p className='text-result'>{result}</p>
    </div>
  )
}

export default Translation