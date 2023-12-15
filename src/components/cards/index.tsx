"use client";

import { useState } from "react";
import { Input, List, Typography } from "antd";
import "./style.css";
import { MdNavigateNext, MdOutlineAddShoppingCart } from "react-icons/md";

import styled from "@emotion/styled";
import {
  StarFilled,
  HeartFilled,
  HeartOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Button, Grid } from "@mui/material";
import { SearchProps } from "antd/es/input";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const CardsPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 100000,
      superPrice: 100000,
      img: "https://images.uzum.uz/cjdlno3k9fq43huhu7lg/t_product_540_high.jpg#1702485142311",
      baho: 12,
      like: false,
    },
    {
      id: 2,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 200000,
      superPrice: 200000,
      img: "https://images.uzum.uz/ci9a1rl6sfhndlboof4g/t_product_540_high.jpg#1702532445585",
      baho: 22,
      like: false,
    },
    {
      id: 3,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 300000,
      superPrice: 300000,
      img: "https://images.uzum.uz/clkvt3vn7c6gg9idaofg/t_product_540_high.jpg#1702532445586",
      baho: 32,
      like: false,
    },
    {
      id: 4,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 400000,
      superPrice: 400000,
      img: "https://images.uzum.uz/cktr2t7n7c6qm23gntbg/t_product_540_high.jpg#1702532508929",
      baho: 42,
      like: false,
    },
    {
      id: 5,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 500000,
      superPrice: 500000,
      img: "https://images.uzum.uz/clctdblennt861iq9d00/t_product_540_high.jpg#1702532508876",
      baho: 52,
      like: false,
    },
    {
      id: 6,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 600000,
      superPrice: 600000,
      img: "https://images.uzum.uz/cl72v1d6sfhgee0l8f4g/t_product_540_high.jpg#1702532508879",
      baho: 62,
      like: false,
    },
    {
      id: 7,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 700000,
      superPrice: 700000,
      img: "https://images.uzum.uz/cjva46kjvf2hdh3fbtd0/t_product_540_high.jpg#1702532508885",
      baho: 72,
      like: false,
    },
    {
      id: 8,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 800000,
      superPrice: 800000,
      img: "https://images.uzum.uz/clfccqd6sfhvbd1ika60/t_product_540_high.jpg#1702532508896",
      baho: 82,
      like: false,
    },
    {
      id: 9,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 900000,
      superPrice: 900000,
      img: "https://images.uzum.uz/cldjg4vn7c6qm23jlqeg/t_product_540_high.jpg#1702532508900",
      baho: 92,
      like: false,
    },
    {
      id: 10,
      title: "Isitgich obogrevatel Vitek VT-4404",
      price: 100000,
      superPrice: 100000,
      img: "https://images.uzum.uz/cfihkhvhgiopn8lc08dg/t_product_540_high.jpg#1702532508914",
      baho: 12,
      like: false,
    },
  ]);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(value);
  };

  return (
    <>
      <div className="select-none overflow-y-scroll h-[90vh]">
        <div className="search-sm">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>

        <div className="cards">
          {data.map((item) => {
            return (
              <div
                className={"cursor-pointer card relative"}
                style={{ border: "none", background: "transparent" }}
                key={item?.id}
              >
                <div className="pb-4">
                  <img
                    src={item.img}
                    className="w-[100%] h-[300px] object-cover rounded-lg pro-img"
                    alt={item?.title}
                  />

                  <div className={"px-2"}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex gap-1 items-center justify-start">
                          <Typography className="font-bold">
                            ${item?.superPrice}
                          </Typography>

                          <Typography
                            className="text-[#8b8e99]"
                            style={{ textDecoration: "line-through" }}
                          >
                            ${item?.price}
                          </Typography>
                        </div>

                        <div className="text-[#8b8e99] text-[11px] flex items-center gap-1 my-2">
                          <span className="text-yellow-500">
                            <StarFilled />
                          </span>
                          <span className="text-yellow-500">
                            <StarFilled />
                          </span>
                          <span className="text-yellow-500">
                            <StarFilled />
                          </span>
                          <span className="text-yellow-500">
                            <StarFilled />
                          </span>
                          <span className="text-yellow-500">
                            <StarFilled />
                          </span>
                          {item?.baho}
                        </div>
                      </div>

                      <span
                        className={`text-[22px] ${
                          item?.like !== false ? "text-[#0D6EFD]" : ""
                        }`}
                        onClick={() => {
                          setData((prevData) => {
                            return prevData.map((itemPrev) => {
                              if (item.id === itemPrev.id) {
                                return { ...item, like: !item.like };
                              }
                              return itemPrev;
                            });
                          });
                        }}
                      >
                        {item?.like ? <HeartFilled /> : <HeartOutlined />}
                      </span>
                    </div>

                    <Typography
                      rel="noopener noreferrer"
                      className="text-[#606060]"
                    >
                      {item?.title}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="cards"></div> */}
      </div>
    </>
  );
};

export default CardsPage;
