'use client'

import { useOrganization } from "@clerk/nextjs";
import React from "react";
import { Building } from 'lucide-react'
import { useState } from "react";

const MemberList  = () => {
  const [disabled, setDisabled] = useState(false);
    const { membershipList, membership } = useOrganization({
        membershipList: {},
      });

    const remove = async () => {
      setDisabled(true);
      await membership.destroy();
    };
    
  return (
    <div className = 'w-1/3 border-2 border-black h-full mx-1'>
      <div className = 'flex justify-center items-end text-3xl font-bold my-1 border-b-2 h-16 border-neutral-400'>
        Team Members
      </div>
      <aside>
        {membershipList?.map((m) => (
            <div key = {m.id}> 
                <div className = 'flex flex-row my-1 m-2 border-2 border-neutral-400 rounded hover:bg-neutral-100 hover:border-neutral-600'>
                  <div className = 'flex px-2 items-center justify-center'>
                    <img className = 'bg-green-400 m-2 w-16 h-16 rounded-full' src = {m.publicUserData.imageUrl}/>
                  </div>
                <div className = 'flex basis-3/5 text-center items-center px-2'> 
                    {m.publicUserData.firstName} {m.publicUserData.lastName} :: {m.role}
                </div>
                <div className = 'flex basis-1/4 justify-end'>
                  <button 
                  className='border-2 border-red-800 bg-red-200 px-4 m-2 hover:bg-red-400 rounded-full shadow-md shadow-slate-600 active:scale-95'
                  onClick={remove}
                  disabled={disabled}
                >
                    Remove {/* Updated button text */}
                </button></div>
            </div>
            </div>
        ))}
      </aside>
      <div className = 'flex h-20 flex-row my-1 m-2 border-2 border-neutral-400 rounded items-center justify-center'>
        <button className = 'flex w-12 h-12 shadow-md shadow-neutral-400 bg-gradient-to-br  from-mnsu_purple to-purple-800 text-white text-xl font-bold rounded-full items-center justify-center active:scale-95 '>
          +
        </button>

      </div>
    </div>
  )
}

export default MemberList
  