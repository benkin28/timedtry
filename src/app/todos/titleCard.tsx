import Link from "next/link";

export default function TitleCard(props:{id:number,title:string}) {
    return (
      <Link key={props.id} href={`/todos/${props.id}`}>
        <p>{props.title}</p>
      </Link>
    );
}