// Example product data
const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$999.99",
      description: "High-performance laptop for all your needs.",
      image: "https://img.freepik.com/premium-photo/modern-website-mockup-laptop_640251-130158.jpg?w=740"
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$499.99",
      description: "Smartphone with amazing features.",
      image: "https://img.freepik.com/premium-photo/highresolution-mobile-mockup-perfect-clean-app-displays_483861-155129.jpg?w=740"
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199.99",
      description: "Noise-cancelling over-ear headphones.",
      image: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg?t=st=1728919680~exp=1728923280~hmac=62a2229890fad891b09d4119bc665e19b984f6ea44de6b25a4bed9c79dd7fb34&w=740"
    },
    {
      id: 4,
      name: "Smartwatch",
      price: "$149.99",
      description: "Track your fitness and stay connected.",
      image: "https://img.freepik.com/premium-photo/sleek-smartwatch-gym-setting_1168612-572754.jpg?w=740"
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
          <button>Add to Cart</button>
        </div>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Call the function to display products
  displayProducts();
  