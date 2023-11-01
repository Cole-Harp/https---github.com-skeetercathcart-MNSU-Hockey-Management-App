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
    <div className = ' w-1/3 bg-red-500'>
      Org Members
      <aside>
        {membershipList?.map((m) => (
            <li key = {m.id}> 
                <div className = 'flex flex-row'>
                  <div className = 'flex w-10 items-center justify-center'>
                    <Building className = ''/>
                  </div>
                <div className = 'flex w-1/3 text-center items-center px-2'> 
                    {m.publicUserData.firstName} {m.publicUserData.lastName} :: {m.role}
                </div>
                <button 
                  className='border-2 border-slate-800 px-4 m-2 hover:bg-slate-200 rounded-full shadow-md shadow-slate-600 active:scale-95'
                  onClick={remove}
                  disabled={disabled}
                >
                    Remove {/* Updated button text */}
                </button>
            </div>
            </li>
        ))}
      </aside>
    </div>
  )
}

export default MemberList
  