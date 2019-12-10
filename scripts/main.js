import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import { useFish } from './Fish/FishDataProvider.js'
import FishListComponent from './Fish/FishList.js'
import TipListComponent from './Tips/TipList.js'


FishListComponent()
initializeDetailButtonEvents()
addMouseOverEventListeners()
TipListComponent()

const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish object:",fish)
}
