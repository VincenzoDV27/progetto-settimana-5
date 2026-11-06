# Bloom – Studio di Design

Bloom è una landing page responsive realizzata per uno studio creativo di design. Il progetto presenta i servizi offerti, i lavori realizzati e il team attraverso un'interfaccia moderna e intuitiva.

## Funzionalità

- Layout responsive per dispositivi mobile, tablet e desktop.
- Navbar sticky con modifica allo scroll.
- Animazioni CSS ed effetti hover.
- Sezione progetti, servizi e team.
- Carosello automatico delle recensioni.
- Modale per la richiesta di preventivo.
- Tema chiaro e scuro.
- Click sul logo Bloom e sulla relativa icona nell'header per tornare verso l'inizio pagina.

## Tecnologie

- HTML5
- CSS3
- JavaScript

## Funzionalità Javascript

JavaScript gestisce le interazioni principali della pagina. Per mostrare e nascondere la finestra modale e il messaggio di conferma del form è stato utilizzato l'attributo "hidden", modificato secondo il click o il submit tramite JavaScript.

Modal: l'attributo hidden viene rimosso al click sul pulsante "Richiedi preventivo" e ripristinato alla chiusura della finestra.

Form: al submit viene utilizzato preventDefault() per impedire il ricaricamento della pagina. Successivamente, hidden viene impostato a false per mostrare il messaggio di conferma e il form viene resettato.



