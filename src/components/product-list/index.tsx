import {Stack} from "@mui/material";
import React from "react";
import {ProductType} from "../../types/product.type";
import Product from "../product";

export default function ProductList(props: {
    products: ProductType[]
}) {

    return (
        <Stack direction={'row'} width={"100%"} justifyContent={"space-between"} flexWrap={"wrap"}>
            {
                props.products.map((product, index) => {
                    return <Product key={index} {...product}/>
                })
            }
        </Stack>
    )
}
