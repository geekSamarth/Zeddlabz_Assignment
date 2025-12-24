import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#F1F2F7] text-black shadow-md
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Logo / Title */}
      <div className="p-6 text-xl font-bold flex items-center justify-between">
        {/* Close button (mobile) */}
        <Image
          src="../Logo.svg"
          alt="logo"
          width={120}
          height={100}
          className="ml-3"
        />
        <button className="lg:hidden text-2xl" onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>
      <div className="border-t -mt-1 shadow border-[#C8CBD9] w-full height-[1px]"></div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-5 py-10">
        <div className="">
          <h2 className=" text-[14px] ml-3 mb-1 text-[#082431]">MENU</h2>
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Chart.svg"
              alt="dashboard_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Dashboard</p>
          </Link>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Buy.svg"
              alt="buy_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Food Order</p>
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Document.svg"
              alt="document_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Manage View</p>
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Chat.svg"
              alt="chat_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Customer Review</p>
          </Link>
        </div>
        <div className="">
          <h2 className=" text-[14px] ml-3 mb-1 text-[#082431] mt-4">OTHERS</h2>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Setting.svg"
              alt="settings_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Settings</p>
          </Link>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Wallet.svg"
              alt="payment_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Payment</p>
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Profile.svg"
              alt="account_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Accounts</p>
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-3 my-4"
          >
            <Image
              src="../Info_Square.svg"
              alt="help_logo"
              className=""
              width={20}
              height={20}
            />
            <p className="text-[#273240] text-[14px]">Help</p>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
