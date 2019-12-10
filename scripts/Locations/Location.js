const LocationComponent = (location) => {
    return `
            <div class="location">
                <p>${location.place}</p>
                <p>${location.lat_long}</p>
                <p>${location.tempature}</p>
            </div>
            `
}

export default LocationComponent