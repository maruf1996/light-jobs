import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import BrowseJobs from "@/components/UI/Home/BrowseJobs";
import FeaturedJobs from "@/components/UI/Home/FeaturedJobs";
import LatestJob from "@/components/UI/Home/LatestJobs";
import Overview from "@/components/UI/Home/Overview";
import TopCompanies from "@/components/UI/Home/TopCompanies";
import Video from "@/components/UI/Home/Video";

export default function HomePage() {
  return (
    <main>
      <Banner></Banner>
      <TopCompanies></TopCompanies>
      <Overview></Overview>
      <BrowseJobs></BrowseJobs>
      <FeaturedJobs></FeaturedJobs>
      <Video></Video>
      <LatestJob></LatestJob>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
