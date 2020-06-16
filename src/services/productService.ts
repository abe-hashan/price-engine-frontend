import API from './api';
import { GET_PRODCUTS } from './endpoints';
import ProductListResponse from '../types/requests/ProductResponse';

export const getProdcuts = async ()=> {

    const response = await API.get<ProductListResponse>(GET_PRODCUTS)

    return response.data
}
