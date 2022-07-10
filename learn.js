function getAndDisplayLearn() {
    http_request("GET", "http://124.222.104.23/cgi-bin/getlearn.py", "", "", function(data) {
        results = data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var updateTimeStr = results[i].updatedAt;//.replace(/T/i," ").replace(/(.\d\d\dZ)/i,"");
            //console.log(updateTimeStr);
            var timestamp = new Date(updateTimeStr).getTime();
            results[i].timestamp = timestamp;
        }
        for (var i = 0; i < results.length; i++){
            for (var j = i + 1; j < results.length; j++){
                if (results[i].timestamp < results[j].timestamp){
                    var tmp = results[j];
                    results[j] = results[i];
                    results[i] = tmp;
                }
            }
        }
        //console.log(results);
        var tbody = $("#learnItem");
        tbody.empty();
        var percentage = 0;
        for (var i = 0; i < results.length; i++)
        {
            var percent = 0;
            if (true/*results[i].isBook*/){
                percent = results[i].pageNow / results[i].pageAll * 100;
                if (percent >= 100)
                    percent = 100;
            }
            var tbodyData = "";
            tbodyData += "<tr>";
            tbodyData += "<td>" + (i + 1) + "</td>";
            tbodyData += "<td>" + results[i].name + "</td>";
            tbodyData += "<td>" + results[i].pageAll + "</td>";
            tbodyData += "<td>" + results[i].pageNow + "</td>";
            tbodyData += "<td>" + results[i].done + "</td>";
            tbodyData += "<td>" + results[i].todo + "</td>";
            tbodyData += "<td>" + percent.toFixed(2) + "%</td>";
            tbodyData += "</tr>";  
            tbody.append(tbodyData); 
            percentage = percentage + percent;
        }

        percentage = percentage / results.length;
        $( "#progressbar" ).progressbar({
            value: 0,
            change:function(){
                $(".progress-label").text($("#progressbar").progressbar("value").toFixed(3)+"%");
              },
          });

        $('#progressbar').progressbar("option","value", percentage);
    });
}