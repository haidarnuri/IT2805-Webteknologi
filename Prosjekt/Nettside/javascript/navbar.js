/*
Creates the title
*/
let titleTag = document.getElementById('headerWrap');
let titletags = `<a href="forside.html" id="titleLink"><h1 id="title">Heaven</h1></a>
<div id="nav">
    <button type="button" onclick="document.location='meny.html'">Meny</button>
    <button type="button" onclick="document.location='reservasjon.html'">Bestill bord</button>
    <button type="button" onclick="document.location='omOss.html'">Om oss</button>
</div>`;
titleTag.innerHTML = titletags;
