"use client";

import { Typography } from "antd";
import { useAppSelector } from "../store/hooks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const ProductPage = () => {
  const products = useAppSelector((state) => state.counter.products);
  const pathName = usePathname();

  const product = products.filter(
    (p: Record<string, any>) => p.id == pathName.slice(1)
  );

  const imgss = product.map((i: Record<string, any>) => i.img);

  const [imgs, setImgs] = useState<any>(...imgss);

  return (
    <>
      <div>
        {product.map((item: Record<string, any>) => {
          return (
            <div
              key={item?.id}
              className="md:flex items-start rounded-md p-3"
              style={{ border: "1px solid #c4b6b66b" }}
            >
              <div>
                <img
                  src={imgs}
                  alt={item.title}
                  className="w-full md:w-[350px]"
                />
                <div className="flex items-center justify-between">
                  <img
                    src={item?.img}
                    className="w-[50px] h-[50px] object-cover p-1 rounded-md cursor-pointer"
                    style={{
                      border: `1px solid ${
                        item?.img === imgs ? "" : "#E3E8EE"
                      }`,
                    }}
                    alt=""
                    onClick={() => {
                      setImgs(item?.img);
                    }}
                  />
                  <img
                    src={item?.img2}
                    className="w-[50px] h-[50px] object-cover p-1 rounded-md cursor-pointer"
                    style={{
                      border: `1px solid ${
                        item?.img2 === imgs ? "" : "#E3E8EE"
                      }`,
                    }}
                    alt=""
                    onClick={() => {
                      setImgs(item?.img2);
                    }}
                  />
                  <img
                    src={item?.img3}
                    className="w-[50px] h-[50px] object-cover p-1 rounded-md cursor-pointer"
                    style={{
                      border: `1px solid ${
                        item?.img3 === imgs ? "" : "#E3E8EE"
                      }`,
                    }}
                    alt=""
                    onClick={() => {
                      setImgs(item?.img3);
                    }}
                  />
                  <img
                    src={item?.img4}
                    className="w-[50px] h-[50px] object-cover p-1 rounded-md cursor-pointer"
                    style={{
                      border: `1px solid ${
                        item?.img4 === imgs ? "" : "#E3E8EE"
                      }`,
                    }}
                    alt=""
                    onClick={() => {
                      setImgs(item?.img4);
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between w-[100%]">
                  <Typography className="text-[#00B517] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M9.10899 15.8749L4.79005 11.7049L3.31934 13.1149L9.10899 18.7049L21.5376 6.70492L20.0772 5.29492L9.10899 15.8749Z"
                        fill="#00B517"
                      />
                    </svg>
                    In stock
                  </Typography>

                  <Typography
                    className={`flex items-center ${
                      item?.like !== false ? "text-[#0D6EFD]" : ""
                    }`}
                  >
                    {" "}
                    <span className={`text-[22px] like`}>
                      {item?.like ? <HeartFilled /> : <HeartOutlined />}
                    </span>{" "}
                    Save for later
                  </Typography>
                </div>
                <Typography>{item?.title}</Typography>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
