
const probab1 = document.getElementById('probab1');
const probab2 = document.getElementById('probab2');
const probab3 = document.getElementById('probab3');
const probab4 = document.getElementById('probab4');

const imagePreviw = document.getElementById('imagePreview');


function imageRecognition() {

	event.preventDefault();

	let image = document.getElementById('image').value;

	let url = 'https://image-labels.p.rapidapi.com/lab/'.concat(image);

	imagePreviw.src = image;

	const data = null;

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	
	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
	
			console.log(this.response);
			var respons = JSON.parse(this.responseText);

			console.log(respons);

			console.log(respons[0].label);
			console.log(respons[1].label);
			console.log(respons[2].label);
			console.log(respons[3].label);

			probab1.innerHTML = respons[0].label;
			probab2.innerHTML = respons[1].label;
			probab3.innerHTML = respons[2].label;
			probab4.innerHTML = respons[3].label;

		}
	});
	
	xhr.open("POST", url);
	xhr.setRequestHeader("content-type", "application/octet-stream");
	xhr.setRequestHeader("x-rapidapi-key", "584172e1e3msh73867400c19e92fp130824jsnab80f7db8f34");
	xhr.setRequestHeader("x-rapidapi-host", "image-labels.p.rapidapi.com");
	
	xhr.send(data);

}




