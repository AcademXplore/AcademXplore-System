import logo from "../../img/logo.svg";
import Image from "next/image";
import "./login.css"

export default function RootLayoutLogin({ children }) {
  return (
    <main className="d-flex w-100 vh-100 ">
      <div className="bg-info w-50 h-100 justify-content-center align-items-center d-flex align-items-end flex-column background-image-meet">
        <div className="w-50 h-50 justify-content-center align-items-center d-flex overflow-hidden ">
          <Image src={logo} className="w-100" />
        </div>
        <h1 className="fw-lighter text-light">Simpler and better</h1>
      </div>
      <div className="bg-warning w-50 h-100 ">{children}</div>
    </main>
  );
}
