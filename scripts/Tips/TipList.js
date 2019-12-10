import { useTip } from "./TipDataProvider.js"
/**
 *  TipListComponent which renders individual fish objects as HTML
 */

// Import `useTip` from the data provider module
import TipComponent from "./Tip.js"


const TipListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tiplist")
    const tips = useTip()

    // let allTipHTML = ""

    // for (const tip of tips) {
    //     const tipHTML = TipComponent(tip)
    //     allTipHTML += tipHTML
    // }

    contentElement.innerHTML += `
        <section class="tiplist">
            ${
                tips.map(
                    (tip) => {
                        return TipComponent(tip)
                    }
                ).join("")
            }
        </section>
    `
}

export default TipListComponent