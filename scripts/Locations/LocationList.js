import { useLocation } from "./LocationDataProvider.js";
import LocationComponent from "./Location.js";


const LocationListComponent = () => {

    const contentElement = document.querySelector(".locations")
    const locations = useLocation()
    console.log(useLocation())

    let allLocationsHTML = ""

    for (const location of locations) {
        const locationHTML = LocationComponent(location)
        allLocationsHTML += locationHTML
}


contentElement.innerHTML += `
<article class="locations">
    ${allLocationsHTML}
</article>
`
}

export default LocationListComponent