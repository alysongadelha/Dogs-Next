import getStats from "@/actions/get-stats";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AccountStatistic = dynamic(
  () => import("@/components/account/account-statistic"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Statistic | My Account",
};

const StatisticPage = async () => {
  const { data } = await getStats();

  if (!data) return null;

  return (
    <section>
      <AccountStatistic data={data} />
    </section>
  );
};

export default StatisticPage;
