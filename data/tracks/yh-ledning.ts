import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'AI ur ledningsperspektiv',
    subtitle: 'Vad tekniken gör – och inte gör',
    duration: '',
    icon: '🧠',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Varför det spelar roll för dig som ledare',
        content:
          'Som rektor, VD eller styrelseleamot i en yrkeshögskoleutbildning behöver du inte vara daglig användare av AI-verktyg för att fatta välgrundade beslut om dem. Däremot behöver du förstå tillräckligt om vad dessa system faktiskt gör för att kunna ställa rätt frågor, värdera risker och bära det ledningsansvar som följer av att din organisation – formellt eller informellt – redan använder dem.\n\nDen felaktiga bilden av AI som ett system som "tänker", "förstår" och "vet" är inte bara ett misstag hos enskilda användare. Den felaktiga bilden skapar organisatoriska risker som är din sak att hantera. När personal agerar på AI-genererad information som de felaktigt uppfattat som verifierad, när dokument publiceras utan tillräcklig granskning, eller när ett beslut grundas på ett AI-svar som innehåller hallucination – är det din organisation som bär konsekvensen.\n\nDen här modulen ger dig den tekniska minimikunskapen som krävs för att bedöma dessa risker – inte mer, och inte mer teknisk än nödvändigt.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Sannolikhetsbaserad textgenerering – implikationerna för ledningen',
        content:
          'En stor språkmodell förutsäger statistiskt vilket ord som passar bäst i ett givet sammanhang. Den har lärt sig detta genom att tränas på enorma textmängder. Den resonerar inte, den tolkar inte och den "vet" inte. Den producerar text som mönstermässigt liknar korrekt text i det aktuella sammanhanget.\n\nDetta har tre direkta implikationer för din roll:\n\nFör det första: Välformulerat är inte detsamma som korrekt. En AI-producerad text om examinationskrav, LIA-avtal eller MYH-förordning kan se exakt ut som korrekt myndighetsinformation och ändå innehålla felaktiga uppgifter. Din personal kan inte alltid avgöra detta utan att verifiera mot primärkällan.\n\nFör det andra: Ansvaret förändras inte. Att AI var involverad i att producera ett dokument fritar inte din organisation från ansvar för dess innehåll. Dokumentet utvärderas mot de krav som gäller – inte mot hur det producerades.\n\nFör det tredje: Du behöver styrning, inte förbud. Att förbjuda AI-användning i en organisation där verktygen redan används informellt är ineffektivt. Vad du behöver är riktlinjer som tydliggör vad som är acceptabelt och vad som kräver verifiering och mänskligt ansvar.',
        items: [
          'AI mönstermatchar text – den förstår inte och resonerar inte',
          'Välformulerat AI-svar ≠ korrekt svar – alltid verifiera faktapåståenden',
          'Organisationsansvar kvarstår fullt ut oavsett om AI var involverat',
          'Styrning av AI-användning är ledningens ansvar, inte IT-avdelningens',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Från YH-ledningens vardag',
        content:
          'En rektor på en KY-utbildning inom industriell teknik beslutar att inte lägga sig i hur personalen väljer att använda AI-verktyg i sitt arbete – det är deras professionella bedömning, tänker hon. Organisationen har inga formella riktlinjer.\n\nEn handläggare använder ett AI-verktyg för att ta fram ett utkast till utbildningsplan för en ny kurs. Utkastet ser välstrukturerat och professionellt ut. Handläggaren gör justeringar och skickar det vidare för godkännande. Rektorn godkänner utan att granska i detalj.\n\nVid MYH:s nästa tillsyn identifierar handläggarna att fyra lärandemål inte uppfyller förordningskraven. AI:n hade formulerat dem utifrån äldre föreskrifter som inte längre gäller. Tillsynsmyndigheten kräver att organisationen åtgärdar bristerna, och utfärdade intyg under perioden ifrågasätts.\n\nRektorn hade inte förbjudit AI-användning. Hon hade inte heller definierat vilka arbetsmoment som kräver extra granskning, vilka förordningsdokument som ska vara referenspunkter, eller hur man säkerställer att AI-producerat innehåll verifieras mot primärkällan. Det var inte AI:ns fel att föreskrifterna hade ändrats. Det var ett styrningsproblem.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Ledarskapets missförstånd om AI',
        content: 'Dessa missförstånd är vanliga på ledningsnivå och leder till dålig styrning:',
        items: [
          '"AI-frågor är en IT-fråga" → Strategisk AI-styrning är ledningens och styrelsens ansvar',
          '"Om personalen använder det privat kan vi inte reglera det" → Yrkesmässig AI-användning i organisationens namn är organisationens ansvar',
          '"Vår personal är professionell – de vet vad de gör" → Professionalism skyddar inte mot systematiska tekniska begränsningar som man inte känner till',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'Avsaknad av riktlinjer är ett aktivt beslut',
        content:
          'Om din organisation saknar riktlinjer för AI-användning används verktygen ändå – okontrollerat, inkonsekvent och utan att ledningen vet om det. Det är inte ett neutralt läge. Det är ett läge med ökad risk för regelbrott, ojämn kvalitet och ansvarsoklarhet. Att skapa riktlinjer är inte att vara teknikfientlig – det är att ta ansvar för verksamhetens kvalitet.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Gör en snabb lägesbild: I vilken utsträckning tror du att AI-verktyg används i din organisation i dag – och i vilken grad har ledningen kännedom om och kontroll över denna användning? Vad är skillnaden mellan det du vet och det du tror? Vad är ditt nästa steg för att skapa klarhet?',
      },
    ],
    quiz: [
      {
        question: "Varför behöver ledare förstå AI, även om de inte använder det dagligen?",
        options: [
          "För att kunna programmera AI-system",
          "För att kunna bedöma risker och fatta informerade beslut",
          "För att ersätta IT-avdelningens roll",
          "För att godkänna varje medarbetares AI-användning"
        ],
        correctIndex: 1,
        explanation: "Ledare behöver tillräcklig AI-förståelse för att bedöma risker, ställa rätt frågor och styra ansvarsfull användning – inte nödvändigtvis vara dagliga användare.",
      },
      {
        question: "Vem i organisationen bär ansvaret för personalens AI-användning?",
        options: [
          "Den enskilda medarbetaren exklusivt",
          "IT-avdelningen",
          "Organisationen som helhet, med ledningen som ansvarig",
          "AI-verktygets leverantör"
        ],
        correctIndex: 2,
        explanation: "Organisationen är ansvarig för hur personalen använder AI i tjänsten – precis som för alla andra verktyg och processer.",
      },
      {
        question: "Vad innebär det att \"styra\" AI-användning snarare än att förbjuda den?",
        options: [
          "Att tillåta all AI-användning utan regler",
          "Att skapa riktlinjer för ansvarsfull och ändamålsenlig användning",
          "Att blockera AI-tjänster tekniskt",
          "Att överlåta besluten till varje medarbetare"
        ],
        correctIndex: 1,
        explanation: "Styrning av AI innebär att definiera var och hur AI ska användas ansvarsfullt – vilket är mer effektivt och professionellt än generella förbud.",
      },
    ],
  },

  {
    id: 2,
    title: 'Informationsflöde och minnesgränser',
    subtitle: 'Strategiska konsekvenser för organisationen',
    duration: '',
    icon: '💾',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'Tekniska begränsningar som skapar organisatoriska utmaningar',
        content:
          'AI-system har en fundamental teknisk begränsning: de kan bara "se" en begränsad mängd information åt gången. Det innebär att komplexa, flerstegiga arbetsuppgifter – att revidera en hel utbildningsplan, att analysera ett tillsynsbeslut i relation till organisationens alla kurser, att processa ett fullständigt antagningsunderlag – ställer krav på att användaren förstår och hanterar dessa begränsningar.\n\nNär din personal inte förstår dessa begränsningar tar de beslut som bygger på ofullständig information – utan att veta om det. Konsekvenserna är svåra att se förrän de materialiserats som fel i utskickade dokument, missade krav i utbildningsplaner eller inkonsekvent tillämpning av regelverk.\n\nDet här handlar alltså inte om teknisk nörderi. Det handlar om informationskvaliteten i din organisations beslutsunderlag.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Kontextfönstret – en ledares förklaring',
        content:
          'Varje AI-interaktion har ett "kontextfönster" – en begränsad mängd text som systemet kan hålla i minnet under en session. All konversation, alla instrukioner, alla dokument som matas in tar plats i detta fönster. När det är fullt trängs den äldsta informationen ut.\n\nTänk på det som ett möte med ett begränsat antal punkter på dagordningen. Om punkterna är för många eller för långa glöms de tidiga besluten i slutet av mötet – och det är osäkert om de överhuvudtaget tillämpas.\n\nFör din organisation innebär detta att arbetsmoment som kräver konsekvent tillämpning av ett regelverk – examinationsregler, antagningskrav, förordningstexter – inte kan delegeras fullt ut till AI utan att det finns kontrollrutiner som fångar upp inkonsistenser. Ju komplexare uppgiften, desto viktigare är organisationens rutiner, inte teknologins kapacitet.',
        items: [
          'AI saknar minne mellan sessioner – varje ny session börjar från grunden',
          'Långa eller komplexa uppgifter riskerar att tidiga krav glöms bort',
          'Organisationsrutiner, inte AI-kapacitet, avgör om informationen är korrekt',
          'Kritiska dokument behöver granskning mot primärkällor – inte bara mot AI-output',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Revideringen som tappade trådarna',
        content:
          'En YH-utbildning genomför en övergripande revidering av sina kursplaner inför nästa ansökningsomgång. En handläggare arbetar under tre veckor med AI-stöd för att skriva om 24 kursplaner. Systemet används för att ta fram utkast, omformulera lärandemål och anpassa texterna till MYH:s senaste formatkrav.\n\nArbetet är produktivt och resultaten ser bra ut. Handläggaren är nöjd och levererar i tid. Utbildningsledaren godkänner dokumenten och skickar in dem till MYH.\n\nTre månader senare, i samband med att MYH granskar ansökan, identifieras att sex av kursplanerna saknar en specifik formulering om beprövad erfarenhet som introducerades i de senaste formatkraven. Handläggaren hade angett formatkraven i början av arbetet – men under de långa sessionerna hade AI-systemet gradvis tappat den informationen när kontextfönstret fylldes med kursplansinnehåll.\n\nHandläggaren visste inte att detta hänt. Ledningen visste inte att det fanns en risk. Ingen av dem förstod begränsningen. Konsekvensen var en försenad ansökan och ett skyndsamt revisionsarbete som kostade mer än AI-stödet hade sparat.',
      },
      {
        id: '2-concept2',
        type: 'concept',
        title: 'Organisatoriska motåtgärder',
        content:
          'Svaret på AI:s minnesbegränsningar är organisatoriska rutiner, inte teknisk uppgradering. Som ledare bör du säkerställa att dessa rutiner finns på plats:',
        items: [
          'Checklistor för kritiska krav som ska verifieras i varje dokument, oberoende av hur det producerats',
          'Separata sessions-protokoll för komplexa arbeten – en kursplan per session, inte 24',
          'Rutiner för slutgranskning av AI-producerat innehåll mot primärkällan',
          'Tydlig rollfördelning: vem granskar, vem godkänner, vem bär ansvaret',
        ],
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI håller reda på alla krav jag angett" → Tidiga instruktioner kan försvinna ur kontexten under långa sessioner',
          '"Om personalen använder AI rätt behöver vi inte granska" → Rätt användning kompenserar inte minnesbegränsningar',
          '"Vi kan lita på att AI flaggar inkonsistenser" → AI signalerar inte sina egna begränsningar',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'Kritiska dokument kräver alltid mänsklig slutgranskning',
        content:
          'Utbildningsplaner, kursplaner, avtalstexter och tillsynsdokument får aldrig godkännas enbart baserat på att de "ser rätt ut". Det är ett mänskligt ansvar att verifiera att innehållet faktiskt stämmer med gällande krav – oavsett om AI var involverat i produktionen eller inte.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Vilka rutiner för dokumentgranskning har din organisation i dag – oberoende av AI? Är dessa rutiner tillräckliga för att fånga upp fel som uppstår när AI används som stöd? Vad behöver förstärkas – och vem ansvarar för att göra det?',
      },
    ],
    quiz: [
      {
        question: "Vilken organisatorisk risk skapar AI:ns kontextbegränsningar?",
        options: [
          "Att AI tar för lång tid att svara",
          "Att personal fattar beslut baserade på ofullständig information om AI tappat tidiga krav",
          "Att AI-sessioner kostar mer vid längre konversationer",
          "Att AI ger kortare svar i långa konversationer"
        ],
        correctIndex: 1,
        explanation: "Om personal inte känner till kontextfönstrets begränsningar kan de lita på att AI håller alla krav i minnet – och leverera dokument där viktiga tidiga instruktioner faktiskt fallit bort.",
      },
      {
        question: "Vilken organisatorisk motåtgärd mot AI:ns minnesgränser är mest effektiv?",
        options: [
          "Begränsa AI-sessionernas längd till tio minuter",
          "Köpa dyrare AI-verktyg med längre kontext",
          "Etablera checklistor och verifieringsrutiner mot primärkällor",
          "Använda AI enbart för korta uppgifter"
        ],
        correctIndex: 2,
        explanation: "Organisatoriska rutiner – checklistor, sessionsprotokoll och verifiering mot primärkällor – kompenserar för AI:ns tekniska begränsningar och minskar risken för fel.",
      },
      {
        question: "Vilka dokument kräver alltid mänsklig slutgranskning oavsett AI-stöd?",
        options: [
          "Interna mötesanteckningar",
          "Informationsbroschyrer utan rättslig relevans",
          "Utbildningsplaner, kursplaner och avtal",
          "Sociala medier-inlägg"
        ],
        correctIndex: 2,
        explanation: "Rättighetsgrundade och regulatoriska dokument – kursplaner, utbildningsplaner, avtal, tillsynsrapporter – kräver alltid mänsklig verifiering av faktainnehållet.",
      },
    ],
  },

  {
    id: 3,
    title: 'Beslutsunderlag och ledningskommunikation',
    subtitle: 'Att beställa rätt från AI',
    duration: '',
    icon: '✏️',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'Kvaliteten på frågorna avgör kvaliteten på svaren',
        content:
          'Som ledare är du ofta mer beställare av AI-stöd än daglig användare. Du kanske ber en handläggare att använda AI för att ta fram ett analysunderlag, en sammanfattning av tillsynsrapporten, ett utkast till styrelseprotokoll eller en kommunikation till arbetsgivare. Kvaliteten på det du får tillbaka beror direkt på hur instruktionen är formulerad.\n\nEtt av de vanligaste problemen i organisationer som börjar använda AI är att resultaten är "ungefär rätt" men inte direktanvändbara. Texterna är generiska när de borde vara specifika, fokuserar på fel saker eller saknar den ton och det perspektiv som krävs för den specifika mottagaren.\n\nDet är inte ett problem med AI:n. Det är ett problem med instruktionen. Och att förstå vad som gör en instruktion bra är lika relevant för dig som beställare som det är för din personal som daglig användare.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Vad en väldefinierad instruktion innehåller',
        content:
          'För ledningsuppgifter behöver en AI-instruktion fyra element:\n\nRoll tydliggör vems perspektiv AI:n ska anta. "Du är en senior utbildningsadministratör med god kännedom om MYH:s krav" ger ett annat resultat än "du är en assistent".\n\nKontext anger situationen: Vem ska läsa resultatet? I vilket sammanhang? Vad är syftet – informera, besluta, kommunicera?\n\nUppgift definierar exakt vad som ska produceras: format, längd, struktur, specifika frågor som ska besvaras.\n\nBegränsning anger vad som ska uteslutas: generiska formuleringar, information som inte är verifierad, marknadsföringsspråk, teknisk jargong för en icke-teknisk målgrupp.',
        items: [
          'Roll: Vilket perspektiv ska AI:n anta?',
          'Kontext: Vem läser det? I vilket sammanhang? Med vilket syfte?',
          'Uppgift: Vad ska produceras – format, längd, struktur?',
          'Begränsning: Vad ska INTE ingå?',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Sammanfattning av tillsynsrapport inför styrelsegenomgång',
        content:
          'En rektor behöver förbereda styrelseordföranden inför ett möte om en tillsynsrapport från MYH. Rapporten är 34 sidor. Mötet är om fyra timmar.\n\n❌ Svag instruktion:\n"Sammanfatta den här tillsynsrapporten."\n\nResultat: En kronologisk sammanfattning av rapportens innehåll, med lika vikt på alla avsnitt, skriven för ett generellt informationssyfte. Inte direkt användbar för styrelseordföranden.\n\n✅ Väldefinierad instruktion:\n"Du är en senior utbildningsjurist med god kännedom om hur MYH genomför tillsyn av YH-utbildningar. Styrelseordföranden för en yrkeshögskoleutbildning ska inom fyra timmar informeras inför ett möte om en tillsynsrapport. Ordföranden är inte insatt i detaljerna men behöver förstå: 1) Vilka anmärkningar som är allvarligast ur ett åtgärdsperspektiv, 2) Vad som är organisationens åtaganden och tidsramar, 3) Vilka frågor styrelseordföranden sannolikt kommer att ställa under mötet. Skriv en sammanfattning på max 400 ord strukturerad efter dessa tre punkter. Undvik myndighetsjargong. Var konkret om vad som krävs av styrelsen."\n\nResultat: Ett fokuserat underlag som ordföranden kan läsa på fem minuter och som direkt stöder det strategiska samtalet om åtgärder och ansvar.',
      },
      {
        id: '3-concept2',
        type: 'concept',
        title: 'Intern kompetens att beställa AI-stöd',
        content:
          'Förmågan att formulera väldefinierade instruktioner är en kompetens som din organisation behöver bygga systematiskt – inte bara i IT-avdelningen, utan hos alla som arbetar med kvalificerade administrativa uppgifter.',
        items: [
          'Skapa mallar för vanliga ledningsuppgifter: styrelseunderlag, MYH-kommunikation, LIA-rapporter',
          'Dokumentera bästa instruktioner som fungerat och bygg ett organisationsbibliotek',
          'Inkludera instruktionskvalitet i kompetensutveckling för administrativa roller',
          'Gör det enkelt att beställa rätt – inte bara att använda AI',
        ],
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"Om man ger AI mer text ger det bättre resultat" → Precision, inte volym, avgör kvaliteten',
          '"AI förstår vad vi egentligen menar" → Otydlighet i instruktionen ger otydlighet i resultatet',
          '"Det räcker att personalen kan använda AI" → Att beställa rätt resultat är en separat kompetens',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'Verifieringsansvar förändras inte',
        content:
          'Oavsett hur välformulerad instruktionen är och hur bra resultatet ser ut: faktapåståenden i dokument som rör förordningskrav, tillsynskrav, avtalstexter eller studeranderättigheter ska alltid verifieras mot primärkällan innan de godkänns och distribueras.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Välj en av dina återkommande ledningsuppgifter – exempelvis att producera underlag inför styrelsemöten, sammanfatta externa revisioner eller kommunicera med arbetsgivare om utbildningskrav. Hur ser en väldefinierad instruktion ut för den uppgiften? Skriv ner de fyra elementen (roll, kontext, uppgift, begränsning) för det specifika fallet.',
      },
    ],
    quiz: [
      {
        question: "Vad avgör kvaliteten på en AI:s output i ett beslutsunderlag?",
        options: [
          "Hur avancerat AI-verktyget är",
          "Hur lång tid AI fick på sig",
          "Kvaliteten på den instruktion som gavs",
          "Antalet ord i svaret"
        ],
        correctIndex: 2,
        explanation: "Instruktionens kvalitet – roll, kontext, uppgift, begränsning – avgör direkt hur användbart resultatet är. Generiska instruktioner ger generiska underlag.",
      },
      {
        question: "Vad innebär \"beställarkompetens\" i relation till AI?",
        options: [
          "Att kunna programmera AI-system",
          "Att veta hur man formulerar precisa instruktioner för att få rätt output",
          "Att ha teknisk tillgång till AI-verktyg",
          "Att känna till vilka AI-leverantörer som är bäst"
        ],
        correctIndex: 1,
        explanation: "Beställarkompetens handlar om att formulera tydliga instruktioner med rätt roll, kontext, uppgift och begränsning – inte om teknisk expertis.",
      },
      {
        question: "Vilket ansvar förändras INTE av välformulerade AI-instruktioner?",
        options: [
          "Ansvaret för dokumentets struktur",
          "Ansvaret för faktakontroll av regulatorisk och rättighetsgrundad information",
          "Ansvaret för att välja rätt format",
          "Ansvaret för att kommunicera med rätt intressenter"
        ],
        correctIndex: 1,
        explanation: "Faktagranskning av regulatorisk information och rättighetsgrundade påståenden är alltid obligatorisk – oavsett hur välformulerad instruktionen var.",
      },
    ],
  },

  {
    id: 4,
    title: 'Perspektivanalys och intressenthantering',
    subtitle: 'Styrelse, tillsyn och arbetslivskontakter',
    duration: '',
    icon: '🎭',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Att se dina beslut från andras perspektiv',
        content:
          'En av de viktigaste ledarskapsförmågorna är att förstå hur beslut, dokument och kommunikation uppfattas av andra – styrelseledamöter med skiftande bakgrund, MYH-handläggare vid tillsyn, arbetsgivarparter i LIA-samarbeten, studeranderepresentanter, och externa revisorer.\n\nDenna förmåga kallas ibland perspektivtagning och är i grunden en social kompetens som formas av erfarenhet. Men AI kan erbjuda ett strukturerat komplement: att simulera hur ett dokument, ett beslutsunderlag eller en kommunikation sannolikt uppfattas från ett specifikt perspektiv – och identifiera de frågor och invändningar som bör förberedas.\n\nDet ersätter inte det verkliga samtalet. Men det är ett sätt att förbereda sig för det samtalet mer systematiskt än att förlita sig på sin egen intuition.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'Att använda perspektivsimuleringar i ledningsarbetet',
        content:
          'Att ge AI:n en specifik roll och be den granska ett underlag, en policy eller en kommunikation från det perspektivet är ett kraftfullt förberedelsverktyg för ledningssituationer. AI:n kan inte ersätta den verkliga MYH-handläggaren, den faktiska styrelseledamoten eller den enskilda studeranden – men den kan aktivera relevanta perspektivmönster från sin träningsdata och peka på potentiella friktionspunkter som du kanske inte sett.',
        items: [
          '"Du är en MYH-handläggare vid tillsyn – vad är dina tre viktigaste frågor om det här dokumentet?"',
          '"Du är en teknikskeptisk styrelseledamot – vilka invändningar har du mot det här förslaget?"',
          '"Du är en arbetsgivare i handels- och tjänstesektorn – vad saknar du i den här utbildningsplanen?"',
          '"Du är en studerande med barn och deltidsarbete – vilka praktiska hinder ser du?"',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Styrelsepresentation för ett nytt program',
        content:
          'En rektor ska presentera ett förslag om att starta ett nytt YH-program inom cybersäkerhet för styrelsen. Två av fem styrelseledamöter har bakgrund i finans och är vana vid hård kostnadsgranskning. En har erfarenhet av HR och är känslig för frågor om lärarkompetens. En är digitaliseringsentusiast och tenderar att ställa tekniskt ambitiösa men svårt realiserbara krav. En har starkt fokus på arbetslivsrelevans.\n\nI stället för att förbereda en generisk presentation använder rektorn AI för att simulera varje ledamots sannolika perspektiv:\n\n"Du är en styrelseleamot med finansiell bakgrund. Du är vana vid att granska affärscase med hårda nyckeltal. Det här är ett förslag om ett nytt YH-program. Ställ de fem kritiska frågor du troligast skulle ställa vid en styrelsepresentation, och förklara vad som driver din skepsis bakom varje fråga."\n\nResultatet ger rektorn ett underlag för fem separata förberedelsespår. Hon kompletterar sin presentation med specifik data om kostnadsstruktur, rekryteringsstatus för lärare med rätt kompetens, och branschens bekräftade behov av utbildade – ett underlag som tar direkt hänsyn till styrelsens faktiska sammansättning.',
      },
      {
        id: '4-concept2',
        type: 'concept',
        title: 'Begränsningar att hålla i minnet',
        content:
          'Perspektivsimuleringar är verktyg, inte spådom. Det finns viktiga begränsningar:',
        items: [
          'AI kan inte förutse individuella prioriteringar hos specifika personer',
          'AI kan förstärka stereotyper om du inte är precis i rollbeskrivningen',
          'Resultaten är ett komplement till verkliga samtal – inte ett substitut',
          'Hög säkerhet i tonen = inte nödvändigtvis korrekt analys',
        ],
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI kan förutse exakt vad mina styrelseledamöter kommer att fråga" → AI simulerar mönster, inte individer',
          '"Om AI inte identifierade en invändning finns den inte" → AI:ns analys är ofullständig, inte auktoritativ',
          '"Perspektivsimulering ersätter förarbetet med intressenter" → Det är ett komplement till riktiga samtal',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Sök perspektiv som utmanar, inte bekräftar',
        content:
          'Det finns en risk att perspektivsimulering används för att bekräfta ens egna slutsatser – man väljer roller som sannolikt håller med en. Värdet av verktyget ligger i att aktivt söka perspektiv som utmanar och ifrågasätter ditt förslag. Bekräftande simuereringar har lite analytiskt värde.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på ett beslut du har framför dig – ett förslag till styrelsen, en ny policy, en förändring i utbildningsplanen. Välj två av de viktigaste intressenterna för det beslutet och formulera en AI-instruktion som ber AI:n granska förslaget från respektive perspektiv. Vad fick du ut som du inte redan visste?',
      },
    ],
    quiz: [
      {
        question: "Vad är det primära syftet med AI-perspektivsimuleringar i ledningsarbetet?",
        options: [
          "Att ersätta möten med intressenter",
          "Att avslöja potentiella friktionspunkter och blinda fläckar",
          "Att generera automatiska beslut",
          "Att spara tid på analyser"
        ],
        correctIndex: 1,
        explanation: "Perspektivsimuleringar hjälper ledare identifiera frågor och invändningar de kanske missat – som komplement till, inte ersättning för, riktiga intressentsamtal.",
      },
      {
        question: "Vad bör du undvika när du använder perspektivsimuleringar?",
        options: [
          "Att använda tekniska termer i instruktionen",
          "Att simulera enbart bekräftande perspektiv",
          "Att använda mer än tre perspektiv",
          "Att spara simuleringsresultaten"
        ],
        correctIndex: 1,
        explanation: "Bekräftande perspektiv har minimalt analytiskt värde. Sök aktivt perspektiv som utmanar och identifierar svagheter – inte de som bekräftar det du redan tror.",
      },
      {
        question: "Vad kan AI INTE göra vid perspektivsimuleringar?",
        options: [
          "Simulera en styrelseledamots generella prioriteringar",
          "Identifiera allmänna invändningar mot en plan",
          "Förutsäga en specifik individs faktiska reaktion",
          "Hitta potentiella friktionspunkter i ett förslag"
        ],
        correctIndex: 2,
        explanation: "AI kan simulera generella mönster kopplade till en roll, men kan inte förutsäga hur en specifik individ faktiskt kommer reagera – riktiga samtal är nödvändiga för det.",
      },
    ],
  },

  {
    id: 5,
    title: 'Automatiserade processer och organisationsstyrning',
    subtitle: 'Möjligheter, kontrollpunkter och ansvar',
    duration: '',
    icon: '🤖',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Systemtänkande kring AI i organisationen',
        content:
          'Det enklaste sättet att använda AI – att ställa en fråga och få ett svar – är välkänt för de flesta. En mer avancerad kategori av system är agentbaserade flöden: AI-system som ges ett mål och självständigt utför en serie steg för att nå det, utan att avvakta godkännande vid varje steg.\n\nDessa system har stor potential för den typ av repetitiva, volymtunga administrativa uppgifter som finns i alla YH-organisationer: granska inkomna ansökningar mot formella behörighetskrav, sammanfatta återkoppling från LIA-handledare, kontrollera att kursplaner innehåller obligatoriska element, generera veckovisa progress-rapporter för studerande.\n\nMen de medför också ett fundamentalt styrningsproblem som är din sak som ledare att lösa: när ett system agerar autonomt i flersteg, och ett fel uppstår tidigt i kedjan, fortplantar sig felet utan att någon ser det – tills konsekvensen är synlig.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Systemdesign som ledningsfråga',
        content:
          'Beslutet om att implementera ett agentbaserat AI-system i din organisation är inte ett IT-beslut. Det är ett verksamhetsbeslut med juridiska, etiska och operativa dimensioner som kräver din aktiva inblandning.\n\nNäret beslut fattas utan att ledningen definierats vilka kontrollpunkter som krävs, vilka beslut systemet får fatta autonomt och vilka som alltid kräver mänskligt godkännande, och vem som äger ansvaret för systemets output – uppstår ett ansvarsvakuum som är svårt att fylla i efterhand.\n\nEn väldesignad AI-process i en YH-organisation behöver explicit dokumentation av dessa frågor – inte som IT-dokumentation, utan som en del av verksamhetens styrningsdokument.',
        items: [
          'Definiera: Vilka beslut får systemet fatta utan mänsklig inblandning?',
          'Definiera: Vilka beslut kräver alltid mänskligt godkännande?',
          'Definiera: Vem äger systemet och ansvarar för dess output?',
          'Bygg in revisionsbarhet: Alla systemets åtgärder ska kunna spåras och granskas',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Antagningsstöd som gick rätt och fel',
        content:
          'En YH-organisation med 400 sökande per antagningsomgång implementerar ett AI-stödsystem för förhandsgranskning av ansökningar. Systemet kontrollerar att formella behörighetskrav är uppfyllda – rätt gymnasiebakgrund, nödvändiga bilagor, korrekt ifyllda formulär – och sorterar ansökningarna i tre kategorier: formellt godkänd, formellt nekad, kräver manuell granskning.\n\nSystemet fungerar bra de första tre antagningsomgångarna och sparar uppskattningsvis 60 timmar manuellt granskningsarbete per omgång. Ledningen är nöjd och beslutar att ytterligare automatisera processen.\n\nUnder den fjärde omgången visar det sig att systemet felklassificerat 23 ansökningar som "formellt nekad" på grund av ett fel i hur ett intygsformat tolkades – ett format som ändrats av en samarbetande gymnasieskola utan att organisationen informerats. Ansökningarna avvisades automatiskt och de sökande fick ett avslagbesked.\n\nEtt system med en inbyggd kontrollpunkt – "avslagsbeslut som berör fler än X sökande kräver manuell verifiering" – hade fångat felet. Utan den kontrollen kostade felet organisationen utredningsarbete, rättsliga prövningar och reputationsskada.',
      },
      {
        id: '5-concept2',
        type: 'concept',
        title: 'Principen om proportionerlig kontroll',
        content:
          'En tumregel för var kontrollpunkter ska läggas: proportionellt mot konsekvensens allvar om systemet har fel.',
        items: [
          'Låg konsekvens (informationssökning, textutkast): AI kan agera autonomt',
          'Medel konsekvens (sammanfattningar, förslag till kommunikation): Kräver mänsklig granskning',
          'Hög konsekvens (antagning, betygsdokumentation, avtalsrelaterade beslut): Kräver alltid mänskligt beslut',
          'Beslut med rättslig verkan: AI som stöd till beslutet, aldrig som beslutsfattare',
        ],
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"Automatisering minskar fel" → Automatisering skalar fel, inte alltid eliminerar dem',
          '"Om systemet är konfigurerat rätt behöver vi inte övervaka det" → Omvärldsfaktorer förändras; system behöver löpande underhåll',
          '"AI-ansvaret är leverantörens" → Operativt ansvar för AI-systemets konsekvenser i din verksamhet är alltid din organisations',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'AI ersätter inte mänsklig beslutskompetens i rättsliga processer',
        content:
          'Beslut som direkt påverkar studeranderättigheter – antagning, examinationsgodkännande, LIA-bedömning, disciplinärenden – kräver lagstadgat mänskligt beslutsfattande. Det räcker inte att en person formellt "godkänner" ett AI-genererat beslut utan att ha granskat det. Godkännandet måste vara substantiellt, inte procedurellt.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Identifiera ett administrativt arbetsmoment i din organisation som skulle kunna vara aktuellt för automatisering. Gå igenom det med den här frågelistan:\n\n1. Vilka beslut ingår i momentet, och vilka av dem har rättsliga konsekvenser?\n2. Var behöver en människa vara involverad – och med vilket djup av granskning?\n3. Vad händer i värsta fall om systemet gör fel, och vem bär ansvaret?\n4. Vilka rutiner för övervakning och underhåll kräver systemet?\n\nÄr fördelarna med automatisering tillräckliga för att motivera de organisatoriska kraven?',
      },
    ],
    quiz: [
      {
        question: "Vem ansvarar för beslut om vilka administrativa processer som ska automatiseras?",
        options: [
          "IT-avdelningen",
          "AI-verktygets leverantör",
          "Ledningen – det är en strategisk ledningsfråga",
          "Den operativa personalen som använder systemen"
        ],
        correctIndex: 2,
        explanation: "Beslut om automation är strategiska ledningsbeslut – de kräver definition av vad agenter ska göra autonomt vs. vad som kräver mänskligt godkännande, och tydlig ansvarssättning.",
      },
      {
        question: "Vad innebär \"proportionerlig kontroll\" i agentflöden?",
        options: [
          "Att kontrollera alla agentbeslut oavsett konsekvens",
          "Att matcha kontrollfrekvensen mot konsekvensens allvarlighetsgrad",
          "Att kontrollera slumpmässiga urval",
          "Att enbart kontrollera om problem rapporteras"
        ],
        correctIndex: 1,
        explanation: "Låga konsekvenser kan hanteras autonomt; höga konsekvenser (antagning, betyg, avtal) kräver mänskliga beslut – kontrollen ska motsvara risken.",
      },
      {
        question: "Varför kan felaktig automation vara farligare än ingen automation?",
        options: [
          "Automation är alltid dyrare",
          "Automatiserade processer är synliga för alla",
          "Fel skalas upp och kan påverka alla utfall utan att märkas",
          "Automation kräver dyra licenser"
        ],
        correctIndex: 2,
        explanation: "Automation förstärker ett fel – ett konfigurationsfel kan sprida sig till hundratals beslut utan att någon märker det. Utan kontrollpunkter riskerar systematiska fel förbli oupptäckta.",
      },
    ],
  },

  {
    id: 6,
    title: 'AI-tjänster mot studerande och personal',
    subtitle: 'Förvaltning, transparens och ansvarsgränser',
    duration: '',
    icon: '⚡',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'AI som en del av din service',
        content:
          'Chatbottar, automatiserade svarssystem och AI-drivna informationstjänster för studerande och personal är ett av de snabbast växande tillämpningsområdena för AI i utbildningssektorn. Lockelsen är tydlig för en YH-ledning: tillgänglighet dygnet runt, enhetliga svar på återkommande frågor, avlastning för administrativ personal.\n\nMen att implementera dessa system utan att förstå vad de faktiskt kräver är ett av de vanligaste misstagen i organisationer som har bråttom att "komma igång med AI". Det är inte verktygen som är problemet – det är underfinansieringen av förvaltning, den otydliga kommunikationen om begränsningar och avsaknaden av eskalationsvägar som skapar problem.\n\nSom ledare är din uppgift att sätta villkoren för implementering – inte att välja teknologin.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Vad ett förvaltbart AI-stödsystem kräver',
        content:
          'Att implementera ett AI-drivet informationssystem är att lansera en informationskanal. En ny informationskanal kräver samma förvaltningsstruktur som alla andra kanaler din organisation driver:\n\nAktuell kunskapsbas: All information systemet svarar med måste vara korrekt och uppdaterad. En chatbot om LIA-regler som arbetar mot dokument från förra terminen är inte ett stöd – det är en systematisk felkälla. Det krävs rutiner för att uppdatera kunskapsbasen vid varje förändring av regelverk, avtal eller rutiner.\n\nTydlig avgränsning: Systemet måste kommunicera klart till användarna vad det kan svara på och vad det inte kan. Otydliga avgränsningar skapar förväntningar som systemet inte kan möta.\n\nEskalationsväg: Alltid en lättillgänglig och tydlig väg till en mänsklig handläggare. Inte efter tre misslyckade försök – omedelbart tillgänglig.',
        items: [
          'Kunskapsbas kräver rutinmässig uppdatering vid varje förändring',
          'Systemets begränsningar måste kommuniceras tydligt till användarna',
          'Studerande ska inte behöva "gissa" om systemet kan svara på deras fråga',
          'Eskalationsväg till en människa måste vara synlig och lättanvänd',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'Chatbotten som sparade tid och skapade problem',
        content:
          'En YH-organisation med tre utbildningsprogram och 180 studerande implementerar en AI-chatbot för att hantera vanliga frågor under LIA-perioden. Systemet byggs på befintliga FAQ-dokument och är driftsatt på tre dagar. Personalen är positiv – äntligen en avlastning för de upprepade e-postfrågorna.\n\nUnder de första veckorna fungerar systemet bra. Studerande ställer enkla frågor och får snabba svar.\n\nSedан: Ett nytt LIA-avtal med ändrade sjukanmälningsrutiner träder i kraft. Ingen uppdaterar chatbottens kunskapsbas. En studerande med sjukdom under LIA följer chatbottens instruktion. Situationen eskalerar till en formell tvist om huruvida studeranden uppfyllt sina skyldigheter – eftersom hen följt information som organisationen tillhandahållit via sin officiella kanal.\n\nDen rättsliga bedömningen: organisationens ansvar för information som distribueras via deras system gäller oavsett om det är ett AI-system eller ett mänskligt svar. En chatbot är inte ett mellanlager som skyddar organisationen juridiskt.',
      },
      {
        id: '6-concept2',
        type: 'concept',
        title: 'Rätt och fel ansvarsområden för AI-stödsystem',
        content:
          'Avgränsning av vad ett AI-system får svara på är ett ledningsbeslut, inte ett tekniskt beslut. Tydliga ansvarsgränser är ett skydd för organisationen:',
        items: [
          'Lämpligt: Allmän information om tider, platser, kontaktuppgifter, formulär',
          'Lämpligt: Navigeringsstöd i system och plattformar',
          'Lämpligt: Hänvisning till rätt kontaktperson för specifika frågor',
          'Olämpligt: Tolkning av LIA-avtal, examinationsregler eller rättighetsfrågor',
          'Olämpligt: Individuella bedömningar av situationer som rör studeranderättigheter',
        ],
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"En chatbot minskar organisationens ansvar för felaktig information" → Nej – ansvar kvarstår oförändrat',
          '"Vi sätter upp systemet en gång och det sköter sig" → Förvaltning är en kontinuerlig verksamhetsuppgift',
          '"Studerande förstår att chatbotar kan ha fel" → Studerande agerar på informationen de får; det är din risk',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Transparens är ett juridiskt krav, inte bara god praxis',
        content:
          'Det är inte godtagbart att implementera ett AI-drivet stödsystem utan att tydligt kommunicera till studerande och personal att de interagerar med ett automatiserat system, vad systemet kan och inte kan svara på, och hur de når en mänsklig handläggare. Otydlighet på dessa punkter är en rättslig exponering, inte bara en pedagogisk brist.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på de vanligaste frågorna som din organisation får från studerande under ett läsår. Kategorisera dem:\n\n1. Faktafrågor med entydiga, standardiserade svar (t.ex. "när stänger systemet?", "vilken blankett ska jag fylla i?")\n2. Situationsberoende frågor som kräver bedömning (t.ex. "kan jag byta LIA-plats?", "vad händer om jag är sjuk under tentamen?")\n3. Rättighetsfrågor med juridiska dimensioner\n\nVilken kategori är lämplig för AI-stöd? Hur kommunicerar du gränsen till dina studerande?',
      },
    ],
    quiz: [
      {
        question: "Vad kräver ett förvaltningsbart AI-stödsystem riktat mot studerande?",
        options: [
          "Att det kan svara på alla tänkbara frågor",
          "Att kunskapsbasen uppdateras regelbundet och systemet kommunicerar sina gränser tydligt",
          "Att det har ett attraktivt gränssnitt",
          "Att det är gratis att använda"
        ],
        correctIndex: 1,
        explanation: "En chatbot är bara lika pålitlig som sin kunskapsbas. Utan löpande uppdateringar och tydlig kommunikation om begränsningar riskerar studerande att agera på felaktig information.",
      },
      {
        question: "Vad skapar organisatoriskt ansvar när en AI-chatbot ger felaktig information till studerande?",
        options: [
          "Inget – det är ett tekniskt problem för leverantören",
          "Studeranden borde ha verifierat informationen",
          "Organisationen, eftersom informationen distribuerades via officiella kanaler",
          "Den enskilda medarbetare som konfigurerade chatbotten"
        ],
        correctIndex: 2,
        explanation: "Information som distribueras via organisationens officiella kanaler – oavsett om det är AI eller människa – är organisationens ansvar. Studerande kan agera i god tro på den informationen.",
      },
      {
        question: "Vad är ett juridiskt krav (inte bara god praxis) vid AI-chatbotar mot användare?",
        options: [
          "Att chatboten svarar inom en sekund",
          "Att chatboten kan hantera minst fem ämnesområden",
          "Att användare informeras om att de kommunicerar med ett automatiserat system",
          "Att chatboten kan kommunicera på minst tre språk"
        ],
        correctIndex: 2,
        explanation: "Transparens om automatiserade system är ett juridiskt krav – inte bara en rekommendation. Användare har rätt att veta om de pratar med en människa eller ett system.",
      },
    ],
  },

  {
    id: 7,
    title: 'Juridik, tillsyn och organisationsansvar',
    subtitle: 'GDPR, EU AI Act och YH-tillsyn',
    duration: '',
    icon: '⚖️',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'Det regulatoriska landskapet kring AI',
        content:
          'Som ledare i en YH-organisation verkar du i ett reglerat fält. Utbildningskvalitet, antagning, betygsättning och studeranderättigheter regleras av YH-förordningen och MYH:s föreskrifter. Personuppgiftshantering regleras av GDPR. Och nu tillkommer EU AI Act, som inför specifika krav på organisationer som använder AI-system i sin verksamhet.\n\nDetta är inte en teknisk fråga som du kan delegera till IT-avdelningen eller till en extern konsult. Ansvaret för att din organisation följer tillämplig lagstiftning är ett lednings- och styrelseansvar. Den operativa frågan är hur du skapar en organisation som hanterar dessa krav proaktivt – inte reaktivt i samband med tillsyn eller incident.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Tre regelverk du behöver behärska som ledare',
        content:
          'Du behöver inte vara jurist för att ta ansvar för regelefterlevnad – men du behöver ha tillräcklig förståelse för att ställa rätt frågor och fatta välgrundade beslut.\n\nGDPR gäller varje behandling av personuppgifter. I AI-kontexten är den kritiska frågan: Var behandlas data när personal använder kommersiella AI-verktyg? Om en handläggare klistrar in studerandedata i ett externt AI-verktyg, passerar uppgifterna den externa tjänstens servrar – vilket är en behandling av personuppgifter som kräver rättslig grund och ofta ett databehandlingsavtal.\n\nEU AI Act klassificerar AI-system efter risknivå. System som används i beslut om utbildningsantagning, betyg och tillgång till utbildning klassificeras som hög risk och lyder under strikta krav: transparens, mänsklig tillsyn, riskbedömning och dokumentation.\n\nYH-förordningen och MYH:s tillsyn: Kraven på utbildningskvalitet och dokumentation gäller oavsett om AI var involverat i produktionen. MYH granskar slutresultaten – inte hur de producerades.',
        items: [
          'GDPR: All personuppgiftsbehandling kräver rättslig grund – även i externa AI-verktyg',
          'EU AI Act: System för antagning, betyg och tillgång till utbildning = hög risk, strikta krav',
          'YH-förordningen: Kvalitetskrav gäller fullt ut oavsett om AI var involverat',
          'Ansvar kan aldrig delegeras till ett AI-system – det kvarstår hos din organisation',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Tre rättsliga scenarier från YH-verkligheten',
        content:
          'Scenario 1 – GDPR-incident:\nEn administratör på en YH-utbildning börjar använda ett populärt kommersiellt AI-verktyg för att hantera studerandes individuella studieplaner. Hon klistrar in information om studerandenas hälsosituation, studiesvårigheter och individuella anpassningar. Uppgifterna behandlas på en server utanför EU. Organisationen har inget databehandlingsavtal med leverantören. Studeranden anmäler till Integritetsskyddsmyndigheten. Organisationen ställs inför en potentiell sanktionsavgift och utredningskostnader.\n\nScenario 2 – EU AI Act:\nEn YH-organisation implementerar ett AI-system som stöder antagningsprocessen genom att ranka sökande baserat på profilering av ansökningsdokument. Systemet klassificeras som ett högrisk-AI-system under EU AI Act. Organisationen har inte genomfört en riskbedömning, inte dokumenterat systemet korrekt och inte säkerställt mänsklig tillsyn. Vid granskning konstateras allvarliga brister i efterlevnaden.\n\nScenario 3 – YH-tillsyn:\nEn utbildningsledare låter AI producera utkast till kursplaner som sedan godkänns utan fullständig granskning. Vid MYH-tillsyn identifieras att flera lärandemål inte uppfyller förordningskraven. Utbildningsledaren förklarar att AI var involverat. MYH:s svar: ansvar för dokumentens korrekthet är otvetydigt organisationens och den person som undertecknat dem.',
      },
      {
        id: '7-concept2',
        type: 'concept',
        title: 'Praktisk regelefterlevnad: vad du behöver göra',
        content:
          'Regelefterlevnad i AI-frågor är inte ett engångsprojekt. Det är en kontinuerlig verksamhetsprocess som kräver:',
        items: [
          'Inventering: Vilka AI-verktyg används i organisationen, formellt och informellt?',
          'Rättslig grund: Finns databehandlingsavtal med alla leverantörer vars verktyg behandlar personuppgifter?',
          'Klassificering: Används något AI-system i beslut som påverkar studeranderättigheter?',
          'Dokumentation: Är användningen dokumenterad på ett sätt som kan visas vid tillsyn?',
          'Rutiner: Finns det klara rutiner för vem som godkänner AI-stödd output och hur?',
        ],
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd på ledningsnivå',
        content: '',
        items: [
          '"GDPR gäller bara om vi lagrar data" → Varje behandling – inklusive att skicka data till ett externt system – är reglerad',
          '"EU AI Act berör inte utbildningsorganisationer" → Utbildningsantagning och betygssättning namnges explicit som högrisk-tillämpningar',
          '"Vi är skyddade om vi inte officiellt har infört AI" → Informell användning av kommersiella AI-verktyg räknas som organisationens användning',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Ovetskap skyddar inte',
        content:
          'Att som ledning inte känna till att personalen använder AI-verktyg i organisationens namn fritar inte organisationen från ansvar för konsekvenserna. Proaktiv styrning och inventering är enda sättet att eliminera den blinda fläcken.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Inventering och prioritering',
        content:
          'Gör en preliminär inventering:\n\n1. Vilka kommersiella AI-verktyg används i din organisation – formellt godkänt eller inte?\n2. Finns det databehandlingsavtal för dessa verktyg?\n3. Används något AI-system i beslut som påverkar studeranderättigheter?\n4. Vem i din organisation är ansvarig för att besvara dessa frågor?\n\nVad är de tre viktigaste åtgärderna du behöver vidta under de närmaste tre månaderna?',
      },
    ],
    quiz: [
      {
        question: "Vilka tre regelverk är centrala för YH-organisationer som använder AI?",
        options: [
          "ISO, ITIL och PCI-DSS",
          "GDPR, EU AI-förordningen och YH-förordningen",
          "NIS2, DORA och eIDAS",
          "Dataskyddslagen, upphovsrättslagen och konsumentlagen"
        ],
        correctIndex: 1,
        explanation: "GDPR reglerar personuppgiftsbehandling, EU AI-förordningen klassificerar utbildningssystem som högrisk, och YH-förordningens kvalitetskrav gäller oavsett hur dokument producerats.",
      },
      {
        question: "Vad innebär högriskklassificering under EU AI-förordningen för en YH-organisation?",
        options: [
          "Att AI-användning är förbjuden",
          "Att inga krav ställs eftersom klassificeringen är preliminär",
          "Att krav på transparens, kontroll och dokumentation gäller",
          "Att alla AI-system måste granskas av Skolinspektionen"
        ],
        correctIndex: 2,
        explanation: "Högriskklassificering under EU AI Act innebär specifika krav: dokumentation av AI-användning, transparens mot berörda, och kontrollstrukturer – inte förbud.",
      },
      {
        question: "Vad skyddar en organisation mot juridiska konsekvenser vid AI-relaterade brister?",
        options: [
          "Att använda välkända AI-leverantörer",
          "Att inte dokumentera AI-användningen",
          "Proaktiv inventering och strukturerat styrningsarbete",
          "Att enbart använda AI för interna dokument"
        ],
        correctIndex: 2,
        explanation: "Ovetskap eliminerar inte organisationsansvar. Proaktiv inventering, rättslig grund för verktyg, och tydliga styrningsrutiner är det enda effektiva riskminimeringsarbetet.",
      },
    ],
  },

  {
    id: 8,
    title: 'Strategisk AI-styrning',
    subtitle: 'Policy, styrelsearbete och organisationsutveckling',
    duration: '',
    icon: '🎯',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'Från reaktiv till proaktiv AI-styrning',
        content:
          'De flesta YH-organisationer befinner sig i en reaktiv fas i relation till AI: verktyg används informellt, inga riktlinjer finns, och ledningen förhåller sig till AI-frågor när de uppstår som problem – inte som strategiska möjligheter att forma.\n\nDen proaktiva fasen ser annorlunda ut: AI-användning är definierad och reglerad, personalen vet vad som är tillåtet och vad som kräver extra granskning, styrelsen har godkänt organisationens ställningstagande i frågan, och det finns rutiner för att utvärdera och revidera användningen löpande.\n\nFörflyttningen från reaktiv till proaktiv är din uppgift som ledare. Inte för att AI är den viktigaste frågan just nu – utan för att oreglerad AI-användning med ett växande fotavtryck i din organisation är en ökande risk som kostar mer att hantera reaktivt.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Ramverk för AI-beslut i din organisation',
        content:
          'Varje beslut om att introducera, utöka eller begränsa AI-användning i din organisation bör prövas mot fyra dimensioner:\n\nNytta: Vad löser AI faktiskt i det här arbetsflödet? Inte vad det teoretiskt kan göra, utan vilket verkligt problem i er specifika verksamhet det adresserar. Om ingen kan formulera ett konkret svar är förslaget teknikdrivet, inte behovsdrivet.\n\nRisk: Vad kan gå fel? Hur allvarliga är konsekvenserna? Vem drabbas – personal, studerande eller organisation?\n\nGenomförbarhet: Har organisationen kapacitet att implementera, förvalta och utbilda kring systemet? De flesta misslyckade implementationer misslyckas inte på tekniken – de misslyckas på förvaltningskapaciteten.\n\nAnsvar: Vem äger systemet operativt? Vem granskar att det fungerar? Vem bär ansvaret när det uppstår fel?',
        items: [
          'Nytta: Vilket verkligt problem löses – konkret, i er verksamhet?',
          'Risk: Vad kan gå fel, hur allvarligt, och vem drabbas?',
          'Genomförbarhet: Har vi kapacitet att förvalta detta?',
          'Ansvar: Vem äger det? Vem ansvarar när det går fel?',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Styrelsens fråga om AI-strategi',
        content:
          'Styrelseordföranden ber vid årets strategimöte om ett ställningstagande: "Borde vi använda AI mer systematiskt?"\n\nEtt välgrundat svar är varken reflexmässigt positivt eller negativt. Det är analytiskt.\n\nDet identifierar konkret var i er specifika verksamhet AI-stöd skapar reellt värde med hanterbara risker: administrativ dokumentproduktion, sammanfattning av tillsynsunderlag, förberedelse av möten och presentationer.\n\nDet pekar ut de verksamhetsmoment där AI är direkt olämpligt givet de juridiska och etiska ramar ni verkar inom: beslut om antagning och examination, individuell rådgivning till studerande i rättighetsrelaterade frågor.\n\nDet beskriver vad som behöver vara på plats organisatoriskt och juridiskt för att ni ska kunna använda AI ansvarsfullt: riktlinjer, databehandlingsavtal, förvaltningsrutiner, kompetensutveckling, uppföljning.\n\nOch det presenterar en konkret plan för de närmaste tolv månaderna: vad som prövas, på vilka villkor, hur ni utvärderar och vem som ansvarar.\n\nDet svaret kräver inte teknisk expertis. Det kräver verksamhetskunskap och den förståelse för AI-systems möjligheter och begränsningar som du nu har grunderna för.',
      },
      {
        id: '8-concept2',
        type: 'concept',
        title: 'En AI-policy som håller',
        content:
          'Detaljerade regler åldras snabbt. Principbaserade riktlinjer håller längre. En AI-policy för din organisation behöver inte vara teknisk – den bör vara värderingsbaserad och strukturerad kring:',
        items: [
          'Transparens: Vi kommunicerar alltid när AI är involverat i beslut eller kommunikation',
          'Ansvar: AI-stöd frigör inte mänskligt ansvar – beslutsfattaren bär fullt ansvar',
          'Kvalitet: AI-stödd produktion möter samma krav som mänsklig produktion',
          'Integritet: Personuppgifter hanteras med samma noggrannhet oavsett om AI är involverat',
          'Uppföljning: Vår AI-användning utvärderas och revideras minst en gång per år',
        ],
      },
      {
        id: '8-concept3',
        type: 'concept',
        title: 'Att vara en informerad beställare av AI-system',
        content:
          'En av de viktigaste kompetenserna för YH-ledningen i AI-frågor är att vara en informerad beställare – att kunna ställa rätt krav på leverantörer, IT-partners och externa konsulter.',
        items: [
          '"Vilken data tränas systemet på, och hur hanteras vår data?"',
          '"Var lagras information vi matar in, och under vilka jurisdiktionella villkor?"',
          '"Hur uppdateras systemet och hur säkerställer vi att det är aktuellt?"',
          '"Hur kan vi följa upp och granska systemets beslut i efterhand?"',
          '"Vad är er ansvarsbild om systemet ger felaktig information med konsekvenser för oss?"',
        ],
      },
      {
        id: '8-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd i ledningsfunktioner',
        content: '',
        items: [
          '"Vi behöver en teknisk expert för att fatta AI-beslut" → Strategiska AI-beslut kräver verksamhetskunskap, inte primärt teknisk expertis',
          '"En AI-policy kan vänta tills vi vet mer" → Att avvakta är ett beslut – det innebär oreglerad användning under väntetiden',
          '"Styrelsen behöver inte involveras i AI-frågor" → AI-relaterade risker och beslut är styrelsenivåfrågor',
        ],
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Avslutande reflektion',
        content:
          'Den här kursen avslutas inte med ett svar – den avslutas med ett uppdrag:\n\nFormulera organisationens AI-ställningstagande i tre delar:\n\n1. Var ser vi tydlig nytta med hanterbara risker – och vad krävs för att realisera den nyttan ansvarsfullt?\n2. Var sätter vi en tydlig gräns – och hur kommunicerar vi den till personal och studerande?\n3. Vad är vårt nästa konkreta steg, och vem äger det?\n\nDetta är utgångspunkten för ditt examensarbete – och för ditt strategiska ledarskap i en tid av snabb teknologisk förändring.',
      },
    ],
    quiz: [
      {
        question: "Vad innebär proaktiv AI-styrning till skillnad från reaktiv?",
        options: [
          "Att följa med i den senaste AI-forskningen",
          "Att definiera användning, sätta policy och etablera granskningsrutiner innan problem uppstår",
          "Att reagera snabbt när AI-relaterade incidenter inträffar",
          "Att blockera alla AI-verktyg tills de är tillräckligt mogna"
        ],
        correctIndex: 1,
        explanation: "Proaktiv styrning innebär att organisationen äger sin AI-strategi och definierar spelreglerna i förväg – snarare än att hantera konsekvenser av oreglerad användning.",
      },
      {
        question: "Vilken fråga är viktigast att ställa till en AI-leverantör vid upphandling?",
        options: [
          "Hur många kunder har ni?",
          "Vilket programmeringsspråk använder ni?",
          "Vem äger data vi matar in, var lagras den, och hur uppdateras kunskapsbasen?",
          "Hur lång är er supporttelefontid?"
        ],
        correctIndex: 2,
        explanation: "Dataägarskap, lagringsplats och uppdateringsrutiner är kärnan i ansvarsfull upphandling – de avgör GDPR-compliance och systemets pålitlighet över tid.",
      },
      {
        question: "Vad händer i praktiken om en organisation väljer att inte besluta om en AI-policy?",
        options: [
          "Personalen slutar använda AI",
          "IT-avdelningen tar automatiskt över ansvaret",
          "Oreglerad och okontrollerad AI-användning med kvalitets- och compliancerisker uppstår",
          "Ansvaret vilar automatiskt på den enskilde medarbetaren"
        ],
        correctIndex: 2,
        explanation: "Att inte besluta är ett aktivt beslut – det resulterar i oreglerad användning med reella risker för kvalitet och regelefterlevnad. Det finns ingen neutral position.",
      },
    ],
  },
]
