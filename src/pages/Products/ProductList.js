import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  THead,
  TableRow,
  THeaderCell,
  TBody,
  TableCell,
  Container,
} from "./style";
import ProductEdit from "./ProductEdit";
import Header from "../../components/Header";
import ButtonWithLabel from "../../components/Button";

function ProductList() {
  const [product, setProduct] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = () => {
    fetch("http://localhost:5000/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = (id) => {
    setEditingProduct(id);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Table>
          <THead>
            <TableRow>
              <THeaderCell>Titulo</THeaderCell>
              <THeaderCell>Código de barras</THeaderCell>
              <THeaderCell>Data</THeaderCell>
              <THeaderCell>Valor</THeaderCell>
              <THeaderCell>Categoria</THeaderCell>
              <THeaderCell>Imagem</THeaderCell>
              <THeaderCell>Ações</THeaderCell>
            </TableRow>
          </THead>
          <TBody>
            {product.map((item, index) => (
              <TableRow key={index}>
                <TableCell data-label="Titulo">{item.title}</TableCell>
                <TableCell data-label="Código de barras">
                  {item.barcode || "-"}
                </TableCell>
                <TableCell data-label="Data">{item.date || "-"}</TableCell>
                <TableCell data-label="Valor">R$ {item.value}</TableCell>
                <TableCell data-label="Categoria">
                  {item.categories || "-"}
                </TableCell>
                <TableCell data-label="Imagem">
                  {!item.images ? (
                    "-"
                  ) : (
                    <img
                      src={item.images}
                      alt="Product"
                      width="100"
                      height="100"
                    />
                  )}
                </TableCell>
                <TableCell data-label="Ações">
                  <ButtonWithLabel
                    color="orange"
                    onClick={() => handleEditClick(item.id)}
                    label="Editar"
                  ></ButtonWithLabel>
                </TableCell>
              </TableRow>
            ))}
          </TBody>
        </Table>
        {editingProduct && (
          <ProductEdit
            productId={editingProduct}
            onCancel={() => setEditingProduct(null)}
          />
        )}
      </Container>
    </>
  );
}
export default ProductList;
