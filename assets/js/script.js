// ---------------------
// *** generic functions ***
// ---------------------

// function to get random number from 0 - max
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

// pick a simple item from an array
function getSimpleRandom(included = []) {
	return included[getRandomNumber(included.length)].replace(
		/[^a-zA-Z ]/g,
		" "
	);
}

// get a quality between -15 - 15
function getQualityValue() {
	return getRandomNumber(30) - 15;
}

// get either a true or false response
function getTrueFalse() {
	return getRandomNumber(2) ? true : false;
}

// ---------------------
// *** model designer ***
// ---------------------

// get model year
function getModelYear(includedYears = []) {
	// create
	let yearsAll = [];
	// 11
	if (includedYears.includes("2010")) {
		const years10 = ["2011"];
		yearsAll.push(years10[getRandomNumber(years10.length)]);
	}
	// 09 08 07 05 03 02 01 00
	if (includedYears.includes("2000")) {
		const years00 = [
			"2009",
			"2008",
			"2007",
			"2005",
			"2003",
			"2002",
			"2001",
			"2000"
		];
		yearsAll.push(years00[getRandomNumber(years00.length)]);
	}
	// 95 94 90
	if (includedYears.includes("1990")) {
		const years90 = ["1995", "1994", "1990"];
		yearsAll.push(years90[getRandomNumber(years90.length)]);
	}
	// 89 88 87 86 85 84 80
	if (includedYears.includes("1980")) {
		const years80 = [
			"1989",
			"1988",
			"1987",
			"1986",
			"1985",
			"1984",
			"1980"
		];
		yearsAll.push(years80[getRandomNumber(years80.length)]);
	}
	// 79 78 77 75 74 71 70
	if (includedYears.includes("1970")) {
		const years70 = [
			"1979",
			"1978",
			"1977",
			"1975",
			"1974",
			"1971",
			"1970"
		];
		yearsAll.push(years70[getRandomNumber(years70.length)]);
	}
	// 69 66 65 60
	if (includedYears.includes("1960")) {
		const years60 = ["1969", "1966", "1965", "1960"];
		yearsAll.push(years60[getRandomNumber(years60.length)]);
	}
	// 57 55 50
	if (includedYears.includes("1950")) {
		const years50 = ["1957", "1955", "1950"];
		yearsAll.push(years50[getRandomNumber(years50.length)]);
	}
	// 49 46 45 40
	if (includedYears.includes("1940")) {
		const years40 = ["1949", "1946", "1945", "1940"];
		yearsAll.push(years40[getRandomNumber(years40.length)]);
	}
	// get the model year
	return yearsAll[getRandomNumber(yearsAll.length)];
}

// ---------------------
// *** engine designer ***
// ---------------------

// engine block and cylinders
function getEngineBlock() {
	const engineTypes = [
		{ type: "Inline", cylinders: [3, 4, 5, 6] },
		{ type: "V 60", cylinders: [6, 8, 12] },
		{ type: "V 90", cylinders: [6, 8, 10] },
		{ type: "Boxer", cylinders: [4, 6] }
	];
	const thisRandomEngine = engineTypes[getRandomNumber(engineTypes.length)];
	return `${thisRandomEngine.type} ${
		thisRandomEngine.cylinders[
			getRandomNumber(thisRandomEngine.cylinders.length)
		]
	}`;
}

// bore and stroke
function getEngineBoreStroke() {
	return (getRandomNumber(2755) + 1969) / 1000;
}

// get the head and valves for this engine
function getEngineHeadValves() {
	const headValves = [
		{ type: "Push Rod", valves: [2] },
		{ type: "Direct Acting OHC", valves: [2] },
		{ type: "Overhead Cam", valves: [2, 3, 4] },
		{ type: "Dual Overhead Cam", valves: [2, 4, 5] }
	];
	const thisRandomHead = headValves[getRandomNumber(headValves.length)];
	return `${thisRandomHead.type} ${
		thisRandomHead.valves[getRandomNumber(thisRandomHead.valves.length)]
	}`;
}

// get the material of the engine head
function getEngineHeadMaterial() {
	const headMaterials = ["Cast Iron", "Aluminium", "AlSi"];
	return headMaterials[getRandomNumber(headMaterials.length)];
}

// engine compression
function getEngineCompression() {
	return (getRandomNumber(90) + 60) / 10;
}

// engine vvl profile
function getEngineVVLProfile() {
	return getRandomNumber(60) + 40;
}

// engine turbo charger preset
function getTurboChargerPreset() {
	const presets = ["Fuel Economy", "Performance", "Race"];
	return presets[getRandomNumber(presets.length)];
}

// engine fuel system type
function getFuelSystemType() {
	const types = [
		{
			name: "Carburetor",
			subtypes: [
				"Single Barrel",
				"Single Barrel Eco",
				"2 Barrel",
				"DCOE",
				"4 Barrel"
			]
		},
		{
			name: "Injection",
			subtypes: [
				"Mechanical Fuel Injection",
				"Single Point EFI",
				"Multi Point EFI",
				"Direct Injection"
			]
		}
	];
	const thisFuelSystemType = types[getRandomNumber(types.length)];
	return `${thisFuelSystemType.name} with ${
		thisFuelSystemType.subtypes[
			getRandomNumber(thisFuelSystemType.subtypes.length)
		]
	}`;
}

