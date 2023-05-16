import { createStorefrontClient } from "@shopify/hydrogen-react";

export const shopifyClient = createStorefrontClient({
  publicStorefrontToken: "1600b5084ae87d847d9066f7d9a5d577",
  storeDomain: `https://de2-eva-store.myshopify.com`,
  storefrontApiVersion: "2023-01",
});

export const getStorefrontApiUrl = shopifyClient.getStorefrontApiUrl;
export const getPublicTokenHeaders = shopifyClient.getPublicTokenHeaders;

export async function apiClient(GRAPHQL_QUERY) {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: GRAPHQL_QUERY,
    }),
    headers: getPublicTokenHeaders(),
    method: "POST",
  });

  const json = await response.json();

  return { props: json };
}
