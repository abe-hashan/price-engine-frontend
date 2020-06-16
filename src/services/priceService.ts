import API from './api';
import PriceListRequest from '../types/requests/PriceListRequest';
import PriceListResponse from '../types/requests/PriceListResponse';
import { GET_PRICE_LIST } from './endpoints';

export const getPriceList = async (priceListRequest: PriceListRequest)=> {

    const response = await API.get<PriceListResponse>(GET_PRICE_LIST, {
        params : {...priceListRequest}
    })

    return response.data
}
