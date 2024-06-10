import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <section className="bg-slate-800 p-10 text-white">
      <h1 className="text-3xl text-center font-extrabold text-white">
        Connect With Me
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-3">
        <Link
          to="mailto:mahmoudahmedawad2008@outlook.com"
          className="min-w-32 h-46 p-3 shadow-2xl duration-500 hover:scale-110 flex flex-col items-center"
        >
          <MdEmail className="text-9xl" />
          <h1 className="font-bold text-2xl">Email</h1>
          <p>mahmoudahmedawad2008@outlook.com</p>
        </Link>
        <Link
          to="tel:+201003025594"
          className="min-w-32 w-full max-w-80 h-46 p-3 shadow-2xl duration-500 hover:scale-110 flex flex-col items-center"
        >
          <FaPhoneAlt className="text-[118px] mb-3" />
          <h1 className="font-bold text-2xl">Mobile</h1>
          <p>+20 100 302 5594</p>
        </Link>
        <Link
          to="/contact"
          className="min-w-32 w-full max-w-80 h-46 p-3 shadow-2xl duration-500 hover:scale-110 flex flex-col items-center"
        >
          <FaWpforms className="text-[118px] mb-3" />
          <h1 className="font-bold text-2xl">Write A Form</h1>
          <p>Click / Tap Hare To Write A Form</p>
        </Link>
      </div>
    </section>
  );
}

export default Connect;
