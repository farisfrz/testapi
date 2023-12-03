const api_url = "https://api.thingspeak.com/channels/2363220/feeds.json?api_key=6ETVU6KUL69GKIOV&results=2"


setInterval(() => {
    fetch(api_url)
      .then((hasil) => hasil.json())
      .then((res) => {
        var field = JSON.stringify(res.feeds[0]);
        var obj = JSON.parse(field);
        document.getElementById("Suhu").innerHTML = obj.field1;
        document.getElementById("Jarak").innerHTML = obj.field2;
      });
  }, 1000);