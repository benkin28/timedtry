import { db } from "../../..";
import { todos } from "../../../drizzle/schema";
import TitleCard from "./titleCard";
import Link from "next/link";
async function getTodos() {
  return await db.select().from(todos);
}

export default async function Page() {
  const allTodos = await getTodos();

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1>My ToDos:</h1>
      {allTodos.map((elem) => (
        <TitleCard key={elem.id} id={elem.id} title={elem.title}></TitleCard>
      ))}
      <Link href="/todos/addtodo">Add ToDo</Link>
    </div>
  );
}
