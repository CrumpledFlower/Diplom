document.querySelector("button").onclick = myClick;
function myClick() {
	let q = document.getElementById("index"); // Сколько лет осталось до пенсии
	let qv = q.value;
	let x = document.getElementById("age"); // Сколько лет осталось до пенсии
	let xv = x.value;
	let y = document.getElementById("term"); // Срок кредита
	let yv = y.value;
	let a = document.getElementById("income"); // Годовой доход
	let av = a.value;
	let b = document.getElementById("capital"); // Общий капитал
	let bv = b.value;
	let c = document.getElementById("amount"); // Сумма кредита
	let cv = c.value;
	let i = document.getElementById("percent"); // Годовой процент
	let iv = i.value/100;
	let z = cv/yv;
	let k = z*iv;
	let v = z+k;
	if (qv>=0){
		if (xv>yv){
			if (bv>cv*2){
				if (av>v){
					alert ("Кредит одобрен");
				} else alert ("Кредит не одобрен");
			} else alert ("Кредит не одобрен");
		} else alert ("Кредит не одобрен");
	} else alert ("Кредит не одобрен");
}