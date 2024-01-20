import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import Overview from "@/components/UI/Home/Overview";
import TopCompanies from "@/components/UI/Home/TopCompanies";

export default function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listenToAuthState());
  // }, [dispatch]);

  return (
    <main>
      <Banner></Banner>
      <TopCompanies></TopCompanies>
      <Overview></Overview>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
