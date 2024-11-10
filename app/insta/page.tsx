"use client";

import { MessageCircleHeart } from 'lucide-react';
import { MailCheck } from 'lucide-react';
export default function Home() {
  return (
      <div className="flex justify-center items-center w-full h-[100dvh] bg-violet-100">
        <div className="max-w-sm w-full h-[100dvh] bg-white">
          <div className="flex justify-between justify-between bg-red-500 px-2">
            <span className="font-bold border-4 border-blue-500">Instagram</span>
            <div className='flex items-center gap-2'>
              <button onClick={() =>mch()}>
                <MessageCircleHeart className='w-6 h-6'/>
              </button>
              <button>
                <MailCheck className='w-6 h-6'/>
              </button> 
            </div>
          </div>
        </div>   
      </div>    
  );
}

function mch(){
  // console.log("MessageCircleHeart Button is pushed")
  // alert("umjunsick")
  // alert(prompt("id:"))//
  confirm("yes or no!!")
}