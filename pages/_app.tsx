import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { ComponentType } from 'react';
import { flokAppTheme } from '../src/theme';
import { AuthWrapper } from '../src/utils/AuthWrapper';
import '../styles/globals.css';

type AppProps = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

const Flok = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={flokAppTheme}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ChakraProvider>
  );
};

export default Flok;
