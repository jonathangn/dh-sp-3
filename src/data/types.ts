export type TProduct = {
    id: number,
    product_code: string,
    name: string,
    brand: string,
    model: string,
    alcohol_content: number,
    origin: string,
    price: number,
    description: string,
    image_id: number,
    category_id: number,
    user_id: number
}

export type TProductCart = {
    id: number,
    product_code: string,
    name: string,
    brand: string,
    model: string,
    alcohol_content: number,
    origin: string,
    price: number,
    description: string,
    image_id: string,
    Category: string,
    top: boolean,
    slug: string,
    quantity: number
}

export type TProductApi = {
    id: number,
    product_code: string,
    name: string,
    brand: string,
    model: string,
    alcohol_content: number,
    origin: string,
    price: number,
    description: string,
    image_id: string,
    Category: string,
}

export type TImage = {
    id: number,
    name: string,
    url: string
}

export type TPurchaseOrder = {
    id: number,
    order_number: number,
    order_date: string,
    tracking_code: string,
    user_id: number,
    order_status_id: number,
    address: string,
}

export type TCategory = {
    id: number,
    title: string,
    name: string,
    description: string,
    urlImg: string,
    updated: string,
}

export type TUser = {
    id: number,
    dni: string,
    first_name: string,
    last_name: string,
    birth: string,
    email: string,
    password: string
}


