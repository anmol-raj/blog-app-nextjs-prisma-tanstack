import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/id" className="btn mr-2">
        <Pencil className="" /> Edit
      </Link>
      <button className="btn btn-error">
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
