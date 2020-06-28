const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello HWorldsk!';

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits);


fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
        });
    });

fetch("http://api.alquran.cloud/v1/ayah/262/en.asad")
	.then((r) => r.json())
	.then((quran) => {
	console.log(quran);
	handleQuran(quran)
});

const handleQuran = (quranDetails) => {
document.querySelector("p").innertext = quranDetails.text;
};