//
$(document).ready(function() {
	// ---------------------
	// *** display logic ***
	// ---------------------

	$("body")
		// model year
		.on("submit", ".js-model-year", {}, evt => {
			evt.preventDefault();
			const includedYears = [
				...$(".js-model-year")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-year").text(getModelYear(includedYears));
		})
		// chassis material
		.on("submit", ".js-model-panel-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-panel-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-panel-material").text(getSimpleRandom(included));
		})
		// chassis type
		.on("submit", ".js-model-chassis-type", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-chassis-type")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-chassis-type").text(getSimpleRandom(included));
		})
		// chassis material
		.on("submit", ".js-model-chassis-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-chassis-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-chassis-material").text(
				getSimpleRandom(included)
			);
		})
		// engine placement
		.on("submit", ".js-model-engine-placement", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-engine-placement")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-engine-placement").text(
				getSimpleRandom(included)
			);
		})
		// front suspension
		.on("submit", ".js-model-suspension-front", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-suspension-front")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-suspension-front").text(
				getSimpleRandom(included)
			);
		})
		// rear suspension
		.on("submit", ".js-model-suspension-rear", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-model-suspension-rear")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__model-suspension-rear").text(
				getSimpleRandom(included)
			);
		})
		// chassis quality
		.on("click", ".js-model-chassis-quality", {}, evt => {
			$(".results__model-chassis-quality").text(getQualityValue());
		})
		// engine block
		.on("click", ".js-engine-block", {}, evt => {
			$(".results__engine-block").text(getEngineBlock());
		})
		// engine block material
		.on("submit", ".js-engine-block-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-engine-block-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__engine-block-material").text(
				getSimpleRandom(included)
			);
		})
		// engine bore
		.on("click", ".js-engine-bore", {}, evt => {
			$(".results__engine-bore").text(getEngineBoreStroke());
		})
		// engine stroke
		.on("click", ".js-engine-stroke", {}, evt => {
			$(".results__engine-stroke").text(getEngineBoreStroke());
		})
		// engine head and valves
		.on("click", ".js-engine-head-valves", {}, evt => {
			$(".results__engine-head-valves").text(getEngineHeadValves());
		})
		// engine head material
		.on("click", ".js-engine-head-material", {}, evt => {
			$(".results__engine-head-material").text(getEngineHeadMaterial());
		})
		// engine VVL
		.on("click", ".js-engine-vvl", {}, evt => {
			$(".results__engine-vvl").text(getTrueFalse());
		})
		// engine crank material
		.on("submit", ".js-engine-crank-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-engine-crank-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__engine-crank-material").text(
				getSimpleRandom(included)
			);
		})
		// engine conrods material
		.on("submit", ".js-engine-conrods-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-engine-conrods-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__engine-conrods-material").text(
				getSimpleRandom(included)
			);
		})
		// engine pistons material
		.on("submit", ".js-engine-pistons-material", {}, evt => {
			evt.preventDefault();
			const included = [
				...$(".js-engine-pistons-material")
					.serializeArray()
					.map(el => el.value)
			];
			$(".results__engine-pistons-material").text(
				getSimpleRandom(included)
			);
		})
		// engine bottom end quality
		.on("click", ".js-engine-bottom-end-quality", {}, evt => {
			$(".results__engine-bottom-end-quality").text(getQualityValue());
		})
		// engine compression
		.on("click", ".js-engine-compression", {}, evt => {
			$(".results__engine-compression").text(
				`${getEngineCompression()}:1`
			);
		})
		// engine cam profile
		.on("click", ".js-engine-cam-profile", {}, evt => {
			$(".results__engine-cam-profile").text(getRandomNumber(100));
		})
		// engine vvl profile
		.on("click", ".js-engine-vvl-profile", {}, evt => {
			$(".results__engine-vvl-profile").text(getEngineVVLProfile());
		})
		// engine vvt
		.on("click", ".js-engine-vvt", {}, evt => {
			$(".results__engine-vvt").text(getTrueFalse());
		})
		// engine top end quality
		.on("click", ".js-engine-top-end-quality", {}, evt => {
			$(".results__engine-top-end-quality").text(getQualityValue());
		})
		// engine aspiration type
		.on("click", ".js-engine-aspiration-type", {}, evt => {
			$(".results__engine-aspiration-type").text(
				getTrueFalse() ? "Turbo Charger" : "Naturally Aspirated"
			);
		})
		// engine turbo charger bearing
		.on("click", ".js-engine-turbo-charger-bearing", {}, evt => {
			$(".results__engine-turbo-charger-bearing").text(
				getTrueFalse() ? "Journal Bearing" : "Ball Bearing"
			);
		})
		// engine turbo charger preset
		.on("click", ".js-engine-turbo-charger-preset", {}, evt => {
			$(".results__engine-turbo-charger-preset").text(
				getTurboChargerPreset()
			);
		})
		// engine turbo charger quality
		.on("click", ".js-engine-turbo-charger-quality", {}, evt => {
			$(".results__engine-turbo-charger-quality").text(getQualityValue());
		})
		// engine fuel system type
		.on("click", ".js-engine-fuel-system-type", {}, evt => {
			$(".results__engine-fuel-system-type").text(getFuelSystemType());
		});
});
