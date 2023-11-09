import Image from "next/image";

export function Banner({ titulo, banner, active, isLoading }) {
  return (
    <div className="rounded-3 w-100 overflow-hidden card card-image">
      {active && 
        <div className="position-absolute top-0 start-0 bg-dark w-100 h-100 z-3 d-flex justify-content-center align-items-center opacity-50 " >
          <i className="bi bi-file-lock2 text-light fs-1"></i>
        </div>
      }
      {
        isLoading ?
        <>
          <div className="w-100 h-100 bg-dark-subtle "></div>
          <div className="card-img-overlay d-flex flex-column col-6" aria-hidden="true">
            <span className="my-auto text-card-image placeholder col-12 bg-dark"></span>
            <span className="my-auto text-card-image placeholder col-6 bg-dark"></span>
          </div>
        </>
        :
        <>
          <Image
            alt={titulo}
            className="card-img banner object-fit-cover "
            fill
            src={banner}
          />
          <div className="card-img-overlay d-flex col-6 ">
            <h1 className="my-auto text-card-image">{titulo}</h1>
          </div>
        </>
      }
    </div>
  );
}
