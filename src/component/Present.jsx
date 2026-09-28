import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, HeartCrack } from "lucide-react";

function Present() {
  const [rsvpStatus, setRsvpStatus] = useState(null);

  const handleRSVP = (status) => {
    setRsvpStatus(status);
    // اینجا می‌توانید کد مربوط به ارسال به سرور را قرار دهید
  };

  return (
    <div className="my-10 pt-8 border-t-2 border-[#dfc26a]/30 relative z-10 text-center pb-12">
      <h3 className="text-4xl font-bold text-[#4a5d4e] mb-4">اعلام حضور</h3>
      <p className="text-xl text-gray-600 mb-8 max-w-sm mx-auto leading-loose">
        لطفا با اعلام حضور خود، ما را در برنامه‌ریزی بهتر یاری فرمایید.
      </p>
      
      {!rsvpStatus ? (
        <div className="flex flex-row gap-4 justify-center px-4">
          <button 
            onClick={() => handleRSVP('accepted')} 
            className="flex-1 bg-[#4a5d4e] hover:bg-[#38473b] text-[#f4f1ea] py-4 px-6 rounded-2xl border-2 border-[#dfc26a] shadow-lg transition-all flex items-center justify-center gap-2 text-2xl cursor-pointer"
          >
            <CheckCircle size={24} />
            <span>با افتخار می‌آیم</span>
          </button>
          
          <button 
            onClick={() => handleRSVP('declined')} 
            className="flex-1 bg-[#f4f1ea] hover:bg-[#e8e2d2] text-[#4a5d4e] py-4 px-6 rounded-2xl border-2 border-[#4a5d4e]/30 shadow-md transition-all flex items-center justify-center gap-2 text-2xl cursor-pointer"
          >
            <HeartCrack size={24} />
            <span>نمی‌توانم شرکت کنم</span>
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mx-6 p-6 rounded-3xl bg-[#4a5d4e] border-2 border-[#dfc26a] shadow-xl text-[#f4f1ea]"
        >
          {rsvpStatus === 'accepted' ? (
            <>
              <div className="flex items-center justify-center gap-3 text-[#dfc26a] font-bold mb-3">
                <CheckCircle size={32} />
                <span className="text-3xl">مشتاق دیدارتان هستیم!</span>
              </div>
              <p className="text-xl text-[#f4f1ea]">حضور شما باعث دلگرمی ماست.</p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-3 text-[#dfc26a] font-bold mb-3">
                <HeartCrack size={32} className="text-rose-400" />
                <span className="text-3xl">جای شما سبز خواهد بود.</span>
              </div>
              <p className="text-xl text-[#f4f1ea]">ممنون که به ما اطلاع دادید.</p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default Present;