import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import ph from '../public/img/ph1.jpg'; // مسیر عکس 
import Timer from './component/timer';
import Map from './component/map';
import User from './component/user';
import Present from './component/Present';
import './index.css';

function App() {
  const [appState, setAppState] = useState('intro'); // 'intro', 'playing-video', 'main-site'
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // ۱. شروع با کلیک کاربر
  const handleStart = () => {
    setAppState('playing-video');
    
    // پخش ویدیو با صدا
    if (videoRef.current) {
      videoRef.current.play();
    }

    // حالا چون تگ audio همیشه در صفحه هست، رفرنس آن null نیست و مرورگر قفلش را باز می‌کند
    if (audioRef.current) {
      audioRef.current.muted = true; // اول بدون صدا پخش می‌کنیم تا مرورگر ارور ندهد
      audioRef.current.play().catch(e => console.log("Audio unlock failed:", e));
    }
  };

  // ۲. پایان ویدیو و ورود به سایت
  const handleVideoEnd = () => {
    setAppState('main-site');
    
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // برگرداندن آهنگ به ثانیه صفر
      audioRef.current.muted = isMuted; // اعمال کردن تنظیم صدای کاربر
      
      // اگر متوقف شده بود دوباره پخش می‌کنیم
      audioRef.current.play().catch(e => console.log("Final play blocked:", e));
    }
  };

  // ۳. دکمه قطع/وصل صدا
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  return (
    <>
      {/* 
        نکته کلیدی: تگ صدا را اینجا گذاشتیم تا همیشه در صفحه رندر شود 
        و رفرنس آن از بین نرود.
      */}
      <audio ref={audioRef} src="/audio/music.mp3" loop />

      {/* ----------- بخش اول: ویدیو و صفحه ورود ----------- */}
      {appState !== 'main-site' && (
        <div 
          className="fixed inset-0 bg-[#f4f1ea] flex items-center justify-center z-50 cursor-pointer overflow-hidden"
          onClick={appState === 'intro' ? handleStart : undefined}
        >
          <video
            ref={videoRef}
            src="/vid/gem.mp4"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${appState === 'playing-video' ? 'opacity-100' : 'opacity-0'}`}
            onEnded={handleVideoEnd}
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            style={{ pointerEvents: 'none' }}
          />
          
          {appState === 'intro' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }} 
                className="text-white text-3xl sm:text-4xl text-center bg-[#4a5d4e]/90 px-8 py-4 rounded-3xl border-2 border-[#dfc26a] shadow-2xl"
              >
                برای باز کردن پاکت لمس کنید
              </motion.div>
            </div>
          )}
        </div>
      )}

      {/* ----------- بخش دوم: سایت اصلی ----------- */}
      {appState === 'main-site' && (
        <div className="min-h-screen pb-20 flex justify-center bg-[#f4f1ea]" dir="rtl">
          
          {/* دکمه مدیریت صدای موسیقی */}
          <button 
            onClick={toggleMute} 
            className="fixed bottom-6 left-6 z-50 bg-[#4a5d4e] text-[#f4f1ea] p-4 rounded-full shadow-xl border-2 border-[#dfc26a] hover:bg-[#38473b] transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-md bg-white shadow-2xl overflow-hidden relative"
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white z-10" />
              <img src={ph} alt="تصویر زمینه" className="w-full h-full object-cover" />
            </div>

            <div className="px-6 relative z-20 flex flex-col items-center -mt-32">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }} 
                className="w-40 h-40 rounded-full border-[6px] border-[#4a5d4e] overflow-hidden shadow-2xl relative bg-white p-1"
              >
                <img src={ph} className="w-full h-full object-cover rounded-full" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="w-full text-center mt-6">
                <User />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="w-full">
                <Timer />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="w-full">
                <Map />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="w-full">
                <Present />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;