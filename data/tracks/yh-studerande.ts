import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    title: 'AI ur ett studerandeperspektiv',
    subtitle: 'Vad verktyget gör – och vad det kräver av dig',
    duration: '',
    icon: '🧠',
    sections: [
      {
        id: '1-intro',
        type: 'intro',
        title: 'Du använder förmodligen redan AI – det finns mer att förstå',
        content:
          'De flesta studerande på yrkeshögskola och vuxenutbildning har redan provat AI-verktyg. Kanske för att söka information, skriva ett utkast, förklara ett begrepp eller komma igång med en uppgift. Det är en rimlig utgångspunkt.\n\nMen det finns en stor skillnad mellan att använda ett AI-verktyg och att förstå vad det faktiskt gör – och det är den skillnaden som avgör om du använder det på ett sätt som hjälper dig lära dig det du behöver, eller på ett sätt som ger dig en kortare väg förbi lärandet.\n\nDen här kursen handlar inte om att säga nej till AI. Den handlar om att ge dig tillräcklig förståelse för att kunna använda det klokt – och om att du ska ha koll på de regler och gränser som gäller för akademisk integritet i din utbildning.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Vad AI faktiskt gör – kort version',
        content:
          'En stor språkmodell (som ChatGPT, Claude eller Copilot) gör en sak: den förutsäger statistiskt vilket ord som passar bäst i ett givet sammanhang. Den har lärt sig detta av gigantiska mängder text. Den resonerar inte, förstår inte och "vet" inte – den mönstermatchar.\n\nDetta är viktigt för dig att förstå av tre skäl:\n\nFör det första kan AI vara fel utan att det syns. AI-genererad text kan låta helt övertygande och ändå innehålla faktafel, felaktiga citat och hittade på källor. Det kallas hallucination. Om du lämnar in det verifierar du alltså inte – du riskerar att lämna in fel information med hög säkerhet.\n\nFör det andra lär sig AI inte om dig. Varje session börjar i princip från grunden. AI "minns" inte din kurs, dina tidigare uppgifter eller dina personliga lärandemål.\n\nFör det tredje är välformulerat text inte detsamma som att du lärt dig något. Det är skillnaden som avgör om du om ett halvår faktiskt kan göra det du utbildar dig till – eller om du bara klarat uppgifterna.',
        items: [
          'AI mönstermatchar text – den resonerar inte och förstår inte',
          'AI kan producera övertygande men felaktig information – alltid verifiera',
          'Välformulerad AI-text = inte evidens för att du lärt dig',
          'AI har inga personliga minnen av dig eller din kurs',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Texten som lät rätt men var fel',
        content:
          'En studerande på en utbildning i juridik och samhällskunskap behöver skriva om ett rättsfall. Hon ber AI sammanfatta rättsfallet och ange domen med paragrafnummer.\n\nAI ger ett välformulerat svar med specifika paragrafnummer, datum och formuleringar som låter exakt som ett riktigt juridiskt dokument. Hon lämnar in svaret.\n\nHennes lärare kontrollerar paragrafnumren mot rättsdatabasen. Domstolsbeslutet finns – men paragrafnumren stämmer inte. Formuleringarna är delvis konstruerade av AI baserat på hur juridiska dokument brukar låta.\n\nStuderanden hade inte medvetet försökt fuska. Hon hade helt enkelt litat på att välformulerat = korrekt. Det är ett vanligt misstag – och ett dyrbart sådant.\n\nRegeln: Faktapåståenden, datum, namn, paragrafnummer och citat från AI ska alltid kontrolleras mot primärkällan innan de används.',
      },
      {
        id: '1-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om AI',
        content: '',
        items: [
          '"AI vet mer än jag gör" → AI mönstermatchar text – den har inte förståelse eller omdöme',
          '"Om det låter säkert är det troligen rätt" → Hallucinationer låter ofta väldigt säkra',
          '"AI lär sig av mig" → Standardmodeller lagrar inte din konversation för träning',
        ],
      },
      {
        id: '1-warning',
        type: 'warning',
        title: 'Verifiera alltid faktapåståenden',
        content:
          'Lita aldrig på specifika faktauppgifter från AI utan att kontrollera dem mot en primärkälla. Det gäller lagtext, domar, statistik, citat, datum och namnangivelser. Välformulerat svar är inte tillräckligt evidens för att informationen är korrekt.',
      },
      {
        id: '1-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på hur du hittills använt AI-verktyg i dina studier – eller om du inte använt dem alls. Vad är din nuvarande bild av vad AI kan och inte kan? Har det här avsnittet förändrat något i den bilden? Vad är det viktigaste du tar med dig vidare?',
      },
    ],
  },

  {
    id: 2,
    title: 'Kontextfönstret – vad det innebär för dig',
    subtitle: 'Varför AI "glömmer" och hur du hanterar det',
    duration: '',
    icon: '💾',
    sections: [
      {
        id: '2-intro',
        type: 'intro',
        title: 'AI glömmer – och berättar det inte',
        content:
          'En vanlig frustration hos studerande som börjar använda AI mer systematiskt är att systemet verkar "glömma" saker. Du gav en detaljerad instruktion i början av konversationen – och nu verkar AI inte bry sig om den. Du bad om ett visst format tre gånger – det fjärde svaret ignorerar det.\n\nDet är inte slumpmässigt och det är inte AI:ns fel. Det är ett tekniskt faktum om hur dessa system fungerar, och det har konkreta konsekvenser för hur du bäst använder dem i dina studier. När du förstår varför det händer kan du arbeta med det – i stället för att bli frustrerad och ge upp.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Kontextfönstret',
        content:
          'Varje AI-konversation har ett "kontextfönster" – en begränsad mängd text som systemet kan hålla i minnet under en session. All text som skrivs – dina frågor, AI:ns svar, dokument du klistrar in – tar plats i detta fönster. När det är fullt trängs den äldsta informationen ut.\n\nTänk på det som ett rullande whiteboard. Information skrivs hela tiden in på höger sida, och när tavlan är full försvinner den äldsta informationen från vänster sida – utan att du märker det.\n\nDet innebär: om du arbetar länge med en komplicerad uppgift och ger instruktioner i början av konversationen kan dessa instruktioner försvinna ur AI:ns "minne" när konversationen blir tillräckligt lång. AI berättar inte att detta hänt – den fortsätter svara som om allt är normalt.',
        items: [
          'Kontextfönstret = AI:s aktiva minne; alltid begränsat',
          'Långa konversationer riskerar att tidiga instruktioner glöms bort',
          'AI signalerar inte när information försvunnit',
          'Varje ny session börjar från grunden – inga minnen från tidigare sessioner',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Examensarbetet som tappade tråden',
        content:
          'Du skriver ditt examensarbete och bestämmer dig för att använda AI som skrivcoach. Du börjar med att berätta om din frågeställning, dina avgränsningar och vilken ton du vill ha – akademisk men lättillgänglig. AI svarar bra på din första fråga.\n\nTre timmar och tio utbyten senare ger AI återkoppling som inte längre tar hänsyn till din ursprungliga frågeställning. Du har klistrat in kapitel, bett om ändringar och fått långa svar – och all den texten har trängt ut din ursprungliga instruktion ur kontextfönstret.\n\nLösningen: Inled varje ny session med en kort "bakgrundsinformation" – ditt syfte, din frågeställning, din målgrupp. Spara denna text i ett dokument och klistra in den i varje ny konversation. Det tar 30 sekunder och gör dina sessioner mycket mer produktiva.',
      },
      {
        id: '2-concept2',
        type: 'concept',
        title: 'Praktiska strategier',
        content:
          'Nu när du vet vad kontextfönstret är kan du arbeta med det:',
        items: [
          'Dela upp komplexa uppgifter i separata sessioner – en session per kapitel eller avsnitt',
          'Spara din "startinstruktion" (syfte, format, ton) och klistra in den i varje ny session',
          'Be AI upprepa dina krav i början av svaret för att bekräfta att det "minns" dem',
          'Håll instruktioner i en separat textfil och klistra in dem vid behov',
        ],
      },
      {
        id: '2-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"En längre konversation ger bättre hjälp" → Långa sessioner kan ge sämre resultat när tidiga instruktioner trängs ut',
          '"AI minns vad vi diskuterade förra gången" → Varje session börjar från noll',
          '"Om AI inte nämner att det glömt är allt OK" → AI berättar inte om sina minnesbegränsningar',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'Kontrollera att AI faktiskt följer dina instruktioner',
        content:
          'Speciellt i långa sessioner: kontrollera regelbundet att AI:ns svar faktiskt lever upp till dina ursprungliga krav. Läs kritiskt, inte bara en snabb skanning. Om AI börjat avvika: starta en ny session och ge din instruktion igen.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Har du upplevt att AI verkat "glömma" dina instruktioner under en lång session? Hur reagerade du då – och hur hade du kunnat hantera det med kunskapen om kontextfönstret? Hur tänker du använda AI mer strukturerat i dina studier framöver?',
      },
    ],
  },

  {
    id: 3,
    title: 'AI som studieverktyg',
    subtitle: 'Använda AI på ett sätt som faktiskt stöder ditt lärande',
    duration: '',
    icon: '✏️',
    sections: [
      {
        id: '3-intro',
        type: 'intro',
        title: 'Verktyget som kan hjälpa eller hindra',
        content:
          'AI kan vara ett kraftfullt studieverktyg om du använder det på rätt sätt. Det kan förklara svåra begrepp på ett sett som passar dig, hjälpa dig att strukturera dina tankar, ge dig övningsfrågor och ge återkoppling på utkast. Men det kan också ta bort just det som gör att lärandet sker – ansträngningen att tänka igenom ett problem, formulera ett svar och ta ställning till om det är rätt.\n\nDet handlar inte om att välja mellan att använda eller inte använda AI. Det handlar om att använda det på ett sätt som faktiskt stöder ditt lärande – och som gör dig mer kompetent, inte mer beroende.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'AI-användning som stöder lärande',
        content:
          'Det finns sätt att använda AI som är pedagogiskt kraftfulla – de är gemensamma: de kräver att du tänker, inte att AI tänker åt dig.',
        items: [
          'Förklara svåra begrepp: "Förklara begreppet X på ett sätt en nybörjare förstår"',
          'Övningsfrågor: "Ställ fem övningsfrågor om Y som testar förståelse, inte memorering"',
          'Motdiscussion: "Jag tror att Z stämmer – vilka argument talar emot det?"',
          'Strukturhjälp: "Jag ska skriva om A, B och C – hur kan jag strukturera det logiskt?"',
          'Feedback på eget utkast: "Ge tre konkreta förbättringsförslag på det här stycket"',
        ],
      },
      {
        id: '3-example',
        type: 'example',
        title: 'Att använda AI som en studiekamrat',
        content:
          'En studerande på en utbildning i ekonomi förstår inte riktigt skillnaden mellan likviditet och soliditet – begreppen blandas ihop i hans huvud. I stället för att läsa lärobokstexten en gång till ber han AI:\n\n"Förklara skillnaden mellan likviditet och soliditet som om du pratar med någon som arbetat på lager i tio år men aldrig studerat ekonomi. Ge ett konkret vardagsexempel för varje begrepp."\n\nAI ger en förklaring med ett exempel om ett företag som har mycket pengar kvar om en månad (likviditet) kontra ett företag vars totala tillgångar är större än dess skulder (soliditet). Det klickar.\n\nHan kopierar inte AI:ns text. Han läser förklaringen, stänger fönstret och skriver ner begreppspar med egna ord. Nu har han lärt sig.\n\nDetta är ett bra exempel på AI som katalysator för eget lärande – inte som ersättning för det.',
      },
      {
        id: '3-concept2',
        type: 'concept',
        title: 'AI-användning som hindrar lärande',
        content:
          'Det finns också sätt att använda AI som minskar ditt lärande, även om de verkar effektiva på kort sikt:',
        items: [
          'Klistra in uppgiften och lämna in AI:ns svar = du har inte lärt dig att lösa uppgifter',
          'Låta AI sammanfatta texter du inte läst = du missade den analytiska träningen',
          'Använda AI för att skriva argumentationsövningar = du tränade inte argumentationen',
          'Använda AI för att svara på tentamensliknande frågor = du vet inte om du kan svara utan',
        ],
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI hjälper mig göra uppgifter snabbare" → Snabbare uppgifter ≠ mer lärande; lärandet är i ansträngningen',
          '"Om jag förstår AI:ns svar har jag lärt mig" → Att förstå ett svar är lättare än att producera det – examinationen kräver det senare',
          '"Alla använder AI – det är OK" → Det är inte ett etiskt argument',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'Fråga dig: Vad lär jag mig av det här?',
        content:
          'Innan du använder AI på ett uppgift: fråga dig vad du är tänkt att lära dig av uppgiften. Om AI gör den åt dig – vad lär du dig då? Om svaret är "ingenting" eller "lite" – använd AI för att stödja din process, inte för att ersätta den. Du betalar (med tid, pengar och ansträngning) för att bli kompetent – inte för att klara uppgifter.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på en kursuppgift du nyligen arbetat med. Hur använde du (eller kunde du ha använt) AI på ett sätt som stöder ditt lärande, snarare än ersätter det? Vad är skillnaden mellan de sätt att använda AI som hjälper dig bli mer kompetent, och de som tar en genväg förbi kompetensen?',
      },
    ],
  },

  {
    id: 4,
    title: 'Kritiskt tänkande och källkritik',
    subtitle: 'Att inte lita blint på AI',
    duration: '',
    icon: '🎭',
    sections: [
      {
        id: '4-intro',
        type: 'intro',
        title: 'Den farliga säkerheten',
        content:
          'Det som gör AI svårt att vara kritisk mot är att det låter så säkert. Svaren är välformulerade, strukturerade och presenterade utan tvekan. Det är exakt hur information som verkar trovärdig ser ut.\n\nMen säkerheten i tonen är en egenskap hos texten – inte en indikation på att informationen är korrekt. AI kan vara fel med lika hög säkerhet som den kan vara rätt. Och den vanligaste typen av fel – felaktiga specifika fakta, konstruerade citat, påhittade källor – är just den typ som ser mest trovärdig ut.\n\nKritiskt tänkande och källkritik är grundläggande akademiska kompetenser. AI gör dem viktigare, inte mindre viktiga.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'Hallucination och hur du identifierar den',
        content:
          'Hallucination är termen för när AI producerar information som är felaktig men framförs med hög säkerhet. Det är inte ett sällsynt undantagsfall – det är en inneboende egenskap hos hur statistiska språkmodeller fungerar.\n\nVilken typ av information hallucinerar AI oftast?\n\nFaktaspecifika uppgifter: Paragrafnummer, statistikuppgifter, specifika datum, namn på verkliga dokument och publikationer. AI skapar text som ser ut som korrekt fakta – för att det är så korrekt fakta brukar se ut.\n\nCitat och källhänvisningar: AI kan skapa citat som låter exakt som en verklig källa men som inte finns. Det kan ge korrekta namn på verkliga författare med felaktiga citat, eller konstruera titlar och utgivningsår på böcker som aldrig skrivits.',
        items: [
          'Paragrafnummer och specifika lagkrav: Kontrollera alltid mot primärkällan',
          'Citat och källhänvisningar: Kontrollera att källan faktiskt finns och att citatet stämmer',
          'Statistik: Kontrollera mot ursprungsdataset eller rapport',
          'Historiska fakta: Verifiera mot pålitlig källa, inte en annan AI',
        ],
      },
      {
        id: '4-example',
        type: 'example',
        title: 'Källan som inte existerade',
        content:
          'En studerande på en utbildning inom socialt arbete skriver ett paper om anhörigstöd. Hon ber AI föreslå relevanta vetenskapliga källor för hennes ämne.\n\nAI ger fyra källhänvisningar med fullständiga bibliografiska uppgifter: namn, tidskrift, årgång och sidnummer. De ser exakt ut som riktiga akademiska referenser.\n\nNär hon söker efter dem i universitetsbibliotekets databaser hittar hon två av fyra. En tredje hittar hon under ett annat namn i en annan tidskrift – AI har blandat ihop uppgifterna. Den fjärde existerar inte i någon databas hon kan hitta.\n\nOm hon inte hade kontrollerat: en källa hade citerats som belägg för ett påstående den aldrig gjort, och en annan hade inte existerat.\n\nRegeln: AI:s källhänvisningar ska alltid kontrolleras manuellt. Kontrollera att källan finns, att den säger det AI påstår och att citatet stämmer.',
      },
      {
        id: '4-concept2',
        type: 'concept',
        title: 'Källkritiska frågor att ställa till AI-output',
        content:
          'Precis som du ställer källkritiska frågor till en artikel eller rapport ska du ställa dem till AI-output:',
        items: [
          '"Kan jag verifiera det här påståendet mot en primärkälla?"',
          '"Stämmer det här citatet faktiskt med vad källan säger?"',
          '"Finns det här dokumentet/den här rapporten faktiskt?"',
          '"Är det här en faktauppgift som kan vara hallucination – och hur kontrollerar jag det?"',
          '"Vems perspektiv representerar det här svaret – och finns det andra?"',
        ],
      },
      {
        id: '4-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"AI söker på internet – informationen är aktuell" → Standardmodeller har ett träningsdatumsstopp och söker inte alltid',
          '"Om AI ger en specifik källa finns den" → AI konstruerar källor som ser ut som riktiga',
          '"Om två AI-svar säger samma sak är det troligen rätt" → AI:er kan vara tränade på samma felaktiga information',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Citat AI som källa är akademiskt fel',
        content:
          'AI är inte en akademisk källa. Du kan inte skriva "Enligt ChatGPT..." i ett akademiskt paper som om det vore en pålitlig källa. AI kan peka dig mot information – men du måste hitta och citera primärkällan, och kontrollera att informationen faktiskt stämmer.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur källkritisk är du i din vanliga studievardag – mot läroböcker, mot artiklar, mot information du hittar på internet? Hur skiljer sig den kritiska granskningen du gör mot dessa källor från vad du faktiskt gör när du läser ett AI-svar? Vad behöver du ändra i din rutin?',
      },
    ],
  },

  {
    id: 5,
    title: 'AI och dina uppgifter',
    subtitle: 'Att använda AI på rätt sätt i studieuppgifter',
    duration: '',
    icon: '🤖',
    sections: [
      {
        id: '5-intro',
        type: 'intro',
        title: 'Regler som gäller och hur du hittar dem',
        content:
          'Reglerna för hur du får använda AI-verktyg i dina studieuppgifter varierar mellan kurser, uppgifter och utbildningar. Det finns ingen universell regel – och det är ett problem om du inte vet vad som gäller för just din kurs.\n\nVad som konstant gäller: Du har ansvar för det du lämnar in. Om du lämnar in text du inte förstår, inte kan försvara och inte kan förklara med egna ord – oavsett hur den producerats – är det ett problem. Dels pedagogiskt (du har inte lärt dig det du borde), dels rättsligt (det kan bryta mot akademiska integritetskrav).\n\nDen här modulen hjälper dig navigera vad som är tillåtet och hur du undviker att hamna i en problematisk situation – oavsett om det beror på avsiktlig fusk eller ett misstag.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Hitta och förstå AI-reglerna i din kurs',
        content:
          'Det första steget är alltid att ta reda på vad som gäller. Letar du på fel ställe riskerar du att göra ett misstag i god tro:',
        items: [
          'Kursplanen och uppgiftsbeskrivningen: Läs noga – AI-regler ska finnas här',
          'Kursintroduktionen: Läraren bör ha kommunicerat sina regler explicit',
          'Om det är oklart: Fråga din lärare direkt – i förväg, inte efter inlämning',
          '"Alla gör det" är inte en källa till information om vad reglerna är',
          'Om inget sägs om AI: Fråga – antagandet att det är tillåtet är riskabelt',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Gråzonen – och hur du navigerar den',
        content:
          'Du ska skriva en analys av ett fallstudiedokument. Läraren har inte nämnt AI specifikt. Du bestämmer dig för att använda AI för att strukturera ditt argument, och sedan skriva texten själv baserat på strukturen.\n\nÄr det OK?\n\nDet beror på vad uppgiften är avsedd att mäta. Om läraren vill se din förmåga att strukturera ett analytiskt argument – och du låter AI göra det – har du kringgått exakt det läraren vill mäta, även om texten är "din".\n\nDen raka linjen: Om du är osäker – fråga. "Är det OK att använda AI för att strukturera mitt argument innan jag skriver?" är en fråga din lärare är skyldig dig ett svar på. Det tar 60 sekunder att skicka ett mejl och eliminerar risken helt.',
      },
      {
        id: '5-concept2',
        type: 'concept',
        title: 'Vad du alltid kan göra',
        content:
          'Oavsett vad reglerna säger finns det sätt att använda AI som sällan är problematiska:',
        items: [
          'Använda AI för att förklara begrepp du inte förstår – sedan formulera din förståelse med egna ord',
          'Använda AI för att generera övningsfrågor – och sedan besvara dem utan AI',
          'Använda AI som stavnings- och grammatikkontroll av text du skrivit själv',
          'Använda AI för att hitta potentiella ämnen eller perspektiv – och sedan forska vidare',
        ],
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"Om läraren inte säger att det är förbjudet är det tillåtet" → Oklar regel = risk; fråga alltid',
          '"AI-hjälp syns inte" → Det syns ofta inte direkt, men det märks vid muntliga seminarier och uppföljningar',
          '"Det är effektivare att använda AI" → Effektivare uppgifter ≠ mer lärande',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Du ansvarar för det du lämnar in',
        content:
          'Oavsett hur en text producerats bär du fullt ansvar för dess innehåll. Om det finns faktafel i en AI-genererad text du lämnat in är det ditt fel – inte AI:ns. Om texten bryter mot källkritiska krav är det ditt ansvar. "AI skrev det" är inte ett försvar.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Gå igenom dina nuvarande kurser mentalt. Vet du exakt vad som gäller om AI för varje kurs? Om du inte är säker på en eller fler: Vad ska du göra för att ta reda på det? Och vilka av dina nuvarande uppgifter designar du för att faktiskt lära dig – och vilka gör du för att "bli klar"?',
      },
    ],
  },

  {
    id: 6,
    title: 'AI under LIA',
    subtitle: 'Arbetsplatsens regler och din yrkesroll',
    duration: '',
    icon: '⚡',
    sections: [
      {
        id: '6-intro',
        type: 'intro',
        title: 'LIA – en ny kontext för AI-användning',
        content:
          'Under LIA – Lärande i Arbete – är du på en arbetsplats, inte i klassrummet. Det förändrar reglerna på ett fundamentalt sätt: Det är inte längre din lärare som sätter ramarna för hur du får använda AI. Det är arbetsplatsen.\n\nI en del branscher och på en del arbetsplatser är AI-verktyg ett dagligt och välkommet verktyg – ett som arbetsgivaren förväntar sig att du kan använda. I andra är AI-verktyg potentiellt problematiska: av konfidentialitetsskäl, av dataskyddsskäl eller av branschetiska skäl.\n\nAtt navigera detta på ett professionellt sätt – att fråga, att följa regler, att förstå varför reglerna finns – är en del av din yrkesutbildning. Det handlar om hur du agerar som professionell, inte bara som studerande.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Arbetsplatsens regler gäller',
        content:
          'På LIA-platsen är du underordnad arbetsplatsens regler, etik och kultur. Det gäller AI-verktyg precis som allt annat:',
        items: [
          'Ta reda på arbetsplatsens policy för AI-verktyg tidigt – helst under introduktionsdagen',
          'Fråga din LIA-handledare om du är osäker – innan du använder ett verktyg',
          'Behandla kunddata, klientinformation och affärsuppgifter med absolut konfidentialitet',
          'Klistra aldrig in konfidentiell information i ett externt AI-verktyg utan explicit tillstånd',
          'Om arbetsplatsen tillåter AI: använd de verktyg de sanktionerar, inte dina egna',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'Konfidentialitet och AI',
        content:
          'En studerande är på LIA hos ett bokföringsföretag. Hon har tillgång till klienters bokföringssystem och dokument. Hon vill använda AI för att hjälpa henne med en analys av en klients balansräkning.\n\nHon klistrar in ett utdrag ur klientens data i ett gratis AI-verktyg på internet.\n\nProblemet: Klientens ekonomiska data är konfidentiell affärsinformation. Att klistra in den i ett externt AI-verktyg innebär att dessa uppgifter skickas till en extern server, utanför bokföringsföretagets kontroll. Det bryter mot den konfidentialitetsklausul som typiskt ingår i ett bokföringsföretags kundavtal – och potentiellt mot GDPR om uppgifterna inkluderar personuppgifter.\n\nHon behöver inte ha haft onda avsikter. Hon behöver inte ha förstått att det var fel. Men konsekvensen kan vara ett avbrutet LIA, ett avtal som bryts och ett rykte hos arbetsgivaren och i branschen.\n\nRegeln: Konfidentiell information på en arbetsplats lämnar aldrig arbetsplatsens system utan explicit tillstånd.',
      },
      {
        id: '6-concept2',
        type: 'concept',
        title: 'AI-kompetens som yrkeskompetens',
        content:
          'I allt fler branscher är förmågan att använda AI-verktyg effektivt och ansvarsfullt en efterfrågad yrkeskompetens. LIA är ett tillfälle att visa just det:',
        items: [
          'Visa att du förstår skillnaden mellan tillåten och otillåten AI-användning',
          'Visa att du hanterar konfidentialitet professionellt',
          'Visa att du kan använda AI för att producera bättre arbete, inte för att undvika arbete',
          'Fråga om arbetsplatsen har verktyg eller processer med AI-stöd – och lär dig dem',
        ],
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd',
        content: '',
        items: [
          '"Gratis AI-verktyg på internet är OK att använda med jobbdata" → Nej – externt verktyg = extern databehandling',
          '"Om arbetsgivaren inte sagt nej är det OK" → Fråga proaktivt, anta inte',
          '"AI-kompetens handlar bara om att använda verktygen" → Det handlar lika mycket om att förstå gränserna',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Konfidentialitet är absolut',
        content:
          'Information du möter under LIA om kunder, klienter, patienter, elever eller affärsinterna processer är konfidentiell. Den hanteras inte utanför arbetsplatsens system utan explicit tillstånd – oavsett om du tänker använda den i ett AI-verktyg, ett personligt anteckningsprogram eller en konversation med en vän.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på den bransch och arbetsplats du är eller ska vara på under LIA. Vilka typer av konfidentiell information hanteras där? Hur tänker du ta reda på arbetsplatsens policy för AI-verktyg? Och vilken typ av AI-kompetens tror du är mest efterfrågad i den branschen?',
      },
    ],
  },

  {
    id: 7,
    title: 'Akademisk integritet – var går gränsen?',
    subtitle: 'Vad som räknas som fusk och hur du undviker det',
    duration: '',
    icon: '⚖️',
    sections: [
      {
        id: '7-intro',
        type: 'intro',
        title: 'Frågan alla undrar om men inte alltid ställer',
        content:
          'De flesta studerande har en ungefärlig känsla för var gränsen går – men "ungefärlig" räcker inte när konsekvenserna av att ha fel är ett disciplinärende, ett underkänt betyg eller ett avbrutet studium.\n\nAI har gjort gränsen mer komplex. Det som för tio år sedan var en tydlig regel – "skriv ditt eget" – har blivit mer sammansatt när "ditt eget" kan inkludera AI-stöd i strukturering, formulering, sökning, bearbetning och presentation. Det finns inte ett enkelt svar som gäller alla situationer.\n\nDen här modulen ger dig ett ramverk för att tänka kring akademisk integritet med AI – inte för att du ska bli rädd, utan för att du ska förstå varför reglerna finns och kunna navigera dem med sunt förnuft.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Vad akademisk integritet faktiskt handlar om',
        content:
          'Akademisk integritet handlar inte primärt om regler. Det handlar om vad utbildningen är till för.\n\nDu studerar för att bli kompetent inom ett yrke. Det innebär att du behöver faktiskt lära dig det kursen avser att lära dig – inte framstå som att du lärt dig det. Om du passerar en kurs utan att ha förvärvat kompetensen skadar det dig: du hamnar på en arbetsplats och kan inte utföra det du förväntas kunna. Det skadar branschen: arbetsgivaren rekryterar någon som inte har kompetensen. Och det underminerar värdet av din examen för alla som faktiskt lärt sig.\n\nFusk är inte ett brott mot utbildningssystemet. Det är ett brott mot dig själv – och mot de du i framtiden ska arbeta med och för.',
        items: [
          'Akademisk integritet = att din prestation speglar din faktiska kompetens',
          'Fusk skadar dig: du saknar kompetens du förväntas ha',
          'Fusk skadar branschen: arbetsgivare rekryterar utan den kompetens de tror sig rekrytera',
          'Fusk skadar dina kurskollegor: de konkurrererade på orättvisa villkor',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Tre scenarion och vad som gäller',
        content:
          'Scenario 1 – Tydligt fusk:\nDu lämnar in en rapport som AI genererat utan att du substantiellt bearbetat den. Du förstår inte innehållet och kan inte försvara det muntligen. Det är fusk oavsett om det finns en explicit AI-regel i kursen – du lämnar in ett arbete som inte representerar din kompetens.\n\nScenario 2 – Gråzon som kräver klarhet:\nDu ber AI strukturera ditt argument, sedan skriver du texten själv. Du förstår vad du skriver och kan försvara det. Är det OK? Det beror på vad uppgiften är avsedd att mäta. Om det är argumentationsstrukturen – kanske inte. Om det är textproduktionen utifrån ett givet argument – kanske ja. Fråga läraren.\n\nScenario 3 – Tydligt OK:\nDu använder AI för att förklara ett begrepp du inte förstår. Sedan formulerar du din förståelse med egna ord i uppgiften. Du kan försvara ditt resonemang utan AI. Det är att använda AI som ett läroverktyg – pedagogiskt sunt och generellt acceptabelt.',
      },
      {
        id: '7-concept2',
        type: 'concept',
        title: 'Att tänka igenom din AI-användning',
        content:
          'Ett praktiskt test för att avgöra om din AI-användning är OK:',
        items: [
          'Kan du förklara allt du lämnat in med egna ord – utan AI?',
          'Om läraren frågar om din process, kan du redogöra för den ärligt?',
          'Har du lärt dig det uppgiften var designad att lära dig?',
          'Har du följt de AI-regler som gäller för den här kursen?',
          'Om svaret på alla fyra är ja: du är förmodligen på rätt sida av linjen',
        ],
      },
      {
        id: '7-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om fusk',
        content: '',
        items: [
          '"Om det inte finns en explicit AI-regel är det tillåtet" → Akademisk integritet gäller oavsett reglernas formulering',
          '"Alla gör det så det är OK" → Det är inte ett etiskt argument och det skyddar dig inte',
          '"Det syns inte så det spelar ingen roll" → Konsekvenserna av att inte lära sig spelar roll – i arbetslivet, om inte under utbildningen',
        ],
      },
      {
        id: '7-warning',
        type: 'warning',
        title: 'Konsekvenserna av fusk är verkliga',
        content:
          'Disciplinärenden kring akademisk integritet kan leda till underkänt betyg, varning, tillfällig avstängning och i allvarliga fall permanent avlägsnande från utbildningen. De kan också nota sig i utbildningsdokumentation som arbetsgivare i vissa branscher begär. Det är inte värt risken – och det är verkligen inte värt att inte lära sig det du behöver kunna.',
      },
      {
        id: '7-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Tänk på den kurs du just nu upplever som svårast. Vad är det svåraste med den – och hur hanterar du det i dag? Har det funnits tillfällen där du använde AI på ett sätt du var lite osäker på? Hur kan du hantera svårigheten på ett sätt som faktiskt stöder ditt lärande, snarare än kringgår det?',
      },
    ],
  },

  {
    id: 8,
    title: 'AI och din framtida karriär',
    subtitle: 'En kompetens att bygga – och förstå',
    duration: '',
    icon: '🎯',
    sections: [
      {
        id: '8-intro',
        type: 'intro',
        title: 'AI är en del av ditt yrkesliv – oavsett bransch',
        content:
          'När du är klar med din utbildning och börjar arbeta kommer du att möta AI-verktyg – kanske redan på din första dag. Det kan vara branschspecifika system, allmänna produktivitetsverktyg eller AI-stöd i de system du arbetar i. I allt fler yrken förväntas du kunna använda dessa verktyg effektivt.\n\nMen det som i allt fler branscher är ännu mer värderat än att kunna använda AI är att förstå när du ska använda det, när du inte ska det, hur du kontrollerar resultaten och hur du kommunicerar transparent om din process. Det är kompetenser som kräver förståelse – inte bara vana.\n\nDen här sista modulen handlar om hur du tar med dig det du lärt i den här kursen in i ditt yrkesliv.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'AI-kompetens i arbetslivet',
        content:
          'Arbetsgivare i allt fler branscher söker specifika AI-relaterade kompetenser. Inte nödvändigtvis teknisk programmering – utan det som kallas informerat AI-användande:',
        items: [
          'Förmåga att formulera tydliga instruktioner och beställa rätt resultat',
          'Källkritisk granskning av AI-output innan det används',
          'Förståelse för vad AI kan och inte kan – och kommunicera det till kollegor',
          'Ansvarsfull hantering av data och konfidentialitet i AI-processer',
          'Förmåga att identifiera när AI-stöd är lämpligt och när det inte är det',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Att presentera din AI-kompetens',
        content:
          'I en anställningsintervju frågar rekryteraren: "Hur använder du AI-verktyg i ditt arbete?"\n\nEtt svagt svar: "Ja, jag använder ChatGPT och Claude för lite allt möjligt. Det är ganska bra."\n\nEtt starkt svar: "Jag använder AI-verktyg i min arbetsprocess, men med ett tydligt förhållningssätt. Jag använder dem för att strukturera och formulera, men jag kontrollerar alltid faktauppgifter mot primärkällor och lämnar inte vidare information jag inte kan stå bakom. Jag är noga med att aldrig mata in konfidentiell information i externa system. Och jag är medveten om när AI inte är ett lämpligt verktyg – t.ex. för beslut som kräver professionellt omdöme."\n\nDet starka svaret visar att du förstår verktyget, inte bara kan använda det. Det är skillnaden mellan att vara en ytlig AI-användare och en informerad yrkesperson som använder AI professionellt.',
      },
      {
        id: '8-concept2',
        type: 'concept',
        title: 'Fortsatt lärande i en snabbföränderlig teknik',
        content:
          'AI-verktyg förändras snabbt. Det du lär dig i dag om specifika verktyg kan vara inaktuellt om ett år. Men det du lär dig om principer – vad AI faktiskt gör, hur du tänker källkritiskt, hur du tar ansvar för din output – är stabilt.',
        items: [
          'Principerna för källkritik och verifiering gäller oavsett vilket verktyg du använder',
          'Förmågan att formulera tydliga instruktioner är transferabel',
          'Ansvarsfull hantering av data och konfidentialitet är en yrkeskompetens, inte ett teknikkunnande',
          'Återbesök ditt förhållningssätt till AI regelbundet – men behåll principerna',
        ],
      },
      {
        id: '8-concept3',
        type: 'concept',
        title: 'Vad du tar med dig från den här kursen',
        content:
          'Det du investerat tid i under den här kursen är inte en lista med verktyg. Det är en förståelsegrund:',
        items: [
          'Du förstår vad AI faktiskt gör – och kan förklara det för kollegor',
          'Du vet hur du identifierar hallucination och hur du kontrollerar information',
          'Du förstår skillnaden mellan AI-stöd som stärker din kompetens och som kringgår den',
          'Du vet hur du hanterar konfidentialitet och data professionellt',
          'Du kan navigera akademisk integritet och kommunicera transparent om din process',
        ],
      },
      {
        id: '8-reflection',
        type: 'reflection',
        title: 'Avslutande reflektion',
        content:
          'Kursen avslutas med en framtidsfråga:\n\nTänk på det yrke du utbildar dig till. Hur tror du att AI kommer att påverka arbetsuppgifterna i det yrket under de närmaste fem åren? Vilka uppgifter tror du AI kan ta över – och vilka tror du kräver mänskligt omdöme, relation och ansvar?\n\nOch: Vad är det du faktiskt utbildar dig till som gör dig värdefull i ett yrke där AI är ett dagligt verktyg?\n\nSkriv ner ditt svar. Det är utgångspunkten för din examination – och för din professionella identitet.',
      },
    ],
  },
]
