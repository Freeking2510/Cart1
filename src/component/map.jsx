import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Map = () => {
  const [activeTab, setActiveTab] = useState('google');
  const address = "اندیشه بین فاز یک و دو خیابان درختی کوچه دوم پلاک 29";

  return (
    <div className="w-full my-10 p-6 bg-[#f4f1ea] border-2 border-[#dfc26a]/50 rounded-3xl shadow-sm relative overflow-hidden">
      {/* حاشیه تزئینی بالای نقشه */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#4a5d4e]"></div>
      
      <div className="flex items-center justify-center gap-3 mb-6 text-[#4a5d4e] mt-4">
        <MapPin size={32} />
        <h3 className="text-4xl font-bold m-0">محل برگزاری</h3>
      </div>
      
      <p className="text-2xl text-center text-gray-700 mb-6">{address}</p>

      <div className="flex gap-2 mb-6">
        {['google', 'neshan', 'balad'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xl transition-all cursor-pointer border ${
              activeTab === tab 
                ? 'bg-[#4a5d4e] text-white border-[#4a5d4e] shadow-md' 
                : 'bg-white text-[#4a5d4e] border-[#4a5d4e]/30 hover:bg-[#4a5d4e]/10'
            }`}
          >
            {/* می‌توانید آیکون نقشه را اینجا بگذارید */}
            {tab === 'google' && <span>گوگل</span>}
            {tab === 'neshan' && <span>نشان</span>}
            {tab === 'balad' && <span>بلد</span>}
          </button>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border-2 border-[#dfc26a]/50 shadow-inner bg-white">
        {activeTab === 'google' && (
          <div className="flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1400.2457560826074!2d51.005416706500846!3d35.680716452621354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d92cfc96a850d%3A0x2baf81da992aa558!2z2KjYp9i6INiq2KfZhNin2LEg2KfYsdqp24zYr9mH!5e0!3m2!1sfa!2sus!4v1790510957681!5m2!1sfa!2sus"
              width="100%" height="300" className="border-0" allowFullScreen="" loading="lazy">
            </iframe>
            <a href="https://www.google.com/maps/search/?api=1&query=35.6807164,51.0054167" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 py-4 bg-[#dfc26a] hover:bg-[#c9aa29] text-[#2b3a32] text-xl font-bold transition-colors">
              <Navigation size={20} /> مسیریابی با گوگل
            </a>
          </div>
        )}
        {activeTab === 'neshan' && (
           <div className="flex flex-col">
             <iframe src="https://neshan.org/maps/iframe/places/fc8797e1ab696f0e70c900f4d1aab94b#c35.681-51.007-16z-0p/35.6808970254541/51.004143057266944"
                width="100%" height="300" className="border-0" allowFullScreen="" loading="lazy"></iframe>
             <a href="https://nshn.ir/35.680897,51.004143" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-[#dfc26a] hover:bg-[#c9aa29] text-[#2b3a32] text-xl font-bold transition-colors">
               <Navigation size={20} /> مسیریابی با نشان
             </a>
           </div>
        )}
        {activeTab === 'balad' && (
           <div className="flex flex-col">
             <iframe src="https://balad.ir/embed?p=4VRfTn0gQeVvjv" width="100%" height="300" className="border-0" allowFullScreen="" loading="lazy"></iframe>
             <a href="https://balad.ir/p/4VRfTn0gQeVvjv" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-[#dfc26a] hover:bg-[#c9aa29] text-[#2b3a32] text-xl font-bold transition-colors">
               <Navigation size={20} /> مسیریابی با بلد
             </a>
           </div>
        )}
      </div>
        <h3 className="text-center font-bold text-4xl text-[#4a5d4e] mt-6">
          تالار ارکیده 
        </h3>
    </div>
  );
}

export default Map;