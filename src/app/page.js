"use client";

import Header from "../components/Header";
import Head from "next/head";
import "./globals.css";
import NewsSlideshow from "../components/NewsSS";
import Weather from "../components/Weather";

export default function Home() {
  // Get the current hour from the Date object
  const currentHour = new Date().getHours();

  // Function to determine the greeting based on the time
  const getGreeting = () => {
    if (currentHour >= 0 && currentHour < 4) {
      return "good night";
    } else if (currentHour >= 4 && currentHour < 12) {
      return "good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "good day";
    } else {
      return "good evening";
    }
  };

  const greeting = getGreeting();

  // Function to get the current time in a specific timezone
  const getTimeInTimezone = (timezone) => {
    const options = {
      timeZone: timezone,
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date());
  };

  return (
    <div>
      <Head>
        <title>tshmmnt</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center h-screen">
        <div
          id="greeting"
          className="text-6xl text-gray-600 font-bold text-center pt-20 pb-10"
        >
          {greeting}
        </div>

        <div id="content" className="mt-8 flex flex-col lg:flex-row">
          {/* Section with timezones */}
          <div id="timezones" className="text-xl flex-grow px-10  w-2/5">
            <div className="font-bold text-3xl">🕒</div>
            <div className="mt-4">
              {/* Helsinki timezone */}
              <div>
                <div className="">helsinki</div>
                <div className="font-bold text-4xl">
                  {getTimeInTimezone("Europe/Helsinki")}
                </div>
              </div>

              {/* Moscow timezone */}
              <div className="mt-4">
                <div className="">moscow</div>
                <div className="font-bold text-4xl">
                  {getTimeInTimezone("Europe/Moscow")}
                </div>
              </div>

              {/* Kentucky timezone */}
              <div className="mt-4">
                <div className="">kentucky</div>
                <div className="font-bold text-4xl">
                  {getTimeInTimezone("America/Kentucky/Louisville")}
                </div>
              </div>

              {/* London timezone */}
              <div className="mt-4">
                <div className="">london</div>
                <div className="font-bold text-4xl">
                  {getTimeInTimezone("Europe/London")}
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder divs for news and weather */}
          <div id="news" className="flex-grow mt-8 lg:mt-0 text-xl w-3/5 px-10">
            <div className="font-bold text-3xl">📰</div>
            <div className="mt-4">
              <NewsSlideshow />
            </div>
          </div>
          <div
            id="weather"
            className=" flex-grow mt-8 lg:mt-0 text-xl w-2/5 px-10"
          >
            <div className="font-bold text-3xl">🌤️</div>
            <div className="mt-4">
              <Weather />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
