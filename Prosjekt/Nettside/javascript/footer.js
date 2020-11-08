/*
Creates the footer
*/
const footerTag = document.getElementById('footerWrapOmOss');
let footerTags =`<div class="infoOmOss">
<p>Adresse:</p>
<p> Fakegata 22, 1234 Atlantis</p>
<a href="https://goo.gl/maps/hPVbehCtgstcxJjJA" target="_blank">Vis på kart</a>
</div>
<div class="infoOmOss">
    <p><b><u>Ved bordbestilling over 8 gjester, kontakt oss på:</u></b></p>
    <p>Telefon: 12345678</p>
    <p>Epost: Fake@epost.net</p>
</div>
<div class="infoOmOss">
    <p>Åpningstider:</p>
    <p>Man-Søn 17:00-23:30</p>
</div>
</div>`;
footerTag.innerHTML = footerTags;

