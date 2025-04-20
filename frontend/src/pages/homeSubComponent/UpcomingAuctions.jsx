import React from "react";
import { RiAuctionFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UpcomingAuctions = () => {
  const { allAuctions } = useSelector((state) => state.auction);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const auctionStartingToday = allAuctions.filter((item) => {
    const auctionDate = new Date(item.startTime);
    auctionDate.setHours(0, 0, 0, 0);
    return auctionDate.getTime() === today.getTime();
  });

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderAuctionCard = (element) => (
    <Link
      to={`/auction/item/${element._id}`}
      key={element._id}
      className="w-full flex flex-col gap-4 bg-white p-6 rounded-md hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <img
          src={element.image?.url}
          alt={element.title}
          className="w-16 h-16 object-cover rounded-md"
        />
        <p className="font-extralight text-[#111] text-sm">
          {element.title}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-stone-600 font-semibold">
          Starting Bid:
        </p>
        <p className="text-[#fdba88] font-semibold">
          Rs.{element.startingBid}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-stone-600 font-bold">Starting Time:</p>
        <p className="text-sm text-black">
          {formatTime(element.startTime)}
        </p>
      </div>
    </Link>
  );

  return (
    <section className="my-8">
      <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
        Auction For Today
      </h3>
      <div className="flex flex-wrap gap-6">
        <div className="bg-[#fff] w-full p-6 gap-10 rounded-md flex flex-col justify-between lg:flex-1 lg:h-auto lg:p-10 2xl:flex-none 2xl:basis-64 2xl:flex-grow 2xl:px-10 2xl:py-6 hover:shadow-md">
          <span className="rounded-full bg-[#d6482b] text-white w-fit p-3">
            <RiAuctionFill />
          </span>
          <div>
            <h3 className="text-[#d6482b] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-3xl lg:text-4xl">
              Auctions For
            </h3>
            <div>
              <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                Today
              </h3>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 w-full lg:flex-1 2xl:flex-none 2xl:basis-64 2xl:flex-grow">
          {auctionStartingToday.slice(0, 2).map(renderAuctionCard)}
        </div>

        <div className="flex flex-col gap-4 w-full 2xl:basis-64 2xl:flex-grow">
          {auctionStartingToday.slice(2, 4).map(renderAuctionCard)}
        </div>

        <div className="flex flex-col gap-4 w-full 2xl:basis-64 2xl:flex-grow">
          {auctionStartingToday.slice(4, 6).map(renderAuctionCard)}
        </div>
      </div>
    </section>
  );
};

export default UpcomingAuctions;
