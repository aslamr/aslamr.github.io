const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello LWorldsk!';

let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

let text = await response.text(); // read response body as text

alert(text.slice(0, 80) + '...');



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
