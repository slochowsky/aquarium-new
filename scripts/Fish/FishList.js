import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"


const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishlist")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
        ${
            fishes.map(
                (currentFish) => {
                   return FishComponent(currentFish)
                }
            ).join("")
        }
        </section>
        `
}
export default FishListComponent