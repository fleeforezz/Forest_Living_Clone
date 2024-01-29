"use client"
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Header() {
    return (
        <nav className="flex items-center justify-between sticky">
            <div className="flex items-center w-[45%] justify-between">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        className="w-[52px] h-[52px]"
                    />
                    <h1 className="font-bold leading-[18px]">
                        Forest <br></br> livings.
                    </h1>
                </div>

                <div className="flex gap-12 text-slate-500 font-semibold">
                    <a href="">
                        Products
                    </a>
                    <a href="">
                        Living
                    </a>
                    <a href="">
                        Dinning
                    </a>
                    <a href="">
                        Outdoor
                    </a>
                </div>
            </div>

            <a href="" className="px-[23px] py-[14px] bg-[#cbfcd4] rounded-full font-semibold flex items-center gap-2">
                Enquire Now
                <ArrowUpRight size={17} color="#053716" weight="bold" />
            </a>
        </nav>
    )
}