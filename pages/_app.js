import "../styles/globals.css";
import Layout from "../components/Layout";
import { theme } from "../themes/theme";

import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
