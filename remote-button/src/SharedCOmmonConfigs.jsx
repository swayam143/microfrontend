import React from "react";
import { COLORS, CONFIG } from "shared_lib/constants";

const SharedCOmmonConfigs = () => {
  return (
    <>
      <h2> Shared Common Configs</h2>
      {CONFIG.apiUrl}
    </>
  );
};

export default SharedCOmmonConfigs;
