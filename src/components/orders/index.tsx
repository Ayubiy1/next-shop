"use client";

import { setRemoveOrder } from "@/components/store/counterSlice";
import { useAppDispatch, useAppSelector } from "@/components/store/hooks";
import { Button, Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa";

import "./style.css";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state?.counter?.orders);
  const router = useRouter();

  return (
    <>
      <div>
        <h2>Orders ({orders.length})</h2>

        <span
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        >
          <FaArrowLeft />
        </span>

        <div>
          {orders.map((order: Record<string, any>) => {
            return (
              <div
                key={order?.id}
                style={{
                  borderBottom: "2px solid #E3E8EE",
                  margin: "15px 0",
                  padding: "10px 0",
                  width: "100%",
                }}
                className="flex items-start justify-between card"
              >
                <div className="flex gap-5 items-start">
                  <img
                    src={order?.imgs[0].src}
                    className="w-[111px] h-[111px] object-cover rounded-md"
                    alt=""
                  />
                  <div>
                    <Typography className="text-[20px]">
                      {order.name}
                    </Typography>

                    <Typography className="price-m">
                      {order.count} * ${order?.price} = $
                      {order?.price * order?.count}
                    </Typography>

                    <Typography className="text-[#8B96A5]">
                      Size: medium, Color: blue, Material: Plastic
                    </Typography>
                    <Typography className="text-[#8B96A5]">
                      Seller: Artel Market
                    </Typography>

                    <div className="flex items-center gap-3">
                      <Button
                        size="small"
                        type="primary"
                        danger
                        onClick={() => {
                          dispatch(setRemoveOrder(order?.id));
                        }}
                      >
                        Remove
                      </Button>
                      <Button size="small" type="primary">
                        Save for later
                      </Button>
                    </div>
                  </div>
                </div>

                <Typography className="price">
                  {order.count} * ${order?.price} = $
                  {order?.price * order?.count}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
