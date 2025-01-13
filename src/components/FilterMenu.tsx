import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { StoreCategory } from "@/_mock/master/store-category";
import { Checkbox } from "./ui/checkbox";

type Props = React.ComponentProps<"div">;

export default function FilterMenu({ className }: Props) {
  return (
    <div className={(cn(), className)}>
      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-2 space-y-2">
          <h1 className="font-semibold">Kategori</h1>

          <div className="space-y-2">
            {StoreCategory.map((item, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={item.name} />
                <label
                  htmlFor={item.name}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.display_name_id}
                </label>
              </div>
            ))}
          </div>

          <h1 className="font-semibold">Rating</h1>

          <div className="flex items-center space-x-2">
            <Checkbox id="ratings" />
            <label
              htmlFor="ratings"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              4 keatas
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
