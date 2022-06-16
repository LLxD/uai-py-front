const Card = ({ children, text, link, type, className }) => {
  return (
    <a className={className} href={link}>
      <button
        type={type}
        className="hover:bg-slate-800 transition-colors w-72 border-4 p-4 grid grid-flow-col items-center justify-center gap-1 text-xl text-white mx-10 rounded-lg"
      >
        <div className="text-4xl">{children}</div>
        <h3>{text}</h3>
      </button>
    </a>
  );
};

export default Card;
