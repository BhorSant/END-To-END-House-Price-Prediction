// Assuming you have housing data in a JavaScript array of objects named 'housingData'
const housingData = [
    { longitude: -122.23, latitude: 37.88, housing_median_age: 41, total_rooms: 880, total_bedrooms: 129, population: 322, households: 126, median_income: 8.3252, median_house_value: 452600, rooms_per_household: 6.9841, bedrooms_per_room: 0.1466, population_per_household: 2.5556 },
    // Add more housing data objects here
];

// Function to populate the table with housing data
function populateTable() {
    const tableBody = document.getElementById('housing-data');
    housingData.forEach(house => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${house.longitude}</td>
            <td>${house.latitude}</td>
            <td>${house.housing_median_age}</td>
            <td>${house.total_rooms}</td>
            <td>${house.total_bedrooms}</td>
            <td>${house.population}</td>
            <td>${house.households}</td>
            <td>${house.median_income}</td>
            <td>${house.median_house_value}</td>
            <td>${house.rooms_per_household}</td>
            <td>${house.bedrooms_per_room}</td>
            <td>${house.population_per_household}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the populateTable function when the page loads
window.onload = populateTable;
