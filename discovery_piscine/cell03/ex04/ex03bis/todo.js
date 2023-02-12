function writeCookie(){
    
	tempo = prompt("What would it be?");
	splitted = document.cookie.split(";")[0];
	if (splitted == "null" || splitted == "," || splitted == "")
	{
		document.cookie = tempo;
	}
	else
	{
		console.log(splitted + "|" + tempo);
		document.cookie = splitted + "|" + tempo;
	}
}

function showCookies() {
 // const output = document.getElementById('ft_list')
	saver = document.cookie.split(";")[0];
	if (saver != "null" || saver != "," || saver != "")
	{
	  var phin = saver.split("|");
	  sad = 0;
	  while (sad < phin.length)
		{
			if (phin[sad] != "" || phin[sad] != "," || phin[sad] != "null")
			{
				let btn = document.createElement("button");
				btn.innerHTML = phin[sad];
				btn.type = "submit";
				btn.id = phin[sad];
				btn.onclick = function () {
					console.log(btn.id + " removed");
					document.cookie = saver.toString().replace(btn.id, "");
					btn.remove();
					console.log(document.cookie);
				}
				document.body.appendChild(btn);
				var lineBreak = document.createElement("br");
				btn.after(lineBreak);
				
				sad = sad + 1;
			}
		}
	}
}

function lst() {
  const output = document.getElementById('ft_list')
  output.textContent = document.cookie;
}

function purge()
{
	document.cookie = null;
}
