import { readPage, renderPage } from "./templatingEngine.js"

// serverside rendering er en fordel pga SEO. Google search engines kan finde resultater.
// SSR - serverside rendering , CSR - client side rendering. Vi foretrækker SSR, mindre resources spent + SEO.
const homepage = readPage(`./public/pages/homepage/homepage.html`);
export const homepagePage = renderPage(homepage);

const contact = readPage(`./public/pages/contact/contact.html`);
export const contactPage = renderPage(contact, {
    tabTitle: `DogInder Contact`
});

const matches = readPage(`./public/pages/matches/matches.html`);
export const matchesPage = renderPage(matches, {
    tabTitle: `DogInder Match`,
    CSSLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
});
