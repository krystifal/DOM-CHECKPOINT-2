document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const totalPriceElement = document.getElementById("total-price");

  items.forEach((item) => {
    const quantityElement = item.querySelector(".quantity");
    const likeButton = item.querySelector(".like-btn");
    const deleteButton = item.querySelector(".delete-btn");
    const price = parseFloat(
      item.querySelector("p").innerText.replace("$", "")
    );

    let quantity = parseInt(quantityElement.innerText);

    // Event listener for the plus button
    item.querySelector(".plus").addEventListener("click", function () {
      quantity++;
      updateQuantity();
    });

    // Event listener for the minus button
    item.querySelector(".minus").addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        updateQuantity();
      }
    });

    // Event listener for the like button
    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("active");
    });

    // Event listener for the delete button
    deleteButton.addEventListener("click", function () {
      item.remove();
      updateTotal();
    });

    function updateQuantity() {
      quantityElement.innerText = quantity;
      updateTotal();
    }
  });

  function updateTotal() {
    let total = 0;
    items.forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").innerText);
      const price = parseFloat(
        item.querySelector("p").innerText.replace("$", "")
      );
      total += quantity * price;
    });

    totalPriceElement.innerText = total.toFixed(2);
  }
});
