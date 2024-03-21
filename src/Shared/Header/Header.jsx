import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { IoReorderThree } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handelLogout = () => {
    logout()
      .then(() => {
        toast.success("Sign out Success!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const navProducts = (
    <>
      <div className="grid md:flex text-slate-500 items-center list-none gap-3 font-medium">
        <li className="hover:text-green-500 rounded-sm ">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <hr />
        <li className="hover:text-green-500 rounded-sm ">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-green-500" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </div>
    </>
  );

  return (
    <header className="relative ">
      <nav
        className="shadow-sm px-5 flex items-center justify-between py-5 bg-slate-300"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Resolute Point</span> */}
            <Link to="/">
              <h2 className="text-3xl font-bold text-slate-600">
                Resolute Point
              </h2>
            </Link>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IoReorderThree
              className="h-6 w-6 hover:bg-green-200 hover:p-1 text-2xl"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex items-center justify-center lg:gap-x-12">
          {navProducts}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <Link onClick={handelLogout} to="/login">
                Sign out
              </Link>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </div>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <Link to="/">
                <h2 className="text-3xl font-bold text-slate-600">
                  Resolute Point
                </h2>
              </Link>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RxCross2
                className="h-6 w-6 hover:bg-green-200 hover:p-1 text-2xl"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">{navProducts}</div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
