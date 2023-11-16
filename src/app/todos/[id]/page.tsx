import DescriptionCard from "./descriptionCard";
import { db } from "../../../..";
import { todos } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

async function getToDo(id: number) {
  return await db.select().from(todos).where(eq(todos.id, id));
}

export default async function Page({ params }: { params: { id: number } }) {
  async function handleDelete() {
    "use server";
    const temp = await db.delete(todos).where(eq(todos.id, params.id));
    redirect("/todos");
  }

  async function handleEdit(formData: FormData) {
    "use server";

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();

    if (!title || !description) return;

    const requ = await db
      .update(todos)
      .set({ title, description })
      .where(eq(todos.id, params.id));

    redirect(`/todos/${params.id}`);
  }

  async function handleStatus(status: string) {
    "use server";

    const key = status === "D3ONE" ? "PENDING" : "DONE";
    const requ = await db
      .update(todos)
      .set({ status: key })
      .where(eq(todos.id, params.id));

    redirect(`/todos/${params.id}`);
  }

  const temp = await getToDo(params.id);
  const ToDo = await temp[0];
  if (!ToDo || !ToDo.date) {
    notFound();
  } else {
    return (
      <div className="w-screen h-screen flex flex-col items-center">
        <DescriptionCard
          todo={ToDo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleStatus={handleStatus}
        ></DescriptionCard>
      </div>
    );
  }
}
