import { useRef, useState } from 'react'

export function DemoII(){
    const[y,setY]=useState(0)
    

    let x=0

    const ref=useRef(0)
    // console.log("ref =",ref)
    /** 
     * not like => ref=0
     *  ref={current:0}
     */

    return(
        <div className="m-4 p-2 w-96 h-96 bg-slate-50 border border-black">
               <div>

                <button className="bg-green-200 px-2 m-4 " onClick={()=>{x=x+1
                    console.log(x) 
                 } }>INcrease</button>
              
                <h1 className="font-bold text-xl">let {x}</h1>

                <button className="bg-green-200 px-2 m-4 " onClick={()=>setY(y+1)}>Increse Y</button>
                <h1 className="font-bold text-xl">let {y}</h1>
                  
                <button className="bg-green-200 px-2 m-4 " onClick={()=> {ref.current=ref.current+1 ;console.log("ref =",ref)}}>Increse Ref</button>
                <h1 className="font-bold text-xl">Ref ={ref.current}</h1>
               </div>
        </div>
    )
}