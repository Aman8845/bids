import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];
  return (
    <>
      <section className="w-full ml-0 h-fit px-5 pt-10 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div className="pb-2">
          <h1
            className={`text-[#d6482b] font-bold mb-2 min-[480px]: text-2xl md:text-6xl xl:text-4xl 2xl:text-5xl text-center pb-2`}
          >
            About
          </h1>
          <p className="text-xl text-stone-600">
            Welcome to BidSphere, the ultimate destination for online auctions
            and bidding excitement. Founded in 2025, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure and seamless
            environment.
          </p>
        </div>
        <div className="pb-2">
          <h3
            className={`text-[#111] text-left font-semibold mb-2 min-[480px]:text-xl md:text-4xl lg:text-3xl`}
          >
            Our Mission
          </h3>
          <p className="text-xl text-stone-600">
            {" "}
            At BidSphere, our mission is to revolutionize the way people buy and
            sell items online. We strive to create an engaging and trustworthy
            marketplace that empowers individuals and businesses to discover
            unique products, make informed decisions, and enjoy the thrill of
            competitive bidding.
          </p>
        </div>
        <div className="pb-2">
          <h3
            className={`text-[#111] text-left font-semibold mb-2 min-[480px]:text-xl md:text-4xl lg:text-3xl`}
          >
            Our Values
          </h3>
          <ul className="list-inside">
            {values.map((element) => {
              return (
                <li
                  className="text-xl text-stone-600 mb-2 pr-4"
                  key={element.id}
                >
                  <span className="text-black font-bold">{element.title}</span>:
                  <br />
                  {element.description}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pb-2">
          <h3
            className={`text-[#111] text-left font-semibold mb-2 min-[480px]:text-xl md:text-4xl lg:text-3xl`}
          >
            Our Story
          </h3>
          <p className="text-xl text-stone-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            iure!
          </p>
        </div>
        <div className="pb-2">
          <h3
            className={`text-[#111] text-left font-semibold mb-2 min-[480px]:text-xl md:text-4xl lg:text-3xl`}
          >
            Join us
          </h3>
          <p className="text-xl text-stone-600">
            {" "}
            Whether you're looking to buy, sell, or simply explore, BidSphere
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl text-slate-600">
            Thank you for choosing BidSphere. We look forward to being a part of
            your auction journey!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
