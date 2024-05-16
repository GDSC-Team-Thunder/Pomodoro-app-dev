import Scene from "./ThreeScene/Scene";
import Leaderboard from "./Leaderboard/Leaderboard.tsx"

const Right = () => {
    return (
      <div className="relative flex flex-col h-[85%] self-center w-[22.5%] justify-between gap-5">
        <Scene />
        <Leaderboard />
      </div>
    );
  };
  
export default Right;

