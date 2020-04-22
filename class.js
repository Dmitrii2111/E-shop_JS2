class GoodsItem {
    constructor (title, price, src) {
        this.title = title;
        this.price = price;
        this.src = src;
    }
    render() {
        return `<div class="goods_item"><h3>${this.title}</h3><div class="image_container" style="background-image: url(${this.src})"></div><p class='wear_price'>${this.price}</p><button data-action="add" class="goods_btn add_btn">Добавить</button><button data-action="delete" class="goods_btn del_btn">Удалить</button></div>`;
    }
    getPrice() {
        return this.price;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: "Shirt", price: 150, src: "img/t-shirt.png" },
            { title: "Socks", price: 50, src: "img/socks.png" },
            { title: "Jacket", price: 350, src: "img/jacket.png" },
            { title: "Hats", price: 250, src: "img/top-hat.png" },
            { title: "Costumes", price: 350, src: "img/Costume.png" },
            { title: "Fur coats", price: 550, src: "img/fur-coat.png" },
            { title: "Underwear", price: 150, src: "img/underwear.png" },
          ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.src);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods_list').innerHTML = listHtml;
    }
    totalPrice() {
        let sumItem = 0;
        this.goods.forEach(good => {
            const priceItem = new GoodsItem('',good.price,''); // не знаю, на сколько правильно передавать в конструктор пустые значения. Возможно лучше было сделать отдельный
            sumItem += parseInt(priceItem.getPrice());
        });
        document.querySelector('.summa').innerHTML = sumItem;
    }
}

class CartActions {
    constructor(elem) {
        this.elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
    add() {
        console.log(this.elem);
    }
    delete() {
        console.log('delete');
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}
