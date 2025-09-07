import { GiExpense } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdAccountBalance, MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center items-center z-50">
      <div className="flex gap-5 justify-between w-60 rounded-full items-center p-3 bg-black text-white shadow-lg">
        <Link to="/">
          <button className="text-xl cursor-pointer">
            <MdAccountBalance />
          </button>
        </Link>
        <Link to="/income">
          <button className="text-xl cursor-pointer">
            <MdAttachMoney />
          </button>
        </Link>
        <Link to="/expense">
          <button className="text-xl cursor-pointer">
            <GiExpense />
          </button>
        </Link>
        <Link to="/settings">
          <button className="text-xl cursor-pointer">
            <IoMdSettings />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
