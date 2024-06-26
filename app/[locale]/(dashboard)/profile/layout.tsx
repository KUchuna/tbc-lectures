import ProfileNav from "@/components/ProfileNav";
import { ReactElement } from "react";

export const dynamic = 'force-dynamic';

export default function ProfileLayout({ children }: { children: ReactElement }) {
    return (
        <div className="flex py-[16px] md:px-[30px] px-[16px] w-full justify-center">
            <div className="flex md:max-w-[1216px] w-full">
                <ProfileNav />
                {children}
            </div>
        </div>
    );
}
