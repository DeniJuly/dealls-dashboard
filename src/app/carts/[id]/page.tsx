import { CartType, UserType } from "@/types";
import { formatPrice } from "@/utils/formatNumber";
import { Metadata } from "next";
import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const cart = await fetch("https://dummyjson.com/carts");
  const dataCart = await cart.json();
  const allCart: CartType[] = dataCart?.carts;
  return allCart.map((item) => {
    return {
      id: item.id.toString(),
    };
  });
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  return {
    title: `Dealls | Cart ${props.params.id}`,
  };
}

const DetailCart = async ({ params }: Props) => {
  const cart = await fetch(`https://dummyjson.com/carts/${params.id}`);
  const dataCart: CartType = await cart.json();

  const user = await fetch(`https://dummyjson.com/users/${dataCart.userId}`);
  const dataUser: UserType = await user.json();

  const today = new Date();

  return (
    <main className="p-4 sm:ml-64 my-14">
      <h1 className="font-bold text-2xl mt-6">Cart {params.id}</h1>
      <h2 className="font-semibold text-xl mt-7 mb-2">Details</h2>
      <div className="w-full rounded-lg bg-grey-60 border border-grey-70 p-4">
        <div className="flex flex-wrap">
          <p className="w-full md:flex-1 py-2">
            User:{" "}
            {`${dataUser.firstName} ${dataUser.maidenName} ${dataUser.lastName}`}
          </p>
          <p className="w-full md:flex-1 py-2">
            # of Items: {dataCart.products.length}
          </p>
        </div>
        <div className="flex flex-wrap">
          <p className="w-full md:flex-1 py-2">
            Added On:{" "}
            {`${today.getDate()} ${
              months[today.getMonth()]
            } ${today.getFullYear()}`}
          </p>
          <p className="w-full md:flex-1 py-2">
            Total Amount: {formatPrice(dataCart.total)}
          </p>
        </div>
      </div>
      <h2 className="font-semibold text-xl mt-7 mb-2">Products</h2>
      <div className="relative overflow-x-auto mt-6 sm:rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-black uppercase bg-grey-60">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {dataCart.products.map((item, idx) => (
              <tr
                key={item.id}
                className="bg-white border-b border-b-grey-70 hover:bg-grey-60"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {item.title}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {formatPrice(item.price)}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {item.quantity}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {formatPrice(item.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DetailCart;
