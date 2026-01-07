import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import type { ItemType } from "../types/type";
import { useAppSelector } from "../Redux/hooks";

function Category() {
  const { type } = useParams();
  
  const Data = useAppSelector ((stat) => stat.products.items);
  const [newdata, setNewdata] = useState<ItemType[]>([]);
  const [errormessage, seterrormessage] = useState("");
  const [pagtitle,setpagtitle]=useState('')

  useEffect(() => {
  
    let newpro:ItemType[] = [];

    if (type === "labtop") {
      newpro = Data.filter((p) => p.type === "Laptob");
      setpagtitle('Laptops section')
    } else if (type === "phone") {
      newpro = Data.filter((p) => p.type === "phone");
      setpagtitle('Phones section')
    } else if (type === "charger") {
      newpro = Data.filter((p) => p.type === "Charger");
      setpagtitle('Chargers section')
    } else if (type === "earphone") {
      newpro = Data.filter((p) => p.type === "Earphone");
      setpagtitle('Headphones section')
    } else {
      seterrormessage("There is no product matching this link");
    }

    setNewdata(newpro);
  }, [type, Data]);

  const product = newdata.map((p)=><ProductCard key={p.id} img={p.imges[0]} title={p.title} price={p.price}
   smdes={p.smdes} id={p.id } className=" w-full sm:!w-1/3 scale-0"/>)

  return (
    <div className="!pt-15 sm:!pt-40 text-center text-white">
      {errormessage && <h2 className="text-red-400">{errormessage}</h2>}
      <h1 className="text-2xl">{pagtitle}</h1>
      <div className="flex flex-wrap">
      {product}
      </div>
    </div>
  );
}

export default Category;