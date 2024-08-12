import Image from "next/image";
import ConnectButton from "./Components/ConnectButton";

export default function Home() {
  return (
    <>
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <ConnectButton/>
    </div>
    </>
  );
}
