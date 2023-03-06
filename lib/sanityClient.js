import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

  export const client = createClient({

    projectId: "4zeblw8d",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
    token: process.env.NEXT_SANITY_TOKEN

  });
 
  const builder = imageUrlBuilder(client)

  export const urlFor = (source) => builder.image(source)