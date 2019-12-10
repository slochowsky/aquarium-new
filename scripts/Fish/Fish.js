
const FishComponent = (fish) => {
    let fishName = fish.name.split(" ").join("-")
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="fish--${fishName}">Details</button>

            <dialog class="dialog--fish" id="details--${fishName}">
                <div>Species: ${fish.Species}</div>
                <div>Location: ${fish.Location}</div>
                <div>Length: ${fish.Length}</div>
                <div>Food: ${fish.Food}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default FishComponent