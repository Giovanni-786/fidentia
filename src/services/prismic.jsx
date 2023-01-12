import * as prismic from '@prismicio/client'

export function getPrismicClient(req){
  const client = prismic.createClient("https://space-traveling-gio.cdn.prismic.io/api/v2", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return client;
}