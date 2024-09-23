import React from "react";
import "./index.scss";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const items = [
  {
    title: "Integerations",
    elements: [
      "Shopify",
      "Etsy",
      "eBay",
      "Amazon",
      "TikTok Shop",
      "PrestaShop",
      "BigCommerce",
      "Wix",
      "WooCommerce",
      "Squarespace",
      "Printify API",
      "Printify Pop-Up Store",
      "Shutterstock",
    ],
  },
  {
    title: "Discover",
    elements: [
      "Blog",
      "Guides",
      "Products",
      "Etsy print-on-demand",
      "Shopify print-on-demand",
      "Woocommerce print-on-demand",
      "Wix print-on-demand",
      "Squarespace print-on-demand",
      "Make Your Own Shirt",
      "Brands",
      "Pricing",
      "Shipping Rates",
      "Mockup Generator",
    ],
    },
    {
        title: "GenRage",
        elements : ["Custom T-shirts",
"Custom Hoodies",
"Custom Mugs",
"Custom Socks",
"Custom Backpacks",
"Custom Branding",
"Sell on Etsy",
"Sell on Social Media",
"Free T-shirt Designs",
"Custom Products",
"Custom All-Over-Print Hoodies",
"Start a Clothing Line",
"Start POD Business",
"Bulk Orders",
"Transfering To Printify",]
    },
   
];
const Bottom = () => {
  return (
    <div className="outest1">
      <div className="header">
        <div className="img-cont">GenRage</div>
        <div className="socials">
          <div className="icon">
            <FaLinkedinIn className="ic" />
          </div>
          <div className="icon">
            <FaFacebook className="ic" />
          </div>
          <div className="icon">
            <FaSquareInstagram className="ic" />
          </div>
          <div className="icon">
            <FaYoutube className="ic" />
          </div>
          <div className="icon">
            <FaTiktok className="ic" />
          </div>
        </div>
      </div>
      <div className="links">
        {items.map((e) => {
          return (
            <div className="link-box">
              <p className="p1">{e.title}</p>
              <div style={{ textAlign: "start" }}>
                {e.elements.map((content) => {
                  return <p className="p2">{content}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottom;
