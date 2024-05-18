"use client";
import { resetCartAction } from "@/app/actions";

export default function ResetBtn() {
  const handleResetBtn = async () => {
    await resetCartAction();
  };
  return (
    <div>
      <button onClick={handleResetBtn} className="mb-4 w-32 bg-slate-600	">
        Reset Cart Items
      </button>
    </div>
  );
}
