import localFont from "next/font/local";

export const yekanBakh = localFont({
  src: [
    {
      path: "../fonts/yekan-bakh/woff2/yekan-bakh-fa-num-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/yekan-bakh/woff2/yekan-bakh-fa-num-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/yekan-bakh/woff2/yekan-bakh-fa-num-semi-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/yekan-bakh/woff2/yekan-bakh-fa-num-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/yekan-bakh/woff2/yekan-bakh-fa-num-extra-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
  preload: true,
});
