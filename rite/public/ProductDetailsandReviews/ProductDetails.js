// Example product data with reviews
const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$999.99",
      description: "High-performance laptop for all your needs.",
      image: "data:image/jpeg;base64,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",
      reviews: [
        { reviewer: "John Doe", text: "Great laptop, very fast and reliable!" },
        { reviewer: "Jane Smith", text: "Good value for the money." }
      ]
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$499.99",
      description: "Smartphone with amazing features.",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/019cf921-6f51-46bf-8f61-b43b08c2b6da.jpg;maxHeight=200;maxWidth=239;format=webp",
      reviews: [
        { reviewer: "Alice", text: "Love the camera quality!" },
        { reviewer: "Bob", text: "Battery life could be better." }
      ]
    }
  ];
  
  // Function to display products on the page
  function displayProducts() {
    const productList = document.getElementById("product-list");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price">${product.price}</div>
          <button onclick="showProductDetails(${product.id})">View Details</button>
        </div>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Function to show product details
  function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const productDetails = document.getElementById("product-details");
    const productList = document.getElementById("product-list");
    const detailsContent = document.getElementById("details-content");
  
    detailsContent.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <div class="price">${product.price}</div>
      <p>${product.description}</p>
      <div class="reviews">
        <h3>Customer Reviews:</h3>
        ${product.reviews.map(review => `
          <div class="review">
            <h4>${review.reviewer}</h4>
            <p>${review.text}</p>
          </div>
        `).join('')}
      </div>
    `;
  
    // Hide the product list and show the details
    productList.classList.add("hidden");
    productDetails.classList.remove("hidden");
  }
  
  // Function to go back to the product list
  document.getElementById("back-btn").addEventListener("click", () => {
    const productList = document.getElementById("product-list");
    const productDetails = document.getElementById("product-details");
  
    productList.classList.remove("hidden");
    productDetails.classList.add("hidden");
  });
  
  // Initialize the product catalog
  displayProducts();
  