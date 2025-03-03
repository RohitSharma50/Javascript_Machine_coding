document.addEventListener("DOMContentLoaded", function () {
  let list = [];
  let page = 1;
  async function fetchProduct() {
    try {
      const result = await fetch("https://dummyjson.com/products?limit=100");
      const data = await result.json();

      if (data && data.products) {
        list = data.products;
        render(page);
      }
    } catch (error) {
      console.log(error, "Fetching Error occured");
    }
  }
  function render(page) {
    const mainDiv = document.getElementById("container");
    mainDiv.innerHTML = "";
    list.slice(page * 10 - 10, page * 10).forEach((prod) => {
      const element = document.createElement("div");
      element.id = "data";
      element.innerHTML = `<img src="${prod.images[0]}" alt="${prod.title}" style="height: 400px; width:auto" />`;
      mainDiv.appendChild(element);
    });
    createButton(page);
  }

  function createButton(page) {
    const buttonContainer = document.createElement("div");
    const mainDiv = document.getElementById("container");

    const backButton = document.createElement("button");
    backButton.innerHTML = "🔙";
    backButton.addEventListener("click", function () {
      render(page - 1);
    });
    if (page > 1) {
      buttonContainer.appendChild(backButton);
      mainDiv.appendChild(buttonContainer);
    }
    for (let i = 1; i < 10; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.id = "btn";
      btn.addEventListener("click", function () {
        render(i);
      });
      buttonContainer.appendChild(btn);
      mainDiv.appendChild(buttonContainer);
    }
    if (page < 10) {
      const nextButton = document.createElement("button");
      nextButton.innerHTML = "⏭";
      nextButton.addEventListener("click", function () {
        render(page + 1);
      });
      buttonContainer.appendChild(nextButton);
      mainDiv.appendChild(buttonContainer);
    }
  }

  fetchProduct();
});
