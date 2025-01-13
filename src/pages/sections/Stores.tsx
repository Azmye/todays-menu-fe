import { StoreList } from "@/_mock/store/store-list";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Store } from "lucide-react";
import React from "react";

export default function Stores() {
  const example = StoreList[0];

  console.log(example.store_image_preview);
  return (
    <div className="grid grid-cols-3 pt-4 gap-5 ">
      {StoreList.map((item) => (
        <Preview key={item.uuid} item={item} />
      ))}
    </div>
  );
}

const Preview = ({ item }: { item: (typeof StoreList)[0] }) => (
  <Card className="overflow-hidden h-[250px]">
    <CardHeader className="p-0">
      <img
        src={item.store_image_preview}
        alt={item.store_name}
        className="w-full h-[180px] object-cover"
      />
    </CardHeader>

    <CardContent className="pt-2">
      <p className="text-xl font-semibold flex flex-row items-start gap-2">
        <Store /> {item.store_name}
      </p>

      <p className="flex flex-row items-start gap-2">
        <Star /> {item.reviews.average_ratings}
      </p>
    </CardContent>
  </Card>
);
