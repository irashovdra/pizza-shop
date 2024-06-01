const pizzas = [
  {
    pizzaName: "Margherita",
    pizzaPrice: 200,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg",
    pizzaDescription:
      "Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.",
  },
  {
    pizzaName: "Four Cheese",
    pizzaPrice: 260,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://www.insidetherustickitchen.com/wp-content/uploads/2020/07/Quattro-formaggi-pizza-square-Inside-the-rustic-kitchen.jpg",
    pizzaDescription:
      "Four cheese pizza is a variety of pizza in Italian cuisine that is topped with a combination of four kinds of cheese, usually melted together, with or without tomato sauce.",
  },
  {
    pizzaName: "Pepperoni",
    pizzaPrice: 260,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cJKsudQz9dx02Pmy0qEiNXkeMymlqww264NaXQLQIA&s",
    pizzaDescription:
      "Pepperoni pizza is one of the most popular pizzas in the world. It's a classic combination of tomato sauce, cheese, and pepperoni that has been around for decades.",
  },
  {
    pizzaName: "Capricciosa",
    pizzaPrice: 280,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/pizza-capricciosa-523578.jpg",
    pizzaDescription:
      "Pizza capricciosa is a style of pizza in Italian cuisine prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.",
  },
  {
    pizzaName: "Quattro Stagioni",
    pizzaPrice: 300,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://www.insidetherustickitchen.com/wp-content/uploads/2021/02/Quattro-stagioni-pizza-1200px.jpg",
    pizzaDescription:
      "Pizza quattro stagioni is typically prepared using a tomato sauce and cheese. It is most often made by adding artichokes, tomatoes or basil, mushrooms, and ham, prosciutto or olives to four separate sections of the pizza.",
  },
  {
    pizzaName: "Chicago Pizza",
    pizzaPrice: 300,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://www.simplyrecipes.com/thmb/0pVK4YpDJNoXPEAchI_OSDE0UZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg",
    pizzaDescription:
      "Chicago-style pizza usually refers to deep-dish pizza, which is a thick pizza baked in a pan and layered with cheese, fillings like meat and vegetables, and sauce–in that order. The crust is usually two to three inches tall and gets slightly fried due to the oil in the pan.",
  },
  {
    pizzaName: "Greek Pizza",
    pizzaPrice: 280,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3dY6c52au3dKBjxCaAW9YxQizTd6Us9RdBsjVdeOQQ&s",
    pizzaDescription:
      "Ladenia better known as Greek Pizza in the U.S., is a delicious combination of ripe tomatoes, sliced onions, olives, and feta cheese on a fluffy freshly baked focaccia-style crust. Many cultures have their version of “pizza,” from Turkish Pide to Manaqish to Lahmacun.",
  },
  {
    pizzaName: "Hawaiian Pizza",
    pizzaPrice: 280,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://images.pizza33.ua/products/product/pe6RV4SEkqlbqqUb0R1r2mFrfGCFFkNT.jpg",
    pizzaDescription:
      "Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple. This crowd-pleasing pizza recipe starts with my homemade pizza crust and is finished with a sprinkle of crispy bacon.",
  },
  {
    pizzaName: "Caprese",
    pizzaPrice: 300,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://www.gozney.com/cdn/shop/articles/Caprese_Pizza_Feng_Chen_leopardcrust_-_Large_b45ed4e9-09f8-4bad-a6e9-f2391392a2a0.jpg?v=1653033792",
    pizzaDescription:
      "Caprese Pizza-pizza topped with fresh mozzarella, tomatoes, basil and a balsamic glaze. You can't go wrong with a classic Caprese Pizza!",
  },
  {
    pizzaName: "Sicilian Pizza",
    pizzaPrice: 280,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://thebigmansworld.com/wp-content/uploads/2023/08/sicilian-pizza-recipe.jpg",
    pizzaDescription:
      "Traditional Sicilian pizza is often thick-crusted and rectangular, but can also be round and similar to the Neapolitan pizza. It is often topped with onions, anchovies, tomatoes, herbs and strong cheese such as caciocavallo and toma.",
  },
];

const body = document.querySelector("body");

function createPizzaCard(pizza) {
  const pizzaCard = `<div class="pizzaCard">
    <h2 class="pizza__name">${pizza.pizzaName}</h2>
    <div class="pizza__image-cover">
      <img class="pizza__image" src="${pizza.pizzaImage}">
      </div>
      <p class="pizza__price">${pizza.pizzaPrice}</p>
  </div>`;
  return pizzaCard;
}

const pizzaList = pizzas
  .map((pizza) => {
    return createPizzaCard(pizza);
  })
  .join("");
console.log(pizzaList);

const pizzaElements = document.querySelector(".pizza");

pizzaElements.insertAdjacentHTML("afterbegin", pizzaList);

function createModal(pizza) {
  const orderModal = `
    <div class="order-modal">
      <button class="order-modal__close">Close</button>
      <p class="pizza-description">${pizza.pizzaDescription}</p>
      <input placeholder="Enter pizza size" class="pizza-size" type="text" />
      <input
        placeholder="Enter pizza quantity"
        class="pizza-quantity"
        type="text"
      />
      <button type="button" class="order__btn">Order</button>
    </div>
    `;
  return orderModal;
}

function openOrderModal() {
  const createmodal = createModal({
    pizzaName: "Capricciosa",
    pizzaPrice: 280,
    pizzaSize: "",
    pizzaQuantity: 1,
    pizzaImage:
      "https://images.eatsmarter.com/sites/default/files/styles/max_size/public/pizza-capricciosa-523578.jpg",
    pizzaDescription:
      "Pizza capricciosa is a style of pizza in Italian cuisine prepared with mozzarella cheese, Italian baked ham, mushroom, artichoke and tomato.",
  });
  body.classList.remove("is-hidden");
  console.log(createmodal);
  console.log("hello");
  body.insertAdjacentHTML("afterbegin", createmodal);
}

function closeOrderModal() {
  const orderButton = document.querySelector(".order__btn");
  if (orderButton === null) {
    return;
  }
  orderButton.addEventListener("click", () => {
    body.classList.add("is-hidden");
  });
}

pizzaElements.addEventListener("click", (event) => {
  openOrderModal();
  const closeModalBtn = document.querySelector(".order-modal__close");
  closeModalBtn.addEventListener("click", () => {
    body.classList.add("is-hidden");
  });
  closeOrderModal();
});
