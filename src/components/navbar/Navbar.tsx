import { ShoppingCart, UserPen } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Navbar() {
  return (
    <nav>
      <div className="px-40 hidden md:flex py-4 justify-between shadow-sm bg-white/80">
        <h1 className="text-orange-500 font-semibold text-2xl">Today's Menu</h1>

        <div className="flex items-center gap-2">
          <Button title="Keranjang">
            <ShoppingCart />
          </Button>
          <Separator orientation="vertical" />
          <Button variant={"outline"}>
            <UserPen /> Azmi
          </Button>
        </div>
      </div>
    </nav>
  );
}
