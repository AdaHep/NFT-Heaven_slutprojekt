import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  NftItem as Product,
  collectionDataItem,
  collectionData,
} from "../../data/collections/collection";

interface Product {
  categories: String[];
  name: String;
  description: String;
  price: Number;
  stock?: Number;
  quantity?: Number;
  imageId: String;
  /** Virtual */ imageURL: string;
}

interface ProductContext {
  fetchProductsFromDb: () => void;
  products: Product[];
  collections: collectionDataItem[];
  editNft: (nft: Product, collectionID?: number) => void;
  selectedNftID: number;
  editNftModal: boolean;
  openEditNftModal: (
    nft: Product,
    collectionID: number,
    collection: collectionDataItem
  ) => void;
  closeEditNftModal: () => void;
  selectedNFT: Product;
}

const ProductsContext = createContext<ProductContext>({
  fetchProductsFromDb: () => [],
  products: [],
  collections: [],
  editNft: (nft: Product, collectionID?: number) => {},
  selectedNftID: 0,
  editNftModal: false,
  openEditNftModal: (
    nft: Product,
    collectionID: number,
    collection: collectionDataItem
  ) => {},
  closeEditNftModal: () => {},
  selectedNFT: {
    categories: ["test"],
    name: "test",
    description: "test",
    price: 420,
    quantity: 0,
    imageId: "test",
    imageURL: "test",
  },
});

export const ProductProvider: FC = (props) => {
  const [products, setProducts] = useState([]);
  let localData = localStorage.getItem("collections");
  const [editNftModal, setEditNftModal] = useState(false);
  const [collections, setCollections] = useState(
    localData ? JSON.parse(localData) : collectionData
  );
  const [selectedNftID, setSelectedNftID] = useState(0);
  const [selectedNFT, setSelectedNFT] = useState({
    NFTid: 12,
    image: "test",
    price: 12,
    description: "bollar",
    count: 12,
    collectionID: 1,
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

  const openEditNftModal = (
    nft: Product,
    collectionID: number,
    collection: collectionDataItem
  ) => {
    setSelectedNFT(nft);
    setEditNftModal(true);
  };
  const closeEditNftModal = () => {
    setEditNftModal(false);
  };

  const editNft = (nft: Product, collectionID?: number) => {
    let updatedList = collections.map((collection: collectionDataItem) => {
      if (collection.id === collectionID) {
        collection.NFTS = collection.NFTS.map((nftItem: Product) => {
          if (nftItem.NFTid === nft.NFTid) {
            nftItem = nft;
            // console.log(nftItem)
            return nftItem;
          }
          return nftItem;
        });
      }
      return collection;
    });
    console.log(updatedList);
    setCollections(updatedList);
    localStorage.setItem("collections", JSON.stringify(updatedList));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        fetchProductsFromDb,
        selectedNFT,
        collections,
        editNft,
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
