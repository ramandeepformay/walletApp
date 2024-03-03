const User = ({ user }) => {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <div className="flex">
          <div className="mx-2 border rounded-full px-2 bg-slate-300">U</div>
          <div>{user.firstName}</div>
        </div>
        <button className="border rounded-lg px-3 bg-slate-800 text-white text-sm pb-1 pt-0.5">
          Send Money
        </button>
      </div>
    </div>
  )
};

export default User;
