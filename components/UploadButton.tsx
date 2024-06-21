"use client";
import React from "react";
import type { PutBlobResult } from '@vercel/blob';
import Image from "next/image";
import upload from "@/public/assets/upload.jpg"


export default function UploadButton() {
    const [open, setOpen] = React.useState(false);
    const overlayRef = React.useRef<any>(null);
    const inputFileRef = React.useRef<HTMLInputElement>(null);
    const [blob, setBlob] = React.useState<PutBlobResult | null>(null);

    function handleClick() {
        setOpen(!open);
    }

    

    React.useEffect(() => {
        const handleMenuClose = (e: any) => {
            if (
                overlayRef.current.contains(e.target)
            ) {
                setOpen(false);
                const fileInput = document.getElementById('file') as HTMLInputElement | null;
                if (fileInput) {
                    fileInput.value = '';
                }
            }
        };

        document.addEventListener("click", handleMenuClose);
        return () => {
            document.removeEventListener("click", handleMenuClose);
        };
    }, []);

    return (
        <>
            <button
                onClick={handleClick}
                className="py-[10px] px-[17px] bg-light-orange hover:bg-dark-orange transition-colors duration-300 rounded-xl text-white font-bold cursor-pointer"
            >
                Upload new photo
            </button>
            <div className={`${open ? "delay-[150ms] opacity-100" : "opacity-0 pointer-events-none delay-0"} absolute flex justify-center items-center top-0 bottom-0 left-0 w-full h-full`}>
                <div
                    className={`w-[700px] h-[450px] p-[20px]  bg-white z-[103] absolute transition-opacity duration-[300ms] rounded-xl 
                        ${open ? "delay-[150ms] opacity-100" : "opacity-0 pointer-events-none delay-0"}`}>
                    
                    <form
                        onSubmit={async (event) => {
                        event.preventDefault();

                        if (!inputFileRef.current?.files) {
                            throw new Error("No file selected");
                        }

                        const file = inputFileRef.current.files[0];

                        const response = await fetch(
                            `/api/upload-avatar?filename=${file.name}`,
                            {
                            method: 'POST',
                            body: file,
                            },
                        );

                        const newBlob = (await response.json()) as PutBlobResult;

                        setBlob(newBlob);
                        console.log(blob)
                        }}
                        className="p-[10px] w-full h-full flex flex-col justify-center items-center z-[102]"
                    >   
                        <label htmlFor='file' className="w-full h-full border-dashed border-[5px] flex justify-center items-center">
                            <Image src={upload} width={200} height={200} alt="click to upload" />
                        </label>
                        <input name="file" id="file" ref={inputFileRef} type="file" required className="w-[120px] mb-4"/>
                        <button type="submit" className="bg-light-orange py-[8px] px-[12px] text-white font-bold uppercase rounded-xl hover:bg-dark-orange transition-colors duration-300 w-[200px]">Upload</button>
                    </form>
                </div>
            </div>
            <span ref={overlayRef} className={`z-[101] transition-opacity duration-[300ms] fixed top-0 left-0 w-full h-full bg-overlay-grey ${open ? "delay-[150ms] flex opacity-50" : "opacity-0 pointer-events-none delay-0"}`}></span>
        </>
    );
}
