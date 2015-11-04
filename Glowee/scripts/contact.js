window.addEventListener("load",function(){
	document.getElementById("kontaktSkjema").addEventListener("submit",validerSkjema);
	
	function validerSkjema(){
		var navnet = document.forms["kontaktform"]["name"].value;
		if (navnet == null || navnet == ""){
			document.getElementById('navnFelt').style.borderColor = "red";
			alert("dette feltet må være utfylt");
			return false;
		}
		var epost = document.forms["kontaktform"]["email"].value;
		if (epost == null || epost == ""){
			document.getElementById('epost').style.borderColor = "red";
			alert("dette feltet må være utfylt");
			return false;
		}
		var kfelt = document.forms["kontaktform"]["kommentar"].value;
		if (kfelt == null || kfelt == ""){
			document.getElementById('tekstFelt').style.borderColor = "red";
			alert("dette feltet må være utfylt");
			return false;
		}
		else{
			alert("Skjemaet ble sendt");
			return true
		}
	}
})