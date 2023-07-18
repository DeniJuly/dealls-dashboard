import { CartType, UserType } from "@/types";
import { formatPrice } from "@/utils/formatNumber";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Dealls | Cart",
  description: "Cart page of Dealls Dashboard",
};

const Carts = async () => {
  const cart = await fetch("https://dummyjson.com/carts");
  const dataCart = await cart.json();
  const allCart: CartType[] = dataCart?.carts;

  const user = await fetch("https://dummyjson.com/users?limit=100");
  const dataUser = await user.json();
  const allUser: UserType[] = dataUser?.users;

  const getUser = (id: number) => {
    let check = allUser.filter((item) => item.id === id);
    return check.length <= 0
      ? id
      : `${check[0].firstName} ${check[0].maidenName} ${check[0].lastName}`;
  };
  return (
    <main className="p-4 sm:ml-64 my-14">
      <div className="relative overflow-x-auto mt-6 sm:rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-black uppercase bg-grey-60">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allCart.map((item, idx) => (
              <tr
                key={item.id}
                className="bg-white border-b border-b-grey-70 hover:bg-grey-60"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {idx + 1}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {getUser(item.userId)}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {item.products.length}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {formatPrice(item.total)}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  <Link
                    href={`/carts/${item.id}`}
                    className="text-purple font-medium hover:underline"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Carts;
