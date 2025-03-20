import { bouncyArc } from "ldrs";
const Loading = () => {
    bouncyArc.register();
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950 ">
      <div>
        <l-bouncy-arc size="100" speed="1.75" color="green"></l-bouncy-arc>
      </div>
    </div>
  );
};
export default Loading;
