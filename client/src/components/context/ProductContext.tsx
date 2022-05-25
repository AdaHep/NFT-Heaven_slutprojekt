import { createContext, FC, useContext, useState } from "react";
import {
  NftItem,
  collectionDataItem,
  collectionData,
} from "../../data/collections/collection";

interface ProductContext {
  randomCollections: collectionDataItem[];
  collections: collectionDataItem[];
  closeAddCollectionModal: () => void;
  openAddCollectionModal: () => void;
  selectedCollectionID: number;
  selectedNftID: number;
  addNftModal: boolean;
  openAddNftModal: (collectionID: number) => void;
  closeAddNftModal: () => void;
  openEditNftModal: (
    nft: NftItem,
    collectionID: number,
    collection: collectionDataItem
  ) => void;
  closeEditNftModal: () => void;
  selectedCollection: collectionDataItem;
  selectedNFT: NftItem;
  openEditCollectionModal: (collection: collectionDataItem) => void;
  closeEditCollectionModal: () => void;
  addCollectionModal: boolean;
  
}

const ProductsContext = createContext<ProductContext>({
  randomCollections: [],
  collections: [],
  addCollectionModal: false,
  openAddCollectionModal: () => {},
  closeAddCollectionModal: () => {},
  selectedCollectionID: 0,
  selectedNftID: 0,
  addNftModal: false,
  openAddNftModal: (collectionID: number) => {},
  closeAddNftModal: () => {},
  openEditNftModal: (
    nft: NftItem,
    collectionID: number,
    collection: collectionDataItem
  ) => {},
  closeEditNftModal: () => {},
  selectedCollection: {
    id: 420,
    name: "test",
    description: "test",
    volumeTraded: 1,
    floorPrice: 1,
    header: "test",
    productImage: "test",
    NFTS: [],
  },
  selectedNFT: {
    NFTid: 12,
    image: "test",
    price: 12,
    description: "bollar",
    count: 12,
    collectionID: 1,
  },
  openEditCollectionModal: (collection: collectionDataItem) => {},
  closeEditCollectionModal: () => {},
  
});

export const ProductProvider: FC = (props) => {
  let localData = localStorage.getItem("collections");
  const [addCollectionModal, setAddCollectionModal] = useState(false);
  const [addNftModal, setAddNftModal] = useState(false);
  const [collections, setCollections] = useState(
    localData ? JSON.parse(localData) : collectionData
  );
  const [selectedCollectionID, setSelectedCollectionID] = useState(0);
  const [selectedNftID, setSelectedNftID] = useState(0);
  const [selectedNFT, setSelectedNFT] = useState({
    NFTid: 12,
    image: "test",
    price: 12,
    description: "bollar",
    count: 12,
    collectionID: 1,
  });
  const [selectedCollection, setSelectedCollection] = useState({
    id: 420,
    name: "test",
    description: "test",
    volumeTraded: 1,
    floorPrice: 1,
    header: "test",
    productImage: "test",
    NFTS: [
      {
        NFTid: 12,
        image: "test",
        price: 12,
        description: "bollar",
        count: 12,
        collectionID: 1,
      },
    ],
  });
  const [randomCollections, setRandomCollections] = useState(
    collections.sort(() => Math.random() - Math.random()).slice(0, 3)
  );

  const openAddCollectionModal = () => {
    setAddCollectionModal(true);
  };

  const closeAddCollectionModal = () => {
    setAddCollectionModal(false);
  };

  const openAddNftModal = (collectionID: number) => {
    setAddNftModal(true);
    setSelectedCollectionID(collectionID);
  };
  const closeAddNftModal = () => {
    setAddNftModal(false);
  };

  const openEditCollectionModal = (collection: collectionDataItem) => {
    //setEditCollectionModal(true);
    setSelectedCollection(collection);
  };

  const closeEditCollectionModal = () => {
    //setEditCollectionModal(false);
  };

  const openEditNftModal = (
    nft: NftItem,
    collectionID: number,
    collection: collectionDataItem
  ) => {
    setSelectedCollectionID(collectionID);
    setSelectedNFT(nft);
    setSelectedCollection(collection);
  };
  const closeEditNftModal = () => {
    //setEditNftModal(false);
  };

  return (
    <ProductsContext.Provider
      value={{
        closeEditCollectionModal,
        randomCollections,
        openEditCollectionModal,
        selectedNFT,
        selectedCollection,
        collections,
        addNftModal,
        closeAddNftModal,
        openAddNftModal,
        openEditNftModal,
        closeEditNftModal,
        selectedCollectionID,
        selectedNftID,
        openAddCollectionModal,
        closeAddCollectionModal,
        addCollectionModal,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
