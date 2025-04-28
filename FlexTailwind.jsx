import React from "react";

const FlexTailwind = () => {
    return (
        <>
        <div className="flex justify-items-center flex-col gap-10 ">

            <h2>Hình 1.1. Các phần tử nằm bên trái </h2>
        <div className="flex justify-start border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px]  rounded-sm ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px]  rounded-sm ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px]  rounded-sm ">03</div>
        </div>

            <h2>Hình 1.2. Các phần tử nằm bên phải </h2>
        <div className="flex justify-end border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">03</div>
        </div>

            <h2>Hình 1.3. Các phần tử nằm ở giữa </h2>
        <div className="flex justify-center border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">03</div>
        </div>

            <h2>Hình 1.4. Các phần tử giãn ra hai bên </h2>
        <div className="flex justify-between border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">03</div>
        </div>

            <h2>Hình 1.5. Các phần tử giãn đều 2 bên </h2>
        <div className="flex justify-around border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">03</div>
        </div>

            <h2>Hình 1.6. Các phần tử giữa đều </h2>
        <div className="flex justify-evenly border-1 gap-2 ">
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">01</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">02</div>
            <div className="bg-sky-500 text-white w-[50px] h-[50px] rounded-md ">03</div>
        </div>

       

        </div>
        </>
    )
};

export default FlexTailwind;