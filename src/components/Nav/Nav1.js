import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Nav1() {
  return (
    <div className="w-full h-[60px]  bg-white   flex flex-row space-x-10 justify-between  items-center  p-2 overflow-hidden sticky top-0 left-0 right-0 2-50 ">
      <section className="logo-container  w-[fixed] h-[fixed] flex flex-row gap-x-4  justify-start items-start  ">
        <Link href="https://tongston.com" target="_blank">
          <Image
            src="/assets/images/tongston-logo.png"
            alt="tongston-logo"
            height={200}
            width={200}
            className="  "
          />
        </Link>
      </section>

      <div className="   flex  justify-start items-start  bg-transparent shadow-2xl   border border-lime-800 rounded-md p-2">
        <Link href="#">
          <section className="button-section  font-thin    w-[100px] rounded-md flex flex-col justify-center items-center p-1 text-base  animate-pulse  text-white  bg-lime-800">
            Connect
          </section>
        </Link>
      </div>
    </div>
  );
}
