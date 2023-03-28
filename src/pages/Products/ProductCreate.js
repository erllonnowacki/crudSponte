import { React, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { CenteredForm, Row } from "./style";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import Categories from "../../components/Categories";
import ButtonWithLabel from "../../components/Button";

function ProductCreate() {
  const initialValues = {
    title: "",
    description: "",
    barcode: "",
    date: "",
    value: "",
    weight: "",
    height: "",
    width: "",
    length: "",
    categories: "",
    images: "",
  };

  const [categories, setCategories] = useState([]);
  // const [images, setImages] = useState({ loaded: [] });

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

  const onSubmit = (values, { setSubmitting }) => {
    if (categories) {
      values.categories = categories.join();
    }
    axios
      .post("http://localhost:5000/product", values)
      .then((response) => {
        console.log(response);
        setSubmitting(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };

  return (
    <>
      <Header></Header>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
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
              <Categories
                name="category"
                label="Categoria"
                help="(Aperte ENTER para adicionar uma categoria ao produto)"
                values={categories}
                setValues={setCategories}
              />
            </Row>

            <ButtonWithLabel
              type="submit"
              color="blue"
              label="Cadastrar"
            ></ButtonWithLabel>
          </CenteredForm>
        )}
      </Formik>
    </>
  );
}

export default ProductCreate;
