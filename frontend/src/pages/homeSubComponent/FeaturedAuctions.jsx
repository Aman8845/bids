import Card from "@/custom-components/Card";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuctionItems } from "@/store/slices/auctionSlice";

const FeaturedAuctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAuctionItems());
  }, [dispatch]);

  // console.log("All Auctions:", allAuctions);

  return (
    <>
      <section className="my-8">
        <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          Featured Auctions
        </h3>
        <div className="flex flex-wrap gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : allAuctions.length > 0 ? (
            allAuctions.slice(0, 8).map((element) => {
              // console.log("Auction Item:", element);
              return (
                <Card
                  title={element.title}
                  imgSrc={element.image?.url}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              );
            })
          ) : (
            <p>No auctions available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedAuctions;
