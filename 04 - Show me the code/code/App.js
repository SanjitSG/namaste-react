import React from "react";
import ReactDOM from "react-dom/client";

// logo
const Logo = () => <img src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?t=st=1710864654~exp=1710868254~hmac=bc88d5e444cc9e4b93ae0cf2c9031d449283be79ec7519a0ee59fbe61f596fce&w=740" alt="logo"></img>;

const data = {
  info: {
    id: "825132",
    name: "Pravin Super Bhel Puri Center",
    cloudinaryImageId: "ceb352a1c564d6e68e2b76b3bc2202e9",
    locality: "Goa_Sou_Margao",
    areaName: "Goa_Sou_Margao",
    costForTwo: "₹200 for two",
    cuisines: ["Snacks"],
    avgRating: 4.7,
    parentId: "492037",
    avgRatingString: "4.7",
    totalRatingsString: "20+",
    sla: {
      deliveryTime: 41,
      lastMileTravel: 10.9,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "10.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-19 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
  },
};
// header component
const Header = () => (
  <div className="nav">
    <Logo />
    <ul>
      <li>Home</li>
      <li>Food</li>
      <li>Support</li>
      <li>Cart</li>
    </ul>
  </div>
);

// restaurant card
const RestaurantCard = () => (
  <div class="card">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + "ceb352a1c564d6e68e2b76b3bc2202e9"} alt="img" />
    <h2>{data.info.name}</h2>
    <h2>{data.info.cuisines}</h2>
    <h3>{data.info.avgRating} stars</h3>
  </div>
);
const Body = () => (
  <div className="body">
    <RestaurantCard />
    <RestaurantCard />
  </div>
);
const Footer = () => <h1>Footer</h1>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
