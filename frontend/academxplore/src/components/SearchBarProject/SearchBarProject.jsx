export function SearchBarProject({value, handleChange}){
  return(
    <div className="w-100 d-flex justify-content-center mt-3">
      <div className="w-75 position-relative">
        <input className="w-100 px-4 py-2 border border-0 rounded-4 form-control" value={value} onChange={(event) => handleChange(event.target.value)} type="text" name="" id="" placeholder="Digite o título ou área de interesse..." style={{background: "#C0D2D2"}}/>
        <i className="bi bi-search position-absolute end-0 top-50 translate-middle "></i>
      </div>
    </div>
  )
}