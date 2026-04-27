import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'Vad är AI egentligen?',
    subtitle: 'En lugn och ärlig genomgång – utan krångligt tech-språk',
    duration: '',
    icon: '🤔',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Du behöver inte förstå allt – men du behöver förstå det här',
        content:
          'Det pratas mycket om AI just nu. I nyheterna, på jobbet, i skolan. Det kan kännas överväldigande, eller som om alla andra redan vet mer än du.\n\nDet stämmer inte. De flesta som pratar om AI har inte heller förstått det på djupet – de har bara provat det lite. Och det är faktiskt tillräckligt för att komma igång.\n\nI den här kursen går vi igenom grunderna steg för steg. Lugnt, tydligt och utan att hoppa över saker. Du behöver ingen teknisk bakgrund. Det enda du behöver är nyfikenhet och lite tid.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Vad AI faktiskt är – och vad det inte är',
        content:
          'AI – artificiell intelligens – är ett samlingsnamn för datorprogram som kan utföra uppgifter som vi brukar koppla till mänsklig intelligens: förstå text, svara på frågor, skriva, rita, översätta.\n\nDen typ av AI du förmodligen stött på kallas stor språkmodell, eller LLM (Large Language Model). Exempel är ChatGPT, Claude och Microsoft Copilot. Dessa program har tränats på enorma mängder text från internet, böcker och andra källor. Genom den träningen har de lärt sig att förutsäga vilket ord som passar bäst i ett givet sammanhang.\n\nEnkelt uttryckt: när du ställer en fråga räknar AI ut vilket svar som statistiskt sett passar bäst – ord för ord. Det är imponerande, men det är inte tankar, känslor eller förståelse. AI resonerar inte. Det mönstermatchar.\n\nDet är viktigt att förstå detta redan nu, för det förklarar varför AI ibland svarar fel men ändå låter säker.',
        items: [
          'AI är ett datorprogram – inte ett medvetande',
          'Stora språkmodeller förutsäger text baserat på träningsdata',
          'AI förstår inte – den mönstermatchar',
          'AI kan svara fel men ändå låta övertygande',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Som att fråga en bok som kan svara tillbaka',
        content:
          'Föreställ dig att du tar alla böcker, artiklar och webbsidor som skrivits på svenska, blandar ihop dem till ett enda gigantiskt mönster – och sedan kan ställa frågor till det mönstret.\n\nDet är ungefär vad en stor språkmodell är. Den "vet" saker på samma sätt som en bok "vet" saker: den innehåller information, men den tänker inte själv.\n\nNär du frågar ChatGPT "Vad är huvudstaden i Frankrike?" svarar den "Paris" – inte för att den "vet" det, utan för att den lärt sig att ordet "Paris" väldigt ofta förekommer i närheten av fraser som "huvudstaden i Frankrike".\n\nDetta fungerar utmärkt för den frågan. Men för mer komplexa frågor – om nutid, om nischade ämnen, om din personliga situation – kan mönstermatchningen ge fel svar. Och då märks det inte alltid direkt.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd redan från start',
        content: '',
        items: [
          '"AI tänker och förstår" → Nej, den förutsäger text. Ingen förståelse sker.',
          '"AI vet alltid rätt" → Nej, den kan ha fel – och låta säker ändå.',
          '"AI är farligt och ska undvikas" → Nej, det är ett verktyg. Som en sax – kan användas klokt eller oklokt.',
          '"Jag måste vara tekniker för att använda AI" → Nej. Du behöver bara kunna skriva svenska.',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'AI är ett verktyg – inte en auktoritet',
        content:
          'En av de vanligaste fällorna för nybörjare är att lita för mycket på AI:s svar. Eftersom svaren är välformulerade och säkert skrivna kan de kännas som fakta. Det är de inte alltid. Tänk på AI som ett hjälpsamt men felbart verktyg – som en kollega som vet mycket men ibland har fel. Du behöver alltid använda ditt eget omdöme.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Vad hade du för bild av AI innan du läste det här avsnittet? Tänkte du på det som ett tänkande väsen, ett sökverktyg, något farligt – eller något annat? Har din bild förändrats? Vad är det viktigaste du tar med dig?',
      },
    ],
    quiz: [
      {
        question: 'Vad gör en stor språkmodell (som ChatGPT) när den svarar på en fråga?',
        options: [
          'Den söker på internet i realtid och sammanfattar svaret',
          'Den förutsäger statistiskt vilka ord som passar bäst baserat på träningsdata',
          'Den tänker igenom frågan logiskt och drar slutsatser',
          'Den slår upp svaret i en intern faktadatabas',
        ],
        correctIndex: 1,
        explanation:
          'Stora språkmodeller förutsäger text ord för ord baserat på mönster i träningsdata. De söker inte på internet (om de inte har ett speciellt verktyg för det) och de "tänker" inte i mänsklig bemärkelse.',
      },
      {
        question: 'Varför kan AI svara fel men ändå låta övertygande?',
        options: [
          'Eftersom AI alltid ljuger medvetet',
          'Eftersom mönstermatchning kan producera välformulerad text även när innehållet är felaktigt',
          'Eftersom AI alltid har rätt tekniskt sett',
          'Eftersom AI är programmerat att låta säker',
        ],
        correctIndex: 1,
        explanation:
          'Eftersom AI optimerar för välformulerad text, inte för sanning, kan den producera svar som låter professionella och säkra – men som ändå innehåller fel. Det kallas hallucination.',
      },
      {
        question: 'Vad behöver du för att börja använda AI-verktyg?',
        options: [
          'Kunskaper i programmering och matematik',
          'En dyr dator med speciell hårdvara',
          'Förmåga att skriva och formulera frågor på ett naturligt språk',
          'Certifikat i digital kompetens',
        ],
        correctIndex: 2,
        explanation:
          'Moderna AI-verktyg är designade för att användas med vanligt naturligt språk. Du behöver ingen teknisk bakgrund – bara förmåga att skriva och formulera dig.',
      },
    ],
  },

  {
    id: 2,
    title: 'Vad är en prompt?',
    subtitle: 'Förstå det viktigaste begreppet innan du sätter igång',
    duration: '',
    icon: '💬',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'Allt börjar med en prompt',
        content:
          'Ordet "prompt" dyker upp hela tiden när man pratar om AI. Det låter kanske tekniskt, men det är faktiskt ett väldigt enkelt begrepp.\n\nEn prompt är helt enkelt det du skriver till AI:n. Det är din fråga, din instruktion, din begäran. Precis som du skulle skriva ett meddelande till en kollega eller en fråga i ett sökfält – fast mer som ett brev eller en konversation.\n\nDen stora skillnaden mot en Google-sökning är att du inte behöver tänka i sökord. Du kan skriva precis som du pratar – med bakgrund, kontext och hela meningar. Ju mer du berättar, desto bättre svar brukar du få.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'En prompt är din ingång till AI-verktyget',
        content:
          'Tänk på AI:n som en mycket kunnig assistent som sitter på andra sidan ett chattfönster. Assistenten är beredd att hjälpa med nästan vad som helst – men kan bara hjälpa dig om du berättar vad du behöver.\n\nEn prompt kan vara:\n– En enkel fråga: "Vad är inflationen i Sverige just nu?"\n– En instruktion: "Skriv ett tackbrev till en kund på formell svenska."\n– En berättelse med bakgrund: "Jag är lärare på en yrkeshögskola och ska förklara begreppet hållbarhet för mina studenter. Kan du ge mig tre konkreta exempel från arbetslivet?"\n– En blandning av allt detta\n\nDet finns egentligen inga strikta regler för hur en prompt ska se ut. Men det finns ett par principer som gör dem mer effektiva – och det går vi igenom i nästa modul.',
        items: [
          'En prompt är vad du skriver till AI:n – din fråga eller instruktion',
          'Du skriver i vanligt talspråk, inte sökord',
          'Mer kontext i prompten ger oftast bättre svar',
          'Prompts kan vara korta eller långa beroende på uppgiften',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Tre prompts – tre olika resultat',
        content:
          'Här är ett exempel som visar hur stor skillnad formuleringen gör.\n\nPrompt 1 (vag): "Berätta om diabetes."\nSvar: En lång, allmän medicinsk förklaring om vad diabetes är. Kanske inte alls vad du letade efter.\n\nPrompt 2 (lite bättre): "Förklara typ 2-diabetes på ett enkelt sätt."\nSvar: En mer tillgänglig förklaring. Bättre, men fortfarande generell.\n\nPrompt 3 (specifik): "Jag ska förklara typ 2-diabetes för en grupp vuxenstuderande utan medicinsk bakgrund. Ge mig en förklaring i tre korta punkter med ett vardagligt exempel."\nSvar: Tre tydliga punkter anpassade för målgruppen, med ett konkret exempel. Troligen precis vad du behövde.\n\nSkillnaden är inte AI:n – det är prompten. Samma verktyg, tre helt olika resultat.',
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missuppfattningar om prompts',
        content: '',
        items: [
          '"Jag måste skriva kortfattat som vid en Google-sökning" → Tvärtom – mer kontext ger oftast bättre svar',
          '"Det finns ett rätt sätt att skriva en prompt" → Nej, du experimenterar dig fram',
          '"AI förstår vad jag menar ändå" → AI kan bara svara på vad du faktiskt skriver, inte vad du tänker',
          '"En dålig prompt kan förstöra AI-verktyget" → Nej, du kan alltid försöka igen',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'Skriv aldrig känslig information i en prompt',
        content:
          'En viktig sak att känna till: det du skriver i en prompt skickas till en server och behandlas av AI-tjänsten. Skriv aldrig personnummer, lösenord, känsliga patientuppgifter eller annan sekretessbelagd information i en prompt – om inte tjänsten är certifierad och GDPR-anpassad för ändamålet.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på en uppgift du brukar ägna tid åt i din vardag – på jobbet, i studier eller hemma. Hur skulle en prompt till AI:n kunna se ut för den uppgiften? Försök formulera en konkret prompt i ditt huvud (eller på ett papper). Vad är det viktigaste du skulle behöva inkludera?',
      },
    ],
    quiz: [
      {
        question: 'Vad är en prompt i AI-sammanhang?',
        options: [
          'En teknisk kommandorad som kräver programmeringskunskaper',
          'Det du skriver till AI:n – din fråga, instruktion eller begäran',
          'En automatisk rapport som AI genererar',
          'En betald prenumeration på ett AI-verktyg',
        ],
        correctIndex: 1,
        explanation:
          'En prompt är helt enkelt vad du skriver till AI:n. Det är din ingång till verktyget – och det kräver inga tekniska kunskaper, bara förmåga att formulera sig.',
      },
      {
        question: 'Vad är den viktigaste skillnaden mellan en Google-sökning och en prompt till AI?',
        options: [
          'En prompt måste skrivas på engelska',
          'En prompt kostar pengar per användning',
          'En prompt kan innehålla full kontext och hela meningar, inte bara sökord',
          'En prompt ger alltid ett kortare svar',
        ],
        correctIndex: 2,
        explanation:
          'Till skillnad från en sökmotor kan du ge AI:n full bakgrundsinfo i ett naturligt språk. Ju mer kontext, desto mer anpassat svar.',
      },
      {
        question: 'Vad bör du INTE skriva i en prompt till en AI-tjänst?',
        options: [
          'Din yrkestitel och arbetsuppgift',
          'Känsliga personuppgifter som personnummer eller patientdata',
          'Specifika önskemål om format och längd på svaret',
          'Exempel på vad du vill ha hjälp med',
        ],
        correctIndex: 1,
        explanation:
          'Känslig information som personnummer, lösenord och sekretessbelagda uppgifter ska aldrig skrivas i en prompt om tjänsten inte är certifierad för detta. Det du skriver skickas till en extern server.',
      },
    ],
  },

  {
    id: 3,
    title: 'Hur skriver man en bra prompt?',
    subtitle: 'Praktiska knep som gör stor skillnad direkt',
    duration: '',
    icon: '✏️',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'Att skriva prompts är en färdighet – men en lättlärd sådan',
        content:
          'Det finns ett helt område som kallas "prompt engineering" – konsten att formulera instruktioner till AI på bästa möjliga sätt. Det kan låta avancerat, men de grundläggande principerna är enkla och du kan börja tillämpa dem direkt.\n\nDu behöver inte bli expert. Du behöver bara förstå ett par saker som konsekvent ger bättre resultat. Sedan övar du dig fram – precis som att lära sig skriva tydliga e-mail eller ge tydliga instruktioner på ett möte.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Fyra principer för bättre prompts',
        content:
          'De fyra principerna nedan räcker långt för de flesta vardagliga användningsområden. Du behöver inte använda alla fyra varje gång – välj de som passar situationen.\n\n1. Ge kontext: Berätta vem du är, vad situationen är och varför du frågar. AI:n kan inte läsa ditt sinne – men med rätt bakgrund kan den ge ett mycket mer relevant svar.\n\n2. Var specifik: Beskriv exakt vad du vill ha. "Skriv ett brev" är vagt. "Skriv ett formellt tackbrev på max 150 ord till en kund som vi just avslutat ett projekt med" är specifikt.\n\n3. Ange format: Vill du ha en lista, ett stycke, en tabell, ett utkast, punkter, frågor? Säg det. Annars väljer AI:n själv – och det passar inte alltid.\n\n4. Iterera: Första svaret är sällan det bästa. Skriv tillbaka och be om justeringar. "Gör det kortare", "Lägg till ett exempel", "Skriv om det här stycket så det låter varmare" – allt fungerar.',
        items: [
          'Ge kontext: vem du är och varför du frågar',
          'Var specifik: beskriv exakt vad du vill ha',
          'Ange format: lista, stycke, tabell, etc.',
          'Iterera: be om justeringar tills svaret passar',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Från vag prompt till precist svar',
        content:
          'Situation: Du är administratör på en skola och behöver skriva ett informationsbrev till föräldrar om ett kommande studiebesök.\n\nVag prompt:\n"Skriv ett brev om ett studiebesök."\n\nResultat: Ett generiskt brev utan detaljer – knappt användbart.\n\nBättre prompt:\n"Jag är administratör på en yrkeshögskola. Vi ska göra ett studiebesök på ett tillverkningsföretag den 15 maj kl 09–12. Studenter ska ta sig dit själva med kollektivtrafik. Skriv ett kort informationsbrev till studenternas vårdnadshavare på formell men vänlig svenska. Max 150 ord. Inkludera datum, tid, plats och uppmaning att kontakta oss om de har frågor."\n\nResultat: Ett nästan färdigt brev du kan skicka direkt med minimala justeringar.\n\nSamma verktyg. Tio sekunder extra tanke på prompten. Radikalt bättre resultat.',
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Det här behöver du inte oroa dig för',
        content: '',
        items: [
          '"Prompten måste vara grammatiskt perfekt" → Nej, AI:n förstår dig ändå',
          '"Jag måste lära mig speciella kommandon" → Nej, skriv bara som du pratar',
          '"Om AI:n svarar fel har jag gjort fel" → Inte alltid – AI:n kan ha begränsningar. Prova en annan formulering.',
          '"Jag stör AI:n om jag ber om många justeringar" → Det finns ingen gräns – det är precis så det är tänkt att fungera',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'Alltid granska svaret innan du använder det',
        content:
          'Oavsett hur bra din prompt är – granska alltid svaret kritiskt innan du använder det. AI kan producera text som låter perfekt men innehåller fel, oprecisa formuleringar eller saker som inte stämmer med din specifika situation. Du är den siste kvalitetsgranskningen.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Välj en situation från din vardag – en text du brukar behöva skriva, en fråga du brukar googla, en uppgift som tar tid. Skriv nu en prompt med de fyra principerna: kontext, specificitet, format och ett utrymme för iteration. Hur känns det att formulera dig på det sättet jämfört med en vanlig Google-sökning?',
      },
    ],
    quiz: [
      {
        question: 'Vilken prompt ger troligen bäst resultat?',
        options: [
          '"Skriv ett mejl."',
          '"Skriv ett kortfattat och vänligt svar till en kund som klagat på leveranstiden. Avsluta med en ursäkt och ett erbjudande om 10% rabatt på nästa order. Max 100 ord."',
          '"Mejl om leverans."',
          '"Hjälp mig med kundtjänst."',
        ],
        correctIndex: 1,
        explanation:
          'Den andra prompten innehåller kontext (kund som klagat), specificitet (vänlig ton, ursäkt, rabatterbjudande), format (max 100 ord) och ett tydligt mål. Det ger AI:n allt den behöver för ett användbart svar.',
      },
      {
        question: 'Vad menas med att "iterera" när man arbetar med AI?',
        options: [
          'Att skriva om hela prompten från grunden om svaret inte passar',
          'Att be om justeringar och förbättringar av ett svar man redan fått',
          'Att upprepa samma prompt flera gånger för att få fler alternativ',
          'Att spara sina prompts i en separat fil',
        ],
        correctIndex: 1,
        explanation:
          'Iteration innebär att du bygger vidare på konversationen – ber om justeringar, förtydliganden eller alternativ. Det är ett av de mest effektiva sätten att förbättra AI-svar.',
      },
      {
        question: 'Vilket av följande är det viktigaste steget EFTER att du fått ett svar från AI:n?',
        options: [
          'Att kopiera svaret direkt och använda det utan ändringar',
          'Att be om ett nytt svar för att jämföra',
          'Att granska svaret kritiskt och kontrollera att det stämmer och passar din situation',
          'Att tacka AI:n för hjälpen',
        ],
        correctIndex: 2,
        explanation:
          'Kritisk granskning är alltid det viktigaste steget. AI:n kan ha rätt men ändå missa nyanser, kontext eller ha faktafel. Du är alltid sista kvalitetsgranskningen.',
      },
    ],
  },

  {
    id: 4,
    title: 'Vilka AI-verktyg finns och vad kostar de?',
    subtitle: 'En opartisk genomgång av de vanligaste verktygen',
    duration: '',
    icon: '🛠️',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Det finns många AI-verktyg – och det är inte alltid lätt att välja',
        content:
          'På bara ett par år har det dykt upp ett stort antal AI-verktyg. De som pratas mest om är ChatGPT, Claude, Microsoft Copilot och Google Gemini. Men det finns fler, och nya tillkommer hela tiden.\n\nI det här avsnittet får du en opartisk genomgång av de viktigaste alternativen – vad de kan, vad de kostar och när du bör välja vilket. Du behöver inte registrera dig hos alla. Börja med ett och lär dig det ordentligt.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'De fyra vanligaste verktygen',
        content:
          'ChatGPT (OpenAI): Det mest kända verktyget och det som startade den senaste AI-boomen. Finns i en gratis version (GPT-3.5 och viss tillgång till GPT-4o) och en betald version (Plus, ca 20 USD/mån) med mer kapacitet, bildgenerering och filuppladdning. Bra för de flesta uppgifter.\n\nClaude (Anthropic): Känt för att vara extra bra på att skriva lång, sammanhängande och välstrukturerad text. Bra på att följa instruktioner precist. Finns gratis med begränsad användning och betalt (Pro, ca 20 USD/mån). Rekommenderas för skrivtänga uppgifter.\n\nMicrosoft Copilot: Microsofts AI-assistent, integrerad i Windows, Edge och Office 365. Om du arbetar med Word, Excel eller Teams finns Copilot direkt i verktygen. Gratis för privatpersoner via Bing/Edge, betalt för företag via Microsoft 365.\n\nGoogle Gemini: Googles AI-assistent, integrerad i Google Workspace (Gmail, Docs, Sheets). Om din organisation använder Google, är Gemini det naturliga valet. Finns i gratis och betald version.',
        items: [
          'ChatGPT – mest känt, brett användningsområde, gratis/betalt',
          'Claude – bäst på lång och strukturerad text, gratis/betalt',
          'Microsoft Copilot – integrerat i Office 365 och Windows',
          'Google Gemini – integrerat i Google Workspace',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Vilket verktyg passar dig?',
        content:
          'Scenario 1: Du vill börja utforska AI helt gratis utan att bestämma dig för något.\nRekommendation: Testa ChatGPT (chat.openai.com) eller Claude (claude.ai) – båda har gratisversioner som räcker för att lära sig grunderna.\n\nScenario 2: Du jobbar i en organisation som använder Microsoft 365.\nRekommendation: Copilot är redan delvis integrerat i dina verktyg. Testa det direkt i Word eller Edge.\n\nScenario 3: Du skriver mycket och vill ha hjälp med längre texter, rapporter och formuleringar.\nRekommendation: Claude Pro är ofta bäst för textintensiva uppgifter.\n\nScenario 4: Din organisation använder Google Workspace (Gmail, Docs, Sheets).\nRekommendation: Google Gemini är sömlöst integrerat och ofta det mest naturliga valet.',
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI-verktyg',
        content: '',
        items: [
          '"Det dyraste verktyget är alltid bäst" → Gratisversioner räcker ofta utmärkt för daglig användning',
          '"Jag måste välja ett och hålla mig till det" → Du kan använda flera olika beroende på uppgift',
          '"AI-verktygen vet vad som händer just nu" → Nej, de flesta har en kunskapsavstängning och saknar realtidsinformation (om de inte har speciell sökning)',
          '"Det är komplicerat att byta verktyg" → De flesta fungerar på samma sätt – du skriver en prompt och får ett svar',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Kontrollera vilka regler som gäller på din arbetsplats',
        content:
          'Många organisationer och arbetsgivare har egna riktlinjer för vilka AI-verktyg som är godkända att använda och för vilka typer av uppgifter. Fråga din chef eller IT-avdelning innan du börjar använda ett AI-verktyg för arbetsrelaterade uppgifter. Det gäller särskilt om du hanterar känslig information.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Vilket av de fyra verktygen verkar mest relevant för dig just nu – och varför? Tänk på vilka verktyg du redan använder i ditt arbete eller studier, och vilket AI-verktyg som skulle passa bäst in i det sammanhanget. Finns det något som hindrar dig från att testa?',
      },
    ],
    quiz: [
      {
        question: 'Vilket AI-verktyg är direkt integrerat i Microsoft Office 365?',
        options: [
          'ChatGPT',
          'Claude',
          'Microsoft Copilot',
          'Google Gemini',
        ],
        correctIndex: 2,
        explanation:
          'Microsoft Copilot är integrerat i Word, Excel, Teams och andra Microsoft 365-program. Om din organisation använder Microsoft-produkter är Copilot ofta det mest naturliga valet.',
      },
      {
        question: 'Vad gäller generellt för AI-verktygens kunskaper om aktuella händelser?',
        options: [
          'De vet allt som händer i realtid via internet',
          'De flesta har en kunskapsavstängning och saknar information om händelser efter ett visst datum',
          'De uppdateras automatiskt varje dag',
          'De kan bara svara på frågor om historiska händelser',
        ],
        correctIndex: 1,
        explanation:
          'De flesta stora AI-modeller har en "kunskapsavstängning" – ett datum efter vilket de inte har träningsdata. De vet inte om händelser efter det datumet, om de inte har ett separat sökverktyg.',
      },
      {
        question: 'Vad bör du göra INNAN du börjar använda ett AI-verktyg för arbetsuppgifter?',
        options: [
          'Betala för premiumversionen för att vara på säkra sidan',
          'Kontrollera vilka riktlinjer din arbetsgivare har för AI-användning',
          'Testa alla fyra verktygen och jämföra dem',
          'Gå en certifierad utbildning i prompt engineering',
        ],
        correctIndex: 1,
        explanation:
          'Många organisationer har egna regler för vilka AI-verktyg som är godkända och för vilka uppgifter. Kontrollera alltid med din chef eller IT-avdelning innan du börjar, särskilt vid hantering av känslig information.',
      },
    ],
  },

  {
    id: 5,
    title: 'Kom igång – steg för steg',
    subtitle: 'Skapa ett konto och gör ditt första försök',
    duration: '',
    icon: '🚀',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Det tar fem minuter att komma igång',
        content:
          'Nu är det dags att ta steget från teori till praktik. Det krävs egentligen bara tre saker: en e-postadress, ett lösenord och fem minuter. I det här avsnittet går vi igenom hur du skapar ett konto och gör din allra första prompt.\n\nVi använder ChatGPT som exempel, eftersom det är det mest kända verktyget och har en tydlig gratisnivå. Principen är densamma för Claude, Gemini och Copilot.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Så här gör du – steg för steg',
        content:
          'Steg 1: Gå till chat.openai.com i din webbläsare.\n\nSteg 2: Klicka på "Sign up" (Registrera dig). Du kan registrera dig med en e-postadress eller via ditt Google- eller Microsoft-konto.\n\nSteg 3: Följ instruktionerna och verifiera din e-post om det krävs.\n\nSteg 4: När du är inloggad ser du ett textfält längst ner på sidan. Där skriver du din prompt.\n\nSteg 5: Skriv en enkel prompt att börja med. Till exempel: "Hej! Jag är nybörjare på AI. Kan du berätta kort vad du kan hjälpa mig med?" Tryck Enter eller klicka på pilen.\n\nSteg 6: Läs svaret. Skriv tillbaka om du vill ha mer information, ett annat format, eller om du vill prova något annat.\n\nDu är nu igång. Det är allt.',
        items: [
          'Gå till chat.openai.com',
          'Klicka på "Sign up" och registrera dig',
          'Skriv din första prompt i textfältet',
          'Läs svaret och fortsätt konversationen',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Dina fem första prompts att testa',
        content:
          'Här är fem enkla prompts du kan kopiera och testa direkt. De är designade för att visa bredden av vad AI kan hjälpa dig med:\n\n1. "Förklara begreppet inflation som om jag vore tio år gammal."\n– Testar AI:n förmåga att anpassa sig till en målgrupp.\n\n2. "Ge mig tre förslag på vad jag kan äta till middag med kyckling, pasta och tomat."\n– Testar praktisk vardag.\n\n3. "Skriv ett kort och vänligt meddelande till en kollega som ber om en dags ledighet med kort varsel."\n– Testar skrivhjälp.\n\n4. "Förklara skillnaden mellan brutto- och nettolön på ett enkelt sätt."\n– Testar faktaförklaring.\n\n5. "Jag känner mig överväldigad av att lära mig ny teknik. Ge mig tre konkreta råd för att ta det lugnt och lära mig i min takt."\n– Testar AI:n förmåga att ge personliga råd.',
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Orosmoment du kan lägga ner',
        content: '',
        items: [
          '"Jag kan göra något fel och förstöra något" → Det kan inte hända. Det värsta som kan ske är att du får ett dåligt svar.',
          '"AI:n dömer mig för dumma frågor" → Det finns inga dumma frågor för AI. Den har inget omdöme om dig som person.',
          '"Jag måste förstå allt innan jag börjar" → Tvärtom – du lär dig mest av att börja och se vad som händer.',
          '"Mina konversationer sparas och används mot mig" → Konversationer kan sparas för att förbättra modellen, men du kan stänga av detta i inställningarna.',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Välj ett starkt och unikt lösenord',
        content:
          'Använd ett starkt och unikt lösenord för ditt AI-konto – inte samma lösenord du använder till e-post eller banktjänster. AI-konton kan innehålla dina konversationer, och ett komprometterat konto kan ge obehöriga tillgång till det du delat med AI:n.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur gick det när du testade din första prompt? Vad överraskade dig – positivt eller negativt? Vad vill du testa härnäst? Om du ännu inte testat: vad är det som gör att du tvekar, och hur kan du ta bort det hindret?',
      },
    ],
    quiz: [
      {
        question: 'Vad är det första du behöver göra för att börja använda ChatGPT?',
        options: [
          'Installera ett speciellt program på datorn',
          'Köpa en prenumeration',
          'Registrera ett konto med en e-postadress',
          'Ha en dator med minst 16 GB RAM',
        ],
        correctIndex: 2,
        explanation:
          'ChatGPT och de flesta andra AI-verktyg nås via webbläsaren och kräver bara ett konto med e-post. Ingen installation eller betalning krävs för att komma igång med gratisversionen.',
      },
      {
        question: 'Vad händer om du skriver en dålig eller otydlig prompt?',
        options: [
          'AI-verktyget stängs av och du måste registrera om dig',
          'Du får ett betalningskrav för felaktig användning',
          'Du får ett svar som kanske inte är så användbart – men du kan försöka igen med en bättre prompt',
          'Ditt konto kan bli bannat om det händer för ofta',
        ],
        correctIndex: 2,
        explanation:
          'En dålig prompt ger ett dåligt svar – inget mer. Du kan alltid försöka igen med en förbättrad prompt. Det finns inga konsekvenser för att experimentera.',
      },
      {
        question: 'Vad kan du göra om du inte vill att dina konversationer sparas av ChatGPT?',
        options: [
          'Det är omöjligt – alla konversationer sparas alltid',
          'Du kan stänga av sparning av konversationer i kontoinställningarna',
          'Du måste köpa en premium-prenumeration för att få sekretess',
          'Du måste använda ett annat AI-verktyg',
        ],
        correctIndex: 1,
        explanation:
          'ChatGPT och de flesta AI-verktyg har inställningar för att stänga av sparning av konversationshistorik. Kontrollera sekretessinställningarna i ditt konto.',
      },
    ],
  },

  {
    id: 6,
    title: 'Vad kan AI hjälpa mig med?',
    subtitle: 'Konkreta användningsområden i vardagen',
    duration: '',
    icon: '💡',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'AI är mer mångsidigt än de flesta tror',
        content:
          'En av de vanligaste reaktionerna från nybörjare är: "Jag förstår att AI kan skriva texter – men vad mer kan det göra?" Svaret är: mycket mer.\n\nAI-verktyg kan hjälpa med allt från att planera en konferens till att lära sig ett nytt ämne, förbereda en svår konversation, analysera data, skriva kod eller helt enkelt resonera igenom ett problem. Det är inte ett skrivverktyg – det är ett tankeverktyg.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Sex kategorier där AI gör stor nytta',
        content:
          'Skrivhjälp: Utkast till mejl, rapporter, presentationer, protokoll, brev, agendor. AI gör ett första utkast – du justerar och lägger till din röst.\n\nLärande och förklaring: Förklara komplexa begrepp på olika nivåer, sammanfatta långa dokument, ge exempel, skapa quiz-frågor för självtest.\n\nPlanering och struktur: Hjälp att bryta ner komplexa projekt i steg, skapa tidsplaner, prioritera uppgifter, brainstorma lösningar.\n\nSpråklig bearbetning: Omformulera text för att passa en annan ton eller målgrupp, korrekturläsa, översätta, förenkla eller formalisera ett budskap.\n\nResearch och sammanfattning: Sammanfatta långa texter du klistrar in, ge bakgrundinformation om ett ämne, lista för- och nackdelar.\n\nResonera och analysera: Diskutera ett problem, spela "djävulens advokat", testa ett argument, simulera en svår konversation.',
        items: [
          'Skrivhjälp – mejl, rapporter, utkast',
          'Lärande – förklaring, sammanfattning, quizfrågor',
          'Planering – projekt, agendor, brainstorming',
          'Språklig bearbetning – ton, målgrupp, korrektur',
          'Research – sammanfattning av texter du delar',
          'Analys och resonemang – testa argument, diskutera problem',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'En dag med AI – konkreta exempel',
        content:
          'Morgon: Du ska ha ett svårt samtal med en medarbetare. Du ber AI:n: "Hjälp mig förbereda ett samtal med en kollega som inte möter förväntningarna på punktlighet. Ge mig tre sätt att ta upp det konstruktivt." Du får strukturerade förslag att bearbeta.\n\nFormiddag: Du behöver skicka ett mejl på engelska till en utländsk samarbetspartner. Du skriver på svenska vad du vill säga och ber AI:n: "Översätt detta till formell affärsengelska."\n\nEftermidag: Du läser igenom ett långt policydokument. Du klistrar in det och skriver: "Sammanfatta de tre viktigaste punkterna i det här dokumentet på max 100 ord."\n\nKvällen: Du ska presentera AI för din arbetsgrupp. Du ber: "Hjälp mig skapa en enkel agenda för en timmes introduktion till AI för kollegor som aldrig använt det. Fem punkter, praktiskt fokus."',
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vad AI inte kan göra (än)',
        content: '',
        items: [
          'AI kan inte ringa upp någon, skicka mejl eller utföra handlingar i din dator på egen hand (utan speciella verktyg)',
          'AI vet inte vad som händer i realtid om den inte har ett sökverktyg kopplat till sig',
          'AI kan inte läsa filer du inte delar med den – du måste klistra in eller ladda upp innehållet',
          'AI kan inte ta beslut åt dig – den kan ge underlag, men ansvaret är alltid ditt',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'AI ersätter inte ditt omdöme',
        content:
          'AI kan ge förslag, utkast och analyser – men det är alltid du som beslutar, ansvarar och granskar. Använd AI som ett verktyg som sparar tid och ger inspiration, inte som en auktoritet som har sista ordet. Ditt professionella omdöme är alltid viktigare än vad AI producerar.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Vilka tre uppgifter i din vardag – på jobbet eller i livet i övrigt – tror du att AI skulle kunna hjälpa dig med? Välj en av dem och fundera på hur du skulle formulera en prompt. Vad behöver AI:n veta om dig och situationen för att ge ett användbart svar?',
      },
    ],
    quiz: [
      {
        question: 'Vilken av dessa uppgifter passar AI särskilt bra för?',
        options: [
          'Att ringa upp en kund i ditt namn',
          'Att ta ett juridiskt bindande beslut åt dig',
          'Att skriva ett utkast till ett mejl som du sedan bearbetar',
          'Att se vad som hände i nyheterna för en timme sedan',
        ],
        correctIndex: 2,
        explanation:
          'AI är utmärkt för att producera utkast som du sedan granskar och anpassar. Det sparar tid och ger dig en startpunkt att jobba utifrån.',
      },
      {
        question: 'Hur får AI:n tillgång till innehållet i ett dokument du vill att den ska analysera?',
        options: [
          'AI:n söker upp dokumentet automatiskt om du anger titeln',
          'Du måste klistra in eller ladda upp innehållet i konversationen',
          'AI:n har tillgång till alla dokument på din dator',
          'Du behöver inte göra något – AI:n ser allt du jobbar med',
        ],
        correctIndex: 1,
        explanation:
          'AI:n kan bara se det du delar i konversationen. Du måste klistra in text eller ladda upp filer för att AI:n ska kunna analysera dem.',
      },
      {
        question: 'Vem är ytterst ansvarig för ett beslut eller ett dokument som tagits fram med hjälp av AI?',
        options: [
          'AI-företaget som tillhandahåller verktyget',
          'Den som skapade AI-modellen',
          'Du – alltid',
          'Det beror på hur stor del AI hjälpte till med',
        ],
        correctIndex: 2,
        explanation:
          'Ansvaret är alltid ditt. AI är ett verktyg – precis som en miniräknare. Att en miniräknare räknade fel frikänner dig inte från ansvar för ett felaktigt bokslut.',
      },
    ],
  },

  {
    id: 7,
    title: 'Vad AI inte är – och varför det spelar roll',
    subtitle: 'Begränsningar du behöver känna till för att använda AI klokt',
    duration: '',
    icon: '⚠️',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'AI är imponerande – men det har tydliga begränsningar',
        content:
          'Nu när du börjat förstå vad AI kan göra är det lika viktigt att förstå vad det inte kan göra – och vad det kan göra fel. Det är inte för att skrämma dig. Det är för att du ska kunna använda AI på ett klokt och säkert sätt.\n\nDe flesta olyckor med AI händer inte för att folk är okunniga – de händer för att folk litar för mycket på ett verktyg de inte fullt förstår. Med den här modulen hoppas vi att du aldrig gör det misstaget.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Tre viktiga begränsningar',
        content:
          'Hallucination: AI kan "hitta på" fakta, citat, namn, datum och källor på ett sätt som låter helt trovärdigt. Det kallas hallucination. Det händer inte för att AI:n ljuger – det händer för att mönstermatchning ibland producerar sannolikt-klingande men felaktig information. Kontrollera alltid specifika faktauppgifter mot primärkällan.\n\nIngen uppdaterad information: De flesta AI-modeller har en "kunskapsavstängning" – ett datum efter vilket de inte har träningsdata. De vet ingenting om vad som hänt sedan dess. En fråga om en ny lag, ett nytt avtal eller en aktuell händelse kan ge ett föråldrat eller felaktigt svar.\n\nInget minne mellan sessioner: AI:n minns inte vem du är eller vad ni pratat om tidigare om du börjar en ny konversation. Varje session börjar från noll. Det innebär att du behöver ge bakgrundinformation på nytt varje gång – eller använda tjänster som har inbyggd minnesfunktion.',
        items: [
          'Hallucination – AI kan hitta på trovärdigt-klingande men felaktiga fakta',
          'Kunskapsavstängning – AI vet inte om händelser efter träningsdatumet',
          'Inget minne – varje konversation börjar från noll',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Hallucination i praktiken',
        content:
          'En student ber ChatGPT om en källhänvisning till forskning om arbetsmarknaden. ChatGPT ger ett perfekt formaterat akademiskt citat: författare, tidsskrift, år, sidnummer.\n\nStudenten lämnar in rapporten. Läraren kontrollerar källan – den finns inte. Tidsskriften finns, men artikeln existerar inte. Författaren finns, men har inte skrivit om det ämnet.\n\nDetta är hallucination. AI:n hade lärt sig hur akademiska citat ser ut och producerade ett trovärdigt-klingande citat – men med hittade-på detaljer.\n\nFärdigheten att undvika detta är enkel: Be aldrig AI:n om källhänvisningar som du inte kontrollerar själv. Och kontrollera alltid specifika faktauppgifter mot primärkällan – oavsett hur säker AI:n låter.',
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vad AI inte är',
        content: '',
        items: [
          'AI är inte ett faktaarkiv – det är en textgenerator som kan producera fel',
          'AI är inte en sökmotor – den söker inte på internet om den inte har ett verktyg för det',
          'AI är inte objektiv – träningsdatan kan innehålla skevheter och bias',
          'AI är inte allvetande – den kan säga "jag vet inte" men kan också gissa felaktigt utan att markera det',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Kontrollera alltid faktauppgifter',
        content:
          'Lita aldrig på specifika faktauppgifter från AI utan att verifiera dem mot en pålitlig primärkälla. Det gäller statistik, lagar, citat, forskning, datum, namn och siffror. Välformulerat och säkert klingande är inte detsamma som korrekt.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Nu när du känner till hallucination och kunskapsavstängning – hur förändrar det hur du tänker dig använda AI? Finns det uppgifter du nu inser kräver extra försiktighet? Och finns det uppgifter där begränsningarna spelar mindre roll?',
      },
    ],
    quiz: [
      {
        question: 'Vad är "hallucination" i AI-sammanhang?',
        options: [
          'När AI:n svarar på ett sätt som är för fantasifullt och kreativt',
          'När AI:n producerar felaktig information som låter trovärdig',
          'När AI:n vägrar svara på en fråga',
          'När AI:n glömmer vad du frågade om tidigare i konversationen',
        ],
        correctIndex: 1,
        explanation:
          'Hallucination innebär att AI:n producerar information som låter trovärdig och välformulerad men som faktiskt är felaktig. Det sker för att mönstermatchning kan generera statistiskt troliga men faktamässigt felaktiga svar.',
      },
      {
        question: 'Vad menas med att en AI-modell har en "kunskapsavstängning"?',
        options: [
          'Att modellen inte kan svara på känsliga frågor',
          'Att modellen inte vet om händelser som inträffat efter ett visst datum',
          'Att modellen stänger av sig när du inte använder den',
          'Att modellen begränsar antalet frågor du kan ställa per dag',
        ],
        correctIndex: 1,
        explanation:
          'En kunskapsavstängning (knowledge cutoff) innebär att modellen träningsdatan slutar vid ett visst datum. Händelser, lagar och fakta efter det datumet är okända för modellen.',
      },
      {
        question: 'Du ber AI:n om en källhänvisning till en vetenskaplig artikel. Vad bör du göra med svaret?',
        options: [
          'Använda det direkt – AI:n är pålitlig för akademiska citat',
          'Verifiera att källan faktiskt existerar och säger vad AI:n påstår',
          'Be AI:n upprepa svaret för att säkerställa att det är konsekvent',
          'Fråga AI:n om den är säker på svaret',
        ],
        correctIndex: 1,
        explanation:
          'AI:n kan producera perfekt formaterade men icke-existerande källhänvisningar. Kontrollera alltid att källan existerar och att den säger vad AI påstår – mot en faktisk databas eller bibliotekskatalog.',
      },
    ],
  },

  {
    id: 8,
    title: 'Källkritik och ansvarsfull användning',
    subtitle: 'Hur du använder AI klokt – nu och framåt',
    duration: '',
    icon: '🧭',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'Du är nu redo att använda AI – klokt',
        content:
          'Du har gått igenom grunderna: vad AI är, hur prompts fungerar, vilka verktyg som finns, hur du kommer igång, vad AI kan hjälpa med och vad det inte kan. Nu avslutar vi med det kanske viktigaste: hur du tänker kring AI på ett ansvarsfullt sätt.\n\nDetta handlar inte om att vara rädd för AI eller att undvika det. Det handlar om att vara en informerad användare – precis som att köra bil säkert kräver att du förstår reglerna, inte att du slutar köra.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Tre principer för ansvarsfull AI-användning',
        content:
          'Källkritik: Behandla AI-svar som du behandlar information från en okänd källa på internet. Kan det stämma? Vad vet jag om detta sedan tidigare? Finns det en anledning att kontrollera det? Ju viktigare beslutet som tas på informationen är, desto viktigare är det att verifiera.\n\nTransparens: Om du använder AI för att ta fram ett dokument, ett beslut eller en analys – var öppen med det. I professionella sammanhang och akademiska arbeten är det viktigt att tydliggöra hur och i vilken utsträckning AI användes. Reglerna skiljer sig åt mellan branscher och skolor.\n\nIntegritet och sekretess: Tänk alltid på vad du delar med ett AI-verktyg. Personuppgifter, affärshemligheter, känsliga kollegaärenden och medicinsk information hör inte hemma i en publik AI-tjänst utan att tjänsten är certifierad för det ändamålet. När du är osäker – dela inte.',
        items: [
          'Källkritik – verifiera viktiga fakta mot primärkällor',
          'Transparens – var öppen med hur du använt AI i ditt arbete',
          'Integritet – dela aldrig känslig information med okrypterade AI-tjänster',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Bra och mindre bra AI-användning – jämförelse',
        content:
          'Situation 1 – Bra användning:\nEn utbildningskoordinator använder AI för att skriva ett utkast till en kursagenda. Hon ger AI:n en beskrivning av kursen och målgruppen. AI:n ger ett förslag. Hon läser igenom, korrigerar faktauppgifter och anpassar innehållet till sin organisation. Slutresultatet är hennes eget verk, med AI som skrivassistent.\n\nSituation 2 – Problematisk användning:\nEn student lämnar in en examinationsuppgift som AI:n skrivit, utan att ha bearbetat eller förstått innehållet. Hans skola förbjuder detta. Läraren ber om en muntlig komplettering – han kan inte förklara innehållet.\n\nSituation 3 – Etiskt tvivelaktig användning:\nEn chef klistrar in en anställds personliga lönebrev och känslig information i ChatGPT för att be om råd om en uppsägning. Informationen skickas till externa servrar utan samtycke.\n\nSkillnaden mellan dessa tre är inte AI:n – det är hur den används och med vilken hänsyn.',
      },
      {
        id: '8-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om ansvar och AI',
        content: '',
        items: [
          '"Om AI:n hjälpte mig skriva det är det AI:ns ansvar" → Nej. Du ansvarar alltid för det du publicerar, skickar eller lämnar in.',
          '"Alla använder AI – det måste vara okej" → Regler och förväntningar varierar. Kolla alltid med din organisation eller skola.',
          '"Gratistjänster är lika säkra som betalda" → Inte alltid. Gratis AI-tjänster kan använda dina konversationer för träning. Läs villkoren.',
          '"AI:n anonymiserar automatiskt det jag skriver" → Nej. Det du skriver skickas och kan lagras som det är.',
        ],
      },
      {
        id: '8-warning',
        type: 'warning',
        title: 'Ansvaret är alltid ditt',
        content:
          'Oavsett hur mycket AI hjälper dig – ansvaret för det slutliga resultatet är alltid ditt. Det gäller i arbetet, i studier och i vardagen. AI är ett verktyg. Du är användaren. Och du är den som svarar för vad verktyget används till.',
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Avslutande reflektion',
        content:
          'Du har nu gått igenom alla åtta moduler i AI-grundkursen. Vad tar du med dig härifrån? Vad har överraskat dig mest? Vad tror du att du kommer att använda AI till framåt – och vad är du fortfarande tveksam till? Skriv gärna ner dina tankar. Det är ett utmärkt sätt att fästa det du lärt dig.',
      },
    ],
    quiz: [
      {
        question: 'Vad innebär principen om transparens vid AI-användning?',
        options: [
          'Att du alltid måste berätta exakt vilka prompts du använde',
          'Att du är öppen med att och hur du använt AI i arbetet eller studier',
          'Att AI:n ska vara synlig på skärmen medan du jobbar',
          'Att du delar alla dina AI-konversationer med din chef',
        ],
        correctIndex: 1,
        explanation:
          'Transparens innebär att du är öppen med att du använt AI och i vilken utsträckning – utan att nödvändigtvis dela varje prompt. I akademiska och professionella sammanhang kan det finnas specifika regler för hur detta ska redovisas.',
      },
      {
        question: 'Du ska skriva en rapport med hjälp av AI. Vem ansvarar för faktauppgifterna i rapporten?',
        options: [
          'AI-företaget som tillhandahåller verktyget',
          'Din chef, eftersom du jobbar på uppdrag',
          'Du – alltid',
          'Det beror på hur stor del AI producerade',
        ],
        correctIndex: 2,
        explanation:
          'Ansvaret för innehållet i det du publicerar eller lämnar in är alltid ditt – oavsett vilket verktyg du använde för att ta fram det.',
      },
      {
        question: 'Vilken typ av information bör du ALDRIG dela med en publik AI-tjänst utan att kontrollera villkoren?',
        options: [
          'Din yrkestitel och arbetsuppgifter',
          'Allmänna frågor om ett ämne du vill lära dig mer om',
          'Känsliga personuppgifter, affärshemligheter eller sekretessbelagd information',
          'Texter du vill ha hjälp att omformulera',
        ],
        correctIndex: 2,
        explanation:
          'Känslig information – personnummer, patientdata, affärshemligheter, känsliga HR-ärenden – ska aldrig delas med en publik AI-tjänst utan att tjänsten är certifierad och GDPR-anpassad för det ändamålet.',
      },
    ],
  },
]
