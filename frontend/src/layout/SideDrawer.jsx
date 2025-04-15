import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import RoleSelection from "../components/RoleSelection";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('userRole');
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 bg-[#D6482B] text-white text-3xl rounded-md hover:bg-[#b8381e] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] ${
          showRoleSelection ?  "sm:w-[490px]" : "sm:w-[300px]"
        } bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
          <Link to={"/"}>
            <h4 className="text-2xl font-semibold mb-4">
              Bid<span className="text-[#D6482b]">Sphere</span>
            </h4>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboards"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {!isSignedIn && (
              <li>
                <button
                  onClick={() => setShowRoleSelection(!showRoleSelection)}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                >
                  <FaUserCircle /> Select Role
                </button>
                {showRoleSelection && (
                  <div className="mt-2 ml-6">
                    <RoleSelection />
                  </div>
                )}
              </li>
            )}
          </ul>
          <hr className="mb-4 border-t-[#d6482b]" />
          <ul className="flex flex-col gap-3">
            {isSignedIn && (
              <>
                <li>
                  <Link
                    to={"/me"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <FaUserCircle /> Profile
                  </Link>
                </li>
                {userRole === 'auctioner' && (
                  <>
                    <li>
                      <Link
                        to={"/submit-commission"}
                        className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                      >
                        <FaFileInvoiceDollar /> Submit Commission
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/create-auction"}
                        className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                      >
                        <IoIosCreate /> Create Auction
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/my-auctions"}
                        className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                      >
                        <FaEye /> My Auctions
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <SiGooglesearchconsole /> How It Works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
            >
              <RiInstagramFill />
            </Link>
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-black"
            >
              <FaXTwitter />
            </Link>
          </div>
          <Link
            to={"/contact"}
            className="text-stone-500 hover:text-[#d6482b] font-semibold hover:transition-all hover:*:duration-150"
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; BidSphere</p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
