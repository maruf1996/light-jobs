import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import LatestJob from "@/components/UI/Home/LatestJob";
import Overview from "@/components/UI/Home/Overview";
import TopCompanies from "@/components/UI/Home/TopCompanies";

export default function HomePage() {
  return (
    <main>
      <Banner></Banner>
      <TopCompanies></TopCompanies>
      <Overview></Overview>
      <LatestJob></LatestJob>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
