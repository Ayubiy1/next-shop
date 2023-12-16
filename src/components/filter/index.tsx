"use client";

import { useState } from "react";
import "./style.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Radio, RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setFilter,
  setFilterBrand,
  setFilterFeature,
} from "../store/counterSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state?.counter.filter);
  const filterBrand = useAppSelector((state) => state?.counter.filterBrand);

  const [activeSelect, setActiveSelect] = useState(false);
  const [activeSelectOne, setActiveSelectOne] = useState(false);
  const [activeSelectTwo, setActiveSelectTwo] = useState(false);

  const onChangeRadioOne = (checkedValues: RadioChangeEvent) => {
    dispatch(setFilter(checkedValues?.target?.value));
  };

  const onChangeRadioTwo = (checkedValues: RadioChangeEvent) => {
    dispatch(setFilterBrand(checkedValues?.target?.value));
  };

  const onChangeRadioThree = (checkedValues: RadioChangeEvent) => {
    dispatch(setFilterFeature(checkedValues?.target?.value));
  };

  const options = [
    { label: "All", value: "All" },
    { label: "Mobile accessory", value: "mobile-accessory" },
    { label: "Electronics", value: "electronics" },
    { label: "Smartphones ", value: "smartphones" },
    { label: "Modern tech ", value: "modern-tech" },
  ];

  const optionsOne = [
    { label: "All", value: "All" },
    { label: "Samsung", value: "samsung" },
    { label: "Apple", value: "apple" },
    { label: "Huawei ", value: "huawei" },
    { label: "Pocco ", value: "pocco" },
  ];

  const optionsTwo = [
    { label: "All", value: "All" },
    { label: "Metallic", value: "metallic" },
    { label: "8GB Ram", value: "8" },
    { label: "Super power ", value: "super-power" },
    { label: "Large Memory ", value: "large-memory" },
  ];

  return (
    <>
      <div className="mt-5">
        <div>
          <div
            className="flex items-center justify-between cursor-pointer h-[30px] p-2 text-[#8B96A5]"
            style={{ borderTop: "1px solid #80808057" }}
            onClick={() => {
              setActiveSelect((prev) => !prev);
            }}
          >
            <button className="bg-transparent border-none font-bold text-[16px] cursor-pointer">
              Category
            </button>
            {!activeSelect ? <UpOutlined /> : <DownOutlined />}
          </div>
          {!activeSelect && (
            <div>
              <Radio.Group
                options={options}
                defaultValue={"All"}
                onChange={onChangeRadioOne}
                className="flex flex-col gap-2 pb-3 justify-center items-start w-[222px] ms-6"
              />
            </div>
          )}
        </div>

        <div>
          <div
            className="flex items-center justify-between cursor-pointer h-[30px] p-2 text-[#8B96A5]"
            style={{ borderTop: "1px solid #80808057" }}
            onClick={() => {
              setActiveSelectOne((prev) => !prev);
            }}
          >
            <button className="bg-transparent border-none font-bold text-[16px] cursor-pointer">
              Brands
            </button>
            {!activeSelectOne ? <UpOutlined /> : <DownOutlined />}
          </div>
          {!activeSelectOne ? (
            <div>
              <Radio.Group
                options={optionsOne}
                defaultValue={"All"}
                onChange={onChangeRadioTwo}
                className="flex flex-col gap-2 pb-3 justify-center items-start w-[222px] ms-6"
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          <div
            className="flex items-center justify-between cursor-pointer h-[30px] p-2 text-[#8B96A5]"
            style={{ borderTop: "1px solid #80808057" }}
            onClick={() => {
              setActiveSelectTwo((prev) => !prev);
            }}
          >
            <button className="bg-transparent border-none font-bold text-[16px] cursor-pointer">
              Features
            </button>
            {!activeSelectTwo ? <UpOutlined /> : <DownOutlined />}
          </div>
          {!activeSelectTwo ? (
            <div>
              <Radio.Group
                options={optionsTwo}
                defaultValue={"All"}
                onChange={onChangeRadioThree}
                className="flex flex-col gap-2 pb-3 justify-center items-start w-[222px] ms-6"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;

{
  // const [filterData, setFilterData] = useState([
  //   {
  //     name: "Category",
  //     filter: [
  //       {
  //         title: "Mobile accessory",
  //         key: "mobile-accessory",
  //       },
  //       {
  //         title: "Electronics",
  //         key: "electronics",
  //       },
  //       {
  //         title: "Smartphones ",
  //         key: "smartphones ",
  //       },
  //       {
  //         title: "Modern tech",
  //         key: "modern-tech",
  //       },
  //       {
  //         title: "Mobile accessory",
  //         key: "mobile-accessory",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Brands",
  //     filter: [
  //       {
  //         title: "Samsung",
  //         key: "samsung",
  //       },
  //       {
  //         title: "Apple",
  //         key: "apple",
  //       },
  //       {
  //         title: "Huawei ",
  //         key: "huawei",
  //       },
  //       {
  //         title: "Pocco",
  //         key: "pocco",
  //       },
  //       {
  //         title: "Lenovo",
  //         key: "lenovo",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Features",
  //     filter: [
  //       {
  //         title: "Metallic",
  //         key: "metallic",
  //       },
  //       {
  //         title: "Plastic cover",
  //         key: "plastic-cover",
  //       },
  //       {
  //         title: "8GB Ram ",
  //         key: "8",
  //       },
  //       {
  //         title: "Modern tech",
  //         key: "modern-tech",
  //       },
  //       {
  //         title: "Mobile accessory",
  //         key: "mobile-accessory",
  //       },
  //     ],
  //   },
  // ]);
}
