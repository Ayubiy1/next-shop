import Cards from "@/components/cards";
import Filter from "@/components/filter";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="">
      {/* <Header /> */}

      {/* Content */}
      <div className="flex items-start justify-start">
        <div className="hidden lg:block lg:w-[30%] filter-component">
          <Filter />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
      </div>
    </div>
  );
}
