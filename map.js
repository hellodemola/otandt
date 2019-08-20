      var mymap = L.map('mapid').setView([6.4352253, 3.417204], 14);

            var circle = L.circle([6.4352253, 3.417204], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 10
            }).addTo(mymap);

            var marker = L.marker([6.4352253, 3.417204]).addTo(mymap);
            
            marker.bindPopup("<b>OT&T Consulting</b><br>24 Kofo Abayomi Street").openPopup();
            
        
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaGVsbG9hZGVtb2xhIiwiYSI6ImNqejF2Zjk4bjBwN2szZGxvbjR0czhxdXAifQ.rfN2f6w9Ig_W-i2rQvMcWA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaGVsbG9hZGVtb2xhIiwiYSI6ImNqejF2Zjk4bjBwN2szZGxvbjR0czhxdXAifQ.rfN2f6w9Ig_W-i2rQvMcWA'

}).addTo(mymap);