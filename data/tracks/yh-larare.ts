import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'AI ur ett lärarperspektiv',
    subtitle: 'Vad tekniken gör – och vad det kräver av dig',
    duration: '',
    icon: '🧠',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Varför det här angår dig som lärare',
        content:
          'Du behöver inte vara teknikentusiast för att AI ska ha en direkt påverkan på ditt arbete. Det räcker med att dina studerande använder AI-verktyg när de löser uppgifter, skriver inlämningar och förbereder sina LIA-perioder – vilket de förmodligen redan gör, oavsett om du har diskuterat det eller inte.\n\nDet förändrar din situation på ett fundamentalt sätt. Du arbetar i en miljö där ett kraftfullt verktyg redan används, utan att spelreglerna är satta. Det är din uppgift som lärare att förstå verktyget tillräckligt väl för att sätta rimliga regler, bedöma studerandenas faktiska kompetens och se till att AI används på ett sätt som faktiskt stöder lärandet – snarare än kortsluter det.\n\nDen här modulen ger dig den tekniska grundförståelse du behöver – inte mer, och inte mer teknisk än nödvändigt. Fokus är vad AI faktiskt gör, och vad det innebär för din undervisning och dina bedömningar.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Sannolikhetsbaserad textgenerering – lärarens förklaring',
        content:
          'En stor språkmodell förutsäger statistiskt vilket ord som statistiskt sett passar bäst i ett givet sammanhang. Den har lärt sig detta av gigantiska textmängder. Den resonerar inte, den förstår inte och den "vet" inte – den mönstermatchar.\n\nDetta har direkta pedagogiska konsekvenser:\n\nAI kan producera välformulerad text om ett ämne utan att ha den bakomliggande förståelsen. Det innebär att en studerandes inlämning kan låta kompetent utan att studeranden har lärt sig det du avsett. Välskrivna meningar är inte evidens för förståelse.\n\nAI kan inte resonera logiskt, hantera ny information utanför träningsdatan eller lösa genuint komplexa problem. Det innebär att uppgifter som kräver tillämpad situationsspecifik analys fortfarande utmanar studeranden på ett sätt som AI inte enkelt kan ersätta.\n\nAI hallucinerar. Den hittar på faktauppgifter som låter korrekta. Det innebär att studerande som förlitar sig på AI utan källkritik riskerar att redovisa felaktig information med hög säkerhet.',
        items: [
          'AI mönstermatchar text – den förstår eller resonerar inte',
          'Välformulerade meningar = inte evidens för studerandens förståelse',
          'Uppgifter som kräver situationsspecifik analys är svåra att AI-generera',
          'AI hallucinerar faktauppgifter – källkritik är nödvändigt',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Inlämningen som lät kunnig men var tom',
        content:
          'En lärare i arbetsrätt på en KY-utbildning inom HR ger en skriftlig uppgift: Analysera ett givet anställningsfall utifrån de tre centrala principer vi diskuterade under modul 3.\n\nEn studerande lämnar in ett välformulerat dokument på tre sidor. Texten nämner alla tre principerna med korrekt terminologi och strukturerade argument. Det ser ut som en stark prestation.\n\nVid det muntliga seminariet ombeds den studerande att fördjupa sin analys av en av principerna. Det visar sig att hen inte kan förklara principen med egna ord, inte kan koppla den till ett nytt exempel och inte vet var gränsen går.\n\nDet är inte i sig konstigt – studenter redovisar ibland mer än de förstår. Men i det här fallet är dokumentet troligtvis AI-genererat på ett sätt som innebär att den studerande knappt läst det. Det är inte evidens för lärande.\n\nLösningen är inte att förbjuda AI. Det är att designa examinationsformer där den bakomliggande förståelsen är synlig – muntlig komplettering, processpresentation, stegvis redovisning av analytisk process.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd bland lärare',
        content: '',
        items: [
          '"Om jag inte använder AI behöver jag inte förstå det" → Dina studerande använder det oavsett',
          '"AI-genererat syns alltid" → Det syns ofta inte, och AI-detektorer är opålitliga',
          '"Förbudsregler löser problemet" → Förbud utan pedagogisk lösning driver användning under ytan',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'AI-detektorer är inte tillförlitliga',
        content:
          'Det finns kommersiella verktyg som hävdar sig kunna identifiera AI-skriven text. Forskning visar att dessa verktyg har hög felfrekvens – de flaggar mänsklig text som AI-genererad och missar AI-genererad text. Att fatta disciplinbeslut baserat på ett AI-detektionsverktyg är inte godtagbart. Bedömning av akademisk integritet kräver mänsklig analys och i tveksamma fall ett samtal med studeranden.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på den examinationsform du använder mest just nu. I vilken grad mäter den studerandenas faktiska förståelse – och i vilken grad kan ett välgenererat AI-svar klara den utan att studeranden har lärt sig det du avsett? Vad skulle du behöva ändra för att göra din examination mer lärbevisande?',
      },
    ],
  },

  {
    id: 2,
    title: 'Kontext och minnesgränser i undervisningen',
    subtitle: 'Varför AI "tappar tråden"',
    duration: '',
    icon: '💾',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'En teknisk begränsning med pedagogiska konsekvenser',
        content:
          'En av de vanligaste frustrationerna hos studerande som börjar använda AI-verktyg mer systematiskt är att systemet verkar "glömma" vad de pratat om. En instruktion de angav i början av en lång session ignoreras plötsligt. Ett krav de upprepat tre gånger verkar inte längre gälla.\n\nOm din studerande inte förstår varför det händer gör de fel saker som svar: de skyller på dåligt formulerade frågor, byter verktyg i onödan eller ger upp och lämnar in det första ofullständiga utkastet.\n\nAtt förstå kontextfönstret är en grundläggande digital kompetens i en tid när AI-verktyg används i lärprocesser. Det är din uppgift som lärare att ge studerande den förståelsen – inte som ett tekniskt exkursion, men som en del av att lära dem använda verktyg på ett genomtänkt sätt.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Kontextfönstret – för lärare och studerande',
        content:
          'Varje AI-konversation har ett "kontextfönster" – en begränsad mängd text som systemet kan hålla i minnet under en session. All text som skrivs – frågor, svar, instruktioner, dokument – tar plats i detta fönster. När det är fullt trängs den äldsta informationen ut.\n\nFör studerande som arbetar med långa uppgifter – att analysera ett fallstudiedokument, att iterativt revidera ett examensarbete, att bygga upp ett komplicerat resonemang – innebär detta att tidiga instruktioner och krav kan försvinna ur kontexten under arbetets gång.\n\nFör dig som lärare är det relevanta att förstå att studerandens interaktion med AI inte är som att samtala med en kunnig person som minns allt ni diskuterat. Det är mer som ett samtal med en assistent som arbetar från ett whiteboard med begränsad yta – och som inte berättar när informationen börjar raderas.',
        items: [
          'Kontextfönstret = AI:s aktiva arbetsminne; alltid begränsat',
          'Långa sessioner riskerar att tidiga krav och instruktioner trängs ut',
          'AI:n signalerar inte när information försvunnit ur kontexten',
          'Separata sessioner per deluppgift ger bättre resultat än en lång session',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Examensarbete i delar',
        content:
          'En studerande arbetar med ett examensarbete på 15 poäng. Hon har bestämt sig för att använda AI som skrivcoach – hon presenterar sin disposition, sina frågeställningar och sina metodologiska val, och ber sedan AI att ge återkoppling på varje kapitel i tur och ordning.\n\nEfter tre kapitel börjar AI:n ge återkoppling som inte längre relaterar till de ursprungliga frågeställningarna. Kapitel fyra får generisk feedback som lika gärna kunde gälla ett annat examensarbete. Studeranden är förvirrad och tänker att hon formulerade sig fel.\n\nProblemet är kontextfönstret. Den ursprungliga dispositionen och de specifika frågeställningarna har trängts ut av det växande kapitelinnehållet.\n\nVad hon borde göra: Inleda varje ny session med en komprimerad sammanfattning av examensarbetets syfte och specifika frågeställningar. Behandla varje kapitel i en separat, välstrukturerad session. Spara sin "basinstruktion" i ett dokument och klistra in den i varje ny session.\n\nDetta är hanterbar information att ge studerande i din kursintroduktion, om du väljer att tillåta AI-stöd.',
      },
      {
        id: '2-concept2',
        type: 'concept',
        title: 'Att lära studerande använda AI strukturerat',
        content:
          'Om du tillåter AI-stöd i din kurs är det pedagogiskt effektivare att explicit undervisa om hur man använder verktyget korrekt än att anta att studerande räknar ut det själva.',
        items: [
          'Introducera kontextfönstret som ett begrepp i din kursintroduktion',
          'Ge exempel på bra och dålig sessionsstrategi för olika uppgiftstyper',
          'Kräv att studerande dokumenterar sina AI-interaktioner om AI är tillåtet',
          'Designa uppgifter som synliggör processen, inte bara slutprodukten',
        ],
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI minns vad vi diskuterade i förra sessionen" → Varje session är fristående utan explicit minnesfunktion',
          '"En lång konversation ger bättre sammanhang" → Långa sessioner spädas ut; kortare är ofta bättre',
          '"Om AI inte nämner att det glömt är allt OK" → AI:n signalerar inte sina egna minnesbegränsningar',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'Dokumentera processen, inte bara resultatet',
        content:
          'Om du tillåter AI-stöd i uppgifter är det pedagogiskt svagt att bara bedöma slutprodukten. Kräv att studerande dokumenterar sin process: vilka frågor de ställde, hur de itererade, vad de behöll och vad de ändrade. Det gör lärprocessen synlig och minskar risken för AI-beroende utan förståelse.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur informerar du i dag dina studerande om hur de förväntas använda digitala hjälpmedel i dina kurser? Har du explicit diskuterat AI-verktyg – antingen som tillåtna verktyg med specifika regler, eller som otillåtna med förklaringar varför? Vad behöver du förtydliga för dina studerande inför nästa kursstart?',
      },
    ],
  },

  {
    id: 3,
    title: 'Kursplanering och undervisningsdesign med AI',
    subtitle: 'Att beställa pedagogiskt användbar output',
    duration: '',
    icon: '✏️',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'AI som pedagogisk assistent',
        content:
          'AI kan vara ett genuint tidsbesparande verktyg i din planeringsvardag – om du vet hur du formulerar dina instruktioner. Att be AI "hjälp mig planera en kurs om hållbarhet" ger ett generiskt svar som kräver nästan fullständig omarbetning. Att ge en väldefinierad instruktion med rätt kontext kan ge ett arbetsversion som du faktiskt kan bygga vidare på.\n\nSom lärare har du en fördel: du vet precis vad din målgrupp behöver, vad kursmålen är och vilket sammanhang undervisningen sker i. Den kunskapen är det som gör AI-stödet relevant och specifikt – den finns inte i AI:n, du måste tillföra den.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Instruktionens fyra element för lärare',
        content:
          'Precis som för andra yrkesroller bygger en bra AI-instruktion på fyra element:\n\nRoll tydliggör vems perspektiv AI:n ska anta. "Du är en erfaren YH-pedagog med specialisering inom arbetslivsorienterad utbildning" ger ett annat svar än "du är en lärare".\n\nKontext är avgörande för lärare: målgruppens förkunskaper, kursens plats i programmet, kopplingen till arbetslivet, studerandegrupp, LIA-periodens upplägg.\n\nUppgift ska vara specifik: inte "planera lektion" utan "skriva tre konkreta lärmoment för en tvåtimmarslektion om dokumentation i vård, anpassad för studerande med 6 månaders LIA-erfarenhet".\n\nBegränsning är extra viktig för pedagogiska uppgifter: "undvik teoriexempel utan koppling till arbetslivet", "inga uppgifter som kan lösas utan egna erfarenheter", "kräv reflektion, inte återgivning".',
        items: [
          'Roll: Vilken pedagogisk kompetens ska AI:n anta?',
          'Kontext: Målgrupp, förkunskaper, programkontext, LIA-koppling',
          'Uppgift: Specifikt format, längd och pedagogiskt syfte',
          'Begränsning: Undvik teoriexempel, generaliseringar, icke-yrkesanknutna uppgifter',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Lektionsplanering: svag vs. väldefinierad instruktion',
        content:
          '❌ Svag instruktion:\n"Hjälp mig planera en lektion om kommunikation på arbetsplatsen."\n\nResultat: Generisk lektion med teoripunkter om kommunikationsmodeller, inga specifika yrkeskopplingar, inget som är anpassat till studerandegruppen.\n\n✅ Väldefinierad instruktion:\n"Du är en erfaren YH-pedagog inom vård och omsorg. Jag ska hålla en 90-minuters lektion om svår kommunikation – att hantera konflikter och kommunicera med närstående i kris – för studerande på termin 3 av en undersköterske-utbildning. Studerandena har just avslutat 8 veckor LIA på äldreboende och har konkreta erfarenheter. Planera ett lektionsupplägg som utgår från deras LIA-erfarenheter, som inte kräver föreläsningstid om teori de redan sett i praktiken, och som avslutas med en bedömningsbar reflektion. Inga rollspel utan förankring i verkliga situationer."\n\nResultat: En lektionsplan som faktiskt är anpassad till den specifika gruppen och använder deras erfarenheter som råmaterial.',
      },
      {
        id: '3-concept2',
        type: 'concept',
        title: 'AI för examination och uppgiftsdesign',
        content:
          'AI är särskilt användbart för att generera varianter av examinationsuppgifter och för att testa om en uppgift faktiskt kräver förståelse eller om den är AI-lösbar.',
        items: [
          'Be AI lösa din uppgift – svaret visar hur AI-robust den är',
          'Generera varianter av case-uppgifter för att undvika kopiering mellan grupper',
          'Skapa bedömningsmatriser med specifika kriterier för din kurs',
          'Ta fram alternativa examinationsformer för studerande med anpassningar',
        ],
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI vet vad min kurs handlar om" → AI vet ingenting om din specifika kurs utan att du berättar',
          '"AI-genererade uppgifter fungerar direkt" → Uppgifter kräver alltid pedagogisk kvalitetsgranskning',
          '"AI kan designa bedömning åt mig" → Bedömningsdesign kräver din ämnesexpertis och kännedom om studerandegruppen',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'Testa alltid om AI kan lösa din uppgift',
        content:
          'Innan du använder en examinationsuppgift: be ett AI-verktyg lösa den. Om svaret är tillräckligt bra för att passera din bedömning utan att studeranden arbetat med kursmaterialet, behöver uppgiften omdesignas. Det är inte ett negativt omdöme om uppgiften – det är ett nödvändigt kvalitetskontrollsteg i en tid när studerande har tillgång till dessa verktyg.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Välj en av dina nuvarande examinationsuppgifter och prova att be ett AI-verktyg lösa den. Hur bra är svaret? Vad saknar det? Vad säger det om uppgiftens förmåga att mäta faktisk inlärning kontra ytlig textproduktion? Vad skulle du ändra?',
      },
    ],
  },

  {
    id: 4,
    title: 'Perspektiv och studentröster',
    subtitle: 'AI som pedagogiskt verktyg för perspektivtagning',
    duration: '',
    icon: '🎭',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Att se kursen med studerandenas ögon',
        content:
          'En av de svåraste sakerna som erfaren lärare är att minnas hur det känns att inte förstå – att återerövra nybörjarperspektivet. Med åren ackumuleras expertis som gör det genuint svårt att se vad i ett material som är otydligt, vad i en uppgiftsbeskrivning som är tvetydig eller vad i en bedömningsmatris som upplevs som godtycklig.\n\nPersonasimuleringar med AI är ett sätt att metodiskt testa material, uppgifter och kommunikation från specifika studerandeperspektiv – en studerande med dyslexi, en med begränsad förkunskap, en med svenska som andraspråk, en med fulltidsarbete vid sidan om studierna. Det ersätter inte verkliga samtal med studerande – men det är ett snabbt sätt att identifiera uppenbara friktionspunkter innan kursmaterialet distribueras.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'Pedagogiska personas',
        content:
          'Att ge AI:n ett specifikt studerandeperspektiv och be den granska ditt material från det perspektivet aktiverar relevanta mönster i dess träningsdata om hur olika grupper interagerar med utbildningsmaterial. Resultatet är inte ett auktoritativt omdöme – det är ett komplement till din pedagogiska intuition.',
        items: [
          '"Du är en studerande med dyslexi – hur upplever du den här instruktionen?"',
          '"Du är en studerande med svenska som andraspråk – vilka ord och fraser är svårast att förstå?"',
          '"Du är en studerande med full daglig praktik och begränsad studietid – hur prioriterar du det här materialet?"',
          '"Du är en studerande som missade de tre senaste lektionerna – vad saknar du för att förstå den här uppgiften?"',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Uppgiftsinstruktion som missades',
        content:
          'En lärare skriver en examinationsuppgift med en instruktion hon anser är tydlig: Analysera det bifogade falldokumentet med hjälp av de tre bedömningskriterier vi diskuterade under dag 2. Din analys ska visa att du kan tillämpa kriterierna på ett verkligt fall, inte bara återge dem.\n\nHon ber AI:n granska instruktionen med perspektivet: "Du är en studerande med svenska som andraspråk som missade lektion dag 2. Identifiera tre delar av instruktionen som är otydliga för dig."\n\nAI:n pekar på: (1) "falldokumentet" – vilket dokument? Det är bifogat men inte benämnt i instruktionen. (2) "de tre bedömningskriterierna vi diskuterade" – utan närvaro på dag 2 existerar dessa inte. (3) "verkligt fall" – oklar term för en studerande som aldrig arbetat i branschen.\n\nInstruktionen justeras: ett tydligare namn på bifogat dokument, kriterierna listade direkt i instruktionen, och "verkligt fall" förtydligat med ett konkret exempel på vad det innebär.\n\nProblemet hade inte behövt hittas av en förvirrad studerande på inlämningsdagen.',
      },
      {
        id: '4-concept2',
        type: 'concept',
        title: 'AI som motpart i pedagogiska samtal',
        content:
          'Personas kan också användas för att förbereda dig för svåra pedagogiska situationer:',
        items: [
          '"Du är en studerande som upplevt din bedömning som orättvis – vilka frågor ställer du?"',
          '"Du är en LIA-handledare som är skeptisk till YH-utbildningens relevans – vad saknar du?"',
          '"Du är en studerande som är omotiverad och har hög frånvaro – vad hindrar dig?"',
        ],
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI kan simulera hur en specifik studerande tänker" → AI simulerar mönster, inte individer',
          '"Om AI inte pekar på problem finns det inga" → AI:ns analys är ett komplement, inte uttömmande',
          '"Perspektivanalys ersätter samtal med studerande" → Det är ett förberedelsverktyg, inte ett substitut',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Söka utmaning, inte bekräftelse',
        content:
          'Det är lätt att använda perspektivsimuleringar för att bekräfta att ens material är bra. Det analytiska värdet ligger i att aktivt be AI:n granska med ett kritiskt perspektiv – en skeptisk studerande, en med svåra förutsättningar, en som är pressad på tid. Det är de obekväma svaren som förbättrar kursen.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Välj ett kursmaterial du har – en lektionssida, en uppgiftsinstruktion, en bedömningsmatris. Välj en studerandegrupp i din kurs som du upplever har extra svårt med materialet och skriv en AI-instruktion som ber AI:n granska materialet från den gruppens perspektiv. Vad identifierar AI:n som du inte hade sett?',
      },
    ],
  },

  {
    id: 5,
    title: 'AI-stöd i bedömning och återkoppling',
    subtitle: 'Möjligheter, begränsningar och ditt professionella ansvar',
    duration: '',
    icon: '🤖',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Bedömning som kärnkompetens',
        content:
          'Bedömning och återkoppling är kärnuppgifter i läraryrket – och de är ofta de mest tidskrävande. Det är förståeligt att AI-verktyg som lovar att automatisera delar av detta arbete väcker intresse. Men det är också ett område där entusiasmen riskerar att springa iväg från den pedagogiska och juridiska verkligheten.\n\nAI kan vara ett genuint stöd i formativa processer – att generera preliminär återkoppling, att identifiera mönster i studerandes svar, att ta fram bedömningsmatriser. Men summativ bedömning – examinationsresultat som avgör om en studerande är godkänd – är ett juridiskt och professionellt ansvar som inte kan delegeras till ett system.\n\nDen här modulen ger dig ett ramverk för vad AI faktiskt kan hjälpa dig med i bedömningsarbetet – och var gränsen måste gå.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Vad AI kan och inte kan i bedömning',
        content:
          'AI kan vara ett stöd i formativ bedömning – processorienterad återkoppling som hjälper studeranden förbättra sitt arbete. Det kräver att du definierar kriterier tydligt, granskar AI:ns återkoppling innan den distribueras, och bevarar din professionella bedömning av det sammantagna lärandet.\n\nAI kan inte ersätta summativ bedömning av kompetens. Kompetensbedömning kräver kontextuell förståelse av studerandens lärprocess, av vad ett svar faktiskt visar i relation till kursmålen, och av studerandens individuella förutsättningar. Det är din uppgift som lärare – inte ett algoritmproblem.',
        items: [
          'Kan: Generera formativ återkoppling på skriftliga utkast mot definierade kriterier',
          'Kan: Identifiera mönster i studerandesvar och peka på vanliga felförstånd',
          'Kan: Ta fram bedömningsmatriser och återkopplingsfrasbank',
          'Kan inte: Bedöma summativt om en studerande uppnått kursmål',
          'Kan inte: Ta hänsyn till lärprocessen och individuell progression',
          'Kan inte: Bära juridiskt ansvar för betygsbeslut',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Formativ återkoppling i praktiken',
        content:
          'En lärare på en KY-utbildning i redovisning tar emot 22 utkast till en inlämningsuppgift. Alla ska få individuell skriftlig återkoppling innan de lämnar in sin slutversion. Det är 3–4 sidor per studerande, totalt 70–90 sidor text att läsa och kommentera.\n\nHon formulerar en tydlig instruktion till AI:\n\n"Du är en erfaren lärare i redovisning. En studerande på en KY-utbildning har lämnat in ett utkast till en analys av ett årsredovisningsfall. Bedömningskriterierna är: (1) korrekt tillämpning av K3-regelverket, (2) tydlig koppling mellan siffror och slutsatser, (3) eget analysperspektiv bortom ren rapportering. Ge tre konkreta förbättringsförslag baserade på utkastet. Var specifik – peka på textpartier, inte allmänt. Skriv som om du talar direkt till studeranden."\n\nHon läser varje AI-genererat svar, justerar för sitt eget pedagogiska omdöme och lägger till en personlig kommentar. Tidsåtgången minskar med ungefär 60 procent utan att återkopplingens kvalitet sjunker.\n\nViktig skillnad: Slutbetyget sätter hon själv, baserat på slutversionen. AI var ett formuleringsverktyg, inte en bedömare.',
      },
      {
        id: '5-concept2',
        type: 'concept',
        title: 'Juridiska och etiska gränser',
        content:
          'Betygssättning är ett myndighetsutövande. Det innebär tydliga juridiska krav:',
        items: [
          'Betygsbeslut kan inte delegeras till ett AI-system',
          'Studeranden har rätt att veta hur deras prestationer bedömts',
          'Om AI används i formativ återkoppling ska det kommuniceras tydligt',
          'Studerandedata som används som indata i AI-verktyg kräver rättslig grund under GDPR',
        ],
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"Om jag granskar AI:ns betygsbeslut är det mitt beslut" → Granska substantiellt, inte formellt – ett snabbt godkännande är inte ett eget beslut',
          '"AI:n är objektiv och konsekvent i bedömning" → AI bedömer inte mot kursmål, den mönstermatchar text',
          '"Det räcker att studerandedata är anonymiserad i AI-verktyget" → Anonymisering påverkar inte behandlingens rättsliga krav under GDPR',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Summativ bedömning är alltid ditt ansvar',
        content:
          'Det finns ingen pedagogisk, juridisk eller etisk modell inom yrkeshögskolan som tillåter att ett AI-system fattar slutbetygsbeslut. Att låta AI föreslå ett betyg som du sedan godkänner utan substantiell egen analys är inte ett acceptabelt förfarande. Betygssättning kräver din professionella kunskap om kursmålen, materialet och studerandens lärprocess.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på det mest tidskrävande bedömningsarbetet i din kurs. Vilka delar av det arbetet är formulering och strukturering av återkoppling – och vilka delar kräver din professionella bedömning? Hur skulle du kunna använda AI för att hantera det förra utan att kompromissa med det senare?',
      },
    ],
  },

  {
    id: 6,
    title: 'AI och LIA-handledning',
    subtitle: 'Arbetsplatsförlagd utbildning i AI-tid',
    duration: '',
    icon: '⚡',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'LIA i en ny kontext',
        content:
          'LIA – Lärande i Arbete – är yrkeshögskolans mest distinkta pedagogiska element. Det är här som teori möter praktik, och det är ofta under LIA-perioder som det faktiska yrkeskunnandet formas. Att navigera LIA-handledning kräver kommunikation med arbetsgivare och handledare med vitt skilda förutsättningar, uppföljning av studerandens progression på distans, och bedömning av kompetens i en kontext du som lärare inte kan observera direkt.\n\nAI förändrar denna kontext på flera sätt. Studerande använder AI-verktyg på LIA-platsen – ibland välkomnat av arbetsgivaren, ibland omotiverat, ibland utan att någon vet om det. Och AI kan vara ett genuint stöd i din administration av LIA-processen.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'AI som stöd i LIA-administrationen',
        content:
          'LIA-handledning genererar mycket administrativt arbete: kommunikation med handledare, uppföljningsmöten, bedömningsdokumentation, återkoppling på LIA-dagböcker, sammanfattning av handledaromdömen. Delar av detta arbete är tidskrävande formuleringsarbete som AI kan stödja.',
        items: [
          'Utkast till kommunikation med LIA-handledare anpassad efter bransch och kontext',
          'Mall för uppföljningsfrågor vid LIA-besök med utgångspunkt i specifika kursmål',
          'Sammanfattning och mönsteridentifiering i LIA-dagböcker',
          'Förslag till återkoppling på LIA-rapport baserat på definierade bedömningskriterier',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'Studerandes AI-användning på LIA-platsen',
        content:
          'En studerande på en KY-utbildning inom digital marknadsföring är på LIA hos en medelstor e-handelsbyrå. Han använder AI-verktyg dagligen för att producera annonstext, analysera kampanjdata och skriva rapporter – precis som resten av byrån gör. Det är ett kompetensområde som byrån aktivt rekryterar för.\n\nSamtidigt skickar han sina LIA-dagböcker, skrivna med AI-stöd, till sin handledande lärare. Läraren märker en kvalitativ konsistens och reflexionsstil som avviker från hur studeranden kommunicerat tidigare.\n\nHär finns en pedagogisk spänning: AI-kompetens är en verklig och värderad yrkeskompetens i marknadsföringsbranschen. Att använda AI på LIA-platsen är inte fusk – det är yrkesrelevant. Att använda AI för att producera sin LIA-dagbok utan reflexion är ett annat fenomen.\n\nDin uppgift är att definiera vad LIA-dokumentationen ska mäta – om det är studerandens reflexionsförmåga och lärprocess, ska det också kommuniceras tydligt till studeranden.',
      },
      {
        id: '6-concept2',
        type: 'concept',
        title: 'Att kommunicera AI-regler för LIA-perioden',
        content:
          'Inför en LIA-period bör du ha en tydlig kommunikation med studeranden om AI-verktyg:',
        items: [
          'Vad är tillåtet AI-stöd på LIA-platsen? (vanligtvis: allt arbetsgivaren sanktionerar)',
          'Vad är tillåtet AI-stöd i LIA-dokumentation? (specificera tydligt)',
          'Hur ska AI-användning dokumenteras om den är tillåten i rapport/dagbok?',
          'Hur bedömer du LIA-kompetens på ett sätt som inte AI-genereras?',
        ],
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI-användning på LIA-platsen är alltid problematisk" → I många branscher är det en efterfrågad kompetens',
          '"Jag kan avgöra om LIA-dagboken är AI-skriven" → Det kan du generellt inte göra tillförlitligt',
          '"Om studeranden inte frågar behöver jag inte ta upp AI" → Otydlighet driver godtycklig tillämpning och är rättssäkerhetsproblem',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Tydliga regler är rättighetsskydd för studeranden',
        content:
          'Otydliga regler om AI-användning i LIA-dokumentation är ett rättsäkerhetsproblem. Om en studerande bestraffas för AI-användning i ett sammanhang där det inte var tydligt kommunicerat att det var otillåtet, har du ett svagt disciplinärt ärende och en studerande som med rätta uppfattar bedömningen som godtycklig. Tydlighet skyddar båda parter.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur har du kommunicerat regler om AI-verktyg inför din senaste LIA-period? Var reglerna tydliga nog för att studeranden med säkerhet visste vad som var tillåtet och otillåtet? Vad behöver förtydligas inför nästa omgång – och hur kommunicerar du det på ett sätt som når studeranden?',
      },
    ],
  },

  {
    id: 7,
    title: 'Akademisk integritet, fusk och källkritik',
    subtitle: 'Att hantera AI som utmanar traditionella spelregler',
    duration: '',
    icon: '⚖️',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'Spelreglerna har förändrats – men inte värderingarna',
        content:
          'Fusk har alltid funnits. Att kopiera från internet, att använda övriga studerandens arbete, att planera gemensamma svar under tentamina – dessa företeelser är välkända och hanterade i utbildningssystemet. AI tillför ett nytt lager av komplexitet: ett verktyg som producerar original text, på begäran, baserat på vilken som helst instruktion, på sekunder.\n\nDet förändrar inte grundvärderingen – akademisk integritet handlar fortfarande om att studeranden ska lära sig och visa vad de kan. Men det förändrar de praktiska frågorna: Vad räknas som tillåtet AI-stöd och vad räknas som fusk? Hur kommunicerar du reglerna så att de är begripliga och rättvisa? Och hur bedömer du, i tveksamma fall, om akademisk integritet har brutits?\n\nDet finns inga enkla svar – men det finns ett ramverk för att hantera frågorna på ett professionellt sätt.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Spektrumet från tillåtet stöd till fusk',
        content:
          'AI-användning i utbildningssammanhang existerar inte som binärt tillåtet/förbjudet. Det är ett spektrum som du som lärare behöver definiera per uppgift och per kurs:\n\nTydligt tillåtet: AI som stavnings- och grammatikkontroll, AI för att söka information och sedan verifiera mot primärkällor, AI för brainstorming av egna idéer som sedan bearbetas.\n\nOklart och kräver kursspecifika regler: AI för att skriva utkast som sedan redigeras, AI för att strukturera ett argument som sedan formuleras om, AI för att sammanfatta källtexter inför egen analys.\n\nTydligt otillåtet (om kurs eller uppgift inte specifikt tillåter det): Att lämna in AI-genererad text som sin egen utan väsentlig bearbetning, att använda AI under examinationstillfällen som ska mäta individuell kunskap, att låta AI lösa en uppgift utan egen förståelse.',
        items: [
          'Stavnings- och grammatikkontroll: Generellt tillåtet',
          'AI som informationskälla med egna verifieringar och citat: Tillåtet med korrekt källhänvisning',
          'AI som utkastverktyg med substantiell bearbetning: Kräver kursspecifik regel',
          'AI som produktionsverktyg för inlämning: Otillåtet om inte explicit tillåtet',
          'AI under examinationstillfälle: Otillåtet om inte explicit tillåtet',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Tre verkliga scenarion och hur du hanterar dem',
        content:
          'Scenario 1 – Den tydliga regeln saknades:\nEn studerande lämnar in en rapport som ser AI-genererad ut. Du konfronterar hen. Studeranden svarar: "Men du sa aldrig att det var förbjudet." Du kontrollerar kursplanen – och hen har rätt. Det står inget om AI. Disciplinärende är svårt att driva. Lärdomen: tydliga AI-regler i kursintroduktionen är inte valfritt.\n\nScenario 2 – Oklart fall:\nEn studerande har använt AI för att strukturera sina argument och sedan skrivit texten själv. Det slutliga arbetet är deras eget men processen stöddes av AI mer än du hade räknat med. Vad är din grund för bedömning? Om din regel inte specificerat processanvändning av AI är detta juridiskt oklart mark.\n\nScenario 3 – Tydligt fusk:\nEn studerande lämnar in exakt samma formuleringar i tre separata uppgifter under en termin, alla med en konsistens som starkt indikerar AI-produktion. Studeranden nekar. Du har inte ett AI-detektionsverktyg att luta dig mot – och bör inte använda ett. Du har ett samtal om att förklara sina svar med egna ord, en pedagogisk bedömning av förståelse och en process som involverar utbildningsledningen.',
      },
      {
        id: '7-concept2',
        type: 'concept',
        title: 'Källkritik i AI-tid',
        content:
          'Källkritik är en akademisk grundkompetens som AI-användning gör mer, inte mindre, relevant. AI kan producera övertygande text med felaktiga källhänvisningar, konstruerade citat och hallucinererade fakta. Det är din uppgift att säkerställa att studeranden förstår detta:',
        items: [
          'AI ska aldrig citeras som en källa för faktapåståenden',
          'Faktapåståenden från AI ska alltid verifieras mot primärkällan',
          'Väl formulerat AI-svar ≠ korrekt information',
          'Källkritik mot AI-output kräver samma rigorositet som mot all annan källa',
          'Studerande ska kunna förklara och försvara innehållet i sina inlämningar',
        ],
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om fusk och AI',
        content: '',
        items: [
          '"AI-detektorer avslöjar AI-skriven text" → Dessa verktyg har hög felfrekvens och ger inte tillräckligt underlag för disciplinbeslut',
          '"Att förbjuda AI löser problemet" → Förbud utan pedagogisk lösning och uppföljning driver användning under ytan',
          '"AI-fusk är alltid uppenbart" → Det är det ofta inte – och det behöver det inte vara om du designar examination rätt',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Disciplinärenden kräver process och dokumentation',
        content:
          'Om du misstänker att en studerande brutit mot regler för akademisk integritet: dokumentera konkreta observationer, involvera utbildningsledningen, ge studeranden möjlighet att förklara sin process. Att fatta ensidiga beslut baserat på en känsla, ett AI-detektionsresultat eller ytlig textanalys är juridiskt svagt och riskerar att skada en studerande felaktigt.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Har du formulerat tydliga och specifika AI-regler för dina kurser? Specificerar de vad som är tillåtet och otillåtet, inte bara generellt utan per uppgiftstyp? Om en studerande i dag frågade vad som gäller – skulle svaret vara entydigt? Om inte: vad behöver du skriva för att göra det entydigt?',
      },
    ],
  },

  {
    id: 8,
    title: 'AI i din lärarprofession',
    subtitle: 'Strategisk orientering och professionell identitet',
    duration: '',
    icon: '🎯',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'Din professionella roll har inte förändrats – kontexten har',
        content:
          'Du är lärare. Det innebär att du är ansvarig för att dina studerande faktiskt lär sig det de förväntas lära sig, att du bedömer deras kompetens på ett rättssäkert och pedagogiskt välgrundat sätt, och att du navigerar en komplex relation mellan kursmål, studerandebehov, LIA-arbetsgivarens förväntningar och utbildningsorganisationens krav.\n\nInget av det har förändrats. Vad som har förändrats är att ett kraftfullt textproduktionsverktyg nu är tillgängligt för dig och dina studerande – och att det ställer nya krav på hur du designar examination, kommunicerar regler och tänker kring vad din undervisning faktiskt mäter.\n\nDen strategiska frågan för dig som lärare är inte om du ska använda AI. Det är hur du väljer att relatera till det på ett sätt som stärker det som är unikt värdefullt i din profession: den pedagogiska relationen, den ämnesexpertis som ger kontext, det professionella omdömet om vad som är tillräcklig kompetens.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Vad AI kan och inte kan i undervisning',
        content:
          'En tydlig bild av vad AI faktiskt kan hjälpa dig med – och vad som alltid förblir ditt – är grunden för ett strategiskt förhållningssätt:',
        items: [
          'AI kan: formulera utkast, generera varianter, strukturera material, ge formativ återkoppling',
          'AI kan: simulera perspektiv, testa uppgifters AI-robusthet, ta fram bedömningsmatriser',
          'Du kan: bedöma kompetens substantiellt, känna din studerandegrupp, tillgodose individuella behov',
          'Du kan: bygga den pedagogiska relation som möjliggör lärande bortom textproduktion',
          'Du kan: göra professionella bedömningar som tar hänsyn till hela lärprocessen',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Att kommunicera ditt förhållningssätt till studeranden',
        content:
          'En lärare börjar kursen med att explicit diskutera AI med sina studerande: "Det här är reglerna, det här är varför de ser ut så, och det här är vad jag faktiskt försöker mäta med mina examinationsuppgifter."\n\nHon förklarar att hennes mål inte är att producera en inlämning – det är att säkerställa att studeranden kan tillämpa kursmålens kompetens i en arbetslivssituation. Att skriva en analys med AI-stöd utan att förstå analysen hjälper studeranden när de hamnar hos en arbetsgivare och förväntas göra precis detta.\n\nDen konversationen förändrar dynamiken. Studeranden förstår varför reglerna finns, inte bara vad de är. Det minskar benägenheten att fuska och ökar benägenheten att använda AI på ett sätt som faktiskt stöder lärandet.\n\nDet är en pedagogisk investering på 20 minuter i kursstarten som minskar oklarheter hela terminen.',
      },
      {
        id: '8-concept2',
        type: 'concept',
        title: 'Att uppdatera sin undervisning kontinuerligt',
        content:
          'AI-verktyg förändras snabbt. Din inställning och dina regler behöver vara levande, inte statiska:',
        items: [
          'Granska dina examinationsuppgifter årligen – testa om AI kan lösa dem',
          'Diskutera med kollegor hur ni hanterar AI-frågor konsekvent i programmet',
          'Håll dig uppdaterad kring vad som händer i din bransch – AI-kompetens förändras',
          'Inkludera AI-etik som ett explicit lärmoment, inte bara en regeltext',
        ],
      },
      {
        id: '8-concept3',
        type: 'concept',
        title: 'Din professionella identitet i AI-tid',
        content:
          'Det som gör dig som lärare oersättlig är inte textproduktion. Det är det pedagogiska omdömet, ämnesdjupet, relationen till studeranden och förmågan att bedöma kompetens i en verklig kontext. Dessa är AI-robusta kompetenser.',
        items: [
          'Pedagogisk relation: AI kan inte ersätta den mänskliga faktorn i lärande',
          'Ämnesexpertis med kontext: Du vet vad kompetens ser ut som i verkliga situationer',
          'Professionellt omdöme: Du bedömer progression och potential, inte textproduktion',
          'Etisk yrkeskompass: Du vet vad det innebär att ha rätt kompetens – inte bara verka ha det',
        ],
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Avslutande reflektion',
        content:
          'Vad har den här kursen förändrat i hur du ser på AI i din undervisning? Vad är dina tre viktigaste konkreta åtgärder – en för dina examinationsuppgifter, en för hur du kommunicerar AI-regler till dina studerande, och en för hur du eventuellt använder AI som stöd i ditt eget arbete?\n\nSkriv ner svaret. Det är ditt examensunderlag – och utgångspunkten för hur du som lärare navigerar AI på ett professionellt och välgrundat sätt.',
      },
    ],
  },
]
