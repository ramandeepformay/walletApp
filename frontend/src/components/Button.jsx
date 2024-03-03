const Button = ({ label, onClick }) => {
  return (
    <div>
      <button className="text-center w-full text-white bg-slate-800 my-2 border rounded-md p-1" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
export default Button;
