"use client";

import React, { useEffect } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LoginButton = () => {
  const { data, status } = useSession<boolean>();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      localStorage.setItem("user_data", JSON.stringify(data));
    }
  }, [data]);

  if (status === "authenticated") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            <Image
              src={data.user?.image || ""}
              width={40}
              height={40}
              className="rounded-full"
              alt=""
            />{" "}
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <button className="flex gap-2 items-center " onClick={() => signIn("github")}>
      <span className="text-center font-3xl">Continue with GitHub</span>
      <span className="text-center text-3xl">
        {" "}
        <FaGithub />
      </span>
    </button>
  );
};

export default LoginButton;
