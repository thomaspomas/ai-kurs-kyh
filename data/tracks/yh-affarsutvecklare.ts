import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'AI som affärsutvecklingsverktyg',
    subtitle: 'Vad tekniken gör – och vad den inte gör',
    duration: '',
    icon: '🚀',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Varför det här angår dig som affärsutvecklare',
        content:
          'Affärsutveckling handlar om att identifiera möjligheter, testa antaganden och driva förändring under osäkerhet. AI-verktyg förändrar nu hastigheten och kostnaden för att göra just det – att ta fram underlag, analysera marknader, skissa på lösningar och iterera på idéer.\n\nDet är inte längre en fråga om huruvida AI påverkar din roll. Frågan är om du förstår verktyget tillräckligt väl för att använda det klokt – och för att se när det leder dig fel.\n\nDen här modulen ger dig den tekniska grundförståelse du behöver som affärsutvecklare. Inte mer teknisk än nödvändigt, men tillräcklig för att du ska kunna fatta välgrundade beslut om när och hur AI ska integreras i ditt arbete.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Vad en stor språkmodell faktiskt gör',
        content:
          'En stor språkmodell (LLM) förutsäger statistiskt vilket ord som passar bäst i ett givet sammanhang, baserat på mönster i enorma textmängder. Den resonerar inte som en människa – den mönstermatchar.\n\nFör dig som affärsutvecklare innebär det tre saker:\n\nFörst: AI är utmärkt på att strukturera, sammanfatta och formulera – men den "vet" inte om analysen är faktamässigt korrekt. Den kan producera övertygande marknadsanalyser fyllda med felaktiga siffror.\n\nAndra: AI saknar aktuell information om din marknad om du inte ger den den. Träningsdatan har ett slutdatum, och AI:n vet ingenting om din specifika organisation, dina kunder eller din branschdynamik.\n\nTredje: AI kan inte bedöma genomförbarhet, politisk kontext eller huruvida en idé faktiskt passar er organisation. Det är ditt jobb.',
        items: [
          'AI mönstermatchar text – den resonerar inte',
          'Fakta och siffror kan vara felaktiga – verifiera alltid',
          'AI saknar kunskap om din specifika marknad och organisation',
          'Strategisk bedömning och genomförbarhet kräver mänskligt omdöme',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Marknadsanalysen som lät solid men var hål',
        content:
          'En affärsutvecklare på en YH-organisation ber ChatGPT om en marknadsanalys för en ny utbildning inom hållbar logistik. AI:n levererar ett välstrukturerat dokument med marknadsstorlekar, tillväxtprognoser och konkurrentöversikt.\n\nDokumentet ser imponerande ut. Men ingen av siffrorna har källhänvisning, och de marknadsstorleksuppgifter som anges stämmer inte med de faktiska branschrapporterna som finns att tillgå.\n\nNär affärsutvecklaren presenterar underlaget för styrelsen ställer en styrelseledamot frågor om källorna. Svaret kan inte lämnas.\n\nDet som gick fel var inte att använda AI – utan att inte verifiera det den producerade. AI är utmärkt för att skapa en första struktur och lyfta fram dimensioner att undersöka. Men siffrorna och påståendena måste granskas mot primära källor.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI i affärsutveckling',
        content: '',
        items: [
          '"AI kan göra affärsutveckling automatiskt" → AI kan stödja analys och formulering, inte ersätta strategiskt omdöme',
          '"Om AI ger ett svar med säkerhet är det troligen rätt" → AI uttrycker sig säkert oavsett om svaret är korrekt',
          '"Jag behöver förstå tekniken på djupet för att använda den" → Grundläggande konceptuell förståelse räcker för klok användning',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'Presentera aldrig AI-genererade siffror utan verifiering',
        content:
          'AI-genererade marknadsanalyser, statistik och prognoser ser övertygande ut – men kan vara helt felaktiga. I affärsutvecklingssammanhang kan felaktiga underlag leda till felaktiga investeringsbeslut, misslyckade ansökningar och förlorad trovärdighet. Använd AI för att strukturera och formulera, men verifiera alla faktapåståenden mot primära källor innan de presenteras.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på ett affärsutvecklingsprojekt du arbetat med det senaste året. Vilka delar av det projektet – analys, formulering, research, idégenerering – hade kunnat stödjas av AI? Och var i processen bedömer du att mänskligt omdöme är oersättligt? Motivera ditt svar.',
      },
    ],
    quiz: [
      {
        question: 'Varför är det riskabelt att presentera AI-genererade marknadsanalyser utan att verifiera dem?',
        options: [
          'AI får inte användas för affärsdokument',
          'AI producerar övertygande text men kan innehålla felaktiga siffror och påståenden',
          'AI-analyser är alltid föråldrade med mer än fem år',
          'AI kan inte förstå affärsterminologi',
        ],
        correctIndex: 1,
        explanation: 'AI mönstermatchar och kan producera välformuleradeanalyser med felaktiga fakta. Siffror och påståenden måste alltid verifieras mot primära källor.',
      },
      {
        question: 'Vad saknar AI som gör det svårt att analysera din specifika marknad?',
        options: [
          'Tillräcklig datorkraft',
          'Tillgång till internet',
          'Kunskap om din organisation, dina kunder och aktuell branschdynamik',
          'Förmåga att läsa PDF-dokument',
        ],
        correctIndex: 2,
        explanation: 'AI tränas på allmänna textdata med ett slutdatum. Den vet inget om din organisations specifika kontext utan att du ger den den informationen.',
      },
      {
        question: 'Vilken roll passar AI bäst i en affärsutvecklingsprocess?',
        options: [
          'Att fatta det slutliga strategiska beslutet',
          'Att ersätta marknadsundersökningar helt',
          'Att strukturera, formulera och identifiera dimensioner att undersöka',
          'Att bedöma politisk genomförbarhet inom organisationen',
        ],
        correctIndex: 2,
        explanation: 'AI är stark på att strukturera information och formulera text, men kan inte ersätta primär marknadsresearch eller bedöma organisatorisk genomförbarhet.',
      },
    ],
  },

  {
    id: 2,
    title: 'Datadrivna beslut och marknadsanalys',
    subtitle: 'AI som stöd för research och omvärldsbevakning',
    duration: '',
    icon: '📊',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'Från magkänsla till informerade beslut',
        content:
          'Affärsutveckling har alltid handlat om att fatta beslut under osäkerhet. AI förändrar inte det grundläggande förhållandet – men det förändrar hur snabbt och billigt du kan samla in och bearbeta information som underlag för dina beslut.\n\nDu kan nu på minuter strukturera en SWOT-analys, sammanfatta trender från ett trettiotal artiklar, eller generera en lista på potentiella konkurrenter att undersöka vidare. Det som tidigare tog dagar av research kan nu ta timmar – om du vet hur du ger AI rätt input och hur du kritiskt granskar det den returnerar.\n\nDen här modulen handlar om hur du konkret använder AI för research och marknadsanalys i din roll som affärsutvecklare.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Vad AI kan och inte kan göra med marknadsdata',
        content:
          'AI-verktyg är starka på att bearbeta och strukturera information du ger dem – men de kan inte ersätta primär marknadsresearch.\n\nVad AI gör bra:\nSammanfatta och strukturera stora mängder text, identifiera mönster i information du klistrar in, generera frågor att undersöka och formulera hypoteser, skapa strukturerade analysdokument baserade på material du tillhandahåller.\n\nVad AI inte gör:\nHämta aktuell marknadsdata automatiskt (om du inte har ett verktyg med webbsökning), ge tillförlitliga siffror om marknadsstorlekar eller aktörer, veta vad som händer i din bransch just nu, eller bedöma om en möjlighet faktiskt är genomförbar i er kontext.\n\nDet effektiva arbetsflödet kombinerar ditt arbete med primärkällor – branschrapporter, kundintervjuer, konkurrentsajter – med AI:s förmåga att strukturera och bearbeta det material du samlar in.',
        items: [
          'AI strukturerar och bearbetar information du ger den – den söker inte självständigt',
          'Primärresearch (intervjuer, rapporter, data) ersätts inte av AI',
          'AI är utmärkt för att generera hypoteser och analysstrukturer',
          'Kombinera dina primärkällor med AI:s bearbetningsförmåga',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Omvärldsbevakning på halva tiden',
        content:
          'En affärsutvecklare på en YH-organisation följer löpande trender inom eftergymnasial utbildning för att identifiera möjligheter för nya utbildningar. Tidigare lade hen tre timmar i veckan på att läsa branschpublikationer, myndighetsdokument och branschorganisationernas rapporter.\n\nNy arbetsmetod: hen samlar artiklar och dokument i en mapp, kopierar relevanta stycken och låter Claude sammanfatta trender, identifiera återkommande teman och flagga för ämnen som verkar växa. Sammanfattningen tar tio minuter.\n\nMen hen granskar alltid AI:ns sammanfattning mot originaldokumenten. Tre gånger under ett halvår har AI:n drog slutsatser som inte stöddes av ursprungsmaterialet – missat nyanser eller övertolkat en isolerad datapunkt som ett mönster.\n\nTidsvinsterna är reella. Men det kritiska granskningssteget är icke förhandlingsbart.',
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI och marknadsanalys',
        content: '',
        items: [
          '"AI har tillgång till aktuell marknadsdata" → Grundmodeller har ett träningsdatum och vet inte vad som hänt efter det',
          '"En AI-genererad SWOT är tillräcklig" → SWOT:en är bara så bra som den data du matar in',
          '"AI hittar alltid de relevanta konkurrenterna" → AI kan lista generella aktörer men missar nischade lokala konkurrenter du hittar via branschkontakter',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'AI-genererade branschsiffror kräver källhänvisning',
        content:
          'När AI nämner marknadsstorlekar, tillväxttakt eller branschsiffror utan källhänvisning är det ett varningstecken. Dessa siffror kan vara hallucinerade eller hämtade från föråldrade och opålitliga källor. Presentera aldrig sådana siffror i beslutsunderlag eller externa dokument utan att ha verifierat dem mot en namngiven primärkälla.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Beskriv ett specifikt research- eller analysmoment i ditt nuvarande eller senaste affärsutvecklingsarbete. Hur skulle ett AI-stött arbetsflöde ha sett ut för just det momentet – och vilka steg i det arbetsflödet hade fortfarande krävt ditt eget omdöme eller primära källor? Var konkret.',
      },
    ],
    quiz: [
      {
        question: 'Vad är den viktigaste begränsningen med att använda AI för marknadsanalys?',
        options: [
          'AI kan bara analysera engelskspråkiga marknader',
          'AI kan inte strukturera information i tabeller',
          'AI kan inte ersätta primärresearch och kan producera felaktiga siffror',
          'AI kräver att du har en databas kopplad till verktyget',
        ],
        correctIndex: 2,
        explanation: 'AI bearbetar information du ger den och kan producera välformuleradeanalyser – men kan inte ersätta kundintervjuer, branschrapporter eller aktuell primärdata.',
      },
      {
        question: 'Vad menas med att AI har ett "träningsdatum"?',
        options: [
          'AI behöver tränas av din organisation innan det kan användas',
          'AI:ns kunskap slutar vid ett visst datum och den saknar information om vad som hänt efter det',
          'AI förbättras automatiskt varje månad med ny data',
          'AI:n tränar sig på dina egna dokument',
        ],
        correctIndex: 1,
        explanation: 'Stora språkmodeller tränas på data upp till ett visst datum. De vet inte om marknadshändelser, lagändringar eller trender som inträffat efter det datumet.',
      },
      {
        question: 'Vilket arbetsflöde är mest effektivt när du använder AI för omvärldsbevakning?',
        options: [
          'Be AI sammanfatta trender utan att tillhandahålla egna källor',
          'Samla primärkällor själv och låt AI strukturera och sammanfatta dem – granska sedan resultatet kritiskt',
          'Låt AI söka på nätet och presentera det direkt i beslutsunderlaget',
          'Ersätt all research med AI för att spara tid',
        ],
        correctIndex: 1,
        explanation: 'Det effektiva arbetsflödet kombinerar din förmåga att hitta primärkällor med AI:s bearbetningsförmåga. Resultatet måste alltid granskas kritiskt.',
      },
    ],
  },

  {
    id: 3,
    title: 'AI i produkt- och tjänsteutveckling',
    subtitle: 'Från idé till prototyp snabbare',
    duration: '',
    icon: '💡',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'AI som accelerator i innovationsprocessen',
        content:
          'Produkt- och tjänsteutveckling handlar om att gå från osäkra idéer till testade lösningar – snabbt och kostnadseffektivt nog för att kunna lära sig och justera kursen. AI påverkar flera steg i den processen: idégenerering, konceptutveckling, prototypformulering och dokumentation.\n\nDen viktigaste förändringen är inte att AI ersätter din kreativitet. Det är att den sänker kostnaden för att generera och testa alternativ. När det kostar fem minuter att formulera tio olika konceptvarianter – i stället för en dag – förändras hur du kan arbeta med tidiga innovationsfaser.\n\nDen här modulen handlar om hur du konkret integrerar AI i produkt- och tjänsteutveckling utan att tappa det kritiska omdömet om vad som faktiskt är genomförbart och värdefullt.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'AI:s roll i innovationsprocessens olika faser',
        content:
          'I en typisk innovationsprocess finns det tydliga faser där AI tillför mer eller mindre värde:\n\nIdégenerering: AI är stark här. Det kostar lite att be AI generera tjugo konceptvariationer, identifiera analogier från andra branscher eller formulera problemet på tio olika sätt. Värdet är inte att AI hittar rätt idé – utan att den snabbar upp divergensfasen.\n\nKonceptutveckling: AI kan hjälpa dig att skriva ut konceptbeskrivningar, formulera värdepropositioner och skapa strukturerade beskrivningar att reagera på. Men bedömningen av vilket koncept som är värt att testa kräver kunskap om kunder, organisation och marknad som du har – inte AI.\n\nPrototypering: AI kan generera text, strukturer och innehåll för en konceptprototyp – en landningssida, ett utbildningsprogram, en tjänstebeskrivning. Den kan inte avgöra om prototypen är rätt svar på rätt problem.\n\nDokumentation och kommunikation: AI är utmärkt för att formulera business cases, sammanfatta kundinsikter och skriva projektbeskrivningar baserade på material du tillhandahåller.',
        items: [
          'Idégenerering: AI accelererar divergensfasen, inte urvalsbedömningen',
          'Konceptutveckling: AI formulerar, du bedömer genomförbarhet',
          'Prototypering: AI genererar innehåll, inte lösningsvalidering',
          'Dokumentation: AI formulerar från ditt material – det kräver dina insikter',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Tio konceptvarianter på en förmiddag',
        content:
          'En affärsutvecklare på en YH-organisation ska utveckla ett nytt korttidsprogram för yrkesverksamma. Tidigare process: en dag för att brainstorma internt, sedan workshops med potentiella deltagare.\n\nNy process med AI-stöd: affärsutvecklaren ger Claude en beskrivning av målgruppen, behovet och organisationens förutsättningar. AI genererar tio konceptvarianter med olika format, längd, leveransmodell och fokus. Det tar 45 minuter.\n\nSju av koncepten är ointressanta eller omöjliga av skäl AI inte kunde veta. Två väcker genuint nyfikenhet. En tredje är en variant ingen i teamet tänkt på.\n\nDessa tre går vidare till en snabb koncepttest med fem potentiella deltagare. Den totala tidsinvesteringen i divergensfasen har minskat från en dag till en förmiddag. Men det kritiska urvalsomdömet – vad som var genomförbart, relevant och intressant – var fortfarande mänskligt.',
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI och innovation',
        content: '',
        items: [
          '"AI genererar de bästa idéerna" → AI genererar många idéer. Vilket av dem som är bäst kräver ditt omdöme',
          '"AI-genererade prototyper kan testas med kunder direkt" → Prototyper måste granskas innan de används – AI missar ofta kontext om vad som är känsligt, lämpligt eller missvisande',
          '"AI kan bedöma om en idé kommer att fungera" → AI kan inte bedöma kundacceptans, organisationskapacitet eller marknadstiming',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'Granska AI-genererat kundkommunikationsmaterial noggrant',
        content:
          'AI kan snabbt generera marknadsföringstext, tjänstebeskrivningar och kommunikationsmaterial. Men AI känner inte din varumärkesröst, din kundrelation eller vad som är känsligt i din kontext. Material som ska kommuniceras externt till kunder eller partners måste alltid granskas och godkännas av en människa med kunskap om relationen och sammanhanget.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på en produkt eller tjänst du är med och utvecklar eller har utvecklat. Vilka faser i den processen – från idé till lansering – bedömer du skulle ha gått snabbare med AI-stöd, och var i processen var det mänskliga omdömet och kontextkunskapen mest avgörande? Motivera ditt svar med konkreta exempel.',
      },
    ],
    quiz: [
      {
        question: 'Var i innovationsprocessen tillför AI störst värde?',
        options: [
          'I det slutliga strategiska urvalet av vilket koncept att satsa på',
          'I divergensfasen – att snabbt generera många alternativ att reagera på',
          'I bedömningen av vilket alternativ som passar organisationens kapacitet',
          'I kundvalideringen av prototyper',
        ],
        correctIndex: 1,
        explanation: 'AI är stark i divergensfasen – att generera många varianter snabbt och billigt. Urval, bedömning och kundvalidering kräver mänskligt omdöme och kontextkunskap.',
      },
      {
        question: 'Varför kan AI inte avgöra vilket innovationskoncept som är bäst att satsa på?',
        options: [
          'AI kan inte generera fler än tre alternativ åt gången',
          'AI saknar kunskap om din organisations kapacitet, kundrelationer och marknadstiming',
          'AI är för långsam för att bearbeta innovationsfrågor',
          'AI är inte tränad på affärsutveckling',
        ],
        correctIndex: 1,
        explanation: 'Urvalsprocessen kräver djup kunskap om organisationens förutsättningar, kundernas faktiska behov och marknadstiming – kunskap som du har men inte AI.',
      },
      {
        question: 'Vad bör du göra innan du använder AI-genererat kundkommunikationsmaterial?',
        options: [
          'Köra det genom en andra AI för korrekturläsning',
          'Publicera det direkt eftersom AI är tränad på kommunikation',
          'Granska det mot din varumärkesröst, relationskontext och vad som är känsligt',
          'Dela det med alla i teamet för omröstning',
        ],
        correctIndex: 2,
        explanation: 'AI känner inte din varumärkesröst, dina kundrelationer eller vad som är känsligt i din kontext. Externt material kräver alltid mänsklig granskning.',
      },
    ],
  },

  {
    id: 4,
    title: 'Kundinsikt och AI-driven analys',
    subtitle: 'Förstå dina kunder snabbare – och på djupet',
    duration: '',
    icon: '🎯',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Kundinsikt som konkurrensfördel',
        content:
          'De mest framgångsrika affärsutvecklarna är de som förstår sina kunder djupare än sina konkurrenter – vad de verkligen värdesätter, var de fastnar, vad de faktiskt gör (i stället för vad de säger att de gör) och vilka problem de inte ens har formulerat ännu.\n\nAI förändrar inte behovet av den insikten. Men den förändrar hur snabbt du kan bearbeta och strukturera information du samlar in om dina kunder – intervjuanteckningar, enkätsvar, feedbackmejl, supportärenden – och hur du kan testa hypoteser om kundbeteende.\n\nDen här modulen handlar om hur du använder AI som ett analysverktyg i din kundförståelseprocess – och var det mänskliga djupet är oersättligt.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'AI för bearbetning av kunddata och kvalitativa insikter',
        content:
          'AI tillför störst värde i kundanalysen när du bearbetar redan insamlad information, inte när du försöker ersätta insamlingen.\n\nKvalitativ analys av intervjudata: Du genomför tio kundintervjuer och transkriberar dem. AI kan identifiera återkommande teman, citera relevanta delar och sammanfatta mönster – ett arbete som annars tar dagar. Men AI kan inte avgöra om ett tema är viktigt för din strategi eller om en formulering döljer ett djupare behov.\n\nEnkätanalys: AI kan gruppera öppna svar, identifiera tonalt mönster och flagga outliers. Men kontextualiseringen – varför ett mönster uppstår, vad det innebär för er tjänst – är din uppgift.\n\nHypotestestning: AI kan hjälpa dig att formulera tydliga hypoteser om kundbeteende och designa enkätfrågor för att testa dem. Att tolka resultaten kräver branschkunskap och kundrelationserfarenhet.\n\nPersonabeskrivningar: AI kan generera persona-utkast baserade på material du ger den. Att validera om de stämmer med verkligheten kräver äkta kundkontakt.',
        items: [
          'AI bearbetar insamlad data – ersätter inte kundintervjuer och primärinsamling',
          'Temaidentifiering och mönsterigenkänning: AI-stark, tolkning: mänsklig',
          'Hypotesformulering: AI hjälper till att strukturera, du ansvarar för innehållet',
          'Personabeskrivningar måste valideras mot verkliga kunder',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Från 60 intervjusvar till tre strategiska teman',
        content:
          'En affärsutvecklare på en YH-organisation har genomfört 60 kortintervjuer med potentiella studerande för att förstå drivkrafterna bakom yrkesutbildningsval. Intervjuerna är transkriberade – totalt 240 sidor text.\n\nTidigare process: tre dagars tematisk analys av hela teamet.\n\nNy process: intervjutexterna kopieras in i Claude i omgångar (med anonymisering av personuppgifter). AI ombeds identifiera återkommande teman, citera representativa citat och ranka teman efter frekvens.\n\nResultatet: tre tydliga primärteman och fyra sekundära identifieras på fyra timmar. Affärsutvecklaren validerar varje tema mot originaltexterna – och hittar ett tema AI missat för att det formulerades på ett indirekt sätt i intervjuerna.\n\nTidsvinsten är stor. Men det mänskliga verifieringssteget mot originalen är nödvändigt – AI missade en viktig nyans som visade sig vara strategiskt relevant.',
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI och kundinsikt',
        content: '',
        items: [
          '"AI kan ersätta kundintervjuer" → AI kan inte samla in äkta kundinsikt – den kan bara bearbeta det du redan samlat in',
          '"AI:s personabeskrivningar är tillförlitliga" → Personas baserade på AI-genererat innehåll (utan dina kunddata) är fiktion',
          '"AI identifierar alltid de viktigaste temana" → AI hittar frekventa teman, inte nödvändigtvis strategiskt viktiga – det är din bedömning',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Anonymisera kunddata innan du delar med AI-verktyg',
        content:
          'Kundintervjuer, enkätsvar och feedbackdata innehåller ofta personuppgifter. Att klistra in sådant material i publika AI-verktyg (ChatGPT, Claude.ai) kan innebära GDPR-problematik och brott mot era dataskyddsåtaganden mot kunderna. Anonymisera alltid personuppgifter innan du bearbetar kunddata med AI-verktyg, och kontrollera din organisations riktlinjer för vilka verktyg som är godkända.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på en situation där du behövt förstå vad dina kunder eller målgrupper egentligen vill eller värderar. Hur samlade du in den informationen, och hur bearbetade du den? På vilket sätt hade AI-stöd i bearbetningsfasen förändrat resultatet – eller processen? Var det moment du fortfarande inte tror AI hade klarat?',
      },
    ],
    quiz: [
      {
        question: 'Vad är den viktigaste begränsningen med att använda AI för kundinsikt?',
        options: [
          'AI kan inte läsa svenska intervjutexter',
          'AI kan bearbeta data men kan inte ersätta primärinsamling av äkta kundinsikt',
          'AI analyserar bara kvantitativa data, inte kvalitativa intervjuer',
          'AI kräver minst 1000 kundintervjuer för att fungera',
        ],
        correctIndex: 1,
        explanation: 'AI är stark på att bearbeta och strukturera redan insamlad information, men kan inte ersätta äkta kundkontakt och primärinsamling.',
      },
      {
        question: 'Varför måste du anonymisera kunddata innan du bearbetar den i AI-verktyg?',
        options: [
          'Personuppgifter påverkar AI:ns analysförmåga negativt',
          'AI vägrar bearbeta material med personuppgifter',
          'Delning av personuppgifter i publika AI-verktyg kan bryta mot GDPR och dataskyddsåtaganden',
          'Anonymisering krävs bara om data är äldre än fem år',
        ],
        correctIndex: 2,
        explanation: 'Kunddata innehåller personuppgifter som är skyddade av GDPR. Att dela sådant i publika AI-verktyg kan bryta mot lag och kundåtaganden.',
      },
      {
        question: 'Vad menas med att AI identifierar "frekventa" men inte nödvändigtvis "strategiskt viktiga" teman?',
        options: [
          'AI räknar bara ord och kan inte se sammanhang',
          'AI listar det som nämns ofta, men om ett sällan nämnt tema är strategiskt avgörande kräver det mänsklig bedömning',
          'AI kan inte rangordna teman utan ytterligare instruktioner',
          'AI prioriterar alltid ekonomiska teman framför andra',
        ],
        correctIndex: 1,
        explanation: 'AI identifierar mönster baserade på frekvens. Strategisk relevans – att ett sällan nämnt tema är avgörande för er positionering – kräver ditt omdöme och din branschkunskap.',
      },
    ],
  },

  {
    id: 5,
    title: 'Strategisk planering med AI-stöd',
    subtitle: 'Bättre underlag – inte sämre omdöme',
    duration: '',
    icon: '♟️',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Strategi är fortfarande ett mänskligt arbete',
        content:
          'Strategisk planering handlar om att göra val under osäkerhet – om var du ska lägga resurser, vilket håll organisationen ska röra sig mot och vad du ska säga nej till. Det kräver omdöme, värderingar och en förståelse för organisationens faktiska kapacitet och kontext.\n\nAI förändrar inte det grundläggande arbetet. Men det förändrar kvaliteten och hastigheten på det underlag du kan ta fram. Analyser som tidigare tog veckor kan ta dagar. Dokumentation som tog dagar kan ta timmar.\n\nFaran är att bättre underlag ersätter skärpt omdöme. Att det faktum att AI producerat ett välstrukturerat strategidokument gör att det kritiska granskandet minskar. Den fällan är viktig att undvika.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'AI-stöd i strategiska planeringsmoment',
        content:
          'I en strategisk planeringsprocess finns det konkreta moment där AI tillför värde:\n\nScenarioutveckling: AI kan snabbt generera scenarier baserade på parametrar du anger – optimistiskt, pessimistiskt, troligt scenario. Det är ett bra sätt att strukturera strategisamtalet. Men valet av vilka parametrar som är relevanta och hur du viktar dem är ditt.\n\nStrukturering av PESTLE/SWOT: AI kan fylla i en strukturerad analys baserat på information du ger den. Men ingenting av värde tillkommer om du inte tillhandahåller faktisk organisationskunskap och marknadsdata.\n\nFormulering av strategiska alternativ: AI är bra på att formulera tydliga alternativ att reagera på. Det är lättare att reagera på tre välformulerade alternativ än att skapa dem från grunden.\n\nDokumentation och kommunikation: AI kan formulera strategidokument, presentationsunderlag och sammanfattningar baserade på beslut ni redan fattat. Det sparar tid utan att påverka beslutskvaliteten.',
        items: [
          'Scenarier: AI genererar, du väljer parametrar och väger dem',
          'PESTLE/SWOT: AI strukturerar det material du tillhandahåller',
          'Strategiska alternativ: AI formulerar, du bedömer genomförbarhet',
          'Dokumentation: AI:s starkaste bidrag i strategiarbetet',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Strategiarbete med tre scenarier på tre timmar',
        content:
          'En YH-organisation ska ta fram en femårig strategisk plan för utbildningsportföljens utveckling. Tidigare process: ledningsgruppen ägnade tre heldagar åt att diskutera möjliga framtidsscenarier.\n\nNy process: affärsutvecklaren ger Claude en beskrivning av organisationens nuläge, de tre viktigaste osäkerhetsfaktorerna (arbetsmarknadsutveckling, finansieringssystem, konkurrens från digitala utbildningsaktörer) och ber om tre välstrukturerade scenarier med implikationer för utbildningsportföljen.\n\nInnan ledningsgruppsmötet har alla tre scenarier, med konkreta strategiska implikationer, formulerats och distribuerats. Mötet kan ägnas åt det som kräver mänskligt omdöme: att diskutera vilka scenarier som är realistiska, vilka risker organisationen kan ta och vad som stämmer med er faktiska kapacitet.\n\nTiden för mötet minskade från tre dagar till en – utan att beslutskvaliteten försämrades. Snarare tvärtom: diskussionen var mer fokuserad.',
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI och strategi',
        content: '',
        items: [
          '"AI kan rekommendera rätt strategi" → AI kan formulera alternativ men kan inte välja åt dig – det kräver värderingar och organisationskunskap du har',
          '"Ett välformulerat AI-strategidokument är ett bra strategidokument" → Kvaliteten på ett strategidokument mäts av kvaliteten på de underliggande besluten, inte formuleringen',
          '"AI:s scenarier täcker alla relevanta möjligheter" → AI genererar scenarier baserat på vad du angett – om du missat en viktig osäkerhetsfaktor missar AI det också',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Låt inte bra underlag ersätta kritiskt omdöme',
        content:
          'Det finns en reell risk att välstrukturerade AI-genererade strategidokument minskar det kritiska granskandet. En välformulerad rekommendation uppfattas som mer trovärdig – oavsett om de underliggande analysen är solid. I strategiska sammanhang är det viktigt att aktivt utmana AI-genererat material: Vilka antaganden vilar det på? Vilka osäkerhetsfaktorer har inte beaktats? Vad vet du om din organisation som AI inte kan veta?',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på en strategisk fråga eller ett strategiarbete du deltagit i. Vilken del av det arbetet var mest tidskrävande men ändå minst kräver ditt specifika omdöme – och hade kunnat stödjas av AI? Och vilken del krävde din specifika kunskap om organisationen och kontexten på ett sätt som AI inte kunnat ersätta? Var konkret.',
      },
    ],
    quiz: [
      {
        question: 'Vad är den viktigaste risken med att använda AI-genererade strategidokument?',
        options: [
          'AI-dokument är för långa för att läsas i ledningsgruppen',
          'AI producerar dokument med dålig formatering',
          'Välformuleradeunderlag kan minska det kritiska granskandet av om analysen faktiskt är solid',
          'AI kan bara producera strategidokument på engelska',
        ],
        correctIndex: 2,
        explanation: 'En välformulerad text uppfattas som mer trovärdig. Risken är att välstrukturerade AI-dokument minskar det kritiska ifrågasättandet av de underliggande antagandena.',
      },
      {
        question: 'Vilken del av strategisk scenarioutveckling är AI starkast på?',
        options: [
          'Att välja vilka scenarier som är mest realistiska',
          'Att avgöra vilka risker organisationen kan hantera',
          'Att formulera tydliga, strukturerade scenarier baserade på parametrar du anger',
          'Att bedöma organisationens faktiska kapacitet att genomföra strategin',
        ],
        correctIndex: 2,
        explanation: 'AI formulerar och strukturerar scenarier effektivt. Men val av parametrar, bedömning av rimlighet och kapacitetsbedömning kräver mänskligt omdöme och organisationskunskap.',
      },
      {
        question: 'Varför kan AI inte rekommendera rätt strategi för din organisation?',
        options: [
          'AI har inte tillgång till tillräcklig data om din bransch',
          'Strategival kräver värderingar, prioriteringar och organisationskunskap som du har men inte AI',
          'AI:n är för långsam för att analysera strategiska frågor',
          'Strategival kräver juridisk kompetens som AI saknar',
        ],
        correctIndex: 1,
        explanation: 'Strategiska val handlar om vad organisationen prioriterar och kan genomföra – det kräver värderingar och djup organisationskunskap som AI inte har.',
      },
    ],
  },

  {
    id: 6,
    title: 'Processoptimering och intern effektivisering',
    subtitle: 'Hitta rätt processer att automatisera – och rätt att lämna ifred',
    duration: '',
    icon: '⚙️',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'Inte allt ska automatiseras',
        content:
          'En av de vanligaste felen i AI-driven processoptimering är att automatisera fel saker. Att automatisera en dålig process gör den snabbare – men fortfarande dålig. Att automatisera ett kundmöte tar bort det värde som faktiskt skapades i mötet.\n\nFör en affärsutvecklare handlar AI-stödd processoptimering om att identifiera var tid och energi läggs på uppgifter som är repetitiva, regelstyrda och lågt värderade – och frigöra den kapaciteten för arbete som kräver omdöme, relation och kreativitet.\n\nDen här modulen handlar om hur du tänker kring vilka processer som lämpar sig för AI-stöd och automatisering – och vilka som inte gör det.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Vad som lämpar sig för AI-stöd i affärsutvecklingsarbete',
        content:
          'En enkel tumregel för att bedöma om en process lämpar sig för AI-stöd: Är uppgiften repetitiv, regelbaserad och bygger på befintlig information – eller kräver den nytt omdöme, relation och kontextuell anpassning?\n\nGoda kandidater för AI-stöd:\nSammanfattning och strukturering av dokumentation, rapporter och protokoll. Formulering av standardkommunikation baserad på beslut du fattat. Research och insamling av information om aktörer, trender och alternativ. Generering av alternativa formuleringar, konceptvarianter eller analysstrukturer.\n\nDåliga kandidater för AI-stöd:\nKundmöten och relationsbyggande. Förhandlingar och konfliktlösning. Beslut som kräver organisationsspecifik kontext och erfarenhet. Kommunikation i känsliga situationer eller kriser. Bedömning av medarbetares prestation och potential.',
        items: [
          'Repetitivt, regelbaserat, informationsbearbetning → bra kandidat för AI-stöd',
          'Omdöme, relation, kontextuell anpassning → behåll som mänskliga uppgifter',
          'Automatisera aldrig kundmöten och relationsbyggande',
          'Automatisera aldrig kriskommunikation eller känsliga situationer',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'Mötesdokumentation som tog en halv dag tar nu tio minuter',
        content:
          'En affärsutvecklare på en YH-organisation deltog i genomsnitt i åtta möten i veckan och lade tre timmar på att dokumentera beslut, åtgärdspunkter och kommunicera dem vidare.\n\nNy process: möten spelas in med tillåtelse från alla deltagare. Transkriptionstjänst genererar text. Claude bearbetar texten och identifierar beslut, åtgärdspunkter, ansvariga och nästa steg. Affärsutvecklaren granskar och justerar – tar tio minuter per möte i stället för tjugo.\n\nResultat: tre timmar i veckan frigjorda. Den kapaciteten omdirigerades till ett affärsutvecklingsprojekt som krävde faktisk analys och stakeholderhantering.\n\nViktig observation: den mänskliga granskningen av AI:ns mötessammanfattning var nödvändig – vid tre tillfällen hade AI missuppfattat vem som var ansvarig för en åtgärd, ett misstag som utan granskning hade orsakat allvarliga missförstånd.',
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI och processoptimering',
        content: '',
        items: [
          '"AI-automatisering är alltid effektivare" → Automatisering tar tid att sätta upp och underhålla – enkla processer kan vara snabbare att göra manuellt',
          '"Automatisering av kund-kommunikation sparar tid utan risk" → Automatiserade kundmeddelanden utan mänsklig granskning kan orsaka allvarliga relationsskador',
          '"Om AI kan göra det bör AI göra det" → Det finns processer som bör vara mänskliga av relationseller tillitkskäl, oavsett om AI kan hantera dem tekniskt',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Automatisera aldrig kriskommunikation eller känsliga ärenden',
        content:
          'AI-genererade svar i känsliga situationer – klagomål, konflikter, kriser, känsliga avslag – kan förvärra situationen dramatiskt. AI saknar den mänskliga förmågan att läsa emotionell ton, förstå relationshistorik och anpassa kommunikationen till vad som faktiskt behövs i stunden. I känsliga situationer kräver kommunikation alltid ett mänskligt omdöme och en mänsklig avsändare.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk igenom din typiska arbetsvecka. Vilka uppgifter lägger du mest tid på som är repetitiva, regelbaserade och inte kräver ditt specifika omdöme eller dina kundrelationer? Och vilka uppgifter är det som faktiskt kräver vad just du kan bidra med? Vad skulle du vilja frigöra tid från – och vad vill du skydda?',
      },
    ],
    quiz: [
      {
        question: 'Vilken typ av uppgift lämpar sig bäst för AI-stöd i affärsutvecklingsarbete?',
        options: [
          'Förhandlingar med viktiga partners',
          'Kriskommunikation till kunder',
          'Sammanfattning och strukturering av mötesdokumentation och rapporter',
          'Bedömning av medarbetares prestation',
        ],
        correctIndex: 2,
        explanation: 'Repetitiva, regelbaserade informationsbearbetningsuppgifter – som dokumentation och sammanfattning – lämpar sig väl för AI-stöd. Omdömes- och relationstunga uppgifter bör förbli mänskliga.',
      },
      {
        question: 'Vad är risken med att automatisera kundkommunikation utan mänsklig granskning?',
        options: [
          'Automatiserade mejl är för långa för de flesta kunder',
          'AI kan orsaka allvarliga relationsskador i känsliga situationer det inte förstår',
          'Automatisering kräver en dedikerad IT-avdelning',
          'Kunder känner alltid igen automatiserade svar',
        ],
        correctIndex: 1,
        explanation: 'AI saknar förmågan att läsa emotionell ton och relationshistorik. I känsliga situationer kan ett automatiserat AI-svar förvärra situationen allvarligt.',
      },
      {
        question: 'Varför är det ett misstag att automatisera en dålig process?',
        options: [
          'Automatisering av dåliga processer kostar mer i licenskostnader',
          'Automatisering gör en dålig process snabbare – men den är fortfarande dålig',
          'AI kan inte automatisera processer med mer än tre steg',
          'Dåliga processer bryter mot GDPR vid automatisering',
        ],
        correctIndex: 1,
        explanation: 'Automatisering löser inte en dålig processdesign – den accelererar den. Identifiera och förbättra processen innan du automatiserar.',
      },
    ],
  },

  {
    id: 7,
    title: 'Att leda AI-projekt och hantera leverantörer',
    subtitle: 'Beställarkompetens i en AI-driven värld',
    duration: '',
    icon: '🤝',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'Beställarkompetens är din viktigaste tillgång',
        content:
          'Allt fler organisationer upphandlar AI-tjänster, anlitar konsulter för AI-implementationer och bygger interna AI-projekt. I alla de situationerna är beställarkompetensen avgörande – förmågan att ställa rätt krav, förstå vad leverantören faktiskt levererar och inte levererar, och att styra projektet mot faktiskt affärsvärde.\n\nSom affärsutvecklare är du ofta den som definierar vad AI-projektet ska åstadkomma. Om den definitionen är vag, teknisk eller saknar koppling till affärsvärde – misslyckas projektet, oavsett hur duktig leverantören är.\n\nDen här modulen handlar om hur du tar ett starkt beställaransvar i AI-projekt.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Vad beställarkompetens i AI-projekt innebär',
        content:
          'Beställarkompetens i AI-projekt handlar om fyra saker:\n\nAffärsvärdesdefiniering: Kan du tydligt formulera vilket affärsproblem eller vilken möjlighet som projektet adresserar? Inte i tekniska termer – utan i termer av tid, kostnad, intäkt, kundupplevelse eller kapacitet. Om du inte kan göra det är projektet inte redo att starta.\n\nKravformulering: Kan du formulera vad en lyckad lösning ska kunna göra – och inte göra? Vilka begränsningar, etiska krav och integrationsbehov finns det?\n\nResultatutvärdering: Kan du bedöma om leveransen faktiskt löser problemet – oberoende av om leverantören säger att den gör det? Vilka mätbara resultat ska projektet visa?\n\nRiskreducering: Förstår du vilka risker som finns i AI-projekt – datastyrningsproblem, modellrisk, integrationsproblem, organisatorisk acceptans – och hur kontraktet bör hantera dem?',
        items: [
          'Definiera affärsvärde i konkreta termer – inte tekniska termer',
          'Formulera krav inklusive begränsningar, etik och integration',
          'Definiera mätbara leveransresultat oberoende av leverantörens eget mätande',
          'Förstå och kontraktera för de viktigaste riskerna i AI-projekt',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Projektet som levererades men inte skapade värde',
        content:
          'En YH-organisation upphandlar ett AI-verktyg för att automatisera matchning av studerande mot LIA-platser. Leverantören levererar tekniken i tid och inom budget. Systemet gör tekniskt vad det är specifierat att göra.\n\nMen ett år efter lansering används systemet knappt. Handledarna litar inte på matchningsförslagen och gör sina egna bedömningar. De studerande upplever att förslagen inte tar hänsyn till deras faktiska preferenser.\n\nVad gick fel: projektet definierades i tekniska termer ("automatiserad matchningsmotor") – inte i affärstermer ("öka andelen LIA-placeringar som upplevs som relevanta av studerande med 20%"). Handledarkompetens och studerandepreferenser specifierades inte som krav. Ingen plan för organisatorisk förändringsledning ingick.\n\nLeverantören levererade. Affärsvärdet uteblev. Det är beställarens ansvar.',
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI-projektledning',
        content: '',
        items: [
          '"Leverantören vet bäst vad vi behöver" → Leverantören vet hur tekniken fungerar. Du vet vad din organisation behöver – det är din uppgift att formulera det',
          '"Om tekniken fungerar är projektet lyckat" → Projektet är lyckat om det skapar affärsvärde – teknik som fungerar men inte används är ett misslyckat projekt',
          '"AI-projekt kräver inte förändringsledning" → AI-projekt som förändrar hur människor arbetar kräver förändringsledning – annars används inte lösningen',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Var försiktig med leverantörers AI-löften',
        content:
          'AI-marknaden präglas av överdrivna påståenden om vad system kan leverera. "90% automatisering", "10x produktivitetsökning", "eliminerar mänskliga fel" är vanliga. Kräv att löften formuleras som mätbara och verifierbara leveranskrav i kontraktet. Be om referenser från liknande implementationer. Och bygg in en utvärderingsfas med tydliga exit-kriterier om leveransen inte uppfyller affärsmålen.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Har du deltagit i ett IT- eller AI-projekt – som beställare, deltagare eller observatör – där det tekniska levererades men affärsvärdet uteblev eller var lägre än förväntat? Vad bedömer du var de viktigaste orsakerna, och vad hade behövt göras annorlunda i beställar- eller kravdefinitionsfasen? Var konkret.',
      },
    ],
    quiz: [
      {
        question: 'Vad är det viktigaste sättet att definiera ett AI-projekt för att säkerställa affärsvärde?',
        options: [
          'Specificera exakt vilken AI-modell leverantören ska använda',
          'Definiera projektet i termer av mätbara affärsresultat, inte tekniska specifikationer',
          'Låta leverantören definiera projektet baserat på deras tekniska kapacitet',
          'Säkerställa att projektet ryms inom befintlig IT-infrastruktur',
        ],
        correctIndex: 1,
        explanation: 'Projekt definierade i tekniska termer levererar teknik. Projekt definierade i affärstermer – tid, kostnad, kundupplevelse – skapar bättre förutsättningar för faktiskt affärsvärde.',
      },
      {
        question: 'Varför behöver AI-projekt som förändrar hur medarbetare arbetar förändringsledning?',
        options: [
          'AI-system kräver alltid utbildning av mer än tio dagar',
          'Tekniska lösningar som inte accepteras och används av medarbetarna skapar inget värde',
          'GDPR kräver att förändringsledning dokumenteras',
          'Leverantörer kontrakterar förändringsledning som separat tjänst',
        ],
        correctIndex: 1,
        explanation: 'En teknisk lösning som fungerar men inte används skapar inget affärsvärde. Förändringsledning – att säkerställa att medarbetare förstår, accepterar och använder lösningen – är kritiskt.',
      },
      {
        question: 'Hur bör du hantera en leverantörs löfte om "90% automatisering"?',
        options: [
          'Acceptera löftet som kontraktuellt mål direkt',
          'Ignorera det eftersom leverantörer alltid överskattar',
          'Kräv att löftet formuleras som mätbara och verifierbara leveranskrav med definierade mätmetoder',
          'Be en annan AI att verifiera om påståendet är rimligt',
        ],
        correctIndex: 2,
        explanation: 'AI-marknaden präglas av överdrivna påståenden. Löften måste bli mätbara kontraktuella krav med tydliga mätmetoder och konsekvenser om de inte uppfylls.',
      },
    ],
  },

  {
    id: 8,
    title: 'Etik, risk och hållbar AI i affärsutveckling',
    subtitle: 'Ansvarsfull AI är en affärsstrategi',
    duration: '',
    icon: '⚖️',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'Etik är inte ett hinder – det är en konkurrensfördel',
        content:
          'Ansvarsfull AI-användning i affärsutveckling handlar inte bara om att följa lagar och regler. Det handlar om att bygga organisationer som kunder, medarbetare och samhälle kan lita på – och om att undvika de misstag som kan skada din organisations rykte, relationer och affärsresultat.\n\nDe organisationer som har tydliga etiska ramverk för AI-användning, som kommunicerar dem öppet och som faktiskt följer dem, bygger ett förtroendekapital som är svårt att imitera.\n\nDen här avslutande modulen handlar om hur du som affärsutvecklare tänker kring etik, risk och hållbarhet i AI-användning – inte som en checklista, men som en integrerad del av affärsutvecklingsarbetet.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'De viktigaste etiska dimensionerna för affärsutvecklare',
        content:
          'Som affärsutvecklare möter du etiska AI-frågor i flera dimensioner:\n\nDataintegritet och GDPR: Vilken data används för att träna eller driva AI-system ni implementerar? Hur hanteras kunddata? Finns det databehandlingsavtal med AI-leverantörer?\n\nTransparens och förklarbarhet: Kan du förklara för kunder och partners hur AI-driven beslutsfattning fungerar i era tjänster? Har kunder rätt att begära mänsklig prövning?\n\nBias och diskriminering: AI-system tränade på historisk data kan reproducera och förstärka befintliga diskrimineringsmönster. Har ni kontroll på om era AI-system behandlar olika kundgrupper lika?\n\nMänsklig kontroll: Vilka beslut ska alltid fattas av en människa – oavsett vad ett AI-system rekommenderar? Var sätter ni gränsen?\n\nMiljöpåverkan: Stor AI-modellträning och -körning kräver betydande energi. Är det relevant att beakta i era leverantörsval och hållbarhetsrapportering?',
        items: [
          'Dataintegritet: GDPR, databehandlingsavtal, kunddata i AI-system',
          'Transparens: kan du förklara hur AI-beslut fattas för kunder?',
          'Bias: reproducerar era AI-system diskrimineringsmönster?',
          'Mänsklig kontroll: definiera vilka beslut som alltid ska tas av en människa',
          'Miljöpåverkan: energianvändning i leverantörsval och hållbarhetsrapportering',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Personalisering som gick för långt',
        content:
          'En utbildningsorganisation implementerar ett AI-system som personaliserar marknadsföring mot potentiella studerande baserat på beteendedata. Systemet identifierar mönster som predicerar vem som sannolikt anmäler sig – och lägger oproportionerligt stor marknadsföringsinsats mot dessa grupper.\n\nEfter ett år visar det sig att systemet i praktiken riktar marknadsföringen kraftigt mot socioekonomiskt starkare grupper – eftersom dessa historiskt sett anmält sig i högre grad. Socialt utsatta grupper som skulle haft stor nytta av utbildningarna nås knappt.\n\nSystemet diskriminerade inte avsiktligt – det optimerade utifrån historiska mönster. Men resultatet var ändå en systematisk orättvisa, och en allvarlig avvikelse från organisationens uttalade värden om bred tillgänglighet.\n\nLärdomen: AI-system optimerar utifrån definierade mål. Om målet inte inkluderar rättvisa och inkludering – optimeras det bort.',
      },
      {
        id: '8-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI-etik',
        content: '',
        items: [
          '"AI är objektiv – den diskriminerar inte" → AI tränad på historisk data reproducerar historiska ojämlikheter om de inte aktivt motverkas',
          '"GDPR gäller inte om vi inte sparar kunddata" → GDPR gäller redan vid insamling och bearbetning, inte bara lagring',
          '"Etikfrågor är juridikens ansvar" → Etiska frågor i AI-användning är affärsutvecklingens ansvar – juridik sätter miniminivån, affärsvärden och kundförtroende kräver ofta mer',
        ],
      },
      {
        id: '8-warning',
        type: 'warning',
        title: 'Automatiserade beslut som påverkar individer kräver mänsklig prövning',
        content:
          'Beslut om individer – antagning till utbildning, kreditbedömning, anställning, social bedömning – som fattas automatiserat av AI-system kräver enligt GDPR i många fall rätt till mänsklig prövning. Men utöver det rättsliga: beslut med stor påverkan på individers liv bör alltid ha ett mänskligt ansvar. Definiera tidigt vilka beslut i er organisation som aldrig ska delegeras till AI-automatisering.',
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Vilken etisk fråga i AI-användning bedömer du är mest relevant för det affärsutvecklingsarbete du bedriver eller planerar? Är det dataintegritet, bias, transparens, mänsklig kontroll eller en annan dimension? Beskriv den konkreta risken du ser och vad du tror behöver göras för att hantera den på ett ansvarsfullt sätt.',
      },
    ],
    quiz: [
      {
        question: 'Varför kan ett AI-system diskriminera trots att ingen har programmerat in diskriminering?',
        options: [
          'AI-system är alltid partiska mot majoritetsgrupper av tekniska skäl',
          'AI tränad på historisk data kan reproducera och förstärka historiska ojämlikheter',
          'Diskriminering uppstår bara om leverantören medvetet programmerar in det',
          'AI-system diskriminerar bara om de saknar tillräcklig träningsdata',
        ],
        correctIndex: 1,
        explanation: 'AI-system optimerar utifrån mönster i träningsdata. Om historisk data speglar ojämlikheter – reproduceras och förstärks dessa om de inte aktivt motverkas i systemdesignen.',
      },
      {
        question: 'Vad gäller enligt GDPR för automatiserade beslut som påverkar individer?',
        options: [
          'Automatiserade beslut är alltid förbjudna enligt GDPR',
          'GDPR gäller bara om besluten fattas av en fysisk server i EU',
          'Individer har i många fall rätt till mänsklig prövning av automatiserade beslut',
          'GDPR kräver att alla automatiserade beslut publiceras offentligt',
        ],
        correctIndex: 2,
        explanation: 'GDPR ger individer rätt att begära mänsklig prövning av automatiserade beslut med stor påverkan på dem. Utöver det rättsliga kräver ansvarsfull AI att viktiga beslut om individer alltid har mänskligt ansvar.',
      },
      {
        question: 'Varför är ansvarsfull AI-användning en affärsstrategi – inte bara ett efterlevnadskrav?',
        options: [
          'Myndigheterna ger skattefördelar för etisk AI-användning',
          'Ansvarsfull AI bygger förtroende hos kunder och medarbetare och reducerar risker som kan skada affären',
          'Etisk AI är alltid billigare att implementera',
          'EU-lagstiftning kräver att alla organisationer har en etisk AI-policy',
        ],
        correctIndex: 1,
        explanation: 'Organisationer med tydliga och efterlevda etiska AI-ramverk bygger förtroendekapital, undviker reputationsskador och skapar mer hållbara kundrelationer – det är en konkurrensfördel.',
      },
    ],
  },
]
