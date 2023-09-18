export default function RootLayout({ children }) {
  return (
    <main className="d-flex w-100 vh-100 ">
     <div className="bg-info w-50 h-100 justify-content-center align-items-center d-flex align-items-end"><div>LOGO</div></div>
     <div className="bg-warning w-50 h-100 ">{children}</div>
    </main>
  );
}
