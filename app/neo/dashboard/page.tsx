import UpgradePlanBanner from "@/components/Dashboard/Banner/UpgradePlanBanner";
import RecentBuildCard from "@/components/Dashboard/Cards/RecentBuildCard";

function Page() {
  return (
    <>
      <h1 className=" text-2xl font-medium dark:text-white">
        Hey, Betide Studio
      </h1>
      <UpgradePlanBanner />
      <div>
        <RecentBuildCard />
      </div>
    </>
  );
}

export default Page;
