import Image from "next/image";
import { redirect } from "next/navigation";
import { amogus } from "../../drizzle/schema";
export default function Home() {
  redirect("/todos")
  return <div className="bg-white w-screen h-screen"></div>;
}
