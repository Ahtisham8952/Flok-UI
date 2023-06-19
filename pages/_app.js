// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rajdhani";
import { mynewtheme } from "../src/theme";
import { ApolloProvider } from "@apollo/client";
import client from "../src/graphQL/client";

function Flok({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<ChakraProvider resetCSS theme={mynewtheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	);
}

export default Flok;
