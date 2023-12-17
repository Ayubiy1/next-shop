"use client";

import { Button, Drawer, Input, Typography } from "antd";
import "./style.css";

import { StarFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { serSearch, setOrders, setProducts } from "../store/counterSlice";
import { Pagination, Stack, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

const { Search } = Input;

type Anchor = "top" | "left" | "bottom" | "right";

// const TemporaryDrawer = (item: Record<string, any>) => {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });
//   const [orderCount, setOrderCount] = React.useState(1);

//   const dispatch = useAppDispatch();

//   React.useEffect(() => {
//     setOrderCount(0);
//   }, []);

//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: Anchor) => (
//     <Box
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <div></div>
//       <div className="w-[100%] mt-5 flex flex-col">
//         <img
//           src={item?.item?.imgs[0].src}
//           alt=""
//           className="w-[90%] h-[300px] object-cover mx-auto"
//         />
//       </div>

//       <div className="ps-5 mt-5">
//         <Typography className="text-start">
//           Product title: {item?.item?.title}
//         </Typography>
//         <Typography className="text-start">
//           Product price: ${item?.item?.price}
//         </Typography>

//         <Typography>All sum {orderCount * item?.item?.price}</Typography>

//         <div className="flex gap-3 mt-3 items-center justify-start">
//           <span
//             className="flex items-center justify-center"
//             onClick={() => {
//               setOrderCount((prev) => {
//                 if (prev == 0) {
//                   return 1;
//                 } else {
//                   return prev - 1;
//                 }
//               });
//             }}
//           >
//             <FiMinus />
//           </span>
//           <span>{orderCount}</span>
//           <span
//             className="flex items-center justify-center"
//             onClick={() => {
//               setOrderCount((prev) => prev + 1);
//             }}
//           >
//             <GoPlus />
//           </span>
//         </div>

//         <Button
//           type="primary"
//           className="ms-auto text-right mt-2"
//           onClick={() => {
//             const order = {
//               id: item?.item?.id,
//               name: item?.item?.title,
//               count: orderCount,
//               price: item?.item?.price,
//             };
//             dispatch(setOrders(order));
//           }}
//         >
//           Buy
//         </Button>
//       </div>
//     </Box>
//   );

//   const on = () => {
//     toggleDrawer("right", true);
//   };

//   return (
//     <div>
//       <React.Fragment key={"right"}>
//         {/* alert("asdadas"); */}

//         <span onClick={on}>
//           <FaCartPlus />
//         </span>
//         <Drawer
//           anchor={"right"}
//           open={state["right"]}
//           onClose={toggleDrawer("right", false)}
//           // className="w-[300px]"
//           // sx={{ width: "1100px" }}
//         >
//           {list("right")}
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// };

const TemporaryDrawer = (item: Record<string, any>) => {
  const [open, setOpen] = useState(false);
  const [orderCount, setOrderCount] = useState(1);

  const dispatch = useAppDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <GoPlus />
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="w-[100%] mt-5 flex flex-col">
          <img
            src={item?.item?.imgs[0].src}
            alt=""
            className="w-[90%] h-[300px] object-cover mx-auto"
          />
        </div>
        <div className="ps-5 mt-5">
          <Typography className="text-start">
            Product title: {item?.item?.title}
          </Typography>
          <Typography className="text-start">
            Product price: ${item?.item?.price}
          </Typography>
          <Typography>All sum {orderCount * item?.item?.price}</Typography>
          <div className="flex gap-3 mt-3 items-center justify-start">
            <Button
              className="flex items-center justify-center"
              onClick={() => {
                setOrderCount((prev) => {
                  if (prev == 0) {
                    return 1;
                  } else {
                    return prev - 1;
                  }
                });
              }}
            >
              <FiMinus />
            </Button>
            <span>{orderCount}</span>
            <Button
              className="flex items-center justify-center"
              onClick={() => {
                setOrderCount((prev) => prev + 1);
              }}
            >
              <GoPlus />
            </Button>
          </div>

          <div className="text-right">
            <Button
              type="primary"
              className="ms-auto text-right mt-2"
              onClick={() => {
                const order: Record<string, any> = {
                  id: item?.item?.id,
                  name: item?.item?.title,
                  count: orderCount,
                  imgs: item?.item.imgs,
                  price: item?.item?.price,
                };
                dispatch(setOrders(order));
                onClose();
              }}
            >
              Buy
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

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
  const sliceData = useAppSelector((store) => store?.counter?.sliceData);
  const orders = useAppSelector((state) => state?.counter?.orders);
  console.log(orders);

  const router = useRouter();

  const dispatch = useAppDispatch();

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
                >
                  <img
                    src={item.imgs[0].src}
                    className="w-[100%] h-[300px] object-cover rounded-lg pro-img"
                    alt={item?.title}
                    onClick={() => {
                      dispatch(setProducts(item));
                      router.push(`${item?.id}`);
                    }}
                  />

                  <div className={"p-2"}>
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

                    <div className="flex items-center justify-between">
                      <Typography
                        rel="noopener noreferrer"
                        className="text-[#606060]"
                      >
                        {item?.title}
                      </Typography>

                      <TemporaryDrawer item={item} />
                    </div>
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
                  className={"cursor-pointer card relative my-3"}
                  style={{ border: "none", background: "transparent" }}
                >
                  <div className="flex gap-3 items-center justify-between">
                    <img
                      src={item.imgs[0].src}
                      className="w-[100%] h-[300px] object-cover rounded-lg pro-img"
                      alt={item?.title}
                    />
                    <div>
                      <Typography
                        rel="noopener noreferrer"
                        className="text-[#606060]"
                      >
                        {item?.title}
                      </Typography>

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
                  </div>

                  <span
                    className={`text-[22px] like ${
                      item?.like !== false ? "text-[#0D6EFD]" : ""
                    }`}
                    onClick={() => {
                      setData((prevData: any) => {
                        return prevData.map((itemPrev: Record<string, any>) => {
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
