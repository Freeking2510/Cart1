import React from "react";

function User() {
  return (
    <div className="text-center my-6">
      <h1 className="text-6xl font-bold font-nastaliq text-[#4a5d4e] mb-4 drop-shadow-sm">
        جشن عقد کنان 
      </h1>
      <div className=" items-center justify-center gap-4 my-10">
        <h2 className="pl-32 text-5xl font-nastaliq text-gray-700">امیرحسین</h2>
        ,
        <h2 className=" pr-32 text-5xl font-nastaliq text-gray-700">نازنین زهرا</h2>
      </div>

      <div className="my-6 p-4 bg-[#f4f1ea] rounded-xl border border-[#4a5d4e]/20 text-[#4a5d4e]">
        <h1 className="text-3xl font-bold  text-[#4a5d4e] mb-2 drop-shadow-sm">
          جناب اقای علی سبزی کار
        </h1>
        <p className="text-2xl text-gray-600 leading-loose mt-4">
        با حضور گرمتان، <br/>
        محفل ما را صفا می‌بخشید.
        </p>
        <p className="font-bold text-[#cfb35f]">همراه با خانواده </p>
      </div>

      <div className="my-6 p-4 bg-[#f4f1ea] rounded-xl border border-[#4a5d4e]/20 text-[#4a5d4e]">
        <p className="text-2xl">جمعه، ۱۷ مرداد ۱۴۰۵</p>
        <p className="text-2xl">ساعت ۱۸:۰۰</p>
      </div>
    </div>
  );
}

export default User;