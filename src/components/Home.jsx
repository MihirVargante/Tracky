import React from "react";

const Home = () => {
  // Static product data
  const products = [
    {
      _id: "675d6f2effcd366992201f12",
      title: "O2 Oxystep Men Sports Shoes - Breathable & Lightweight Men's Sports Sn…",
      price: 1699,
      stock: "In stock",
      image_url: "https://m.media-amazon.com/images/I/71iv7CJDZ5L._SY500_.jpg",
      link: "https://www.amazon.in/O2TOES-Oxystep-C-Green-Footwear-Numeric/dp/B0DFCVMMTM/ref=sr_1_24_sspa?crid=13UHGLVMH5PZ3&dib=eyJ2IjoiMSJ9.QNUfNfEI7ZIuA43kw0-viS1LxU1Gx48Bx9DPBqMWy_H2THdyAFXUUu2B2pE0sjFiDFwD-gSIU0Se5mqQAXSRw06xNTVoJ0uu04KLGh57wt5Rt3HXSErMGEP8UB86sMXgysOtPLC-s_3UtjitYLLW3NwBT8ZQ2wZJZ-fTAL0ncruWDnmBxbZqRuTnuZUXacpuD7tB9vq7McacWk6LkNm3_Fr7gOZG0D58-e3IFODqFOpdjEP4GKyjokFFMGy9EJ4nc14XruT_cOITCHWBfy5zfmALCqRP8fKubb6S1DNxOXE.AhModb9UEdbeguKruVC3kGT7Eq52vYFYUUJvUbRMJdg&dib_tag=se&keywords=nike+shoes&nsdOptOutParam=true&qid=1734176494&s=shoes&sprefix=nike+shoe%2Cshoes%2C197&sr=1-24-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      threshold_price: 1500,
      current_price: 1699,
      user_id: "6754545837c05f82c2b26c62",
      createdAt: "2024-12-14T11:42:38.818+00:00",
      updatedAt: "2024-12-17T19:06:12.916+00:00",
      __v: 0,
    },
    {
      _id: "675d6ecebbe3ced2e0a6fc67",
      title: "Nike Mens Court Vision Mid Nn Running Shoe",
      price: 4556,
      stock: "In stock",
      description:
        "Designed for comfortable wear for sports and street style, NIKE is alw…",
      image_url: "https://m.media-amazon.com/images/I/51J5bOSVI3L._SY500_.jpg",
      link: "https://www.amazon.in/Nike-Vision-Black-White-Sneaker-DN3577-101/dp/B09NMH8JY4/?_encoding=UTF8&pd_rd_w=UIUYS&content-id=amzn1.sym.87086214-159f-48ce-bbbc-e0bf66cd937f%3Aamzn1.symc.9b8fba90-e74e-4690-b98f-edc36fe735a6&pf_rd_p=87086214-159f-48ce-bbbc-e0bf66cd937f&pf_rd_r=KE4J7XH7PCN11CWM3FR9&pd_rd_wg=bMJTc&pd_rd_r=7342b8e5-177d-48c1-a06b-9cf3504d8130&ref_=pd_hp_d_btf_ci_mcx_mr_ca_id_hp_d",
      threshold_price: 4000,
      current_price: 4796,
      user_id: "6754545837c05f82c2b26c62",
      createdAt: "2024-12-14T11:41:02.634+00:00",
      updatedAt: "2024-12-27T18:43:06.030+00:00",
      __v: 0,
    },
  ];

  return (
    <div className="p-4">
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex border rounded-lg shadow-md bg-white p-4"
            >
              {/* Product Image */}
              <div className="w-1/3">
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              {/* Product Info */}
              <div className="w-2/3 pl-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                <p
                  className={`${
                    product.stock === "In stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {product.stock}
                </p>
                <p className="text-gray-500 text-sm">
                  Threshold Price: ₹{product.threshold_price}
                </p>
                <div className="mt-2">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
