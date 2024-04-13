import Link from "next/link";

const notFound = () => {
  return (
    <div>
        not-found
        <Link href={"/"}>Volver</Link>
    </div>
  )
}

export default notFound;