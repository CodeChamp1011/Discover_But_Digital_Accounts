import Digest from "@/components/home/digest";
import Selling from "@/components/home/selling";
import Sale from "@/components/home/sale";
import Works from "@/components/home/works";
import Discover from "@/components/home/discover";
export default function Home() {
  return (
    <div className="bg-black-gray justify-center items-center">
      <Digest />
      <Selling />
      <Sale />
      <Works />
      <Discover />
    </div>
  );
}
