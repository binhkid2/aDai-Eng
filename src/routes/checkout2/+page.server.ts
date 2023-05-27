
import { env } from '$env/dynamic/private';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const productsData = await fetch(`${env.SHEET}`);
    const products = await productsData.json();
    const productMensData = await  fetch(`${env.SHEET_MEN_CATEGORIES}`);
    const productsMens = await productMensData.json();
    const productWommensData = await  fetch(`${env.SHEET_WOMMEN_CATEGORIES}`);
    const productWommens = await productWommensData.json();
    const productUnisexData = await  fetch(`${env.SHEET_UNISEX_CATEGORIES}`);
    const productsUnisex =  await productUnisexData.json();
    return { products , productsMens,productWommens,productsUnisex};
}
