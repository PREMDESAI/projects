import "../styles/globals.scss";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { AppProps } from "next/app";
import Head from "next/head";

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId,
};
export const firebaseApp = initializeApp(firebaseConfig);
if (
  firebaseApp.name &&
  firebaseApp.options.projectId &&
  typeof window !== "undefined"
) {
  getAnalytics(firebaseApp);
}
export const firebaseDb = getFirestore(firebaseApp);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Celebrai IELB</title>
        <meta
          name="description"
          content="Músicas luteranas na palma da sua mão"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
