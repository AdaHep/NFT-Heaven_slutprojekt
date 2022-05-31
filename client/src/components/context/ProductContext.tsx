import { createContext, FC, useContext, useState } from "react";

interface Product {
  categories: string[];
  name: string;
  description: string;
  price: number;
  stock: number;
  quantity: number;
  imageId: string;
  /** Virtual */ imageURL: string;
}

interface Category {
  name: string;
}

interface ProductContext {
  fetchProductsFromDb: () => void;
  products: Product[];
  fetchCategoriesFromDb: () => void;
  categories: string[];
  // editNft: (nft: Product) => void;
  selectedNftID: number;
  editNftModal: boolean;
  openEditNftModal: (nft: Product) => void;
  closeEditNftModal: () => void;
  selectedNFT: Product;
}

const ProductsContext = createContext<ProductContext>({
  fetchProductsFromDb: () => [],
  products: [],
  fetchCategoriesFromDb: () => [],
  categories: [],
  // editNft: (nft: Product) => {},
  selectedNftID: 0,
  editNftModal: false,
  openEditNftModal: (nft: Product) => {},
  closeEditNftModal: () => {},
  selectedNFT: {
    categories: ["test"],
    name: "test",
    description: "test",
    price: 420,
    imageId: "test",
    imageURL: "test",
    stock: 100,
    quantity: 0,
  },
});

export const ProductProvider: FC = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // let localData = localStorage.getItem("collections");
  const [editNftModal, setEditNftModal] = useState(false);
  // const [collections, setCollections] = useState(
  //   localData ? JSON.parse(localData) : collectionData
  // );
  const [selectedNftID, setSelectedNftID] = useState(0);
  const [selectedNFT, setSelectedNFT] = useState({
    categories: ["test"],
    name: "test",
    description: "test",
    price: 420,
    imageId: "test",
    imageURL: "test",
    stock: 100,
    quantity: 0,
  });

  const fetchProductsFromDb = async () => {
    let data = fetch("http://localhost:5500/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchCategoriesFromDb = async () => {
    let data = fetch("http://localhost:5500/api/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openEditNftModal = (nft: Product) => {
    setSelectedNFT(nft);
    setEditNftModal(true);
    console.log(editNftModal);
    // console.log("prutt");
  };
  const closeEditNftModal = () => {
    setEditNftModal(false);
  };

  // const editNft = (nft: Product, collectionID?: number) => {
  //   let updatedList = collections.map((collection: collectionDataItem) => {
  //     if (collection.id === collectionID) {
  //       collection.NFTS = collection.NFTS.map((nftItem: Product) => {
  //         if (nftItem.NFTid === nft.NFTid) {
  //           nftItem = nft;
  //           // console.log(nftItem)
  //           return nftItem;
  //         }
  //         return nftItem;
  //       });
  //     }
  //     return collection;
  //   });
  //   console.log(updatedList);

  //   localStorage.setItem("collections", JSON.stringify(updatedList));
  // };

  return (
    <ProductsContext.Provider
      value={{
        products,
        fetchProductsFromDb,
        categories,
        fetchCategoriesFromDb,
        selectedNFT,
        // collections,
        // editNft,
        editNftModal,
        openEditNftModal,
        closeEditNftModal,

        selectedNftID,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
