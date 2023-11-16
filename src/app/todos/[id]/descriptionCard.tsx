"use client";
import { ToDo } from "../../../../drizzle/schema";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DescriptionCard(props: {
  todo: ToDo;
  handleDelete: () => void;
  handleEdit: (formData: FormData) => void;
  handleStatus: (status: string) => void;
}) {
  if (!props.todo.date || !props.todo.status) {
    notFound();
  }
  const router = useRouter();
  const [newToDo, setNewToDo] = useState(props.todo);
  const [onEdit, setOnEdit] = useState(false);
  const date = new Date(props.todo.date?.toString()).toDateString();
  if (!onEdit) {
    return (
      <div className="w-60 h-40 flex flex-col items-center">
        <p>Title: {props.todo.title}</p>
        <p>Description: {props.todo.description}</p>
        <p>{date}</p>
        <form action={props.handleDelete} onSubmit={() => router.refresh()}>
          <button type="submit">Delete</button>
        </form>
        <p>{props.todo.status}</p>
        <form action={() => props.handleStatus(props.todo.status as string)}>
          <input type="checkbox" checked={props.todo.status === "DONE"} />
          <button type="submit">Change Status</button>
        </form>
        <button onClick={() => setOnEdit(!onEdit)}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="w-60 h-40 flex flex-col items-center">
        <form
          action={props.handleEdit}
          onSubmit={() =>
            setTimeout(() => {
              setOnEdit(!onEdit);
              router.refresh();
            }, 100)
          }
        >
          <input
            value={newToDo.title}
            onChange={(e) => setNewToDo({ ...newToDo, title: e.target.value })}
            name="title"
            type="text"
          ></input>
          <input
            value={newToDo.description}
            onChange={(e) =>
              setNewToDo({ ...newToDo, description: e.target.value })
            }
            name="description"
            type="text"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
