"use client";
import { resetCartAction } from "@/app/actions";

export default function ResetBtn() {
  const handleResetBtn = async () => {
    await resetCartAction();
  };
  return (
    <div className="flex justify-center w-full">
      <button onClick={handleResetBtn} className="mb-4 w-32 bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition duration-200">
        Reset Cart
      </button>
    </div>
  );
}