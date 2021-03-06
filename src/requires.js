var REQUIRE = [
	{"subject": "BMETE90AX02", "requires": "BMETE90AX00"},
	{"subject": "BMETE90AX10", "requires": "BMETE90AX02"},
	{"subject": "BMETE15AX02", "requires": "BMETE90AX00"},
	{"subject": "BMEGEPTAMT0", "requires": "BMEGEMTAMT1"},
	{"subject": "BMEGEMMAGM2", "requires": "BMETE90AX00"},
	{"subject": "BMEGEMMAGM2", "requires": "BMEGEMMAGM1"},
	{"subject": "BMEGEMMAGM3", "requires": "BMETE90AX02"},
	{"subject": "BMEGEMMAGM3", "requires": "BMEGEMMAGM1"},
	{"subject": "BMEGEMMAGM4", "requires": "BMETE90AX10"},
	{"subject": "BMEGEMMAGM4", "requires": "BMEGEMMAGM2"},
	{"subject": "BMEGEMMAGM4", "requires": "BMEGEMMAGM3"},
	{"subject": "BMEGEGEA3CD", "requires": "BMEGEGEAM1G"},
	{"subject": "BMEGEGTAM01", "requires": "BMEGEMTAMT1"},
	{"subject": "BMEGEÁTAM21", "requires": "BMETE90AX10"},
	{"subject": "BMEGEÁTAM21", "requires": "BMEGEMMAGM2"},
	{"subject": "BMEGERIAM1P", "requires": "BMEGEMIAM01"},
	{"subject": "BMEGEMIAM02", "requires": "BMEGERIAM1P"},
	{"subject": "BMEVIAUA007", "requires": "BMETE90AX02"},
	{"subject": "BMEVIAUA007", "requires": "BMETE15AX02"},
	{"subject": "BMEVIAUA008", "requires": "BMEVIAUA007"},
	{"subject": "BMEGEFOAMG3", "requires": "BMETE90AX00"},
	{"subject": "BMEGEMIAM03", "requires": "BMETE90AX02"},
	{"subject": "BMEGEMIAMG1", "requires": "BMETE90AX02"},
	{"subject": "BMEGEMIAM04", "requires": "BMEGEMIAM03"},
	{"subject": "BMEVIAUA010", "requires": "BMEVIAUA007"},
	{"subject": "BMEVIAUA009", "requires": "BMEVIAUA007"},
	{"subject": "BMEGEFOAMM1", "requires": "BMEVIAUA007"},
	{"subject": "BMEGEFOAMM2", "requires": "BMEGEFOAMM1"},
	{"subject": "BMEGEFOAMS1", "requires": "BMEVIAUA007"},
	{"subject": "BMEGEFOAMA1", "requires": "BMEVIAUA007"},
	{"subject": "BMEGERIAM6S", "requires": "BMEGEMIAM04"},
	{"subject": "BMEGEFOAMO1", "requires": "BMEGEFOAMG3"},
	{"subject": "BMEGERIAM6J", "requires": "BMEGEMIAMG1"},
	{"subject": "BMEGEFOAMV1", "requires": "BMEVIAUA010"},
	{"subject": "BMEGEVGAG14", "requires": "BMEGEFOAMM0"}
];

// export default function(code, requirements = true){
// 	return REQUIRE.filter(function(req){
// 		if(requirements) return req.subject === code;
// 		else return req.requires === code;
// 	}).map(function(req){
// 		if(requirements) return req.requires;
// 		else return req.subject;
// 	});
// }
export default function(code, requirements = true){
	let list = [];
	code.map(function(c){
		list = list.concat(REQUIRE.filter(function(req){
			if(requirements) return req.subject === c;
			else return req.requires === c;
		}).map(function(req){
			if(requirements) return req.requires;
			else return req.subject;
		}));
	});
	return list;	
}