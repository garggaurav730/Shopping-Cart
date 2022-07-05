// Side Menu for larger screen
fetch("categories.json")
  .then((res) => res.json())
  .then((categories) => {
    categories.sort((a, b) => a.order - b.order);
    const categories_list = categories
      .map((category) => `<li><a href="#">${category.name}</a></li>`)
      .join("");
    document.querySelector(".prod-menu-items").innerHTML = categories_list;
  })
  .catch((err) => {
    console.log(err.message);
  });

// Side Menu for smaller screen
fetch("categories.json")
  .then((res) => res.json())
  .then((categories) => {
    categories.sort((a, b) => a.order - b.order);
    const categories_list = categories
      .map(
        (category) =>
          `<option value="${category.name}">${category.name}</option>`
      )
      .join("");
    document.querySelector("#categories").innerHTML = categories_list;
  })
  .catch((err) => {
    console.log(err.message);
  });
