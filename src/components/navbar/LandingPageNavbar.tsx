import { Link } from "react-router";
import { useBoolean } from "usehooks-ts";
import LoginView from "../auth/LoginView";

export default function LandingPageNavbar() {
  const loginView = useBoolean(false);

  return (
    <nav className="px-16 pt-6">
      <div className="px-4 py-4 items-end flex justify-between rounded-md bg-gradient-to-l from-orange-300 to-orange-400">
        <h1 className="text-lg font-semibold text-white/80 text-white">
          To<span className="text-black/70">Menu</span>
        </h1>

        {/* <ul className="flex items-center gap-10"></ul> */}

        <ul className="flex items-center gap-5">
          <Link
            to={"/"}
            className="text-white font-semibold hover:text-white/60"
          >
            Features
          </Link>
          <Link
            to={"/"}
            className="text-white font-semibold hover:text-white/60"
          >
            Plan
          </Link>
          <Link
            to={"/"}
            className="text-white font-semibold hover:text-white/60"
          >
            Contact
          </Link>

          {/* <Link className={buttonVariants()} to={"/auth"}>
            <User />
            Masuk/Daftar
          </Link> */}

          {/* <Button onClick={loginView.setTrue}>
            <User />
            Masuk/Daftar
          </Button> */}
          <LoginView isOpen={loginView.value} setOpen={loginView.toggle} />
        </ul>
      </div>

      {/* <LoginView isOpen={loginView.value} setOpen={loginView.toggle} /> */}
    </nav>
  );
}
