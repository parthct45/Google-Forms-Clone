import React from "react";
import RecentFormsList from "../Components/RecentFormsList";
import "../Styles/MainBody.css";

function MainBody() {
  return (
    <div className="body-wrapper">
      <div>Recent Forms</div>
      <RecentFormsList />
    </div>
  );
}

export default MainBody;
