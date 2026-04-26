import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'Vad AI faktiskt gör',
    subtitle: 'Och inte gör',
    duration: '45 min',
    icon: '🧠',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Varför det här spelar roll',
        content:
          'De flesta som börjar använda AI-verktyg bär på en felaktig grundbild – att AI förstår, resonerar och vet. Den bilden är begriplig. Språket AI producerar är flytande, välstrukturerat och låter precis som en människa som kan sin sak. Men det är just därför bilden är farlig.\n\nDen felaktiga grundbilden leder till konkreta misstag: att man förlitar sig på AI-svar utan att verifiera dem, att man tolkar ett välformulerat svar som ett korrekt svar, och att man delegerar omdöme till ett system som saknar omdöme. I en yrkeshögskolans vardag – med tillsynskrav, förordningsstyrda processer och rättssäkerhetskrav – kan den typen av misstag få reella konsekvenser.\n\nDen här modulen handlar om att byta ut den felaktiga bilden mot en korrekt och hanterbar modell av vad AI faktiskt gör. Inte för att göra dig mer skeptisk – utan för att göra dig mer effektiv och ansvarsfull i din användning.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Sannolikhetsbaserad textgenerering',
        content:
          'En stor språkmodell (LLM – Large Language Model) gör i grunden en sak: den förutsäger vilket ord – mer exakt: vilken token – som statistiskt sett bäst passar in i det som föregår det. Inte vilket ord som är korrekt. Inte vilket ord som är sant. Utan vilket ord som är sannolikt, givet mönstren i en astronomisk mängd träningsdata.\n\nUnder träningen har modellen konsumerat text från internet, böcker, akademiska artiklar och myndighetsdokument. Den har sett hur texter om utbildning, juridik och myndighetsprocesser ser ut. Den har lärt sig att "MYH:s tillsyn" följs av fraser som "säkerställer kvalitet" och "kontrollerar att utbildningen uppfyller kraven". Den kan producera textstycken som låter precis som en senior utbildningsutvecklare formulerar sig – för att den har sett hur erfarna utbildningsutvecklare skriver.\n\nMen modellen vet inte om det den skriver är sant. Den har inget sätt att kontrollera ett angett paragrafnummer mot förordningstexten. Den kan inte avgöra om en uppgift är aktuell eller föråldrad. Den producerar text som mönstermässigt passar – och det är inte detsamma som att producera text som är korrekt.',
        items: [
          'AI förutsäger text utifrån statistiska mönster – den resonerar eller förstår inte',
          'Träningsdata avgör vad modellen kan: aktuell information som tillkommit efter träningen saknas',
          'Välformulerat och övertygande = inte nödvändigtvis korrekt',
          'Modellen har ett kunskapsdatumsstopp – ny information från myndigheter och lagar kan saknas',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Från utbildningsledarens vardag',
        content:
          'En utbildningsledare behöver snabbt ta fram underlag inför ett möte med en arbetsgivare om LIA-handledarkompetens. Hon ber AI:n sammanfatta gällande krav från Myndigheten för yrkeshögskolan. AI:n svarar direkt med ett välstrukturerat svar som nämner specifika kompetensområden, hänvisar till vad som låter som ett officiellt dokument och anger en rimlig formulering av kraven.\n\nSvaret ser trovärdigt ut. Det är välformulerat. Det innehåller termer och fraser som stämmer väl med hur MYH faktiskt kommunicerar. Utbildningsledaren skickar det vidare som underlag.\n\nDet visar sig att den hänvisade publikationen inte existerar i den form AI:n beskrev. Kraven som anges stämmer delvis men är delvis föråldrade och delvis konstruerade av modellen. Det kallas hallucination – och det särskilt förledande är att hallucinationer sällan ser ut som gissningar. De ser ut som trovärdiga, precisa svar.\n\nDet viktigaste att ta med sig: verifiera alltid specifika faktapåståenden – paragrafnummer, krav, datum, dokumentnamn – mot primärkällan. Inte för att AI alltid har fel, utan för att du inte kan avgöra när den har fel baserat på hur svaret ser ut.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Tre vanliga missförstånd',
        content: 'Dessa missförstånd är vanliga och viktiga att korrigera tidigt:',
        items: [
          '"AI förstår vad jag menar" → AI matchar mönster i text, inte intention eller sammanhang',
          '"Om svaret låter bra är det troligen korrekt" → Hallucinationer är ofta välformulerade och övertygande',
          '"AI lär sig av mig när jag använder det" → Standardmodeller lagrar inte din konversation för träning i realtid',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'När bör du INTE använda AI?',
        content:
          'Undvik AI som primär källa när svaret kräver tillgång till aktuell, verifierad information – som gällande regelverk, juridiska ställningstaganden, myndighetsbeslut eller specifika paragrafer i förordningar. Om du inte kan verifiera svaret mot primärkällan är risken för felinformation för hög.\n\nRegel: Ju större konsekvens ett felaktigt svar får, desto viktigare är det att verifiera mot primärkällan – oavsett hur övertygande AI:ns svar låter.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på ett beslut du nyligen fattade som utbildningsledare. Vilken typ av information låg till grund för det beslutet? Hade AI kunnat bidra till något av dessa underlag – och i så fall: hur hade du verifierat att svaret var korrekt innan du använde det?',
      },
    ],
    quiz: [
      {
        question: "Vad gör en AI-modell när den svarar på din fråga?",
        options: [
          "Den söker på internet och sammanfattar svaret",
          "Den resonerar logiskt utifrån fakta",
          "Den förutsäger statistiskt sannolika tokens baserat på träningsdata",
          "Den slår upp svar i en intern kunskapsdatabas"
        ],
        correctIndex: 2,
        explanation: "AI-modeller genererar text genom att statistiskt förutsäga nästa token – de resonerar inte och verifierar inte sanningsenlighet.",
      },
      {
        question: "Vad innebär \"hallucination\" i AI-sammanhang?",
        options: [
          "Att AI vägrar svara på känsliga frågor",
          "Att AI presenterar felaktig information med hög säkerhet",
          "Att AI repeterar sig i långa konversationer",
          "Att AI byter ämne mitt i svaret"
        ],
        correctIndex: 1,
        explanation: "Hallucination innebär att modellen genererar plausibelt klingande men faktiskt felaktig information – och presenterar den med samma säkra ton som korrekt fakta.",
      },
      {
        question: "I vilken situation bör du INTE använda AI som primär källa?",
        options: [
          "Vid brainstorming av mötesagendor",
          "Vid sökning av aktuell lagstiftning och föreskrifter",
          "Vid formulering av interna kommunikationsmallar",
          "Vid sammanfattning av egna anteckningar"
        ],
        correctIndex: 1,
        explanation: "AI-modeller har ett träningsstopp och kan inte verifiera aktuella regler. Specifika lagstiftningskrav måste alltid verifieras mot primärkällor.",
      },
    ],
  },

  {
    id: 2,
    title: 'Tokens, kontext och minne',
    subtitle: 'Varför AI "glömmer"',
    duration: '50 min',
    icon: '💾',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'Problemet som överraskar alla',
        content:
          'Många utbildningsledare som börjar använda AI mer regelbundet möter förr eller senare samma förvirrande upplevelse: AI:n verkar ha glömt vad ni diskuterade för tjugo minuter sedan. En instruktion man angav i början av en lång session verkar inte längre gälla. Krav man specificerat upprepade gånger ignoreras plötsligt.\n\nReaktionen är ofta att tro att man formulerat sig otydligt, att sessionen på något sätt krånglade, eller att AI:n är opålitlig. Ingen av dessa förklaringar är rätt – och den felaktiga diagnosen leder till fel lösning.\n\nDet som händer är att man stöter mot en fundamental teknisk gräns i hur dessa system fungerar. Att förstå den gränsen är inte ett tekniskt fördjupningsmoment. Det är en praktisk nödvändighet för att organisera sitt arbete med AI på ett sätt som faktiskt håller.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Tokens och kontextfönstret',
        content:
          'För att förstå varför AI:n "glömmer" behöver du förstå ett begrepp: kontextfönstret.\n\nAll text som flödar mellan dig och AI-systemet delas upp i enheter som kallas tokens. En token är inte ett ord – det är ett fragment av text, ungefär 3–4 tecken långt. Varje gång du skickar en fråga, och varje gång systemet svarar, räknas tokens. Hela konversationshistoriken tar plats i form av tokens.\n\nModellen kan bara "se" en begränsad mängd tokens åt gången – det är kontextfönstret. Tänk på det som ett rullande whiteboard med begränsad yta: ny text skrivs hela tiden in från ena sidan, och när tavlan är full börjar den äldsta texten trängas ut från andra sidan. När en instruktion du angav tidigt i konversationen har trängts ut ur kontextfönstret existerar den bokstavligt talat inte längre för modellen.\n\nModerna modeller har relativt stora kontextfönster, men alla har gränser. I längre arbetsuppgifter – att revidera en hel utbildningsplan, att arbeta igenom ett förändringsunderlag – kan den gränsen nås snabbare än du förväntar dig.',
        items: [
          'Token ≈ 3–4 tecken (inte ord) – all text tar plats i kontextfönstret',
          'Kontextfönstret = modellens aktiva arbetsminne; det är alltid begränsat',
          'Äldre instruktioner och krav kan trängas ut och upphöra att gälla',
          'AI har inget minne mellan separata sessioner utan explicit minnesfunktion',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Kursplaner och försvinnande krav',
        content:
          'Du arbetar med att revidera kursplaner för tre av din organisations utbildningar. Alla tre har specifika formatkrav som du angav i inledningen av konversationen: rubriker i en viss ordning, en specifik formulering av lärandemål, och krav på att alla avsnitt ska hänvisa till relevanta paragrafnummer i YH-förordningen.\n\nUnder arbetet med den andra kursplanen märker du att AI:n plötsligt slutar inkludera paragrafnummer. Du upprepar instruktionen – det fungerar för ett par svar, sedan glöms det igen. När du går tillbaka och kontrollerar den första kursplanen märker du att hela den tredje sektionen saknar rubrikformatering.\n\nDet är inte AI:ns fel i vanlig mening. Det är kontextfönstrets mekanik. De tidiga instruktionerna har trängts ut av det växande innehållet i konversationen.\n\nLösningen är organisatorisk, inte teknisk: dela upp arbetet i separata sessioner, en per kursplan. Inled varje session med en komprimerad instruktionstext som specificerar alla formatkrav. Verifiera att kraven följs löpande under arbetet, inte bara i slutet. Spara instruktionsmallen i ett eget dokument så att du snabbt kan klistra in den på nytt.',
      },
      {
        id: '2-concept2',
        type: 'concept',
        title: 'Strategier för att hantera kontextbegränsningar',
        content:
          'Det finns etablerade strategier för att arbeta effektivt trots dessa begränsningar:',
        items: [
          'Börja varje ny deluppgift med en kort sammanfattning av relevanta krav och förutsättningar',
          'Dela upp komplexa uppdrag i separata, väl avgränsade sessioner',
          'Spara viktiga instruktioner och krav i ett eget dokument som du enkelt kan klistra in',
          'Bekräfta att AI:n "minns" kritiska krav genom att be den upprepa vad den ska utgå från',
          'Använd strukturerade mallar som minskar behovet av lång kontext',
        ],
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om minne',
        content: 'Dessa missförstånd leder till konkreta problem i arbetsflödet:',
        items: [
          '"AI minns vad vi pratade om förra veckan" → Varje session är fristående utan explicit minnesfunktion',
          '"En lång konversation ger bättre svar" → Kontext kan spädas ut; kortare och strukturerade sessioner är ofta bättre',
          '"Jag kan lita på att AI håller reda på alla krav jag nämnt" → Tidiga krav kan trängas ut ur kontexten och ignoreras',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'När bör du INTE förlita dig på AI:ns minne?',
        content:
          'I alla uppgifter där korrekt tillämpning av specifika krav är kritisk – t.ex. förordningskrav, juridiska villkor eller specifika formatkrav – ska du aldrig förutsätta att AI:n "minns" dessa krav från tidigare i konversationen. Återintroducera alltid kritiska begränsningar i varje nytt arbetsblock.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur hanterar du i dag viktig information i långa e-posttrådar eller komplexa möten – hur säkerställer du att alla parter är på samma sida? Vilka av dessa strategier är direkt överförbara till hur du organiserar din interaktion med AI?',
      },
    ],
    quiz: [
      {
        question: "Vad händer med tidiga instruktioner i en lång AI-konversation?",
        options: [
          "De stärks ju längre konversationen pågår",
          "De sparas automatiskt till nästa session",
          "De kan trängas bort ur AI:ns aktiva minne utan att du meddelas",
          "De upprepas av AI vid behov"
        ],
        correctIndex: 2,
        explanation: "Kontextfönstret har begränsad kapacitet. När innehållet ökar kan tidiga instruktioner falla bort utan att AI meddelar det.",
      },
      {
        question: "Hur fungerar AI:ns minne mellan olika sessioner?",
        options: [
          "AI minns allt från föregående sessioner",
          "AI minns de senaste 24 timmarna",
          "AI har inget minne alls mellan sessioner",
          "AI minns om du anger ditt namn"
        ],
        correctIndex: 2,
        explanation: "Standardmodeller sparar ingen information mellan sessioner. Varje ny konversation börjar från noll – oavsett hur ofta du använt tjänsten.",
      },
      {
        question: "Vilken strategi hjälper bäst mot kontextbegränsningar i långa arbetsflöden?",
        options: [
          "Skriva längre och mer detaljerade instruktioner",
          "Dela upp arbetet i separata sessioner med tydliga instruktionsmallar",
          "Använda kortare meningar genomgående",
          "Byta AI-verktyg för varje uppgift"
        ],
        correctIndex: 1,
        explanation: "Att dela upp arbetet i sessioner och återanvända strukturerade instruktionsmallar kompenserar för AI:ns minnesgränser på ett organisatoriskt sätt.",
      },
    ],
  },

  {
    id: 3,
    title: 'Promptdesign',
    subtitle: 'Precision som professionellt verktyg',
    duration: '60 min',
    icon: '✏️',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'Varför formuleringen avgör resultatet',
        content:
          'Det är en vanlig upplevelse: man ber AI om hjälp med en uppgift, får ett svar som är ungefär rätt men inte riktigt användbart, justerar lite och får ett marginellt bättre svar – och till slut skriver man om texten själv och undrar vad poängen var.\n\nProblemet är sällan AI:n. Problemet är prompten.\n\nEn prompt är din instruktion till systemet. Men till skillnad från en sökning i ett sökfält tolkar AI:n en prompt som en text med implicita antaganden. Om du inte specificerar vad du vill fyller systemet i luckorna baserat på det mest sannolika – inte det mest relevanta för din specifika situation.\n\nAtt lära sig skriva välstrukturerade promptar är inte en teknisk kompetens. Det är en kommunikativ kompetens – och det är en av de mest direkta vägarna till att göra AI genuint användbart i vardagen. Utbildningsledare som behärskar promptdesign sparar tid, får bättre underlag och gör färre misstag som beror på att AI missuppfattat uppgiften.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Promptens fyra beståndsdelar',
        content:
          'Forskning och praktik kring hur AI-verktyg används professionellt pekar på fyra element som, när de är väldefinierade, dramatiskt förbättrar relevansen hos svaret. Du behöver inte alltid använda alla fyra – men att känna till dem hjälper dig att diagnostisera varför ett svar inte träffade rätt.\n\nRoll anger vem AI:n ska vara i relation till uppgiften. Inte en generisk "assistent", utan ett specifikt perspektiv med relevant kompetens. "En erfaren utbildningsutvecklare med god kännedom om YH-förordningen" ger ett annat svar än "en AI-assistent".\n\nKontext anger vad som är situationen, vem materialet riktar sig till och vad det ska användas till. Utan kontext måste AI:n gissa – och gissningarna är sällan rätt för din specifika situation.\n\nUppgift anger exakt vad som ska produceras – format, längd, struktur, tonalitet. Inte "hjälp mig med en text" utan "skriv tre konkreta punkter på sammanlagt max 150 ord".\n\nBegränsning anger vad som ska undvikas. Det kan gälla innehåll, format, perspektiv eller ton – och är ett av de mest underanvända elementen i praktiken.',
        items: [
          'Roll: Vem ska AI:n vara? Vilken kompetens och vilket perspektiv ska den anta?',
          'Kontext: Vad är bakgrunden? Vad ska materialet användas till? Vilken målgrupp?',
          'Uppgift: Vad ska konkret produceras? Format, längd, struktur?',
          'Begränsning: Vad ska INTE ingå? Vilka antaganden ska undvikas?',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Svag prompt vs. välstrukturerad prompt',
        content:
          'Låt oss jämföra två promptar för exakt samma uppgift – att få hjälp med att formulera syftet med en ny kurs.\n\n❌ Svag prompt:\n"Hjälp mig skriva ett kurssyfte."\n\nResultat: En generisk text om kursens mål och målgrupp, inte förankrad i YH-kontexten och som kräver nästan fullständig omskrivning för att vara användbar.\n\n✅ Välstrukturerad prompt:\n"Du är en erfaren utbildningsutvecklare med god kännedom om YH-förordningen (2009:128) och hur MYH formulerar krav på kursers syfte vid tillsyn. Jag ska skriva kursplan för kursen Hållbar logistik på en KY-utbildning inom Supply Chain Management. Målgruppen är yrkesverksamma vuxna med 2–5 års erfarenhet från lager och transport. Skriv ett kurssyfte på ca 120 ord anpassat för YH-kontexten, tydligt kopplat till hållbarhetsbegreppet inom logistik, skrivet i linje med hur officiella kursplaner formuleras – inte i marknadsföringsspråk. Inkludera inga generiska formuleringar om framtidens kompetens."\n\nResultat: Ett kurssyfte som kan användas som arbetsversion med minimala justeringar.\n\nSkillnaden är inte marginal. Det är skillnaden mellan ett verktyg som hjälper och ett som skapar merarbete.',
      },
      {
        id: '3-concept2',
        type: 'concept',
        title: 'Negativa instruktioner och iterativ design',
        content:
          'Negativa instruktioner – att säga vad AI:n INTE ska göra – är kraftfulla och underanvända. "Undvik marknadsföringsspråk", "inkludera inte teknisk systemdokumentation", "skriv inte en inledning om AI:s historia" kan drastiskt förbättra relevansen i svaret.\n\nPromptdesign är ett iterativt arbete. Börja med ett utkast, granska vad som saknades eller var fel, och förfina prompten. Tre bearbetningar ger ofta ett markant bättre resultat än det första försöket – och den investerade tiden är fortfarande väsentligt kortare än att skriva från grunden.',
        items: [
          'Precision > längd – en kort, precis prompt slår en lång, vag',
          'Testa negativa instruktioner för att ta bort oönskat innehåll',
          'Iterera – bra promptar skrivs sällan rätt på första försöket',
          'Spara dina bästa promptar som mallar för återbruk i liknande uppgifter',
        ],
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om promptar',
        content: '',
        items: [
          '"En bra prompt är en lång prompt" → Precision är viktigare än längd; för lång prompt kan späda ut instruktionerna',
          '"AI förstår vad jag menar om jag är ungefär tydlig" → Tvetydighet i indata ger tvetydighet i utdata',
          '"Jag behöver bara skriva prompten en gång" → Promptdesign är ett iterativt arbete',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'När precisering är särskilt kritisk',
        content:
          'I arbetsmoment där AI:ns svar ska användas direkt utan omfattande granskning – t.ex. kommunikation till studerande, formella dokument, dagordningar till ledningsgrupper – är välstrukturerade promptar inte valfritt utan nödvändigt. En vag prompt i ett sammanhang med höga krav är en professionell risk.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Övning och reflektionsfråga',
        content:
          'Välj en av dessa tre verkliga arbetsuppgifter och skriv en välstrukturerad prompt med alla fyra elementen (roll, kontext, uppgift, begränsning):\n\n1. Sammanfatta en tillsynsrapport från MYH inför ett ledningsgruppsmöte\n2. Skriv en dagordning för ett kursplanerevideringsmöte\n3. Utforma en kommunikation till LIA-handledare om uppdaterade krav\n\nEfter att du skrivit prompten: Vilken del var svårast att formulera? Vad säger det om vad som verkligen är komplext i den uppgiften?',
      },
    ],
    quiz: [
      {
        question: "Vilka är de fyra beståndsdelarna i en välstrukturerad prompt?",
        options: [
          "Ämne, stil, längd och format",
          "Roll, kontext, uppgift och begränsning",
          "Fråga, exempel, förklaring och slutsats",
          "Mål, metod, källa och målgrupp"
        ],
        correctIndex: 1,
        explanation: "En välstrukturerad prompt innehåller: Roll (perspektiv), Kontext (situation), Uppgift (exakt output) och Begränsning (vad som ska exkluderas).",
      },
      {
        question: "Vad ger en vag prompt vanligtvis för resultat?",
        options: [
          "Mer kreativa och originella svar",
          "Kortare men mer precisa svar",
          "Generiska svar som kräver full omarbetning",
          "Felaktiga svar på grund av tekniska begränsningar"
        ],
        correctIndex: 2,
        explanation: "AI genererar svar utifrån det input den får – vag input ger generisk output. Precisionen i instruktionen avgör direkt relevansen i resultatet.",
      },
      {
        question: "Vad gör negativa instruktioner i en prompt?",
        options: [
          "Gör AI:n mer respektfull i tonen",
          "Tar bort oönskat innehåll från svaret",
          "Gör sessionen snabbare",
          "Aktiverar AI:ns säkerhetsfilter"
        ],
        correctIndex: 1,
        explanation: "Negativa instruktioner (\"exkludera\", \"inkludera inte\") styr AI:n bort från innehåll du inte vill ha – t.ex. byråkratisk jargong eller irrelevanta exempel.",
      },
    ],
  },

  {
    id: 4,
    title: 'Personas som verktyg',
    subtitle: 'Roll, perspektiv och ansvar',
    duration: '45 min',
    icon: '🎭',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Mer än ett trick',
        content:
          'I diskussioner om AI-verktyg nämns personas ofta i förbigående – som ett lite roligt experiment man kan prova. Att be AI:n "vara" en professor, en journalist eller en skeptisk granskare framstår som en lekfull funktion snarare än ett professionellt verktyg.\n\nDen beskrivningen underskattar kraftigt vad personas faktiskt gör.\n\nFör en utbildningsledare är förmågan att se en fråga från flera professionella perspektiv central. Du behöver ibland förstå hur en MYH-handläggare ser på ett dokument, hur en studerande med bristande förkunskaper upplever en kursplan, hur en teknikskeptisk styrelseledamot tolkar ett förslag. Personas är ett sätt att använda AI för att simulera just dessa perspektivskiften på ett strukturerat och reproducerbart sätt – utan att alltid behöva boka in separata möten.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'Vad en persona faktiskt gör',
        content:
          'När du ger AI:n en roll förändras inte den underliggande kunskapsbasen – modellen kan inte mer juridik för att du bett den spela rollen av en jurist. Vad som förändras är vilken del av kunskapsbasen som aktiveras och hur svaret prioriterar och formulerar sig.\n\nAI:n har under träning sett enorma mängder text skriven av eller om olika yrkesroller. Den har lärt sig hur MYH-handläggare formulerar återkoppling i tillsynsrapporter, hur pedagogiska experter diskuterar lärandemål, hur externa examinatorer motiverar sina bedömningar. När du anger en persona väljer du vilket av dessa mönster som ska styra svaret.\n\nDet praktiska resultatet: en persona fokuserar svaret. "Granska det här dokumentet" ger ett brett, ganska allmänt svar. "Du är en MYH-handläggare vid tillsyn. Granska det här dokumentet och identifiera de tre punkter du troligast hade anmärkt på" ger ett fokuserat, perspektivspecifikt svar som är direkt användbart i förberedelsen.',
        items: [
          '"Utbildningsutvecklare med YH-erfarenhet" → fokus på förordningskrav och pedagogik',
          '"Studerandeföreträdare" → fokus på tillgänglighet och tydlighet',
          '"MYH-handläggare vid tillsyn" → fokus på avvikelser och formella krav',
          '"Extern examinator" → fokus på validering och mätbarhet',
          '"Kritisk kollega" → fokus på svagheter och förbättringsområden',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Förberedelse inför ledningsgruppsmöte',
        content:
          'Du ska presentera ett förslag om ett nytt digitalt stödsystem för LIA-koordinering vid nästa ledningsgruppsmöte. Tre av fem ledamöter är teknikskeptiska, en är entusiastisk och en har inte haft tid att sätta sig in i underlaget.\n\nI stället för att gissa vilka invändningar som kan komma ber du AI:n:\n\n"Du är en teknikskeptisk ledamot i styrelsen för en yrkeshögskoleutbildning med erfarenhet från tillsyn och personalfrågor. Du är skeptisk till nya digitala system på grund av tidigare erfarenheter av system som krävde mer administration än de sparade. Läs följande förslag och ställ de fem kritiska frågor du med störst sannolikhet hade ställt under ett möte. Motivera varje fråga med vad som driver din skepsis."\n\nResultatet ger dig konkreta invändningar att förbereda svar på – inklusive frågor du kanske inte hade tänkt på – och det ger dig en känsla för hur du behöver anpassa ditt sätt att presentera förslaget för att möta de betänkligheter som finns i rummet.\n\nDet ersätter inte det verkliga samtalet med ledamöterna. Men det är ett strukturerat sätt att förbereda sig utan att behöva boka fem separata möten.',
      },
      {
        id: '4-concept2',
        type: 'concept',
        title: 'Pedagogiska personas',
        content:
          'Personas kan också användas för att öva argumentation, testa kommunikation mot olika målgrupper eller förbereda svåra samtal. Exempel:',
        items: [
          '"Du är en skeptisk lärare som är orolig för att AI ersätter pedagogisk bedömning. Ställ tre kritiska frågor om den här examensuppgiften."',
          '"Du är en studerande med läs- och skrivsvårigheter. Hur upplever du den här instruktionen?"',
          '"Du är ordförande i en LIA-nämnd. Vad saknar du i det här handledardokumentet?"',
        ],
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om personas',
        content: '',
        items: [
          '"Om AI antar en expertroll har den expertens kunskap" → Persona ändrar ton och fokus, inte kunskapsbasen',
          '"Rollspel med AI är oseriöst" → Strukturerad användning av personas är ett etablerat pedagogiskt och professionellt verktyg',
          '"AI:ns persona-svar är objektivt" → Det är fortfarande ett sannolikhetsbaserat svar, nu styrt av rollinstruktionen',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Risken med bekräftande personas',
        content:
          'En persona kan förstärka din egen bild av en situation snarare än utmana den – om du ber AI:n spela en roll som du redan håller med, riskerar du att få ett välformulerat medhållande i stället för en genuin utmaning. Sök aktivt perspektiv som utmanar, inte bekräftar.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'I vilka situationer i din roll som utbildningsledare behöver du se ett ärende från flera perspektiv? Hur gör du det i dag – och vem eller vad hjälper dig att se blinda fläckar? Hur kan AI:n komplettera detta utan att ersätta det verkliga samtalet med kollegor och studerande?',
      },
    ],
    quiz: [
      {
        question: "Vad gör en persona faktiskt i en AI-kontext?",
        options: [
          "Ger AI tillgång till experters databaser",
          "Aktiverar relevanta mönster från träningsdata för ett specifikt perspektiv",
          "Gör AI mer sanningsenlig",
          "Tillåter AI att söka på internet"
        ],
        correctIndex: 1,
        explanation: "En persona aktiverar mönster i träningsdata kopplade till en specifik roll – den tillför inte ny kunskap men fokuserar svaret mot det perspektivet.",
      },
      {
        question: "Vad är den största risken med bekräftande personas?",
        options: [
          "AI kan bli för formell i tonen",
          "Befintliga åsikter kan förstärkas istället för utmanas",
          "Sessionen kan ta för lång tid",
          "AI kan vägra svara"
        ],
        correctIndex: 1,
        explanation: "Om du söker bekräftelse snarare än utmaning tenderar AI att tillhandahålla just det – vilket minskar det analytiska värdet och förstärker blinda fläckar.",
      },
      {
        question: "Vad är en lämplig användning av persona för en utbildningsledare?",
        options: [
          "Att simulera en inspektörs perspektiv inför tillsynsgranskning",
          "Att ersätta faktiska samtal med intressenter",
          "Att generera automatiska beslut",
          "Att undvika att ta ställning i svåra frågor"
        ],
        correctIndex: 0,
        explanation: "Att använda en MYH-inspektörs perspektiv hjälper dig identifiera vilka frågor en granskning sannolikt ställer – utan att ersätta riktiga samtal.",
      },
    ],
  },

  {
    id: 5,
    title: 'Agentbaserad AI',
    subtitle: 'Möjligheter och nödvändig kontroll',
    duration: '55 min',
    icon: '🤖',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Från enstaka prompt till flöde',
        content:
          'De föregående modulerna har handlat om AI som ett verktyg du frågar och som svarar – ett tur och retur. Det är fortfarande det vanligaste sättet att använda AI, och för de flesta arbetsuppgifter i en utbildningsorganisations vardag är det tillräckligt.\n\nMen en annan kategori av AI-system börjar bli alltmer tillgänglig: agentbaserade system. Här anger du inte bara en fråga – du anger ett mål. Systemet analyserar vad som behöver göras för att uppnå det målet, delar upp det i deluppgifter, utför dem i sekvens, utvärderar resultaten och justerar sin plan. Det sker utan att du involveras i varje steg.\n\nDet är ett kvalitativt skifte i hur AI kan användas – och det medför ett kvalitativt skifte i vilka risker du behöver hantera som ledare.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Vad skiljer en agent från en prompt',
        content:
          'I en vanlig AI-interaktion är kedjan enkel: du skriver, AI:n svarar, du läser. Kontrollen är hela tiden hos dig – varje steg kräver din inblandning.\n\nEn agent bryter den kedjan. Du anger ett mål – exempelvis "granska alla inkomna ansökningar mot behörighetskraven och markera de som saknar obligatoriska bilagor" – och agenten tar över. Den läser dokumenten, jämför mot kraven, kategoriserar ansökningarna och genererar en rapport med avvikelser. Det sker i sekvens, steg för steg, utan att du aktivt deltar i varje moment.\n\nDet gör agenter kraftfulla för uppgifter som är repetitiva, regelbaserade och tidskrävande. Men det medför en avgörande sårbarhet: fel som uppstår tidigt i kedjan fortplantar sig. Om agenten tolkade ett behörighetskrav fel i steg 2, baseras allt som följer på den feltolkningen – och du kanske inte märker det förrän du ser slutrapporten.',
        items: [
          'Agenter sätter upp delmål och utför dem i sekvens utan att avvakta godkännande',
          'De kan anropa externa verktyg, söka i databaser och bearbeta dokument',
          'Fel i tidiga steg fortplantas och förstoras i senare steg',
          'Mänsklig granskning vid kritiska beslutspunkter är inte valfritt – det är ett krav',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Agentflöde: Kursplanegranskning',
        content:
          'Tänk dig ett agentbaserat granskningsstöd för kursplanerevideringsprocessen i din organisation. Systemet är tänkt att minska den manuella granskningstid som i dag tar en heltidsresurs en till två veckor per termin.\n\nFlödet ser ut så här:\nSteg 1 → Agenten tar emot kursplanen som uppladdad fil\nSteg 2 → Kontrollerar att alla obligatoriska fält är ifyllda enligt checklista\nSteg 3 → Jämför lärandemålen mot en kunskapsbas med relevanta förordningskrav\nSteg 4 → Genererar en avvikelserapport med specifika kommentarer per lärandemål\nSteg 5 → Skapar ett utkast till återkoppling adresserat till ansvarig lärare\nSteg 6 → Markerar kursplanen som "granskad" i utbildningsplattformen\n\nSystemet kan hantera 40 kursplaner på den tid en handläggare annars hanterar 8. Det låter som en tydlig vinst.\n\nMen frågan är: Om agenten i steg 3 feltolkar ett förordningskrav – och kunskapsbasen inte uppdaterats sedan en förordningsändring för tre månader sedan – skickas felaktig återkoppling till samtliga 40 lärare. Steg 6 markerar dem dessutom som "granskade", vilket kan dölja felet ytterligare.\n\nDetta är inte ett argument mot agentbaserade system. Det är ett argument för att designa dem med explicita mänskliga kontrollpunkter och för att förstå exakt var i flödet ansvar och granskning måste ligga hos en person.',
      },
      {
        id: '5-concept2',
        type: 'concept',
        title: 'Kontrollpunkter i agentflöden',
        content:
          'En väldesignad agentprocess har explicita mänskliga kontrollpunkter – ställen där flödet pausar och en person granskar och godkänner innan det fortsätter. Kontrollpunkter är inte ett tecken på att organisationen inte litar på AI. De är ett tecken på att organisationen tar ansvar.',
        items: [
          'Definiera i förväg: Vilka beslut får agenten fatta utan mänsklig inblandning?',
          'Definiera i förväg: Vilka beslut kräver alltid mänskligt godkännande?',
          'Bygg in stoppunkter vid beslut med höga konsekvenser',
          'Dokumentera vad agenten gör – spårbarhet är en förutsättning för ansvar',
        ],
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om agenter',
        content: '',
        items: [
          '"Agenten gör det automatiskt, så det är klart" → Automatisering garanterar inte korrekthet',
          '"Om systemet är konfigurerat rätt behöver jag inte granska" → Konfigurationen kan ha fel; data är alltid komplex',
          '"Agentbaserad AI är framtiden – vi bör implementera det omgående" → Mognadsnivå, risknivå och juridik måste utvärderas per verksamhet',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Var agentbaserad AI INTE är lämpligt',
        content:
          'I arbetsmoment som direkt påverkar studeranderättigheter – antagning, betygssättning, LIA-godkännande, disciplinärenden – ska det alltid finnas en definierad och faktisk mänsklig beslutspunkt. Att formellt godkänna en agents slutresultat utan verklig granskning är inte en kontrollpunkt. Det är en procedur utan reellt innehåll.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Designövning',
        content:
          'Välj ett administrativt arbetsmoment i din verksamhet som är repetitivt och tidskrävande. Skissa ett enkelt flöde:\n\n1. Vad skulle ett agentbaserat stöd göra i steg 1, 2, 3?\n2. Var i flödet MÅSTE du som utbildningsledare vara med och fatta ett aktivt beslut?\n3. Vad händer i värsta fall om agenten gör fel – och vem bär ansvar?\n\nFundera sedan: Är fördelarna med automatisering tillräckliga för att motivera det arbete som krävs för att bygga och underhålla rätt kontrollpunkter?',
      },
    ],
    quiz: [
      {
        question: "Vad skiljer en agentbaserad AI från en vanlig prompt?",
        options: [
          "Agenter genererar mer kreativt innehåll",
          "Agenter kräver mer specificerade instruktioner",
          "Agenter utför sekventiella steg autonomt mot ett mål",
          "Agenter minns tidigare sessioner"
        ],
        correctIndex: 2,
        explanation: "Agentbaserade system bryter ner mål i delmål och utför dem autonomt – i motsats till en enstaka prompt-svar-cykel.",
      },
      {
        question: "Varför är kontrollpunkter i agentflöden viktiga?",
        options: [
          "De gör agenter snabbare",
          "De hindrar agenter från att göra allt för bra jobb",
          "Fel tidigt i flödet kan förstärkas och spridas till alla efterföljande steg",
          "De minskar kostnaden för AI-användning"
        ],
        correctIndex: 2,
        explanation: "I agentflöden kompounderar tidiga fel – ett tolkningsfel i steg 1 kan påverka alla efterföljande dokument. Mänskliga kontrollpunkter bryter den automatiska felpropageringen.",
      },
      {
        question: "Vilka processer lämpar sig INTE för agentbaserad automatisering?",
        options: [
          "Informationssökning och sammanfattning",
          "Granskning av kursplaner mot checklistor",
          "Antagning, betygsättning och LIA-godkännanden",
          "Generering av mötesprotokoll från anteckningar"
        ],
        correctIndex: 2,
        explanation: "Processer som påverkar studerandes rättigheter kräver formella mänskliga beslut – inte procedurellt godkännande av automatiserade resultat.",
      },
    ],
  },

  {
    id: 6,
    title: 'AI i realtid',
    subtitle: 'Stöd, vägledning och användarupplevelse',
    duration: '40 min',
    icon: '⚡',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'När AI möter användare direkt',
        content:
          'Chatbottar och interaktiva AI-stödsystem för studerande och personal är ett av de snabbast växande användningsområdena för AI i utbildningssektorn. Lockelsen är påtaglig: tillgänglig support dygnet runt, enhetliga svar på återkommande frågor, avlastning för personal som annars svarar på identiska e-postmeddelanden om och om igen.\n\nMen det finns en systematisk underskattning av vad det faktiskt kräver att implementera dessa system på ett ansvarsfullt sätt – och en systematisk överskattning av vad de levererar utan aktiv förvaltning.\n\nRealtids-AI är inte ett verktyg du sätter upp en gång och sedan kan lämna. Det är en informationskanal med en aktiv användarbas som bygger förväntningar och agerar på de svar de får. Det ställer krav på kontinuerlig förvaltning, tydlig kommunikation om begränsningar och genomtänkta eskalationsvägar – krav som organisationer ofta underskattar i entusiasmen kring möjligheterna.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Vad realtids-AI egentligen innebär',
        content:
          'Att implementera ett AI-drivet stödsystem för studerande eller personal är i praktiken att lansera en ny informationskanal. Och en informationskanal kräver för att fungera:\n\nEn kunskapsbas att hämta svar från – och en tydlig rutin för att hålla den aktuell. Information om LIA-regler, examinationsformer, kontaktuppgifter och tidsgränser förändras. En chatbot som svarar baserat på information från förra terminen är inte ett stöd – det är en organiserad felkälla.\n\nTydlig kommunikation till användarna om vad systemet kan och inte kan svara på. Studerande som tror att de fått ett auktoritativt svar om sin sjukfrånvaro under LIA och agerar på det – och sedan visar sig att svaret var felaktigt – befinner sig i en situation som organisationen juridiskt bär ansvar för.\n\nEn tydlig eskalationsväg till en människa. Det måste alltid vara möjligt att nå en person – inte efter tre nivåer av automatiserade omdirigeringar, utan lättillgängligt och synligt.',
        items: [
          'Kunskapsbasen kräver löpande underhåll – inaktuell information ger felaktiga svar',
          'Tillgänglighet dygnet runt skapar förväntningar som måste hanteras proaktivt',
          'Användare förutsätter att systemet är uppdaterat och korrekt – det kan det inte garanteras vara',
          'En synlig och lättanvänd väg till mänsklig kontakt är nödvändig, inte valfri',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'LIA-chatbotten som gav fel svar',
        content:
          'En yrkeshögskoleutbildning med tre program och knappt 200 studerande implementerar en AI-driven chatbot för LIA-perioden. Systemet är byggt ovanpå ett välkänt verktyg och tränat på utbildningens egna dokument och FAQ. Implementeringen tar tre veckor och mottas positivt – studerande ställer frågor nattetid och på helger och får snabba svar.\n\nSex veckor in under LIA-perioden ställer en studerande frågan: "Vad händer om jag är sjuk mer än fem dagar under LIA?"\n\nChatbotten svarar med en tydlig instruktion baserad på äldre rutindokument – instruktioner som inte stämmer med det uppdaterade LIA-avtalet som reviderades tre månader tidigare. Den studerande följer chatbottens instruktion, och det uppstår en allvarlig konflikt med LIA-handledaren.\n\nUtredningen tar tre veckor. Det visar sig att det reviderade LIA-avtalet aldrig lagts in i chatbottens kunskapsbas. Organisationen ställs inför en formell anmälan.\n\nVad hade behövts: En dokumenterad rutin för att uppdatera kunskapsbasen vid varje revidering av avtal eller regelverk. En tydlig begränsning av chatbottens ansvarsområde – navigeringsstöd och faktafrågor, inte avtalstolkning. En synlig och lättillgänglig hänvisning till en handläggare för specifika situationer.',
      },
      {
        id: '6-concept2',
        type: 'concept',
        title: 'Rätt ansvarsområde för realtids-AI',
        content:
          'Det finns uppgifter där realtids-AI fungerar väl och uppgifter där det är direkt olämpligt. Nyckeln är att definiera ansvarsområdet tydligt och kommunicera det klart till användarna.',
        items: [
          'Lämpligt: Vägledning om var information finns, öppettider, kontaktuppgifter',
          'Lämpligt: Allmänna frågor om utbildningens upplägg och tidplan',
          'Lämpligt: Navigeringsstöd i system och plattformar',
          'Olämpligt: Tolkning av avtal, LIA-krav eller regelverk',
          'Olämpligt: Individuella bedömningar, undantag eller rättighetsfrågor',
        ],
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om realtids-AI',
        content: '',
        items: [
          '"En chatbot är alltid tillgänglig, alltså är den bättre än mänskligt stöd" → Tillgänglighet kompenserar inte felaktighet',
          '"Vi kan använda AI-vägledning utan att kommunicera begränsningarna" → Transparens är ett etiskt och juridiskt krav',
          '"Realtids-AI är en kostnadsbesparing" → Implementering, förvaltning och felhantering medför egna kostnader',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Transparens som grundkrav',
        content:
          'Det är inte godtagbart att implementera ett AI-drivet stödsystem utan att tydligt kommunicera till användarna att de interagerar med ett automatiserat system. Studerande och personal har rätt att veta att svaret de får kommer från ett AI-system – och att de kan vända sig till en människa om de vill det.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Identifiera tre typer av frågor du eller dina kollegor får regelbundet från studerande eller lärare. Kategorisera dem:\n\n1. Standardiserade faktafrågor med enkla, entydiga svar\n2. Frågor som kräver tolkning av en specifik situation\n3. Frågor med rättsliga eller avtalsrättsliga dimensioner\n\nVilken kategori är lämplig för AI-stöd? Var går gränsen – och hur kommunicerar du den gränsen till dina användare?',
      },
    ],
    quiz: [
      {
        question: "Vad är en kritisk förutsättning för att en AI-chatbot ska vara tillförlitlig?",
        options: [
          "Att den kan svara på alla möjliga frågor",
          "Att kunskapsbasen uppdateras löpande och systemet kommunicerar sina begränsningar",
          "Att den alltid hänvisar vidare",
          "Att den inte kostar något att drifta"
        ],
        correctIndex: 1,
        explanation: "En chatbot är bara lika aktuell som sin kunskapsbas. Utan regelbundna uppdateringar och tydlig kommunikation om begränsningar riskerar felaktig information att spridas.",
      },
      {
        question: "Vilka frågetyper är OLÄMPLIGA att delegera till en AI-chatbot?",
        options: [
          "Kontaktinformation och öppettider",
          "Allmän information om kurser",
          "Individuell bedömning och avtalstolkning",
          "Navigering på webbplatsen"
        ],
        correctIndex: 2,
        explanation: "Rättighetsgrundade beslut och individuell bedömning kräver mänskligt ansvar – chatbottar hanterar navigation och allmän information, inte myndighetsbeslut.",
      },
      {
        question: "Vilket krav är juridiskt grundläggande för AI-chatbotar mot användare?",
        options: [
          "Att chatboten alltid ger fem svarsalternativ",
          "Att användare informeras om att de kommunicerar med ett automatiserat system",
          "Att chatboten kan hantera alla språk",
          "Att svarstiden är under en sekund"
        ],
        correctIndex: 1,
        explanation: "Transparens om automatiserade system är ett juridiskt krav – användare har rätt att veta att de interagerar med AI och var de kan nå en människa.",
      },
    ],
  },

  {
    id: 7,
    title: 'Risker och ansvar',
    subtitle: 'Hallucinationer, juridik och yrkesansvar',
    duration: '60 min',
    icon: '⚖️',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'Det du inte vet kan skada dig',
        content:
          'De föregående modulerna har fokuserat på hur du använder AI mer effektivt. Den här modulen handlar om vad som händer när du eller din organisation använder det utan tillräcklig förståelse för riskerna.\n\nDet är kursens viktigaste modul – inte för att du ska bli rädd för AI, utan för att välgrundad användning kräver att du förstår vad du faktiskt tar på dig när du väljer att integrera AI-verktyg i professionella processer. De missuppfattningar som finns i organisationer kring ansvar, juridik och vad AI faktiskt gör i praktiken är kostbara när de kolliderar med verkligheten.\n\nGrundregeln är enkel att formulera men viktig att ta på allvar: ansvar kan aldrig delegeras till ett system. Det gäller oavsett hur övertygande systemet presterar, hur utbredd användningen är i branschen, eller hur lite tid du hade att granska det material du godkände.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Hallucination – definition och konsekvenser',
        content:
          'Hallucination är termen för när en AI-modell producerar information som är felaktig men framförs utan tvekan och med hög säkerhet. Det är inte ett sällsynt undantagsfall – det är en inneboende egenskap hos hur statistiska språkmodeller fungerar.\n\nModellen har inget sant/falskt-filter. Den producerar det som statistiskt passar bäst in i textflödet. Och i sammanhang där korrekt faktainformation ser ut på ett visst sätt – paragrafnummer, myndighetsnamn, specifika krav – producerar modellen text som ser ut som korrekt faktainformation. Inte för att den vet att det är rätt, utan för att det mönstret stämmer med träningsdatan.\n\nDet som gör hallucinationer särskilt farliga i en utbildningsorganisations kontext är tre saker: De är svåra att identifiera utan att du faktiskt kontrollerar svaret mot primärkällan – de ser ofta ut som precisa, faktabaserade påståenden. Frekvensen är högre för just den typ av information du ofta behöver: paragrafnummer, specifika krav i förordningar, dokumenttitlar. Och konsekvenserna i en förordningsstyrd miljö av att agera på felaktig information är reella – tillsynsanmärkningar, felaktig kommunikation till studerande, felaktiga underlag till styrelse eller arbetsgivare.',
        items: [
          'Hallucinationer är vanligare för specifik faktainformation: paragrafnummer, datum, dokumentnamn',
          'Välformulerat svar = inte nödvändigtvis korrekt svar',
          'Modeller saknar förmåga att tillförlitligt signalera sin egen osäkerhet',
          'Verifiera alltid mot primärkällan vid faktapåståenden med konsekvenser',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Tre scenarier från utbildningsverkligheten',
        content:
          'Scenario 1 – Hallucination i formellt underlag:\nEn utbildningsledare behöver snabbt ta fram ett underlag om kompetenskrav på LIA-handledare inför ett möte med branschföreträdare. Hon ber AI:n formulera vad MYH kräver. Svaret är välstrukturerat och anger en specifik paragraf med ett tydligt procentvärde för handledartid. Paragrafen existerar inte i den form AI:n anger. Underlaget distribueras, mötet hålls och beslutet grundas delvis på felaktig information.\n\nScenario 2 – Personuppgifter och extern behandling:\nEn studie- och karriärvägledare på en YH-utbildning börjar använda ett populärt AI-verktyg för att effektivisera sin administration. Hon klistrar in utdrag ur studerandejournaler för att få hjälp med att formulera ett remissunderlag. Uppgifterna – namn, studiesituation, hälsoinformation – lämnar organisationens kontrollerade miljö och behandlas på en server utanför EU. GDPR:s regler om behandling av känsliga personuppgifter tillämpas på varje behandlingssteg, inte enbart på lagring. Organisationen har ingen vetskap om att detta skett.\n\nScenario 3 – Ansvarskedjan vid MYH-tillsyn:\nEn utbildningsledare låter AI:n producera ett komplett första utkast till en reviderad utbildningsplan. Hon redigerar ca 30% av texten och godkänner dokumentet. Vid efterföljande tillsyn anmärker MYH på att flera lärandemål inte uppfyller YH-förordningens krav. Utbildningsledaren uppger att AI var involverat i utformningen. MYH:s tillsynsbeslut riktas mot utbildningsorganisationen. Ansvaret är oförändrat – det ligger hos den som undertecknat och publicerat dokumentet.',
      },
      {
        id: '7-concept2',
        type: 'concept',
        title: 'Juridiska ramar du behöver känna till',
        content:
          'Tre regelverk är centrala för utbildningsorganisationers AI-användning:',
        items: [
          'GDPR: Varje behandling av personuppgifter är reglerad. Att klistra in studerandedata i ett externt AI-verktyg är behandling av personuppgifter och kräver rättslig grund.',
          'EU AI Act: Klassificerar AI-system efter risknivå. System som påverkar utbildning och antagning klassas som hög risk och lyder under strikta krav på transparens och mänsklig kontroll.',
          'YH-förordningen och skollagen: Kvalitetskrav och tillsynsskyldigheter gäller oavsett om produktionen av dokument stöddes av AI eller inte.',
        ],
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om ansvar',
        content: '',
        items: [
          '"Om AI:n skriver det är det AI:ns ansvar" → Ansvar kan aldrig delegeras till ett system',
          '"GDPR gäller bara om vi lagrar data" → Varje behandling av personuppgifter är reglerad',
          '"EU AI Act berör inte oss – vi är en utbildningsorganisation" → AI Act påverkar alla som använder AI-system i EU, inklusive utbildningsverksamheter',
          '"Om vi inte officiellt infört AI är vi inte berörda" → Informell användning av kommersiella AI-verktyg räknas',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Det viktigaste att minnas',
        content:
          'Din organisations ansvar för ett dokument, ett beslut eller en kommunikation förändras inte av att AI var involverad i produktionen. Det finns ingen juridisk eller etisk "AI-rabatt". Professionellt ansvar kvarstår fullt ut hos den människa och organisation som undertecknar, publicerar eller skickar materialet.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Inventering och reflektionsfråga',
        content:
          'Gör en snabb inventering:\n\n1. Var i din verksamhet används AI-verktyg i dag – formellt eller informellt?\n2. Har ni diskuterat juridiska och etiska ramar för denna användning?\n3. Finns det verksamhetsmoment där AI används utan att det är känt för ledningen?\n\nVilka av dessa användningar är välgrundade och vilka bör utvärderas eller stoppas? Vad är ditt nästa steg som utbildningsledare?',
      },
    ],
    quiz: [
      {
        question: "Vad innebär GDPR för AI-verktyg som används i utbildningsorganisationer?",
        options: [
          "GDPR gäller bara för fysiska databaser, inte AI-verktyg",
          "Externt AI-verktyg som hanterar personuppgifter kräver rättslig grund och eventuellt biträdesavtal",
          "GDPR gäller bara vid lagring, inte vid bearbetning",
          "GDPR gäller inte YH-verksamhet"
        ],
        correctIndex: 1,
        explanation: "All bearbetning av personuppgifter – inklusive via externa AI-tjänster – kräver rättslig grund under GDPR. Det räcker inte att uppgifterna \"bara analyseras\".",
      },
      {
        question: "Var placerar EU AI-förordningen utbildningssystem?",
        options: [
          "I kategorin lågriskapplikationer",
          "I kategorin oacceptabel risk",
          "I kategorin högrisk",
          "Utanför förordningens tillämpningsområde"
        ],
        correctIndex: 2,
        explanation: "EU AI Act klassificerar system som används i utbildning som högrisk – vilket kräver transparens, kontroll och dokumentation.",
      },
      {
        question: "Hur påverkar AI-inblandning organisationens ansvar för ett dokument?",
        options: [
          "Ansvaret minskar eftersom AI är ansvarig för innehållet",
          "Ansvaret är oförändrat – organisationen ansvarar fullt ut oavsett produktionssätt",
          "Ansvaret delas lika mellan organisationen och AI-leverantören",
          "Ansvaret bortfaller om AI-verktyget är GDPR-certifierat"
        ],
        correctIndex: 1,
        explanation: "Det finns inget rättsligt undantag för AI-producerat innehåll. Organisationen ansvarar fullt ut för dokument och beslut oavsett vilket verktyg som användes.",
      },
    ],
  },

  {
    id: 8,
    title: 'Strategiskt ledarskap och AI',
    subtitle: 'Ansvarsfull beslutsfattare',
    duration: '50 min',
    icon: '🎯',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'Din roll har inte förändrats – kontexten har',
        content:
          'Du är utbildningsledare. Det innebär att du är ansvarig för att en verksamhet fungerar i enlighet med förordningskrav, levererar kvalitet mot studerandenas och arbetslivets förväntningar, och fattar välgrundade beslut i en komplex miljö – ofta med begränsade resurser och under tidspress.\n\nInget av det har förändrats. Vad som har förändrats är att ett av de verktyg som nu finns tillgängliga i din och din personals vardag – och som de förmodligen redan använder, formellt eller informellt – bär med sig en ny kategori av risker och möjligheter som kräver din förståelse och ditt ledarskap.\n\nDen här modulen handlar inte om att ge dig teknisk expertis. Den handlar om att ge dig det analytiska ramverk du behöver för att fatta välgrundade beslut om AI i din organisation – och om hur du artikulerar det ledarskapet inåt mot personal och utåt mot styrelse, samarbetspartners och tillsynsmyndighet.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Ramverk för AI-beslut',
        content:
          'Varje gång en fråga om att introducera, utöka eller begränsa AI-användning i din verksamhet uppstår – oavsett om den kommer från en entusiastisk lärare, ett erbjudande från en leverantör eller ett krav från styrelsen – kan du använda ett enkelt analytiskt ramverk med fyra dimensioner:\n\nNytta frågar vad AI faktiskt löser i det här arbetsflödet. Inte vad det teoretiskt sett kan göra, utan vilket verkligt problem i din verksamhet det löser. Om ingen kan formulera ett konkret svar på den frågan är det en signal om att förslaget är teknikdrivet snarare än behovsdrivet.\n\nRisk frågar vad som kan gå fel, vilka konsekvenserna är och vem som drabbas. En lågrisktillämpning – AI-stöd för att formulera administrativa e-postutkast – kräver en annan riskbedömning än ett system som hanterar information nära studeranderättigheter.\n\nGenomförbarhet frågar om organisationen har kapacitet att implementera, förvalta och utbilda kring systemet. Många implementationer misslyckas inte för att teknologin är fel, utan för att organisationen underskattat förvaltningsbördan.\n\nAnsvar frågar vem som äger systemet operativt, vem som granskar att det fungerar korrekt och vem som är ansvarig när det uppstår fel.',
        items: [
          'Nytta: Vad löser AI faktiskt i det här arbetsflödet? Är det ett reellt problem?',
          'Risk: Vad kan gå fel? Vilka är konsekvenserna? Vem drabbas?',
          'Genomförbarhet: Har vi kapacitet att implementera, förvalta och utbilda kring det?',
          'Ansvar: Vem äger systemet? Vem granskar? Vem är ansvarig när det går fel?',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Styrelsens fråga',
        content:
          'Styrelseordföranden ber dig inför årets strategimöte att ta fram ett ställningstagande om hur organisationen ska förhålla sig till AI i utbildnings- och administrationsverksamheten. Hon formulerar det som: "Borde vi använda AI mer systematiskt?"\n\nDet är en bra fråga – och den kräver ett välgrundat svar. Ett välgrundat svar är varken "Ja, absolut – alla gör det nu" eller "Nej, det är för riskabelt för oss".\n\nEtt analytiskt svar identifierar konkret var i er specifika verksamhet AI-stöd kan skapa reellt värde med hanterbara risker. Det pekar ut de verksamhetsmoment där AI är direkt olämpligt givet de juridiska och etiska ramar ni verkar inom. Det beskriver vad som behöver vara på plats organisatoriskt och juridiskt för att ni ska kunna använda AI ansvarsfullt – styrande riktlinjer, förvaltningsrutiner, kompetensutveckling, uppföljning. Och det presenterar en konkret plan för de närmaste tolv månaderna: vad som prövas, på vilka villkor och hur ni utvärderar.\n\nDet svaret kräver inte teknisk expertis. Det kräver verksamhetskunskap, förståelse för det ansvar ni bär – och den typ av analytisk förståelse för AI som du nu har grunderna för.',
      },
      {
        id: '8-concept2',
        type: 'concept',
        title: 'Att vara en informerad beställare',
        content:
          'En av de viktigaste kompetenserna för en utbildningsledare i AI-frågor är att vara en informerad beställare – att kunna ställa rätt frågor till leverantörer, IT-avdelning och externa konsulter.',
        items: [
          '"Vilken data tränar systemet på, och äger vi den datan?"',
          '"Var lagras den data vi matar in, och under vilka villkor?"',
          '"Hur uppdateras kunskapsbasen, och hur ofta?"',
          '"Vad är er garantinivå för korrekthet, och vad händer när den bryts?"',
          '"Hur kan vi följa upp och granska systemets beslut i efterhand?"',
        ],
      },
      {
        id: '8-concept3',
        type: 'concept',
        title: 'Principiella riktlinjer för organisationen',
        content:
          'Detaljerade regler åldras snabbt. Principbaserade riktlinjer håller längre. En AI-policy för din organisation behöver inte vara teknisk – den bör vara värderingsbaserad:',
        items: [
          'Transparens: Vi kommunicerar alltid till studerande och personal när AI är involverat',
          'Ansvar: AI frigör inte mänskligt ansvar – det kvarstår hos den människa som fattar beslutet',
          'Kvalitet: AI-stödd produktion håller samma kvalitetskrav som mänsklig produktion',
          'Integritet: Personuppgifter hanteras med samma noggrannhet oavsett om AI är involverat',
          'Kontinuerlig uppföljning: Vår AI-användning utvärderas och revideras regelbundet',
        ],
      },
      {
        id: '8-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd i ledningsfunktioner',
        content: '',
        items: [
          '"Om personalen använder AI privat är det inte vår sak" → Yrkesmässig användning av AI är organisationens ansvar',
          '"Vi behöver en IT-expert för att fatta AI-beslut" → Strategiska AI-beslut kräver verksamhetskunskap, inte primärt teknisk expertis',
          '"En AI-policy kan vänta tills vi vet mer" → Att avvakta är ett beslut – det innebär oreglerad användning under väntetiden',
        ],
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Avslutande reflektion',
        content:
          'Den här kursen avslutas inte med ett svar – den avslutas med en fråga som du som utbildningsledare bär med dig:\n\nVad är det mest angelägna AI-relaterade beslutet i din organisation just nu? Vad vet du nu som du inte visste före kursen? Och vilket är ditt nästa konkreta steg?\n\nSkriv ner ditt svar. Det är utgångspunkten för ditt examensarbete – och för ditt fortsatta ledarskap i en tid av snabb teknologisk förändring.',
      },
    ],
    quiz: [
      {
        question: "Vilka fyra dimensioner ingår i ramverket för AI-beslut?",
        options: [
          "Kostnad, hastighet, säkerhet och design",
          "Nytta, risk, genomförbarhet och ansvar",
          "Innovation, skalbarhet, kompetens och budget",
          "Strategi, taktik, operation och kontroll"
        ],
        correctIndex: 1,
        explanation: "Ramverket för AI-beslut: Nytta (löser ett verkligt problem?), Risk (konsekvenser?), Genomförbarhet (kapacitet att förvalta?) och Ansvar (vem äger det?).",
      },
      {
        question: "Vad innebär \"transparens\" i en organisations AI-policy?",
        options: [
          "Att AI-verktyg aldrig används i känsliga sammanhang",
          "Att AI-inblandning alltid kommuniceras öppet i dokument och beslutsunderlag",
          "Att all AI-kod är öppen källkod",
          "Att personal informeras om vilka AI-verktyg leverantören använder"
        ],
        correctIndex: 1,
        explanation: "Transparensprincipen innebär att AI-inblandning alltid kommuniceras – i dokument, beslut och kommunikation – så att mottagare kan värdera informationen korrekt.",
      },
      {
        question: "Vad händer om en organisation väljer att inte ha några AI-riktlinjer?",
        options: [
          "Användningen upphör av sig självt",
          "Personalen använder inga AI-verktyg utan riktlinjer",
          "Oreglerad användning med kvalitets- och compliancerisker uppstår",
          "Ansvaret för AI-misstag övergår till AI-leverantören"
        ],
        correctIndex: 2,
        explanation: "Avsaknad av riktlinjer är ett aktivt beslut som resulterar i oreglerad AI-användning – inte neutralitet. Det är en professionell styrelsefråga.",
      },
    ],
  },
]
