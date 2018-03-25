var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhr.open("GET", "taiwan72.xml", true); //讀取資料，三個參數值要：格式,網址,同步非同步
xhr.send(); //傳送資料

//taiwan72_1.xml是暫時資料


function myFunction(xml) {
    var i = 0;
    var j = 0;
    var xmlDoc = xml.responseXML;
    //宣告ajax从数据库中读取信息


    var table = "<tr><th>各縣市</th><th>氣溫</th><th>風向</th><th>緯度</th><th>經度</th><th>備註</th></tr>";
    //Table 表頭

    var x = xmlDoc.getElementsByTagName("location");
    //getElementsByTagName()找到具有指定标签名的子孙元素。

    //    var y = xmlDoc.getElementsByTagName("elementValue");
    //            console.log("val = " + y.childNodes.length);
    //getElementsByTagName()找到具有指定标签名的子孙元素。
    //                        console.log("y=" + y.length);


    //            for (i = 0; i < x.length; i++) {
    //                //length 属性定义节点列表的长度（即节点的数量）      
    //                var weater = x[i].getElementsByTagName("weatherElement")[0];
    //                var weaterTime = weater.getElementsByTagName("time")[0];
    //                var weaterTemperature = weaterTime.getElementsByTagName("elementValue")[0];
    //                var weaterTempe = weaterTemperature.getElementsByTagName("value")[0];
    //
    //                table += "<tr><td>" +
    //                    x[i].getElementsByTagName("locationName")[0].childNodes[0].nodeValue +
    //                    "</td><td>" +
    //                    y[i].getElementsByTagName("value")[0].childNodes[0].nodeValue + "度" +
    //                    "</td><td>" +
    //                    x[i].getElementsByTagName("parameterValue")[1].childNodes[0].nodeValue +
    //                    "</td><td>" +
    //                    x[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue +
    //                    "</td><td>" +
    //                    x[i].getElementsByTagName("lon")[0].childNodes[0].nodeValue +
    //                    "</td></tr>";
    //            }

    for (i = 0, j = x.length; i < j; i++) {

        var city = x[i].getElementsByTagName("locationName")[0].childNodes[0].nodeValue;
        //取得所有的 elementValue
        var weatherElement = x[i].getElementsByTagName("elementValue");
        //計算有幾個 elementValue
        var numWeatherElems = weatherElement.length;
        var weatherDescript = weatherElement[numWeatherElems - 1].getElementsByTagName("value")[0].childNodes[0].nodeValue;

        var temperature = weatherElement[0].getElementsByTagName("value")[0].childNodes[0].nodeValue
        var windDirection = x[i].getElementsByTagName("parameterValue")[1].childNodes[0].nodeValue;
        var latitude = x[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue;
        var longitude = x[i].getElementsByTagName("lon")[0].childNodes[0].nodeValue;


        table += "<tr>" +
            "<td>" + city + "</td>" +
            "<td>" + temperature + "度" + "</td>" +
            "<td>" + windDirection + "</td>" +
            "<td>" + latitude + "</td>" +
            "<td>" + longitude + "</td>" +
            "<td>" + weatherDescript + "</td>" +
            "</tr>";
    }
    document.getElementById("demo").innerHTML = table;

    //getElementsByTagName() 访问节点
    //childNodes[0] - 元素的第一个子节点（文本节点）
    //nodeValue - 节点的值（文本本身）

}
