import fs from "fs";


export function readPage(path){
    return fs.readFileSync(path).toString();
};
// Vi bruger client side rendering på footer da vi har brug for den opdatere automatisk -> ellers vil dato altid være server opstart.
// nullish coalesce operator ?? - nullchecking 
// const value = ""; 
// console.log(value ?? "some other value");  // ingen type coercion
// console.log(value || "some other value");  // type coerces - takes falsy values and coerces

const footer = fs.readFileSync(`./public/components/footer/footer.html`).toString();

export function renderPage(page, config={}){
    const header = fs.readFileSync(`./public/components/header/header.html`).toString(); 
    return header.replace(`$TAB_TITLE$`, config.tabTitle ?? `DogInder`)
                 .replace(`$CSS_LINKS$`, config.CSSLinks ?? "")
    + page 
    + footer;
};