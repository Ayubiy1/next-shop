"use client";

import Cards from "@/components/cards";
import Filter from "@/components/filter";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { setProducts, setProductsAll } from "../store/counterSlice";

export default function AppPage() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state?.counter.filter);
  const filterBrand = useAppSelector((state) => state?.counter.filterBrand);
  const search = useAppSelector((store) => store?.counter.search);
  const sliceData = useAppSelector((store) => store?.counter.sliceData);

  const [data, setData] = useState(() => {
    const storedCount = localStorage.getItem("products");
    return storedCount
      ? JSON.parse(storedCount)
      : [
          {
            id: 1,
            title: "Isitgich 1 1",
            price: 100000,
            superPrice: 100000,
            img: "https://images.uzum.uz/clmql5d6sfhsc0un736g/original.jpg",
            img2: "https://images.uzum.uz/clmr2k5enntcj8aa89k0/original.jpg",
            img3: "https://images.uzum.uz/clmr2kd6sfhsc0un799g/original.jpg",
            img4: "https://images.uzum.uz/clmr2jl6sfhsc0un798g/original.jpg",
            baho: 12,
            like: false,
            type: "electronics",
            brands: "samsung",
          },
          {
            id: 2,
            title: "Isitgich 2 2",
            price: 200000,
            superPrice: 200000,
            img: "https://images.uzum.uz/cksvrtt6sfhgee0jbs00/original.jpg",
            img2: "https://images.uzum.uz/cla7o7nn7c6qm23j0abg/original.jpg",
            img3: "https://images.uzum.uz/cla7o7nn7c6qm23j0ac0/original.jpg",
            img4: "https://images.uzum.uz/cksvrsfn7c6qm23ghib0/original.jpg",
            baho: 22,
            like: false,
            type: "mobile-accessory",
            brands: "samsung",
          },
          {
            id: 3,
            title: "Isitgich 3 3",
            price: 300000,
            superPrice: 300000,
            img: "https://images.uzum.uz/ckef41sjvf2v2sougru0/original.jpg",
            img2: "https://images.uzum.uz/ckc3rqcjvf2kdov6bjs0/original.jpg",
            img3: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjsg/original.jpg",
            img4: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjtg/original.jpg",
            baho: 32,
            like: false,
            type: "modern-tech",
            brands: "huawei",
          },
          {
            id: 4,
            title: "Isitgich 4 4",
            price: 400000,
            superPrice: 400000,
            img: "https://images.uzum.uz/ckq42kcvutv6ra7e79p0/original.jpg",
            img2: "https://images.uzum.uz/cl2a1elennt861iob4j0/original.jpg",
            img3: "https://images.uzum.uz/cl2a1et6sfhgee0kdcvg/original.jpg",
            img4: "https://images.uzum.uz/ckq42kjk9fq6u2te3a8g/original.jpg",
            baho: 42,
            like: false,
            type: "mobile-accessory",
            brands: "apple",
          },
          {
            id: 5,
            title: "Isitgich 5 5",
            price: 500000,
            superPrice: 500000,
            img: "https://images.uzum.uz/cksb3jnn7c6qm23gd2mg/original.jpg",
            img2: "https://images.uzum.uz/cl2ftkdennt861iocpq0/original.jpg",
            img3: "https://images.uzum.uz/cl2ftnt6sfhgee0kf1fg/original.jpg",
            img4: "https://images.uzum.uz/ck01l7jk9fq749206ej0/original.jpg",
            baho: 52,
            like: false,
            type: "electronics",
            brands: "lenovo",
          },
          {
            id: 6,
            title: "Isitgich 6 6",
            price: 600000,
            superPrice: 600000,
            img: "https://images.uzum.uz/cle3hfvn7c6qm23joqbg/original.jpg",
            img2: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
            img3: "https://images.uzum.uz/cle3hfvn7c6qm23joqag/original.jpg",
            img4: "https://images.uzum.uz/cle3hft6sfhvbd1ibhv0/original.jpg",
            baho: 62,
            like: false,
            type: "modern-tech",
            brands: "apple",
          },
          {
            id: 7,
            title: "Isitgich 7 7",
            price: 700000,
            superPrice: 700000,
            img: "https://images.uzum.uz/clsmje9iac3bc4sgipl0/original.jpg",
            img2: "https://images.uzum.uz/clh1b7t6sfhvbd1j0ppg/original.jpg",
            img3: "https://images.uzum.uz/clh1b856sfhvbd1j0pr0/original.jpg",
            img4: "https://images.uzum.uz/cltbv03pvnpo2vtqmnd0/original.jpg",
            baho: 72,
            like: false,
            type: "electronics",
            brands: "samsung",
          },
          {
            id: 8,
            title: "Isitgich 8 8",
            price: 800000,
            superPrice: 800000,
            img: "https://images.uzum.uz/cknd23cvutv6ra7dn1og/original.jpg",
            img2: "https://images.uzum.uz/cknd23bk9fq6u2tdj2rg/original.jpg",
            img3: "https://images.uzum.uz/cknd23bk9fq6u2tdj2t0/original.jpg",
            img4: "https://images.uzum.uz/cknmrrkjvf2iqscbcm80/original.jpg",
            baho: 82,
            like: false,
            type: "smartphones",
            brands: "lenovo",
          },
          {
            id: 11,
            title: "Isitgich 1 11",
            price: 100000,
            superPrice: 100000,
            img: "https://images.uzum.uz/clmql5d6sfhsc0un736g/original.jpg",
            img2: "https://images.uzum.uz/clmr2k5enntcj8aa89k0/original.jpg",
            img3: "https://images.uzum.uz/clmr2kd6sfhsc0un799g/original.jpg",
            img4: "https://images.uzum.uz/clmr2jl6sfhsc0un798g/original.jpg",
            baho: 12,
            like: false,
            type: "electronics",
            brands: "samsung",
          },
          {
            id: 12,
            title: "Isitgich 2 12",
            price: 200000,
            superPrice: 200000,
            img: "https://images.uzum.uz/cksvrtt6sfhgee0jbs00/original.jpg",
            img2: "https://images.uzum.uz/cla7o7nn7c6qm23j0abg/original.jpg",
            img3: "https://images.uzum.uz/cla7o7nn7c6qm23j0ac0/original.jpg",
            img4: "https://images.uzum.uz/cksvrsfn7c6qm23ghib0/original.jpg",
            baho: 22,
            like: false,
            type: "mobile-accessory",
            brands: "samsung",
          },
          {
            id: 13,
            title: "Isitgich 3 13",
            price: 300000,
            superPrice: 300000,
            img: "https://images.uzum.uz/ckef41sjvf2v2sougru0/original.jpg",
            img2: "https://images.uzum.uz/ckc3rqcjvf2kdov6bjs0/original.jpg",
            img3: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjsg/original.jpg",
            img4: "https://images.uzum.uz/ckc3rqkjvf2kdov6bjtg/original.jpg",
            baho: 32,
            like: false,
            type: "modern-tech",
            brands: "huawei",
          },
          {
            id: 14,
            title: "Isitgich 4 14",
            price: 400000,
            superPrice: 400000,
            img: "https://images.uzum.uz/ckq42kcvutv6ra7e79p0/original.jpg",
            img2: "https://images.uzum.uz/cl2a1elennt861iob4j0/original.jpg",
            img3: "https://images.uzum.uz/cl2a1et6sfhgee0kdcvg/original.jpg",
            img4: "https://images.uzum.uz/ckq42kjk9fq6u2te3a8g/original.jpg",
            baho: 42,
            like: false,
            type: "mobile-accessory",
            brands: "apple",
          },
          {
            id: 15,
            title: "Isitgich 5 15",
            price: 500000,
            superPrice: 500000,
            img: "https://images.uzum.uz/cksb3jnn7c6qm23gd2mg/original.jpg",
            img2: "https://images.uzum.uz/cl2ftkdennt861iocpq0/original.jpg",
            img3: "https://images.uzum.uz/cl2ftnt6sfhgee0kf1fg/original.jpg",
            img4: "https://images.uzum.uz/ck01l7jk9fq749206ej0/original.jpg",
            baho: 52,
            like: false,
            type: "electronics",
            brands: "lenovo",
          },
          {
            id: 16,
            title: "Isitgich 6 16",
            price: 600000,
            superPrice: 600000,
            img: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
            img2: "https://images.uzum.uz/cle3hfvn7c6qm23joqb0/original.jpg",
            img3: "https://images.uzum.uz/cle3hfvn7c6qm23joqag/original.jpg",
            img4: "https://images.uzum.uz/cle3hft6sfhvbd1ibhv0/original.jpg",
            baho: 62,
            like: false,
            type: "modern-tech",
            brands: "apple",
          },
          {
            id: 17,
            title: "Isitgich 7 17",
            price: 700000,
            superPrice: 700000,
            img: "https://images.uzum.uz/clsmje9iac3bc4sgipl0/original.jpg",
            img2: "https://images.uzum.uz/clh1b7t6sfhvbd1j0ppg/original.jpg",
            img3: "https://images.uzum.uz/clh1b856sfhvbd1j0pr0/original.jpg",
            img4: "https://images.uzum.uz/cltbv03pvnpo2vtqmnd0/original.jpg",
            baho: 72,
            like: false,
            type: "electronics",
            brands: "samsung",
          },
          {
            id: 18,
            title: "Isitgich 8 18",
            price: 800000,
            superPrice: 800000,
            img: "https://images.uzum.uz/cknd23cvutv6ra7dn1og/original.jpg",
            img2: "https://images.uzum.uz/cknd23bk9fq6u2tdj2rg/original.jpg",
            img3: "https://images.uzum.uz/cknd23bk9fq6u2tdj2t0/original.jpg",
            img4: "https://images.uzum.uz/cknmrrkjvf2iqscbcm80/original.jpg",
            baho: 82,
            like: false,
            type: "smartphones",
            brands: "lenovo",
          },
        ];
  });

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
