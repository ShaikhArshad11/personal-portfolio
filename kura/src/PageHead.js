import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>ARSHAD PORTFOLIO | {page}</title>
    </Head>
  );
};

export default PageHead;
