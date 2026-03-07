const add_product = () => {
      const product_name = document.getElementById("product-name");
      const product_name_value = product_name.value;

      const product_quantity = document.getElementById("product-quantity");
      const product_quantity_value = product_quantity.value;

      product_name.value = "";
      product_quantity.value = "";

      display_product(product_name_value, product_quantity_value);

      save_product_to_local_storage(product_name_value, product_quantity_value);
};

const display_product = (product, quantity) => {
      const ul = document.getElementById("product-container");
      const li = document.createElement("li");
      li.innerText = `${product} : ${quantity}`;

      ul.appendChild(li);
};

const get_stored_shopping_cart = () => {
      let cart = {};

      const stored_cart = localStorage.getItem("cart");

      if (stored_cart) {
            cart = JSON.parse(stored_cart);
      }
      return cart;
};

const save_product_to_local_storage = (product, quantity) => {
      const cart = get_stored_shopping_cart();

      cart[product] = quantity;

      const cart_stringify = JSON.stringify(cart);
      localStorage.setItem("cart", cart_stringify);
};

const display_products_from_local_storage = () => {
      const saved_cart = get_stored_shopping_cart();

      for (const product in saved_cart) {
            const quantity = saved_cart[product];

            display_product(product, quantity);
      }
};
display_products_from_local_storage();
