import "../styles/globals.css";
import Head from 'next/head'
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {

return <>
<Head>
    {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');
</style> */}
</Head>
<Layout>
    <Component {...pageProps} />
</Layout>

</>
};
export default MyApp;