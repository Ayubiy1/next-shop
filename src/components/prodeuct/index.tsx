"use client";
import { Typography } from "antd";
import { useAppSelector } from "../store/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import "./style.css";
import { FaArrowLeft } from "react-icons/fa";

const ProductPage = () => {
  const products = useAppSelector((state) => state.counter.products);
  const pathName = usePathname();
  const [activeImg, setActiveImg] = useState(0);
  const [img, setImgs] = useState("");
  const router = useRouter();

  const product = products.filter(
    (p: Record<string, any>) => p.id == pathName.slice(1)
  );

  useEffect(() => {
    product?.map((p: Record<string, any>) => {
      setImgs(p?.imgs[0].src);
    });
  }, [pathName]);

  return (
    <>
      <div className="select-none">
        <span
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer m-5 text-[20px]"
        >
          <FaArrowLeft />
        </span>

        {product.map((item: Record<string, any>) => {
          return (
            <div
              key={item?.id}
              className="md:flex gap-5 items-start rounded-md p-3"
              style={{ border: "1px solid #c4b6b66b" }}
            >
              <div className="hidden md:block gap-2 items-start">
                <img
                  src={img}
                  alt={item.title}
                  className="w-[89%] h-[500px] md:w-[350px]"
                />
                <div className="flex items-center justify-between flex-col md:flex-row order-1 gap-5 w-[11%]">
                  {item?.imgs.map((i: Record<string, any>) => {
                    return (
                      <img
                        key={i?.id}
                        src={i?.src}
                        className="w-[100%] md:w-[50px] md:h-[50px] h-[40px] object-cover p-1 rounded-md cursor-pointer"
                        style={{
                          border: `1px solid ${
                            i?.src === img ? "" : "#E3E8EE"
                          }`,
                        }}
                        alt=""
                        onClick={() => {
                          setImgs(i?.src);
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="block md:hidden">
                <div>
                  {item?.imgs
                    .slice(
                      activeImg == item?.imgs.length ? 0 : activeImg,
                      activeImg == item?.imgs.length ? 1 : activeImg + 1
                    )
                    .map((img: Record<string, any>, index: number) => {
                      return (
                        <div key={img?.id}>
                          <img className="w-[100%]" src={img?.src} alt="" />
                          <div className="bg-[#808080ad] w-[60px] h-[30px] flex items-center justify-between rounded-3xl ms-auto">
                            <button
                              onClick={() => {
                                console.log("activeImg", activeImg);
                                setActiveImg(
                                  activeImg == 0
                                    ? item?.imgs.length - 1
                                    : img?.id
                                );
                              }}
                              className="bg-transparent border-none cursor-pointer py-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M13.3337 7.33329H5.22033L8.94699 3.60663L8.00033 2.66663L2.66699 7.99996L8.00033 13.3333L8.94033 12.3933L5.22033 8.66663H13.3337V7.33329Z"
                                  fill="white"
                                />
                              </svg>{" "}
                            </button>

                            <button
                              onClick={() => {
                                setActiveImg(img?.id);
                              }}
                              className="bg-transparent border-none cursor-pointer py-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M8.00033 2.66663L7.06033 3.60663L10.7803 7.33329H2.66699V8.66663H10.7803L7.06033 12.3933L8.00033 13.3333L13.3337 7.99996L8.00033 2.66663Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="w-full mt-5 md:mt-0">
                <div>
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
                  <Typography className="text-[#1C1C1C] text-[20px] font-bold">
                    {item?.title}
                  </Typography>
                </div>

                <div className="mt-5">
                  <div className="flex gap-10 flex-wrap items-center">
                    <Typography className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="105"
                        height="15"
                        viewBox="0 0 105 15"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M93.8359 12.0553L100.279 15L98.5694 9.45L104.262 5.71579L96.7657 5.23421L93.8359 0L90.9061 5.23421L83.4097 5.71579L89.1024 9.45L87.3925 15L93.8359 12.0553Z"
                          fill="#D5CDC5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M72.9834 12.0553L79.4268 15L77.7169 9.45L83.4096 5.71579L75.9131 5.23421L72.9834 0L70.0536 5.23421L62.5571 5.71579L68.2498 9.45L66.5399 15L72.9834 12.0553Z"
                          fill="#FF9017"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M52.1313 12.0553L58.5747 15L56.8648 9.45L62.5575 5.71579L55.0611 5.23421L52.1313 0L49.2015 5.23421L41.7051 5.71579L47.3978 9.45L45.6879 15L52.1313 12.0553Z"
                          fill="#FF9017"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M31.2788 12.0553L37.7222 15L36.0123 9.45L41.705 5.71579L34.2085 5.23421L31.2788 0L28.349 5.23421L20.8525 5.71579L26.5453 9.45L24.8354 15L31.2788 12.0553Z"
                          fill="#FF9017"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4262 12.0553L16.8696 15L15.1597 9.45L20.8525 5.71579L13.356 5.23421L10.4262 0L7.49646 5.23421L0 5.71579L5.69272 9.45L3.98282 15L10.4262 12.0553Z"
                          fill="#FF9017"
                        />
                      </svg>
                      {item?.baho}
                    </Typography>

                    <Typography className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <path
                          d="M4.80348 3.33329H22.1805V13.3333H6.07417L4.80348 14.3083V3.33329ZM4.80348 1.66663C3.60881 1.66663 2.64221 2.41663 2.64221 3.33329L2.63135 18.3333L6.97561 15H22.1805C23.3752 15 24.3527 14.25 24.3527 13.3333V3.33329C24.3527 2.41663 23.3752 1.66663 22.1805 1.66663H4.80348ZM6.97561 9.99996H20.0084V11.6666H6.97561V9.99996ZM6.97561 7.49996H20.0084V9.16663H6.97561V7.49996ZM6.97561 4.99996H20.0084V6.66663H6.97561V4.99996Z"
                          fill="#8B96A5"
                        />
                      </svg>
                      {item?.reviews}
                    </Typography>

                    <Typography className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                      >
                        <path
                          d="M24.6882 7.90834H19.486L14.729 2.44167C14.5227 2.20834 14.1751 2.09167 13.8276 2.09167C13.48 2.09167 13.1325 2.20834 12.9261 2.45001L8.16918 7.90834H2.96692C2.36959 7.90834 1.88086 8.28334 1.88086 8.74167C1.88086 8.81667 1.89172 8.89167 1.9243 8.96667L4.68291 16.6917C4.9327 17.3917 5.76897 17.9083 6.76815 17.9083H20.887C21.8862 17.9083 22.7225 17.3917 22.9831 16.6917L25.7417 8.96667L25.7743 8.74167C25.7743 8.28334 25.2856 7.90834 24.6882 7.90834ZM13.8276 4.40834L16.8686 7.90834H10.7866L13.8276 4.40834ZM20.887 16.2417L6.77901 16.25L4.38967 9.57501H23.2763L20.887 16.2417ZM13.8276 11.2417C12.6329 11.2417 11.6554 11.9917 11.6554 12.9083C11.6554 13.825 12.6329 14.575 13.8276 14.575C15.0222 14.575 15.9997 13.825 15.9997 12.9083C15.9997 11.9917 15.0222 11.2417 13.8276 11.2417Z"
                          fill="#8B96A5"
                        />
                      </svg>
                      {item?.sold}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-[#FFF0DF] mt-5 p-2">
                  <div className="w-[30%]">
                    <Typography className="text-[20px] text-[#FA3434] font-bold">
                      $98.00
                    </Typography>
                    <Typography className="text-[#606060]">
                      50-100 pcs
                    </Typography>
                  </div>

                  <div className="w-[30%]">
                    <Typography className="text-[20px] font-bold">
                      $90.00
                    </Typography>
                    <Typography className="text-[#606060]">
                      50-100 pcs
                    </Typography>
                  </div>

                  <div className="w-[30%]">
                    <Typography className="text-[20px] font-bold">
                      $78.00
                    </Typography>
                    <Typography className="text-[#606060]">700+ pcs</Typography>
                  </div>
                </div>

                <div>
                  <div style={{ borderBottom: "1px solid #E0E0E0" }}>
                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Price:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        Negotiable
                      </Typography>
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #E0E0E0" }}>
                    <div className="flex items-center justify-start py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Type:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        {item?.typeName}
                      </Typography>
                    </div>

                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Material:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        {item?.material}
                      </Typography>
                    </div>

                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Design:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        {item?.design}
                      </Typography>
                    </div>
                  </div>

                  <div style={{ borderBottom: "1px solid #E0E0E0" }}>
                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Customization:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        Customized logo and <br /> design custom packages
                      </Typography>
                    </div>

                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Protection:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        Refund Policy
                      </Typography>
                    </div>

                    <div className="flex items-center justifybetween py-3 w[300px]">
                      <Typography className="text-[#8B96A5] text-[16px] w-[35%]">
                        Warranty:
                      </Typography>
                      <Typography className="text-[#505050] text-[16px]">
                        2 years full warranty
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
