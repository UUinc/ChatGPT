import React from 'react'

function OptionSelection({arrayItems, selectOption}) {
  return (
    <>
        <h1>React AI APP</h1>

        <div className='grid-main'>
            {arrayItems.map((item)=>{
                return (
                <div className='grid-child' onClick={()=>{selectOption(item.option);}}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>);
            })}
        </div>
    </>
  )
}

export default OptionSelection