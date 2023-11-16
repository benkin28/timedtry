export default function AddToDoForm(props: {
  handleAdd: (formData: FormData) => void;
}) {
  return (
    <form action={props.handleAdd} className="flex flex-col items-center">
      <h1>Add Todo</h1>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="description" placeholder="description" />
      <button type="submit">Submit</button>
    </form>
  );
}
