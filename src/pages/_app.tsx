import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "~/features/auth";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
