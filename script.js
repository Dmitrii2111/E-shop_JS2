const goods = [
  { title: "Shirt", price: 150, src: "img/t-shirt.png" },
  { title: "Socks", price: 50, src: "img/socks.png" },
  { title: "Jacket", price: 350, src: "img/jacket.png" },
  { title: "Hats", price: 250, src: "img/top-hat.png" },
  { title: "Costumes", price: 350, src: "img/Costume.png" },
  { title: "Fur coats", price: 550, src: "img/fur-coat.png" },
  { title: "Underwear", price: 150, src: "img/underwear.png" },
];

const renderGoodsItem = (title, price, src) => {
  return `<div class="goods_item"><h3>${title}</h3><p>${price}</p><img src=${src} alt="image"><button class="goods_btn add_btn">Добавить</button><button class="goods_btn del_btn">Удалить</button></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) =>
    renderGoodsItem(item.title, item.price, item.src)
  );
  document.querySelector(".goods_list").innerHTML = goodsList.join(" ");
};

renderGoodsList(goods);

// document.querySelector(".goods_item").onclick = () => {
//   document.querySelector(".goods_item").classList.add("active");
// };
