"use client"
import React, { useEffect, useRef } from "react";
import Trading from "./Trading";

const SocialTrading = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "100",
        "timezone": "Asia/Dhaka",
        "theme": "dark",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(17, 85, 204, 0.06)",
        "withdateranges": true,
        "range": "1D",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    const scriptContainer = document.createElement("div");
    scriptContainer.appendChild(script);
    scriptContainer.style.height = "600px"; // Adjust the height as needed
    container.current.appendChild(scriptContainer);

    return () => {
      if (container.current && container.current.removeChild) {
        container.current.removeChild(scriptContainer);
      }
    };
  }, []);

  return (
    <>
      <div className="tradingview-widget-container" ref={container}>
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 46px)", width: "100%" }}
        ></div>
      </div>
      <Trading />
    </>
  );
};

export default SocialTrading;
