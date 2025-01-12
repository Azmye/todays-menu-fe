import { useMediaQuery } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { DialogDescription } from "@radix-ui/react-dialog";
import { buttonVariants } from "../ui/button";
import LoginForm from "./LoginForm";

type Props = {
  isOpen: boolean;
  setOpen: VoidFunction;
};

export default function LoginView({ isOpen, setOpen }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogTrigger className={buttonVariants()}>Masuk/Daftar</DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Masukkan username dan password anda untuk masuk
            </DialogDescription>
          </DialogHeader>
          <LoginForm closeLoginView={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerTrigger className={buttonVariants()}>Masuk/Daftar</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Login</DrawerTitle>
          <DrawerDescription>
            Masukkan username dan password anda untuk masuk
          </DrawerDescription>
        </DrawerHeader>
        <LoginForm className="px-4" closeLoginView={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}
