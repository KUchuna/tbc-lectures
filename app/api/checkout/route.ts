import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET)


const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter((product: any) => product.active === true)

    return availableProducts;
}



export const POST = async (request: any) => {

    const {services} = await request.json();
    const data = services;

    let activeProducts = await getActiveProducts();

    try {
        for (const service of data) {
            const stripeProduct = activeProducts?.find(
                (stripeProduct: any) =>
                stripeProduct?.name?.toLowerCase() == service?.title?.toLowerCase()
            )

            if(stripeProduct == undefined) {
                const prod = await stripe.products.create({
                    name: service.title,
                    default_price_data: {
                        unit_amount: service.price * 100,
                        currency: 'gel',
                    }
                })
                console.log(prod)
            }
        }

    } catch (error) {
        console.log("error with creating a new product", error);
        throw error;
    }


    activeProducts = await getActiveProducts();
    let stripeItems:any = [];

    for ( const service of data) {
        const stripeProduct = activeProducts?.find(
            (prod: any) =>
            prod?.name?.toLowerCase() == service?.title?.toLowerCase()
        );

        if(stripeProduct) {
            stripeItems.push({
                price: stripeProduct?.default_price,
                quantity: 1,
            });
        }
    }

    const session = await stripe.checkout.sessions.create({
        line_items: stripeItems,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
        cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/bookings`
    })


    return NextResponse.json({url: session.url})
}