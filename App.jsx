/* eslint-disable no-unused-vars */
import { useState } from "react";
import Produk from './Component/Produk';
import Header from './Component/Header';
import Footer from './Component/Footer';
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: 1,
      nama: "Brand: Claire's Quality",
      foto: "https://slalu.com/cdn/shop/products/tas_fashion_import_39_9d5110b8-9a23-48d3-b976-a65ae89afa73.jpg?v=1672732019",
      harga: 12000000,
      deskripsi: "Tas selempang Wanita Branded.",
      kategori: "Tas Wanita",
      stok: 20,
    },
    {
      id: 2,
      nama: "Tas Wanita C3173 Tas Fashion import",
      foto: "https://img.lazcdn.com/g/p/b590dae400495ab7103e2bf8069d0f43.jpg_720x720q80.jpg",
      harga: 20000000,
      deskripsi: "Tas Fashion.",
      kategori: "Tas Wanita",
      stok: 10,
    },
    {
      id: 3,
      nama: " Tas Pesta VB3601 Selempang Wantia",
      foto: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/81/MTA-130312303/tas_fashion_tas_pesta_vb3601_selempang_wanita_import_slingbag_handbag_perempuan_tas_branded_minimalis_tas_kondangan_seserahan_bahan_kulit_croco_tas_korea_murah_full02_i24ecw02.jpg",
      harga: 11850000,
      deskripsi: "Tas Pesta vb3601  Branded.",
      kategori: "Tas Wanita",
      stok: 18,
    },
    {
      id: 4,
      nama: "Hermes Himalaya Birkin(christies)",
      foto: "https://asset.kompas.com/crops/T7E_j_EkIHYhJD4BenIxsvQy59Y=/135x90:1215x810/750x500/data/photo/2021/09/22/614a6e069bb12.jpeg",
      harga: 97500000,
      deskripsi: "Tas Hermes.",
      kategori: "Tas wanita",
      stok: 5,
    },
    {
      id: 5,
      nama: "MCM (Michael Cromer Munich)Quality",
      foto: "https://slalu.com/cdn/shop/products/tas_fashion_import_02_5e8811c5-b7d8-45f7-8f30-6d0cb57418c1_2048x.jpg?v=1681207863",
      harga: 17000000,
      deskripsi: "Tas MCM Cromer.",
      kategori: "Tas wanita",
      stok: 17,
    },
    {
      id: 6,
      nama: "Tas Cristian Dior",
      foto: "https://lh6.googleusercontent.com/HZRsS0Ttv_rYqGvLzRCUxaz6fQbm67KgU89Lh9o4PEBLGp79s0ua84MV28WmDQH_x8LjpXilCQ4L8PKBWHlcNdPS6m1t0v5Ovx96TR3-LfHCyv8NRY8lVd0jQv63wDrt7WibhCLNG4hZMssu_BTglbQ",
      harga: 93000000,
      deskripsi: "Cristian Dior.",
      kategori: "Tas wanita",
      stok: 22,
    },
    {
      id: 7,
      nama: "Small Lady D-Joy Bag",
      foto: "https://assets.christiandior.com/is/image/diorprod/S0910ONGEM900_E08?$default_GHC$&crop=500,854,1013,950",
      harga: 71000000,
      deskripsi: "Tas Lady D-Joy Bag.",
      kategori: "Tas wanita",
      stok: 32,
    },
    {
      id: 8,
      nama: "Alexandra Mcqueen",
      foto: "https://asset.kompas.com/crops/NiNSAGteG9XwVEePbRKPJENxxP0=/0x1535:2400x3135/750x500/data/photo/2022/01/12/61de548be51e2.jpg",
      harga: 20700000,
      deskripsi: "Alexandra Mcqueen.",
      kategori: "Tas wanita",
      stok: 11,
    },
    {
      id: 9,
      nama: "Medium Boston Bag",
      foto: "https://lh5.googleusercontent.com/-QdBI2-x4bE6yOQiHffhEpsc984YGrmomd6HjdA5uGnEExoMuWX9-AwXy1WGuNjBgp38CqVvC1ZpxVkgK3Oi0pvI1gJKFiw3u6ntoYftPkoDk3LXznFAITaLbMvYc6j1iwktnjSuXxqZJhiYsXe1Z_g",
      harga: 57000000,
      deskripsi: "Tas Medium Boston .",
      kategori: "Tas wanita",
      stok: 12,
    },
    {
      id: 10,
      nama: "Miss Caro Mini Bag",
      foto: "https://lh3.googleusercontent.com/R8hRoKfIiXUQj_IgOFoaWDS_CK-QspUlzh4PZvnrYHiYRd1wxHQ23amWqmOphmRFxTnc2JZ6Xz1ZQ00oPX4go_EOsSo7_QfrS6EvR-iNq7F4AuVZFCFIq4kM-krVBFyRSjoolXr3iLqQa7SjFCzk9Oc",
      harga: 37000000,
      deskripsi: "Tas Caro Mini Bag.",
      kategori: "Tas wanita",
      stok: 12,
    },

  ];

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.nama.toLowerCase().includes(searchQuery)
  );

  const [data, setData]= useState(0);
  const onAddToCart = (p) => {
      setData(data + 1);
  }

  return (
    <div>
      <Header onSearch={handleSearch} data={data} />
      <Produk products={filteredProducts} onAddToCart={onAddToCart}/>
      <Footer />
    </div>
  );
}

export default App;
