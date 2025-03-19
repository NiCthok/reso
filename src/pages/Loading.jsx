import { bouncyArc } from "ldrs";
const Loading = () => {
    bouncyArc.register();
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950 ">
      <div>
        <l-bouncy-arc size="100" speed="1.75" color="#C70039"></l-bouncy-arc>
        <p className="text-2xl text-slate-500">loading...</p>
      </div>
    </div>
  );
};
export default Loading;
