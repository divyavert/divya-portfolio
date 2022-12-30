import sanityClient from '@sanity/client'
import imageUrlBulider from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-11-18',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});
const bulider = imageUrlBulider(client);
export const urlFor = (source) => bulider.image(source)