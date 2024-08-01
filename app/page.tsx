import Auth from "../components/home/Auth";
import Description from "../components/home/Description";
export default function Home() {
  return (
    <div className="w-full bg-white max-w-screen-xl m-auto h-screen p-5 flex items-center justify-between gap-4">
      <Auth />
      <Description />
    </div>
  );
}
