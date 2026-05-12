/* ELEMENTLER */

const popup = document.getElementById("fishPopup");

const fishImage = document.getElementById("fishImage");

const fishName = document.getElementById("fishName");

const fishDesc = document.getElementById("fishDesc");

const fishSize = document.getElementById("fishSize");

const fishHabitat = document.getElementById("fishHabitat");

const closeBtn = document.getElementById("closeBtn");

const startBtn = document.getElementById("startBtn");

const startScreen = document.getElementById("startScreen");

let currentTarget = null;

/* BALIK DATASI */

const fishData = {
	0: {
		name: "Levrek",

		desc: "Levrek Ege Denizi’nde yaşayan etçil bir balıktır.",

		habitat: "Ege Denizi",

		size: "40 cm",

		image: "./assets/images/levrek.jpg",
	},

	1: {
		name: "Palyaço Balığı",

		desc: "Mercan resiflerinde yaşayan tropikal balıktır.",

		habitat: "Pasifik Okyanusu",

		size: "15 cm",

		image: "./assets/images/palyaco.jpg",
	},

	2: {
		name: "Somon",

		desc: "Somon göç eden güçlü bir balık türüdür.",

		habitat: "Kuzey Atlantik",

		size: "70 cm",

		image: "./assets/images/somon.jpg",
	},
};

/* START BUTTON */

startBtn.addEventListener("click", () => {
	startScreen.style.display = "none";
});

/* CLOSE POPUP */

closeBtn.addEventListener("click", () => {
	popup.classList.add("hidden");

	currentTarget = null;
});
/* TARGET EVENTS */

window.addEventListener("load", () => {
	const targets = document.querySelectorAll("[mindar-image-target]");

	targets.forEach((target, index) => {
		/* TARGET FOUND */
		target.addEventListener("targetFound", () => {
			if (currentTarget === index) return;

			currentTarget = index;

			console.log("TARGET FOUND:", index);

			const fish = fishData[index];

			if (!fish) return;

			fishImage.src = fish.image;

			fishName.innerText = fish.name;

			fishDesc.innerText = fish.desc;

			fishSize.innerText = fish.size;

			fishHabitat.innerText = fish.habitat;

			popup.classList.remove("hidden");
		});
	});
});
