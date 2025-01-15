let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
// showing input sliderValue

sliderValue.textContent = inputSlider.value
inputSlider.addEventListener('input', () => {
	sliderValue.textContent = inputSlider.value
})

genBtn.addEventListener('click', ()=>{
	passBox.value = generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789" ;
let allSymbols = "~@!#$%^&*()_+{}:?><"
// function to Generate Password

function generatePassword(){
	let genPassword = "";
	let allChars = "";
	
	allChars += lowercase.checked ? lowerChars : "";
	allChars += Uppercase.checked ? upperChars : "";
	allChars += numbers.checked ? allNumbers : "";
	allChars += Symbols.checked ? allSymbols : "";
	
	if(allChars == "" || allChars.length == 0)
	{
		return genPassword;
	}
	
	let i = 1;
	while (i <= inputSlider.value){
			genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
			i++;
	}
	return genPassword;
}

copyIcon.addEventListener('click',()=>{
	if(passBox.value != "" || passBox.value.Length >=1){
	navigator.clipboard.writeText(passBox.value);
	copyIcon.innerText = "✔";
	copyIcon.title = "Password Copied"
	
	setTimeout(()=> {
		copyIcon.innerHTML = "content_copy";
			copyIcon.title = ""
	},1000)
	}
});