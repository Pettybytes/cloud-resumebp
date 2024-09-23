async function getVisitorCount() {
    const apiUrl = 'https://2orjyj4ck2.execute-api.us-east-1.amazonaws.com/prod';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('visitorCount').innerText = data.visitor_count;
    } catch (error) {
        console.log('Error fetching visitor count:', error);
    }
}

window.onload = getVisitorCount;
