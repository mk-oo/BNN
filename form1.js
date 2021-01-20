const info = JSON.parse(localStorage.getItem('data_form'));
const info1 = JSON.parse(localStorage.getItem('preview'));

const new_names = info.map(({
    data_name
}) => data_name);

const new_nID = info.map(({
    data_nID
}) => data_nID);

const new_mobile = info.map(({
    data_mobile
}) => data_mobile);

const new_Services = info.map(({
    data_Services
}) => data_Services);

const new_num = info1.map(({
    data_num
}) => data_num);

console.log(new_names);
console.log(new_nID);
console.log(new_mobile);
console.log(new_Services);
console.log(new_num);

var Data = document.getElementById('PDF');
Data.innerHTML = `
<div>
<h1>Your number is:<br> ${new_num[new_num.length-1]}</h1>
<h3>Name: ${new_names[new_names.length-1]}</h3>
<h3>National-ID: ${new_nID[new_nID.length-1]}</h3>
<h3>Mobile: ${new_mobile[new_mobile.length-1]}</h3>
<h3>Window: ${new_Services[new_Services.length-1]}</h3>
</div>

`


