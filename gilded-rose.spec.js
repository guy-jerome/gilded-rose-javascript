import { expect, describe, it } from "vitest";
import { Item, ConjuredItem, items, updateQuality } from "./gilded-rose.js";


//Generic Test
function testUpdateQuality(ClassName, initialSellIn, initialQuality, expectedSellIn, expectedQuality, name = "Item Name"){
  const testItem = new ClassName(name, initialSellIn, initialQuality)
  items.push(testItem)

  updateQuality()

  expect(textItem.sellIn).toBe(expectedSellIn)
  expect(textItem.quality).toBe(expectedQuality)
}


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


// Basic Items Test Cases
// -- Basic items reduce sellIn and Quality by 1
// -- Basic items reduce Quality by 2 after sellIn date has been reached
// -- Basic items Quality cannot go below 0

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    testUpdateQuality(BasicItem,5,3,4,2);
  });
});

describe("updateQuality", () => {
  it("reduces quality by two after the sellIn is below 0", () => {
    testUpdateQuality(BasicItem,-2,8,-3,6);
  });
});

describe("updateQuality", () => {
  it("quality is not reduced below zeo", () => {
    testUpdateQuality(BasicItem,5,0,4,0);
  });
});


// Conjured Items Test Cases
// -- Conjured items degrade quality by 2 before SellIn date reached
// -- Conjured items degrade quality by 4 after SellIn date reached
// -- Conjured items don't degrade beyond 0 

describe('updateQuality', () => {
  it('reduces quality by 2 and sellIn of conjured items by 1', () => {
    testUpdateQuality(ConjuredItem, 4,4,3,2);
  })
})

describe('updateQuality', () => {
  it('reduces quality by 2 and sellIn of conjured items by 1', () => {
    testUpdateQuality(ConjuredItem,-1,4,-2,0);
  })
})

describe('updateQuality', () => {
  it('reduces quality by 0 and sellIn of conjured items by 1')
  testUpdateQuality(ConjuredItem,-4,0,-5,0)
})

// Cheese Item Test Cases
// -- Cheese items do not increase quality beyond 50
// -- Cheese items increase in quality as sellIn decreases

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
// -- Legendary Items have no sellIn date, and are immune to quality change

describe('updateQuality', () => {
  it('Checks to ensure Legendary Items are immune to degredation and quality change' , () => {
    testUpdateQuality(LegendaryItem, 0,80,0,80)  
  })
})

//Back Stage Pass
// - `quality` increases instead of decreases as sellin day increases
// - `quality` increases by `2` when there are `10` days or less left before the concert.
// - `quality` increases by `3` when there are `5` days or less left before the concert.
// - `quality` drops to `0` after the concert.

describe('updateQuality', () => {
  it('Checks to ensure that back stage passes increase in value as sell in decreases' , () => {
    testUpdateQuality(Pass, 15,10,14,11)  
  })
})

describe('updateQuality', () => {
  it('Checks to ensure that back stage passes increase by 2 in value when there are `10` days or less left before the concert sell in decreases' , () => {
    testUpdateQuality(Pass, 10,10,9,12)  
  })
})

describe('updateQuality', () => {
  it('Checks to ensure that back stage passes increase by 3 in value when there are `5` days or less left before the concert sell in decreases' , () => {
    testUpdateQuality(Pass, 5,10,4,13)  
  })
})

describe('updateQuality', () => {
  it('Checks to ensure that back stage passes increase by 3 in value when there are `5` days or less left before the concert sell in decreases' , () => {
    testUpdateQuality(Pass, 0,200,-1,0)  
  })
})