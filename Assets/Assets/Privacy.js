function PlanktosInstall() {
	if (!('serviceWorker' in navigator)) return

	let attributes = document.currentScript.attributes
	let sw = '/planktos.sw.js'
	if (attributes['sw']) sw = attributes['sw'].value
	if (attributes['data-sw']) sw = attributes['data-sw'].value

	navigator.serviceWorker.register(sw)
	.catch(function (err) {
		console.log('Service worker registration failed with ' + err)
	})
}

function PrivacyAccepted() {
	PlanktosInstall();
}

function ShowPrivacyPopup() {
	PrivacyPopup.style.display = 'block';
	PrivacyPopup.style.visibility = 'visible';
	PrivacyPopup.innerHTML = `
<p><b>ℹ️ Notifica sulla privacy</b></p>
<p>Cliccando OK, dichiari di comprendere e accettare che il tuo indirizzo IP potrebbe essere condiviso con i computer di altri utenti del sito durante la tua navigazione.</p>
<details>
	<summary>Ulteriori informazioni</summary>
	<p>Questo sito usa tecnologie per la distribuzione ottimizzata delle risorse, secondo il paradigma peer-to-peer e il protocollo BitTorrent.</p>
	<p>Per via del funzionamento tecnico di questa soluzione, il tuo indirizzo IP potrebbe essere rivelato ai computer di altri utenti, da cui il tuo browser scaricherà i dati anziché passare per il server principale. Il tuo computer e la tua linea Internet, inoltre, potrebbero essere utilizzati per permettere ad altri utenti di scaricare i dati del sito in maniera ottimizzata.</p>
	<p>
		Se ritieni che questo sia per te un rischio di privacy, e non hai interesse nell'avere accesso ottimizzato al sito, anche qualora il server pincipale dovesse andare offline, puoi non accettare.
		<br>
		Semplicemente, ignora questo pop-up o, dalle impostazioni del browser, disattiva JavaScript o i cookie per farlo sparire completamente.
	</p>
</details>
<br>
<button id="AcceptPrivacy" onclick="AcceptPrivacy()"><big><b>✅ OK</b></big></button>
`;
}

function HidePrivacyPopup() {
	PrivacyPopup.style.display = 'none';
	PrivacyPopup.style.visibility = 'hidden';
	PrivacyPopup.innerHTML = '';
}

function AcceptPrivacy() {
	document.cookie = "PrivacyAccepted=true; max-age=31536000";
	HidePrivacyPopup();
	PrivacyAccepted();
	window.location.reload();
}

function CheckPrivacyCookie() {
	if (navigator.cookieEnabled) {
		if (document.cookie.search('PrivacyAccepted=true') != -1) {
			PrivacyAccepted();
		} else {
			ShowPrivacyPopup();
		}
	}
}

document.body.onload = CheckPrivacyCookie();
