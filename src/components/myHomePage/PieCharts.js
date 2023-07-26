// import { useState } from 'react'
import React from 'react'
import { PieChart,Pie,Cell,ResponsiveContainer,Label } from 'recharts'

function PieCharts() {
    const Colors = ["#9487BD", "#5CB85C"];
    const dataPie=[
        {type:'completed',value:20},
        {type:'Uncompleted',value:80},
    ]
  return (
    <ResponsiveContainer>
        <PieChart>
        <Pie data={dataPie} cx="50%" cy="50%" innerRadius={15} outerRadius={20}>
        {dataPie.map((entry,index)=>(
            <><Cell key={`cell-${index}`} fill={Colors[index]} /><Label value={`${dataPie[0].value}%`} position={'center'} fontSize={13}></Label></>
        ))}
        </Pie>
        </PieChart>
    </ResponsiveContainer>

  )
}

export default PieCharts