import LoginPage from "@/components/auth/login-page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link
        className="text-center px-8 p-2 rounded-xl border-[2px] border-gray-600 "
        href={"/login"}
      >
        Login
      </Link>
    </div>
  );
}
