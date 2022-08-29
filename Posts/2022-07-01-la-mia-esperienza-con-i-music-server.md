// % Title: La mia esperienza con i music server
// % HTMLTitle: La mia esperienza con i music server
// % Categories: Blog Server
// % CreatedOn: 2022-07-01
// % EditedOn: 2022-07-01

# La mia esperienza con i music server

## Perché uso un music server

Era fine marzo di quest’anno e mi ero resa conto che copiare ogni volta la musica nuova da pc a telefono e hard disk esterno non era proprio il massimo.

Allora capisco che il VPS che pagavo poteva avere uno scopo migliore oltre a quello di dare una pagina web statica (si lo usavo solo per quello) e potevo anche usarlo come music server. Ed è così che ho installato Jellyfin.

## Jellyfin

Installarlo è stato semplicissimo dato che esiste Docker, il problema era spostare 45GB di musica dal pc al server, rimasi sveglia fino alle 2 di notte solo per spostare dei file con SFTP perché ancora non ero pratica e in più la connessione ad internet non aiutava.

Una volta spostato tutto e ricreate le playlist ho visto che da web funzionava tutto, pure i music video ci stavano. Mancavano però i client perché sinceramente avere un browser aperto sempre su Jellyfin non è una cosa che mi sarebbe piaciuta molto. Così ho trovato Sonixd e Finamp.

## Sonixd: il client desktop

Devo dire il miglior client che si può avere su desktop, l’ho anche tradotto in italiano ed è persino meglio di Clementine per certi versi. Mai avuto nessun problema, ha tutte le feature che deve avere (tranne il download ma su un computer non ne vedo il senso).

Quando usavo Jellyfin ci stava però qualche lag nel caricare le canzoni e anche abilitando la transcodifica non sembrava cambiare molto.

## Finamp: il client Android

Come tutti i lettori musicali su Android anche Finamp è stato molto problematico. La gestione dei download che non funzionava se l’applicazione non era in primo piano, La UI che ricordava un tema Material Design vecchio e bug vari non mi facevano usare Jellyfin nel migliore dei modi.

Quando riproducevo file non scaricati laggava, esattamente come su Sonixd, e mi è salito qualche dubbio.

## Lo switch da Jellyfin a Navidrome

Decido così che per eliminare questo problema, forse avrei avuto bisogno di usare un server creato principalmente per la musica e non per vedere i film (Jellyfin è concepito per guardare film, il fatto di poter sentire musica è una feature in più).

Installo così Navidrome, che si basa su Subsonic, e noto, oltre al problema scomparso, che ci sono tantissimi client che usano Subsonic su Android e decido di provarli. Sonixd era già compatibile con Navidrome quindi non c’è stato bisogno di cambiare qui.

## I client Subsonic per Android

### Substreamer

Substreamer fu il primo che provai perché era quello più scaricato e che dagli screenshot sembrava il migliore. Aveva si una UI e una gestione dei download nettamente superiore a quella di Finamp ma laggava per fare qualunque cosa, non c’era la notifica integrata con Android ed era proprietaria. Insomma la peggiore che ci sia secondo me.

### Subtracks

Uno dei migliori client per Android è sicuramente questo. UI perfettamente fluida ed è pure Software libero. Il problema è che non si possono scaricare i brani anche se sembra che questa feature arriverà prima o poi (l’autore sta facendo un rewrite completo dell’applicazione).

### Symfonium

Dopo circa 3 settimane di uso di Subtracks, totalmente a caso trovo questa applicazione. Ha letteralmente tutto quello di cui ho bisogno, gestione dei download, Material You, temi custom e tanta altra roba che nessun’altro client aveva come Android Auto, supporto a Chromecast, l’auto-download e possibilità di usare più fonti contemporaneamente (Subsonic/Jellyfin/Plex/Emby/Locale).

Tutto perfetto finché non scopri che è un client proprietario e devi spendere poco più di 4 euro per andare oltre il periodo di prova di una settimana. Fortunatamente avevo del credito sul play store e l’ho pagata pochissimo.

Per il momento sto usando questa ma penso di ritornare a Subtracks quando sarà riscritto.

## Conclusioni

In pratica Navidrome è uno dei migliori server musicali che si può installare. Il problema sta nei client Android, se si vuole la migliore esperienza bisogna sborsare soldi e usare software proprietario.

Rispetto a prima è decisamente molto più comodo. Non devo più tirare fuori cavi per spostare musica da una parte all’altra, preoccuparmi di tenere aggiornate le playlist o di finire lo spazio sul telefono.

Consiglio inoltre di tenere sia Navidrome che Jellyfin come faccio io in caso abbiate anche video musicali o semplicemente voglia di vedere anche film e serie TV.
