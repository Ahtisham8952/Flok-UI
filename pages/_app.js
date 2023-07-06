import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rajdhani";
import { mynewtheme } from "../src/theme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import "../styles/globals.css";
import LoginPageFlow from "./login";
import { AuthWrapper } from "../src/utils/AuthWrapper";

function Flok({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ChakraProvider>
  );
}

export default Flok;
