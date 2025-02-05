import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { NextUIProvider } from "@nextui-org/react";
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx';
import { publicUrl } from '@/helpers/publicUrl.ts';
import { ViewportHeightProvider } from '@/veiwPortContext';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { App } from '@/components/App.tsx';

function ErrorBoundaryError({ error }: { error: unknown }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

export function Root() {

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
     <ViewportHeightProvider>
              <NextUIProvider>
                <TonConnectUIProvider manifestUrl={'https://copychic.ru/tonconnect-manifest.json'}>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                      <App /> {/* I18nextProvider is now moved to the App component */}
                    </NextThemesProvider>
                </TonConnectUIProvider>
              </NextUIProvider>
      </ViewportHeightProvider>
    </ErrorBoundary>
  );
}
