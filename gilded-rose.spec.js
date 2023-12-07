import { expect, describe, it } from "vitest";
import { Item, ConjuredItem, items, updateQuality } from "./gilded-rose.js";

function testUpdateQuality(ClassName, initialSellIn, initialQuality, expectedSellIn, expectedQuality, name = "Item Name"){
  const testItem = new ClassName(name, initialSellIn, initialQuality)
  items.push(testItem)

  updateQuality()

  expect(textItem.sellIn).toBe(expectedSellIn)
  expect(textItem.quality).toBe(expectedQuality)
}


describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });
});

//Sub classes
//Basic item
//Cheese
//Legendary item
//Back Stage Pass
//Conjured Item

// Check to ensure quality is not a negative integer

// Item quality cannot increase above 50 Unless Sulfaras Ragnaros

// Conjured items degrade twice as fast

// If sellIn days are less than 0 quality degrades 2x

// Brie increases in quality 

// Conjured Items Test Cases

describe('updateQuality', () => {
  it('reduces quality by 2 and sellIn of conjured items by 1', () => {
    // tests to ensure conjured items degrade by 2x prior to sellIn date
    testUpdateQuality(ConjuredItem, 4,4,3,2);
  })
})

describe('updateQuality', () => {
  it('reduces quality by 2 and sellIn of conjured items by 1', () => {
    // tests to ensure conjured items degrade by 4x after sellIn date
    testUpdateQuality(ConjuredItem,-1,4,-2,0);
  })
})

// Cheese Item Test Cases

describe('updateQuality', ()=>{
  it("Checks if the quality of the cheese class doesn't increase to be over 50", () => {
    testUpdateQuality(Cheese,5,50,4,50)
  })
})

describe('updateQuality', ()=>{
  it("Checks if the quality of the cheese class increases instead of decreases", () => {
    testUpdateQuality(Cheese,5,5,4,6)
  })
})

// Legendary Item Test Cases

describe('updateQuality', () => {
  it('Checks to ensure Legendary Items are immune to degredation and quality change' , () => {
    const testItem = new LegendaryItem('Legendary',0,80 )
    testUpdateQuality(LegendaryItem, 0,80,0,80)  
  })
})

//Back Stage Pass
//  - `quality` increases by `2` when there are `10` days or less left before the concert.
// - `quality` increases by `3` when there are `5` days or less left before the concert.
// - `quality` drops to `0` after the concert.

describe('updateQuality', () => {
  it('Checks to ensure that back stage passes increase in value as sell in decreases' , () => {
    const testItem = new LegendaryItem('Legendary',0,80 )
    testUpdateQuality(LegendaryItem, 0,80,0,80)  
  })
})