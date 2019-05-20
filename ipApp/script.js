'use strict';

window.onload = function() {
	document.querySelector("#btnIP").onclick = function() {
		getIP();
	}

	document.querySelector("#btnData").onclick = function() {
		getData();
	}
}

let ipUrl='https://api.ipify.org?format=json';

async function getIP() {
  let response = await fetch(ipUrl);
  let jsonResponse = await response.json();
  let ip = jsonResponse.ip;
  //console.log(ip);

  document.getElementById("myIP").innerHTML = ip;

}

async function getData() {
	const YOUR_ACCESS_KEY = '28c980c23de95a4a814c141bb37b94ce';
	let IP = document.getElementById('myIP').innerText;
	let dataUrl = 'http://api.ipstack.com/' + IP + '?access_key=' + YOUR_ACCESS_KEY + '&language=ru';
	let response = await fetch(dataUrl);
	let jsonResponse = await response.json();

	const country_name = jsonResponse.country_name;
	const city = jsonResponse.city;
	const zip = jsonResponse.zip;

	//console.log(country_name);

	document.getElementById("country_name").innerHTML = country_name;
	document.getElementById("city").innerHTML = city;
	document.getElementById("zip").innerHTML = zip;
}
