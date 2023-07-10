import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { mynewtheme } from '../src/theme';
import '../styles/globals.css';
import { ComponentType } from 'react';
import { AuthWrapper } from '../src/utils/AuthWrapper';

type AppProps = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

function Flok({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ChakraProvider>
  );
}

export default Flok;
