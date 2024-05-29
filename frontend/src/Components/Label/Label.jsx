import React from 'react'
import './Label.css'

const obj=[
    {
        type:"Savings",
        Color:"@f9c74f",
        percent:45
    },
    {
        type:"Investment",
        Color:"@f9c74f",
        percent:30
    },
    {
        type:"Expense",
        Color:"@f9c74f",
        percent:20
    },

]

const Label = () => {
  return (
    <>
    {obj.map((item,i)=>(
        <LabelComponent key={i} data={item}/>
    ))}
    </>
  )
}

export default Label

function LabelComponent({data}){
    return (
        <div className="flex_container">
            <div className="expense_type">
                <p>{data.type ?? ""}</p>
            </div>
            <p className='expense_present'>{data.percent ?? 0}%</p>
        </div>
    )
}