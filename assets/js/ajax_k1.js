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
    var form = "" //P2選單

    var x = xmlDoc.getElementsByTagName("location");
   
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
        
        var cityCategory = x[i].getElementsByTagName("locationName")[0].childNodes[0].nodeValue; //P2選單

        table += "<tr>" +
            "<td>" + city + "</td>" +
            "<td>" + temperature + "度" + "</td>" +
            "<td>" + windDirection + "</td>" +
            "<td>" + latitude + "</td>" +
            "<td>" + longitude + "</td>" +
            "<td>" + weatherDescript + "</td>" +
            "</tr>";
        
        form +=  "<option>" + cityCategory + "</option>" //P2選單
    }
    document.getElementById("demo").innerHTML = table;
    document.getElementById("cityselect").innerHTML = form; //P2選單

    //getElementsByTagName() 访问节点
    //childNodes[0] - 元素的第一个子节点（文本节点）
    //nodeValue - 节点的值（文本本身）

}
