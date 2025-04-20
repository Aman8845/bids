import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const { leaderboard, loading, error } = useSelector((state) => state.user);

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <section className="my-8 lg:px-5">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-8 lg:px-5">
        <div className="text-red-500 text-center">
          <p>Error loading leaderboard. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-8 lg:px-5">
      <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2">
        <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          Top 10
        </h3>
        <h3 className="text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          Bidders Leaderboard
        </h3>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Rank</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Profile</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Username</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Bid Expenditure</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Auctions Won</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaderboard.slice(0, 10).map((element, index) => (
              <tr 
                key={element._id} 
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-3 px-4 text-sm text-gray-700">
                  <span className={`font-semibold ${index < 3 ? 'text-[#D6482B]' : 'text-gray-600'}`}>
                    {index + 1}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img
                      src={element.profileImage?.url || '/default-profile.png'}
                      alt={element.username}
                      className="h-10 w-10 object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = '/default-profile.png';
                      }}
                    />
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {element.userName}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {formatMoney(element.moneySpent)}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {element.auctionsWon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        to="/leaderboard"
        className="mt-4 border-2 border-stone-200 font-bold text-xl w-full py-2 flex justify-center rounded-md hover:border-stone-500 hover:bg-stone-50 transition-all duration-300"
      >
        Go to Leaderboard
      </Link>
    </section>
  );
};

export default Leaderboard;
