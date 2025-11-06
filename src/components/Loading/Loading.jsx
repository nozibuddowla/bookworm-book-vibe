import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <FadeLoader
          color="#396831"
          cssOverride={{}}
          height={15}
          loading
          margin={2}
          radius={4}
          speedMultiplier={1}
          width={10}
        />
      </div>
    </div>
  );
};

export default Loading;
