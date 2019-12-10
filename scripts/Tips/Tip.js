/**
 *  TipComponent which renders individual fish objects as HTML
 */
const TipComponent = (tips) => {
    return `
        <div class="tip">
            <h4 class="title">${tips.tipTitle}</h4>
            <!-- description -->
            <p>${tips.tipText}</p>
        </div>
    `
}

export default TipComponent