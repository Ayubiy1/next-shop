"use client";

import Cards from "@/components/cards";
import Filter from "@/components/filter";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { setProductsAll } from "../store/counterSlice";

export default function AppPage() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state?.counter.filter);
  const filterBrand = useAppSelector((state) => state?.counter.filterBrand);
  const search = useAppSelector((store) => store?.counter.search);
  const sliceData = useAppSelector((store) => store?.counter.sliceData);

  const [data, setData] = useState([
    {
      id: 1,
      title: "Isitgich 1 1",
      price: 100000,
      superPrice: 100000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/clmql5d6sfhsc0un736g/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/clmr2k5enntcj8aa89k0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/clmr2kd6sfhsc0un799g/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/clmr2jl6sfhsc0un798g/original.jpg",
        },
      ],
      baho: 1.2,
      like: false,
      type: "electronics",
      brands: "samsung",
      sold: 112,
      reviews: 1312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 2,
      title: "Isitgich 2 2",
      price: 200000,
      superPrice: 200000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cksvrtt6sfhgee0jbs00/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cla7o7nn7c6qm23j0abg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cla7o7nn7c6qm23j0ac0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cksvrsfn7c6qm23ghib0/original.jpg",
        },
      ],
      baho: 2.2,
      like: false,
      type: "mobile-accessory",
      brands: "samsung",
      sold: 212,
      reviews: 2312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 3,
      title: "Isitgich 3 3",
      price: 300000,
      superPrice: 300000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/ckef41sjvf2v2sougru0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/ckc3rqcjvf2kdov6bjs0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjsg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjtg/original.jpg",
        },
      ],
      baho: 3.2,
      like: false,
      type: "modern-tech",
      brands: "huawei",
      sold: 312,
      reviews: 3312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 4,
      title: "Isitgich 4 4",
      price: 400000,
      superPrice: 400000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/ckq42kcvutv6ra7e79p0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cl2a1elennt861iob4j0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cl2a1et6sfhgee0kdcvg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ckq42kjk9fq6u2te3a8g/original.jpg",
        },
      ],
      baho: 4.2,
      like: false,
      type: "mobile-accessory",
      brands: "apple",
      sold: 412,
      reviews: 4312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 5,
      title: "Isitgich 5 5",
      price: 500000,
      superPrice: 500000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cksb3jnn7c6qm23gd2mg/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cl2ftkdennt861iocpq0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cl2ftnt6sfhgee0kf1fg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ck01l7jk9fq749206ej0/original.jpg",
        },
      ],
      baho: 5.2,
      like: false,
      type: "electronics",
      brands: "lenovo",
      sold: 512,
      reviews: 5312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 6,
      title: "Isitgich 6 6",
      price: 600000,
      superPrice: 600000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqbg/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqag/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cle3hft6sfhvbd1ibhv0/original.jpg",
        },
      ],
      baho: 6.2,
      like: false,
      type: "modern-tech",
      brands: "apple",
      sold: 612,
      reviews: 6312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 7,
      title: "Isitgich 7 7",
      price: 700000,
      superPrice: 700000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/clsmje9iac3bc4sgipl0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/clh1b7t6sfhvbd1j0ppg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/clh1b856sfhvbd1j0pr0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cltbv03pvnpo2vtqmnd0/original.jpg",
        },
      ],
      baho: 7.2,
      like: false,
      type: "electronics",
      brands: "samsung",
      sold: 712,
      reviews: 7312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 8,
      title: "Isitgich 8 8",
      price: 800000,
      superPrice: 800000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cknd23cvutv6ra7dn1og/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cknd23bk9fq6u2tdj2rg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cknd23bk9fq6u2tdj2t0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cknmrrkjvf2iqscbcm80/original.jpg",
        },
      ],
      baho: 8.2,
      like: false,
      type: "smartphones",
      brands: "lenovo",
      sold: 812,
      reviews: 8312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 11,
      title: "Isitgich 1 11",
      price: 100000,
      superPrice: 100000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/clmql5d6sfhsc0un736g/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/clmr2k5enntcj8aa89k0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/clmr2kd6sfhsc0un799g/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/clmr2jl6sfhsc0un798g/original.jpg",
        },
      ],
      baho: 1.2,
      like: false,
      type: "electronics",
      brands: "samsung",
      sold: 112,
      reviews: 1312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 12,
      title: "Isitgich 2 12",
      price: 200000,
      superPrice: 200000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cksvrtt6sfhgee0jbs00/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cla7o7nn7c6qm23j0abg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cla7o7nn7c6qm23j0ac0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cksvrsfn7c6qm23ghib0/original.jpg",
        },
      ],
      baho: 2.2,
      like: false,
      type: "mobile-accessory",
      brands: "samsung",
      sold: 212,
      reviews: 2312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 13,
      title: "Isitgich 3 13",
      price: 300000,
      superPrice: 300000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/ckef41sjvf2v2sougru0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/ckc3rqcjvf2kdov6bjs0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjsg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjtg/original.jpg",
        },
      ],
      baho: 3.2,
      like: false,
      type: "modern-tech",
      brands: "huawei",
      sold: 312,
      reviews: 3312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 14,
      title: "Isitgich 4 14",
      price: 400000,
      superPrice: 400000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/ckq42kcvutv6ra7e79p0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cl2a1elennt861iob4j0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cl2a1et6sfhgee0kdcvg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ckq42kjk9fq6u2te3a8g/original.jpg",
        },
      ],
      baho: 4.2,
      like: false,
      type: "mobile-accessory",
      brands: "apple",
      sold: 412,
      reviews: 4312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 15,
      title: "Isitgich 5 15",
      price: 500000,
      superPrice: 500000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cksb3jnn7c6qm23gd2mg/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cl2ftkdennt861iocpq0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cl2ftnt6sfhgee0kf1fg/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/ck01l7jk9fq749206ej0/original.jpg",
        },
      ],
      baho: 5.2,
      like: false,
      type: "electronics",
      brands: "lenovo",
      sold: 512,
      reviews: 5312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 16,
      title: "Isitgich 6 16",
      price: 600000,
      superPrice: 600000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cle3hfvn7c6qm23joqag/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cle3hft6sfhvbd1ibhv0/original.jpg",
        },
      ],
      baho: 6.2,
      like: false,
      type: "modern-tech",
      brands: "apple",
      sold: 612,
      reviews: 6312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 17,
      title: "Isitgich 7 17",
      price: 700000,
      superPrice: 700000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/clsmje9iac3bc4sgipl0/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/clh1b7t6sfhvbd1j0ppg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/clh1b856sfhvbd1j0pr0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cltbv03pvnpo2vtqmnd0/original.jpg",
        },
      ],
      baho: 7.2,
      like: false,
      type: "electronics",
      brands: "samsung",
      sold: 712,
      reviews: 7312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
    {
      id: 18,
      title: "Isitgich 8 18",
      price: 800000,
      superPrice: 800000,
      imgs: [
        {
          id: 1,
          src: "https://images.uzum.uz/cknd23cvutv6ra7dn1og/original.jpg",
        },
        {
          id: 2,
          src: "https://images.uzum.uz/cknd23bk9fq6u2tdj2rg/original.jpg",
        },
        {
          id: 3,
          src: "https://images.uzum.uz/cknd23bk9fq6u2tdj2t0/original.jpg",
        },
        {
          id: 4,
          src: "https://images.uzum.uz/cknmrrkjvf2iqscbcm80/original.jpg",
        },
      ],
      baho: 8.2,
      like: false,
      type: "smartphones",
      brands: "lenovo",
      sold: 812,
      reviews: 8312,
      material: "Plastic material",
      typeName: "Classic  shoes",
      design: "Modern nice",
    },
  ]);

  const totalPages = Math.ceil(data.length / sliceData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event: any, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  }, [data]);

  const filterDataType = data?.filter((f: Record<string, any>) =>
    filter !== "" && filter !== "All" ? f.type === filter : f
  );
  const filterData = filterDataType?.filter((f: Record<string, any>) =>
    filterBrand !== "" && filterBrand !== "All" ? f.brands === filterBrand : f
  );
  const searchData = filterData?.filter((s: Record<string, any>) =>
    search !== ""
      ? s.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      : s
  );

  useEffect(() => {
    dispatch(setProductsAll(searchData));
  });

  return (
    <div className="">
      {/* Content */}
      <div className="flex items-start justify-start">
        <div className="hidden lg:block lg:w-[21%] filter-component">
          <Filter />
        </div>
        <div className="flex-1">
          <Cards
            data={searchData}
            setData={setData}
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
