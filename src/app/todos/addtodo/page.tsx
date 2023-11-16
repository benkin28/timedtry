import AddToDoForm from "./addToDoForm";
import { db } from "../../../..";
import { todos } from "../../../../drizzle/schema";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export default function Page() {
  async function handleAdd(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();

    if (!title || !description) return;

    const requ = await db
      .insert(todos)
      .values({ title: title, description: description });

    redirect("/todos");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AddToDoForm handleAdd={handleAdd} />
    </div>
  );
}
