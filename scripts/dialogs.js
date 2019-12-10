const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
            )
        }

    const allDialogButtons = document.querySelectorAll("button[id^='fish--']")

    for (const btn of allDialogButtons) {
        btn.addEventListener(
            "click",
            evt => {
                const dialogSiblingSelector = `#${evt.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }

}
        
export default initializeDetailButtonEvents