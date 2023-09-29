import Image from "next/image";

export function Banner({ titulo, banner }) {
  return (
    <div className="rounded-3 w-100 overflow-hidden card card-image">
      <Image
        alt={titulo}
        className="card-img banner object-fit-cover "
        fill
        src={banner}
      />
      <div className="card-img-overlay d-flex col-6 ">
        <h1 className="my-auto text-card-image">{titulo}</h1>
      </div>
    </div>
  );
}
