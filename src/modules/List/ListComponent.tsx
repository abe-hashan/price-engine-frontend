import React, { useState, useEffect } from "react";
import Product from "../../types/model/Product";
import PriceQuantity from "../../types/model/PriceQuantity";
import { getProdcuts } from "../../services/productService";
import { getPriceList } from "../../services/priceService";
import PriceListRequest from "../../types/requests/PriceListRequest";
import { Row, Col, Table } from "reactstrap";
import PriceListResponse from "../../types/requests/PriceListResponse";


const ListComponent: React.FC<{}> = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [prices, setPrices] = useState<Array<PriceListResponse>>([]);

  useEffect(() => {
    getProdcuts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setPrices([]);
    const reuqestBodies: PriceListRequest[] = products.map((p) => {
      return {
        itemsCount: 50,
        productId: p.id,
      } as PriceListRequest;
    });

    reuqestBodies.forEach((request) => {
      getPriceList(request)
        .then((d) => {
          setPrices((prevPrices) => prevPrices?.concat(d));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [products]);

  const getProductById = (id: number) => {
    return products.find((p) => p.id === id )
  }

  const renderPriceLists = () => (
    <Row>
       {prices.map(p =>
         <Col>
         <strong>{getProductById(p.productId)?.name || ""}</strong>
         {renderTable(p.prices)}
         </Col> )}
    </Row>
  );

  const renderTable = (sortedPriceList: Array<PriceQuantity>) => (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {sortedPriceList.map((list) => (
          <tr>
            <td>{list.quantity}</td>
            <td>{list.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div>
      <h2>Prices</h2>
      {renderPriceLists()}
    </div>
  );
};

export default ListComponent;
