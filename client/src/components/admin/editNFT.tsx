import { Button, TextField } from "@mui/material";
import { Field, useFormik } from "formik";
import * as yup from "yup";
import { CSSProperties, useEffect } from "react";
import { Product } from "../../ProductInterface";
import { useProducts } from "../context/ProductContext";
import React from "react";

interface Props {
  product: Product;
}

function EditNFT(props: Props) {
  useEffect(() => {
    fetchProductsFromDb();
  }, []);
  const {
    closeEditNftModal,
    editNftModal,
    selectedNFT,
    editProduct,
    fetchProductsFromDb,
  } = useProducts();

  // let categoryName = [""];

  // const convertCategoryIdToName = () => {
  //   if (selectedNFT.categories[0] === "628c92cd1c4eb76ecbc12f55") {
  //     categoryName = ["MeinerNFT"];
  //   }
  //   if (selectedNFT.categories[0] === "628c92c41c4eb76ecbc12f53") {
  //     categoryName = ["BakkumNFT"];
  //   }
  //   if (selectedNFT.categories[0] === "628c92bc1c4eb76ecbc12f50") {
  //     categoryName = ["NoccoNFT"];
  //   }
  //   if (selectedNFT.categories[0] === "628c92b71c4eb76ecbc12f4e") {
  //     categoryName = ["DCNFT"];
  //   }
  //   if (selectedNFT.categories[0] === "628c92af1c4eb76ecbc12f4c") {
  //     categoryName = ["PappaNFT"];
  //   }
  //   if (selectedNFT.categories[0] === "628c92aa1c4eb76ecbc12f4a") {
  //     categoryName = ["Formula1NFT"];
  //   }
  // };
  // convertCategoryIdToName();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: selectedNFT.name,
      categories: selectedNFT.categories,
      price: selectedNFT.price,
      stock: selectedNFT.stock,
      imageURL: selectedNFT.imageURL,
    },

    // validationSchema: validationSchema,
    onSubmit: (values) => {
      let updatedProduct = {
        id: selectedNFT.id,
        name: selectedNFT.name,
        categories: values.categories,
        description: selectedNFT.description,
        quantity: selectedNFT.quantity,
        price: selectedNFT.price,
        stock: values.stock,
        imageURL: selectedNFT.imageURL,
        imageId: selectedNFT.imageId,
      };
      editProduct(updatedProduct);
      formik.resetForm();
      fetchProductsFromDb();
      closeEditNftModal();
    },
  });

  return (
    <div>
      {editNftModal && (
        <div style={newCollectionContainer}>
          <div>
            <form style={formStyle} onSubmit={formik.handleSubmit}>
              <h3>Editing: # {selectedNFT?.name}</h3>
              <p style={editNftDescription}>
                Description: {selectedNFT?.description}
              </p>
              <div style={textFieldsContainer}>
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="imageURL"
                  name="imageURL"
                  label="NFT image URL"
                  value={formik.values.imageURL}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.imageURL && Boolean(formik.errors.imageURL)
                  }
                  helperText={formik.touched.imageURL && formik.errors.imageURL}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="price"
                  name="price"
                  label="NFT price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="stock"
                  name="stock"
                  label="NFT stock"
                  value={formik.values.stock}
                  onChange={formik.handleChange}
                  error={formik.touched.stock && Boolean(formik.errors.stock)}
                  helperText={formik.touched.stock && formik.errors.stock}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="categories"
                  name="categories"
                  label="Categories"
                  value={formik.values.categories}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.categories &&
                    Boolean(formik.errors.categories)
                  }
                  helperText={
                    formik.touched.categories && formik.errors.categories
                  }
                />
                {/* <Field as="select" id="categories" name="categories" multiple>
                  <option value="628c92cd1c4eb76ecbc12f55">MeinerNFT</option>
                  <option value="628c92c41c4eb76ecbc12f53">BakkumNFT</option>
                  <option value="628c92bc1c4eb76ecbc12f50">NoccoNFT</option>
                  <option value="628c92b71c4eb76ecbc12f4e">DCNFT</option>
                  <option value="628c92af1c4eb76ecbc12f4c">PappaNFT</option>
                  <option value="628c92aa1c4eb76ecbc12f4a">Formula1NFT</option>
                </Field> */}
              </div>
              <Button
                style={saveCloseEditButton}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Save Edit
              </Button>
              <Button
                style={saveCloseEditButton}
                color="primary"
                variant="contained"
                fullWidth
                onClick={closeEditNftModal}
              >
                Close window
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditNFT;

const newCollectionContainer: CSSProperties = {
  backgroundColor: "black",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#202225",
  border: "2px solid #000",
  zIndex: "1",
  textAlign: "center",
  width: "clamp(10rem, 90vmin, 40rem",
};

const editNftDescription: CSSProperties = { width: "80%" };

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
  width: "100%",
};

const saveCloseEditButton: CSSProperties = {
  marginTop: "1rem",
  width: "40%",
  marginBottom: "1rem",
};

const formStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "column",
};

const textFieldsContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "90%",
  margin: "1rem",
};
