// pages/_app.js
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
import "../styles/globals.css";

const BASE_URL = process.env.GRAPHQL_API_URL;

const httpLink = createHttpLink({
	uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function Flok({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={mynewtheme}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ChakraProvider>
	);
}

export default Flok;
