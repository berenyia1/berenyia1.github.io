async function fetchWeather() {
    
    const url = "https://weather-proxy.berenyia1.workers.dev/MTR/86/95";
    const output = document.getElementById('homework8-002-output');
    output.innerHTML = '<div class="info">Fetching weather data...</div>';

    try {
        
        const proxyUrl = url;
        const response = await fetch(proxyUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //const data = await response.text(); // Clean trailing commas


        displayWeather(data);

    } catch (e) {
        output.innerHTML = `<div class="error">Error fetching weather data from National Weather Service API Web Service Web API 
        : ${e.message}<br><br>
        <a href="https://weather-proxy.berenyia1.workers.dev/MTR/86/95">Click here to view data from Proxy Server</a><br><br>
        <a href="https://api.weather.gov/gridpoints/MTR/86,95/forecast">Weather Service Raw Data</a><br><br>
        <a href="https://www.weather.gov/documentation/services-web-api">National Weather Service API</a>
        </div>`;
    }
}


function displayWeather(data) {
    const output = document.getElementById('homework8-002-output');

    // Extract location and update time info
    let locationInfo = '';
    if (data.properties) {
        const props = data.properties;
        const coords = data.geometry?.coordinates?.[0]?.[0];
        const latLon = coords ? `${coords[1].toFixed(4)} &deg;N, ${Math.abs(coords[0]).toFixed(4)} &deg;W` : '';

        locationInfo = `
                    <div class="info">
                        <h2>Forecast Information</h2>
                        ${latLon ? `<p><strong>Location:</strong> ${latLon}</p>` : ''}
                        <p><strong>Updated:</strong> ${new Date(props.updateTime).toLocaleString()}</p>
                        ${props.elevation ? `<p><strong>Elevation:</strong> ${Math.round(props.elevation.value)} meters (${Math.round(props.elevation.value * 3.28084)} feet)</p>` : ''}
                    </div>
                `;
    }

    // Parse periods (forecast data)
    const periods = data.properties?.periods || [];

    if (periods.length === 0) {
        output.innerHTML = '<div class="error">No forecast periods found in the data.</div>';
        return;
    }

    let tableHTML = `
                ${locationInfo}
                <table>
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Temperature</th>
                            <th>Precip</th>
                            <th>Wind</th>
                            <th>Forecast</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

    periods.forEach(period => {
        const precip = period.probabilityOfPrecipitation?.value || 0;
        tableHTML += `
                    <tr>
                        <td><strong>${period.name}</strong><br><small>${new Date(period.startTime).toLocaleDateString()}</small></td>
                        <td><strong>${period.temperature} &deg;${period.temperatureUnit}</strong></td>
                        <td>${precip}%</td>
                        <td>${period.windSpeed}<br><small>${period.windDirection}</small></td>
                        <td><strong>${period.shortForecast}</strong><br><small style="color: #666;">${period.detailedForecast}</small></td>
                    </tr>
                `;
    });

    tableHTML += `
                    </tbody>
                </table>
            `;

    output.innerHTML = tableHTML;
}



