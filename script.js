const goods = [
  { title: "Shirt", price: 150, src: "img/t-shirt.png" },
  { title: "Socks", price: 50, src: "img/socks.png" },
  { title: "Jacket", price: 350, src: "img/jacket.png" },
  { title: "Hats", price: 250, src: "img/top-hat.png" },
  { title: "Costumes", price: 350, src: "img/Costume.png" },
  { title: "Fur coats", price: 550, src: "img/fur-coat.png" },
  { title: "Underwear", price: 150, src: "img/underwear.png" },
];

const renderGoodsItem = (title = "name", price = "price") => {
  return `<div class="goods_item"><h3>${title}</h3><p class='wear_price'>${price}</p><button class="goods_btn add_btn">Добавить</button><button class="goods_btn del_btn">Удалить</button></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) =>
    renderGoodsItem(item.title, item.price)
  );
  document.querySelector(".goods_list").innerHTML = goodsList.join(" "); // join решил проблему с запятой
};

renderGoodsList(goods);

let goodsItem = document.querySelectorAll(".wear_price"); // Добавлене контейнера с изображением
goodsItem.forEach((element) => {
  element.insertAdjacentHTML(
    "beforebegin",
    '<div class="image_container"></div>'
  );
});

let imageContainer = document.querySelectorAll(".image_container"); // Добавлене  изображения в контейнер
for (let i = 0; i < goods.length; i++) {
  imageContainer[i].style.backgroundImage = `url(${goods[i].src})`;
}

