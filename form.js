var submmiting = function() {
    var Data_form = [];
    var Data = {
        data_name: document.getElementById('name').value,
        data_nID: document.getElementById('nID').value,
        data_mobile: document.getElementById('mobile').value,
        data_Services: document.getElementById('Services').value
    }
    if (localStorage.getItem("data_form") === null) {
        Data_form = [];
    } else {
        Data_form = JSON.parse(localStorage.getItem("data_form"));
    }
    Data_form.push(Data);
    localStorage.setItem('data_form', JSON.stringify(Data_form));
    myFunction2();
}

// to get name & service number
const info = JSON.parse(localStorage.getItem('data_form'));
var new_names = info.map(({
    data_name
}) => data_name);

var new_Services = info.map(({
    data_Services
}) => data_Services);

console.log(new_names);
console.log(new_Services);

function myFunction1() {
    localStorage.clear();
    document.getElementById("info").style.display = "none";
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var f = 0;

function myFunction2() {
    f++;
    if (f == 1) {
        var table = document.getElementById('info');
        inserv = parseInt(new_Services[new_Services.length - 1]);
        var chosenService = inserv;
        var cnt = 0;
        for (var i = 0; i < new_Services.length; i++) {
            if (new_Services[i] == chosenService) {
                cnt++;
            }
        }
        console.log(chosenService + "===>>>" + cnt);
        // 20 here is just for emphasising the idea 
        customerNumber = chosenService + 20 + cnt;
        var winNumber = getRandomNum(chosenService, customerNumber - 1);
        Data_form_number = [];
        const client = {
            data_num: customerNumber,
        }
        if (localStorage.getItem("preview") === null) {
            Data_form_number = [];
        } else {
            Data_form_number = JSON.parse(localStorage.getItem("preview"));
        }
        Data_form_number.push(client);
        localStorage.setItem('preview', JSON.stringify(Data_form_number));
        const info1 = JSON.parse(localStorage.getItem('preview'));
        const new_num = info1.map(({
            data_num
        }) => data_num);
        console.log("preview list :", new_num);
        document.getElementById('form1').style.display = "none";
        //  customerNumber = getRandomNum(inserv, winNumber);
        table.innerHTML = `
    <h4><br><br>Number on window is <br></h4>
    <h1>${winNumber}</h1>
    <h4>Dear ${new_names[new_names.length-1]}<br>your number is ${customerNumber}</h4>
    <p><br>Your turn is about ${customerNumber - winNumber} persons<br><br><br></p>
    `
    }
}