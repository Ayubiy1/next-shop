"use client";

import { Input, Typography } from "antd";
import "./style.css";

import { StarFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { serSearch, setProducts } from "../store/counterSlice";
import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";

const { Search } = Input;

const CardsPage = ({
  data,
  setData,
  currentPage,
  handleChangePage,
  totalPages,
}: {
  data: Record<string, any>;
  setData: (data: Record<string, any>) => void;
  currentPage: number;
  totalPages: number;
  handleChangePage: (event: any, value: number) => void;
}) => {
  const sliceData = useAppSelector((store) => store?.counter.sliceData);
  const products = useAppSelector((state) => state.counter.product);
  const router = useRouter();
  const [productId, setProductId] = useLocalStorageState("produtct-id", {
    defaultValue: 1,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <div className="select-none overflow-y-scroll h-[90vh]">
        <div className="search-sm">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onChange={(e) => {
              dispatch(serSearch(e.target.value.trim()));
            }}
          />
        </div>

        <div className="cards">
          {data
            .slice((currentPage - 1) * sliceData, currentPage * sliceData)
            ?.map((item: Record<string, any>) => {
              return (
                <div
                  key={item?.id}
                  className={"cursor-pointer card relative rounded-sm"}
                  style={{ border: "none", background: "transparent" }}
                  // onClick={() => {
                  //   dispatch(setProducts(item));
                  //   router.push(`${item?.id}`);
                  //   setProductId(item?.id);
                  // }}
                >
                  <img
                    src={item.img}
                    className="w-[100%] h-[300px] object-cover rounded-lg pro-img"
                    alt={item?.title}
                    onClick={() => {
                      dispatch(setProducts(item));
                      router.push(`${item?.id}`);
                      setProductId(item?.id);
                    }}
                  />

                  <div className={"px-2"}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex gap-1 items-center justify-start">
                          <Typography className="font-bold">
                            ${Math.floor(item?.price / 1.1)}
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
                        className={`text-[22px] like ${
                          item?.like !== false ? "text-[#0D6EFD]" : ""
                        }`}
                        onClick={() => {
                          setData((prevData: any) => {
                            return prevData.map(
                              (itemPrev: Record<string, any>) => {
                                if (item.id === itemPrev.id) {
                                  return { ...item, like: !item.like };
                                }
                                return itemPrev;
                              }
                            );
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
              );
            })}
        </div>

        <div className="cards-table">
          {data
            .slice((currentPage - 1) * sliceData, currentPage * sliceData)
            ?.map((item: Record<string, any>) => {
              return (
                <div
                  key={item?.id}
                  className={"cursor-pointer card relative"}
                  style={{ border: "none", background: "transparent" }}
                >
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
                            ${Math.floor(item?.price / 1.1)}
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
                        className={`text-[22px] like ${
                          item?.like !== false ? "text-[#0D6EFD]" : ""
                        }`}
                        onClick={() => {
                          setData((prevData: any) => {
                            return prevData.map(
                              (itemPrev: Record<string, any>) => {
                                if (item.id === itemPrev.id) {
                                  return { ...item, like: !item.like };
                                }
                                return itemPrev;
                              }
                            );
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
              );
            })}
        </div>

        <div className="my-2 flex justify-center sm:items-end sm:justify-end">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
              className="text-right ms-auto w-full"
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default CardsPage;
