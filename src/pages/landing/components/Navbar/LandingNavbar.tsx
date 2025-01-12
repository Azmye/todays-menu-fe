import { LoginView } from "@/components/auth";
import { buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import { useBoolean } from "usehooks-ts";
import { LandingNavbarLink } from "./LandingNavbarLink";

export default function LandingNavbar() {
  const loginView = useBoolean(false);
  const mobileLinkView = useBoolean(false);

  return (
    <nav>
      <div className="px-40 hidden md:flex py-4 justify-between shadow-sm bg-white/80">
        <h1 className="text-orange-500 font-semibold text-2xl">Today's Menu</h1>

        <ul className="flex items-center gap-5">
          {LandingNavbarLink.map((item, index) => (
            <Link
              to={"/"}
              key={index}
              className="text-foreground font-semibold hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </ul>

        <LoginView isOpen={loginView.value} setOpen={loginView.toggle} />
      </div>

      <div className="px-4 flex justify-between items-end py-2 md:hidden bg-primary-foreground">
        <h1 className="text-primary font-semibold">Today's Menu</h1>

        <Drawer
          open={mobileLinkView.value}
          onOpenChange={mobileLinkView.toggle}
        >
          <DrawerTrigger
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <ul className=" pt-2 pb-10 flex flex-col items-center space-y-5">
              {LandingNavbarLink.map((item, index) => (
                <Link
                  to={"/"}
                  key={index}
                  className="w-full text-center text-foreground font-semibold hover:text-primary shadow-sm py-1"
                >
                  {item}
                </Link>
              ))}

              <LoginView isOpen={loginView.value} setOpen={loginView.toggle} />
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
