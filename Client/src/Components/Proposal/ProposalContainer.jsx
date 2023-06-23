import ProposalCard from "./ProposalCard"
import SideNav from "../Main/SideNav"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import proposalsArray from "./proposals"
const ProposalContainer = ()=>{
    const [shownNumber,setShownNumber] = useState(9)
    const [filterState,setFilterState] = useState(false)


const showMore = ()=>{
    setShownNumber(()=>{
        return shownNumber + 18
    })
}
const showLess = ()=>{
    setShownNumber(9)
}


    const filterFunction = (e)=>{
        showLess()
        console.log(e.target.value)
             setFilterState(()=>{
                return proposalsArray.filter((item)=>{
             
                        return (item.theme
                        .toLowerCase()
                        .replace(/\s/g, "")
                        .includes(e.target.value.toLowerCase().replace(/\s/g, "")) || item.name.toLowerCase()
                        .replace(/\s/g, "")
                        .includes(e.target.value.toLowerCase().replace(/\s/g, "")));
                    
                })
            })
            console.log(filterState)
    }
    return(
        <div className="flex flex-row  min-h-screen">
            <div className="w-[10%]">
          <SideNav />
          </div>
          <div className="flex flex-col  border-dotted w-[90%] p-6 gap-4">
            <div className="w-full flex justify-center">
                <h1 className="text-4xl font-bold">შემოთავაზებები</h1>
            </div>
            <div className="flex justify-center">
                <input placeholder="Search for Proposals" onChange={(e)=>{filterFunction(e)}} className="text-xl bg-light-gray bg-opacity-50 outline-none p-2 md:w-72 rounded-md"/>
            </div>

<div className=" flex flex-wrap  gap-4 justify-center">
    {!filterState ? <>
        {proposalsArray.slice(0,shownNumber).map((item)=>{
            return(
                <Link key={item.id}> <ProposalCard name={item.name}  proposal={item.proposal} amount={item.amount} theme={item.theme}/> </Link>

            )
        })}
    </> : <>
    {filterState.slice(0,shownNumber).map((item)=>{
            return(
                <Link key={item.id} to={"/"}> <ProposalCard  name={item.name} proposal={item.proposal} amount={item.amount} theme={item.theme}/> </Link>

            )
        })}
    </> }
        <div className="w-full flex justify-center gap-2">
            {shownNumber>= proposalsArray.length ? null : <button className="text-xl  w-32 h-9 bg-cyan-500 rounded-md text-white " onClick={()=>showMore()}>მაჩვენე</button> }
       
       {shownNumber > 9 ?  <button className="text-xl bg w-32 h-9 bg-cyan-500 rounded-md text-white" onClick={()=>showLess()}>დამალვა</button> : null}
       </div>
       </div>
          </div>
        </div>
    )
}

export default ProposalContainer