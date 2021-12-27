function dodawanie()
{
	var liczbaA = document.getElementById("liczbaA").value;
	var liczbaB = document.getElementById("liczbaB").value;
	liczbaA = parseInt(liczbaA);
	liczbaB = parseInt(liczbaB);
	var wynik = liczbaA + liczbaB;
	document.getElementById("wynik1").innerHTML = "Wynik : "+ wynik;
}
function odejmowanie()
{
	var liczbaA = document.getElementById("liczbaA").value;
	var liczbaB = document.getElementById("liczbaB").value;
	liczbaA = parseInt(liczbaA);
	liczbaB = parseInt(liczbaB);
	var wynik = liczbaA - liczbaB;
	document.getElementById("wynik1").innerHTML = "Wynik : "+ wynik;
}
function iloraz()
{
	var liczbaA = document.getElementById("liczbaA").value;
	var liczbaB = document.getElementById("liczbaB").value;
	liczbaA = parseInt(liczbaA);
	liczbaB = parseInt(liczbaB);
	var wynik = liczbaA / liczbaB;
	document.getElementById("wynik1").innerHTML = "Wynik : "+ wynik;
}
function iloczyn()
{
	var liczbaA = document.getElementById("liczbaA").value;
	var liczbaB = document.getElementById("liczbaB").value;
	liczbaA = parseInt(liczbaA);
	liczbaB = parseInt(liczbaB);
	var wynik = liczbaA * liczbaB;
	document.getElementById("wynik1").innerHTML = "Wynik : "+ wynik;
}
function a_do_b_funk()
{
	var liczbaA = document.getElementById("liczbaA").value;
	var liczbaB = document.getElementById("liczbaB").value;
	liczbaA = parseInt(liczbaA);
	liczbaB = parseInt(liczbaB);
	var wynik = Math.pow(liczbaA, liczbaB);
	document.getElementById("wynik1").innerHTML = "Wynik : "+ wynik;
	
}