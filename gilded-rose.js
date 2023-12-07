// Parent Class
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Basic Item Class
export class BasicItem extends Item {
  constructor(name,sellIn,quality) {
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn--

    if (this.quality > 0 && this.sellIn > 0){
      this.quality--
    }else if ( this.quality >=2 )  {
      this.quality -= 2
    }
  }
}

//Conjured Item Class
export class ConjuredItem extends Item {
  constructor(name,sellIn,quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.sellIn--

    if ( this.quality > 0  && this.sellIn > 0 ) {
    this.quality -= 2
    } else if ( this.quality > 0 && this.sellIn < 0 ) {
      this.quality -= 4
    }
  }
}

//Legendary Item Class
export class LegendaryItem extends Item {
  constructor(name,sellIn,quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.quality = this.quality
    this.sellIn = this.sellIn
  }
}

//Cheese Item Class
export class Cheese extends Item {
  constructor(name,sellIn,quality) {
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.sellIn --

    if (this.quality < 50){
      this.quality ++
    }
  }
}

//Back Stage Pass Class
export class Pass extends Item {
  constructor(name,sellIn,quality) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn--
    
    if ( this.sellIn > 10 ) {
      this.quality++
    } else if (  this.sellIn > 5 && this.sellIn <= 10) {
      this.quality += 2
    } else if ( this.sellIn <= 5 && this.sellIn >= 0 ) {
      this.quality += 3
    } else if ( this.sellIn < 0 ) {
      this.quality = 0
    }
  }
}


export let items = [];

items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Pass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items){
    item.updateQuality()
  }
};
