import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ComponentProps<"div">;

export default function SearchBar({ className }: Props) {
  return <div className={(cn(), className)}>SearchBar</div>;
}
