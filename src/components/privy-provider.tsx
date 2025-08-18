"use client";

import { PrivyProvider } from "@privy-io/react-auth";

interface PrivyProviderWrapperProps {
  children: React.ReactNode;
}

export function PrivyProviderWrapper({ children }: PrivyProviderWrapperProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        embeddedWallets: { createOnLogin: "all-users" },
      }}
      // @ts-expect-error - apiUrl is an internal prop for PrivyProvider
      apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL}
    >
      {children}
    </PrivyProvider>
  );
}
