import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { CSSProperties, useState } from "react";
import { Product } from "../../ProductInterface";
import { useProducts } from "../context/ProductContext";
import React from "react";

const validationSchema = yup.object({
  nftImage: yup.string().required("Please enter new image URL").min(10),
  description: yup.string().required("Please enter new description").min(2),
  price: yup.number().required("Please enter new price").min(1),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = ["Selfies", "Logos", "Things"];

function EditNFT() {
  // const { editNft, closeEditNftModal, editNftModal, selectedNFT } =
  const { closeEditNftModal, editNftModal, selectedNFT } = useProducts();

  const [chosenCategory, setChosenCategory] = React.useState<String[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof chosenCategory>) => {
    const {
      target: { value },
    } = event;
    setChosenCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // if(!editNftModal) return
  // openEditNftModal(selectedNFT, selectedCollection.id, selectedCollection)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nftImage: selectedNFT.imageURL,
      description: selectedNFT.description,
      price: selectedNFT.price,
      //category: selectedNFT.category,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let newNft: Product = {
        categories: [],
        name: selectedNFT.name,
        imageId: values.nftImage,
        imageURL: "",
        description: values.description,
        price: values.price,
        //category: values.category,
        quantity: 0,
        stock: 0,
      };
      // editNft(newNft);
      console.log(newNft);
      formik.resetForm();
      closeEditNftModal();
    },
  });
  return (
    <div>
      {editNftModal && (
        <div style={newCollectionContainer}>
          <div>
            <form style={formStyle} onSubmit={formik.handleSubmit}>
              <h3>Edit NFT</h3>
              <h3>Editing: # {selectedNFT?.name}</h3>
              <p style={editNftDescription}>
                Description: {selectedNFT?.description}
              </p>

              <div style={textFieldsContainer}>
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="nftImage"
                  name="nftImage"
                  label="NFT image URL"
                  value={formik.values.nftImage}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nftImage && Boolean(formik.errors.nftImage)
                  }
                  helperText={formik.touched.nftImage && formik.errors.nftImage}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  style={textFieldStyle}
                  fullWidth
                  autoComplete="off"
                  id="description"
                  name="description"
                  label="NFT description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
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
                  label="Set NFT price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <FormControl sx={{ m: 1, width: 300, zIndex: 1000 }}>
                  <InputLabel id="multiple-category">Category</InputLabel>
                  <Select
                    id="multiple-category"
                    multiple
                    value={chosenCategory}
                    onChange={handleChange}
                    input={<OutlinedInput label="Category" />}
                    MenuProps={MenuProps}
                    style={{ color: "white" }}
                  >
                    {categories.map((category) => (
                      <MenuItem
                        sx={{ zIndex: 10000 }}
                        key={category}
                        value={category}
                        style={{ backgroundColor: "#333", color: "white" }}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
