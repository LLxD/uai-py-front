export function CustomNavbar({ logo }) {
  return (
    <div className="bg-slate-800 h-20 text-white text-center text-2xl grid grid-flow-col items-center justify-center gap-2">
      <img
        alt=""
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{" "}
      <p className="text-center">Trem do Mundo</p>
    </div>
  );
}
