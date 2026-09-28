import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // تاریخ عروسی را اینجا تنظیم کنید
    const targetDate = new Date('2026-10-09T18:00:00'); 
    
    const calculateTime = () => {
      const nowString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tehran' });
      const now = new Date(nowString);
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8">
      <h3 className="text-3xl text-center text-[#4a5d4e] mb-4">تا وصال یار</h3>
      <div className="flex gap-4 justify-center items-center text-center" dir="rtl">
        {[
          { label: 'روز', value: timeLeft.days },
          { label: 'ساعت', value: timeLeft.hours },
          { label: 'دقیقه', value: timeLeft.minutes },
          { label: 'ثانیه', value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="bg-[#4a5d4e] border-2 border-[#dfc26a] px-4 py-3 rounded-2xl min-w-[70px] shadow-lg flex flex-col items-center">
            <span className="block text-3xl font-bold text-[#f4f1ea]">{item.value}</span>
            <span className="text-lg text-[#dfc26a] mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}