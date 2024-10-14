// Sample order data
const orders = [
    {
      id: 101,
      customer: "John Doe",
      items: ["Laptop", "Mouse"],
      total: "$1050.00",
      status: "Pending"
    },
    {
      id: 102,
      customer: "Jane Smith",
      items: ["Smartphone"],
      total: "$499.99",
      status: "Shipped"
    },
    {
      id: 103,
      customer: "Alice Johnson",
      items: ["Tablet", "Cover", "Stylus"],
      total: "$299.99",
      status: "Delivered"
    }
  ];
  
  // Function to display orders in the table
  function displayOrders() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = "";
  
    orders.forEach((order) => {
      const orderRow = document.createElement("tr");
  
      orderRow.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.items.join(", ")}</td>
        <td>${order.total}</td>
        <td><span class="status">${order.status}</span></td>
        <td>
          <button class="update-btn" onclick="updateOrderStatus(${order.id})">Update</button>
          <button class="delete-btn" onclick="deleteOrder(${order.id})">Delete</button>
        </td>
      `;
  
      orderList.appendChild(orderRow);
    });
  }
  
  // Function to update order status
  function updateOrderStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
      const newStatus = prompt("Enter new status:", order.status);
      if (newStatus) {
        order.status = newStatus;
        displayOrders();
      }
    }
  }
  
  // Function to delete an order
  function deleteOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex > -1) {
      orders.splice(orderIndex, 1);
      displayOrders();
    }
  }
  
  // Initialize the order table
  displayOrders();
  