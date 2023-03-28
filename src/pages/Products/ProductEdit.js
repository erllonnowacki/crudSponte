import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonWithLabel from "../../components/Button";
import { Input } from "../../components/Input";
import { CenteredForm, Row } from "./style";

const ProductEdit = ({ productId, onCancel }) => {
  const [product, setProduct] = useState(null);
  const initialValues = product;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  const handleDelete = () => {
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.location.href = "/product";
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        setSubmitting(false);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(100, "Limitado à 100 caracteres.")
      .required("Preenchimento obrigatório."),
    description: Yup.string(),
    barcode: Yup.string().max(13, "Não deve ser superior a 13 números"),
    date: Yup.date().max(new Date(), "Não deve ser superior à data atual."),
    value: Yup.number()
      .moreThan(0, "Deve ser maior que 0.")
      .required("Preenchimento obrigatório."),
    weight: Yup.number().moreThan(0, "Deve ser maior que 0."),
    height: Yup.number().moreThan(0, "Deve ser maior que 0."),
    width: Yup.number().moreThan(0, "Deve ser maior que 0."),
    length: Yup.number().moreThan(0, "Deve ser maior que 0."),
    images: Yup.string(),
  });

  return (
    <>
      {product ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <CenteredForm>
              <Row>
                <Input type="text" label="Título" name="title" required />
                <Input type="number" label="Valor" name="value" required />
              </Row>
              <Row>
                <Input type="text" label="Descrição" name="description" />
                <Input type="number" label="Código de barras" name="barcode" />
              </Row>

              <Row>
                <Input type="date" label="Data" name="date" />
                <Input
                  type="text"
                  name="images"
                  label="Imagem (insira um endereço de imagem)"
                />
              </Row>
              <Row>
                <Input type="number" label="Peso (em KG)" name="weight" />
                <Input type="number" label="Altura (cm)" name="height" />
              </Row>
              <Row>
                <Input type="number" label="Largura (cm)" name="width" />
                <Input type="number" label="Comprimento (cm)" name="length" />
              </Row>

              <Row>
                <ButtonWithLabel type="submit" color="blue" label="Salvar" />
                <ButtonWithLabel
                  type="button"
                  onClick={onCancel}
                  color="green"
                  label="Cancelar"
                />
                <ButtonWithLabel
                  onClick={handleDelete}
                  color="red"
                  label="Excluir"
                />
              </Row>
            </CenteredForm>
          )}
        </Formik>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
};
export default ProductEdit;
