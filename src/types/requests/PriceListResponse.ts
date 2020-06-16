import PriceQuantity from "../model/PriceQuantity";

export default interface PriceListResponse {
    productId: number;
    prices: Array<PriceQuantity>;
};


