import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <p>The ToDo was not found</p>
      <Link href="/todos">
        <p>Back to home</p>
      </Link>
    </div>
  );
}
