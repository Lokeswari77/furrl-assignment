import { useEffect, useState, useCallback } from "react";
import "./index.css";
import Navbar from "../Navbar";
import CategoryFilters from "../CategoryFilters";
import ProductList from "../ProductList";
import Loader from "../Loader";

const defaultProducts = {
  page: 0,
  pageSize: 0,
  totalPages: 10,
  totalProducts: 0,
  products: [],
};

const Home = () => {
  const [products, updateProducts] = useState(defaultProducts);
  const [loading, updateLoading] = useState(true);
  const [reachedEnd, updateReached] = useState(false);
  const [filters, updateFilters] = useState([]);
  const [activeFilter, updateActiveFilter] = useState(null);

  const activeFilterChanged = (item) => {
    updateProducts(defaultProducts);
    updateActiveFilter(item);
    updateReached(false);
  };

  const getProducts = useCallback(async () => {
    if (products.page < products.totalPages) {
      updateLoading(true);

      const url = "https://api.furrl.in/api/v2/listing/getListingProducts";

      const reqBody = {
        input: {
          page: products.page + 1,
          pageSize: 10,
          filters:
            activeFilter === null
              ? []
              : { id: activeFilter.uniqueId, type: activeFilter.contentType },
          id: "#HomeHunts",
          entity: "vibe",
        },
      };

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      };

      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        updateProducts((prevProducts) => ({
          ...data["data"]["getListingProducts"],
          products: [
            ...prevProducts.products,
            ...data["data"]["getListingProducts"].products,
          ],
        }));
        updateReached(false);
      }

      updateLoading(false);
    }
  }, [products.page, products.totalPages, activeFilter]);

  const getFilters = async () => {
    const url = "https://api.furrl.in/api/v2/listing/getListingFilters";

    const reqBody = {
      id: "#HomeHunts",
      entity: "vibe",
    };

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      updateFilters(data["data"]["getListingFilters"]["easyFilters"]);
    }
  };

  const renderProducts = () => {
    return products.products.map((each, index) => (
      <ProductList key={each.id} item={each} index={index} />
    ));
  };

  useEffect(() => {
    if (reachedEnd) {
      getProducts();
    }
  }, [reachedEnd, getProducts]);

  useEffect(() => {
    getProducts();
  }, [activeFilter, getProducts]);

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        !reachedEnd && updateReached(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reachedEnd]);

  return (
    <>
      <Navbar />
      <div className="home-bg-banner">
        
      </div>
      <div className="products-container">
        <p className="shop-products-title">
          Shop Products <span className="product-dot"></span>
          <span className="products-count">
            {products.totalProducts} Products
          </span>
        </p>

        <ul className="tabs-container">
          <li
            onClick={() => {
              activeFilterChanged(null);
            }}
            className={`tab-item ${activeFilter === null && "tab-item-active"}`}
          >
            All
          </li>
          {filters.map((each) => (
            <CategoryFilters
              key={each.uniqueId}
              item={each}
              activeFilter={activeFilter}
              activeFilterChanged={activeFilterChanged}
            />
          ))}
        </ul>
      </div>

      <ul className="products-ul-container">{renderProducts()}</ul>
      {loading && <Loader />}
    </>
  );
};

export default Home;