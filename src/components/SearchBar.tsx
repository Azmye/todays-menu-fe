import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Check, ChevronsUpDown, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";

type Props = React.ComponentProps<"div">;

const sortValues = [
  {
    value: "nearest",
    label: "Terdekat",
  },
  {
    value: "reviews",
    label: "Ulasan",
  },
  {
    value: "recommended",
    label: "Rekomendasi",
  },
];

export default function SearchBar({ className }: Props) {
  const [sortOpen, setSortOpen] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<string>("");

  return (
    <div className={(cn(), className)}>
      <Card>
        <CardHeader>
          <div className="flex gap-2">
            <div className="w-10/12 relative">
              <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
              <Input placeholder="Cari Tempat Makan" className="pl-8" />
            </div>

            <Popover>
              <PopoverTrigger className="w-2/12" asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={sortOpen}
                  className="w-[200px] justify-between"
                >
                  {sortValue
                    ? sortValues.find(
                        (framework) => framework.value === sortValue
                      )?.label
                    : "Urutkan"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {sortValues.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setSortValue(
                              currentValue === sortValue ? "" : currentValue
                            );
                            setSortOpen(false);
                          }}
                        >
                          {item.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              sortValue === item.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
