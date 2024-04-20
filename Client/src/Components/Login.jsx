import React from "react";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "./googleLoginAPI";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login({authenticate}) {
  return (
    <GoogleOAuthProvider clientId="748177157900-9glch6e1n7dk5ter1b8i1qn1ee5edkib.apps.googleusercontent.com">
      <div className="flex flex-col h-[100vh] w-[100vw] font-mono">
        <div className="flex h-[30%] w-[100%] bg-[#04a782]">
          <span className="flex items-center m-auto text-2xl font-bold gap-2">
            <img
              src="/WhatsApp-logo.png"
              alt="Whatsapp Logo"
              height={40}
              width={40}
            />
            WHATSAPP-CLONE
          </span>
        </div>
        <div className="flex h-[50%] w-[60%] absolute top-[25%] left-[20%] bg-[black] text-[white] rounded-md p-5">
          <dl className="leading-loose mt-[2%]">
            <dt className="text-xl font-semibold leading-10">
              To use WhatsApp-Clone on your Computer:
            </dt>
            <dd>1. You need to signin using your Google account</dd>
            <dd>2. You can logout anytime from the Web</dd>
            <dd>3. Click on signin button top continue using Whatsapp-Clone</dd>
            <dd className="flex items-center justify-around w-[45%] mt-[5%] ml-[5%] rounded-md border-2 border-[grey] hover:bg-[#181a1b]">
              <GoogleLogin authenticate={authenticate}/>
              <FcGoogle className="text-lg" />
            </dd>
          </dl>
          <img
            src="/FakeQR.png"
            alt="WhatsApp FakeQR"
            height={100}
            className="rounded-md"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
