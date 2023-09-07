// your code here
const nameEl=document.querySelector("#name");
const yearEl=document.querySelector("#year");
const submitEl=document.querySelector("#submit");
const header=document.querySelector(".link");

submitEl.addEventListener('click',function(){
	let name=nameEl.value;
	let year=yearEl.value;
	let stringToBeAppended="https://localhost:8080/";
	if(name || year)
	{
		stringToBeAppended+="?"
	}
	if(name)
	{
		stringToBeAppended+="name="+name;
	}
	if(name && year)
	{
		stringToBeAppended+="&"
	}
	if(year)
	{
		stringToBeAppended+="year="+year;
	}
	header.innerHTML= stringToBeAppended;
})