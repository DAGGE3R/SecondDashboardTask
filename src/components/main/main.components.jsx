import React from "react";
import { TopStats } from "./top-stats/top-stats.components";
import "../main/main.styles.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { LeftSecondRowComponent } from "./second-row/first-second-row.coponents";
import RocketIcon from "@mui/icons-material/Rocket";
import EastIcon from "@mui/icons-material/East";
import { TopChartComponent } from "./third-row/top-chart-tr.components";
import { RightSecondRowComponent } from "./second-row/right-second-row.coponents";
import { LeftThirdRowComponent } from "./third-row/left-third-row.components";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="top-stats-container">
        <TopStats
          title="Today's Money"
          value="$54,000"
          percentage="+55%"
          percentageColor="#00E676"
          icon={<MonetizationOnIcon />}
        />
        <TopStats
          title="Today's Users"
          value="2,300"
          percentage="+2%"
          percentageColor="#00E676"
          icon={<PublicIcon />}
        />
        <TopStats
          title="New Clients"
          value="+3,469"
          percentageColor="red"
          percentage="-3%"
          icon={<EmojiEventsIcon />}
        />
        <TopStats
          title="Sales"
          value="$103,000"
          percentageColor="#00E676"
          percentage="+5%"
          icon={<ShoppingCartIcon />}
        />
      </div>
      <div className="second-row-container-main">
        <LeftSecondRowComponent
          slog="Built by developers"
          title="Soft UI Dashboard"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis purus ultrices nisi blandit cursus. Nulla fringilla mollis eros, in auctor metus pulvinar eget."
          navigation="Read More"
          navIcon={<EastIcon style={{ fontSize: "1.2vw" }} />}
          icon={<RocketIcon style={{ fontSize: "7vw" }} />}
        />
        <RightSecondRowComponent
          title="Work with the rockets"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis purus ultrices nisi blandit cursus. Nulla fringilla mollis eros, in auctor metus pulvinar eget."
          navigation="Read More"
          navIcon={<EastIcon style={{ fontSize: "1.2vw" }} />}
        />
      </div>
      <div className="third-row-container-main">
        <LeftThirdRowComponent
          chart={<TopChartComponent />}
          title="Active Users"
          percentage="(+23%) than last week"
        />
      </div>
    </div>
  );
};
