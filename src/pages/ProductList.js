import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Products } from "../data/Product";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";

const PRODUCTS_PER_PAGE = 5;

function ProductList() {
  const [searchParam, setSearchParam] = useSearchParams();
  const keyword = searchParam.get("keyword") || "";
  const sort = searchParam.get("sort") || "none";
  const category = searchParam.get("category") || "all";
  const page = Math.max(1, Number(searchParam.get("page")) || 1);
  const updateParams = (updates) => {
    setSearchParam({ keyword, sort, category, page, ...updates });
  };
  const handleSearch = (event) =>
    updateParams({ keyword: event.target.value, page: 1 });
  const handleSort = (event) =>
    updateParams({ sort: event.target.value, page: 1 });
  const handleCategory = (event) =>
    updateParams({ category: event.target.value, page: 1 });

  const categories = [...new Set(Products.map((product) => product.category))];
  const filteredProducts = Products.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesKeyword && matchesCategory;
  }).sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return a.id - b.id;
  });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  return (
    <div>
      <Header></Header>
      <h2>Danh sach san pham</h2>
      <div>
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={handleCategory}
        />
        <label htmlFor="sort">Sort:</label>
        <select id="sort" value={sort} onChange={handleSort}>
          <option value="none">Mặc định</option>
          <option value="price-asc">Thấp đến cao</option>
          <option value="price-desc">Cao đến thấp</option>
        </select>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={keyword}
          onChange={handleSearch}
        />
      </div>
      <p>
        Đang xen {visibleProducts.length} trên {filteredProducts.length} |  
        Tổng: {filteredProducts.length} | Trang: {currentPage}/{totalPages}
      </p>
      <ul>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <li key={product.id}>
              {product.id} - {product.name} - 
              {product.price}đ -  {product.category} - <Link to={`/product/${product.id}`}>Chi tiết</Link>
            </li>
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
      {filteredProducts.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => updateParams({ page: currentPage - 1 })}
            disabled={currentPage === 1}
          >
            Trước
          </button>
          
          <button
            type="button"
            onClick={() => updateParams({ page: currentPage + 1 })}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
