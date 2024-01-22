import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import BrowseJobs from "@/components/UI/Home/BrowseJobs";
import FeaturedJobs from "@/components/UI/Home/FeaturedJobs";
import Overview from "@/components/UI/Home/Overview";
import TopCompanies from "@/components/UI/Home/TopCompanies";

export default function HomePage() {
  return (
    <main>
      <Banner></Banner>
      <TopCompanies></TopCompanies>
      <Overview></Overview>
      <BrowseJobs></BrowseJobs>
      <FeaturedJobs></FeaturedJobs>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
