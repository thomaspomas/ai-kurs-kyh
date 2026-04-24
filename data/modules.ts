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
          'De flesta som börjar använda AI-verktyg bär på en felaktig grundbild – att AI förstår, resonerar och vet. Den bilden leder till felaktiga beslut. Den här modulen handlar om att ersätta den bilden med en korrekt och hanterbar modell av vad AI faktiskt gör. Det är utgångspunkten för allt annat i kursen.',
      },
      {
        id: '1-concept',
        type: 'concept',
        title: 'Sannolikhetsbaserad textgenerering',
        content:
          'En stor språkmodell (LLM – Large Language Model) gör i grunden en sak: den förutsäger vilket ord som mest sannolikt ska komma härnäst, givet allt som föregår det. Det är inte resonemang. Det är inte förståelse. Det är avancerad mönsterigenkänning baserad på en enorm mängd träningsdata – text från internet, böcker, artiklar och dokument.\n\nModellen har sett miljontals exempel på hur text om utbildning, juridik, kvalitetsarbete och yrkeshögskola ser ut. Den kan producera text som låter precis som en expert – för att den lärt sig hur experter formulerar sig. Men den vet inte om det hon säger är sant.',
        items: [
          'AI förutsäger text – den resonerar inte',
          'Träningsdata avgör vad modellen kan och inte kan',
          'Välformulerat = inte nödvändigtvis korrekt',
          'Modellen har en kunskapsavstängningsdatum – ny information saknas',
        ],
      },
      {
        id: '1-example',
        type: 'example',
        title: 'Från utbildningsledarens vardag',
        content:
          'En utbildningsledare ber AI:n sammanfatta MYH:s senaste riktlinjer för LIA-handledning. AI:n producerar ett trovärdigt, välformulerat svar med korrekta termer och en logisk struktur. Men svaret är delvis fel – modellen har inte tillgång till det senaste dokumentet och genererar i stället något som låter korrekt baserat på äldre mönster.\n\nDetta kallas hallucination – och det är inte ett fel som kan fixas. Det är en inneboende egenskap hos hur språkmodeller fungerar. Frekvensen varierar, men risken är alltid närvarande, särskilt för specifik faktainformation.',
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
        title: 'Problemet som overraskar alla',
        content:
          'De flesta som börjar använda AI i längre arbetsuppgifter stöter på samma problem: AI:n verkar glömma vad man diskuterade tidigare. Det är inte ett tekniskt fel eller en bugg. Det är en fundamental egenskap hos hur dessa system fungerar – och att förstå den är avgörande för att använda AI effektivt i komplexa arbetsmoment.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Tokens och kontextfönstret',
        content:
          'En token är ungefär 3–4 tecken – inte ett ord, inte en mening, utan ett fragment av text. Varje gång du interagerar med en AI-modell hanteras all text som tokens: din fråga, AI:ns svar, hela konversationshistoriken.\n\nModellen har ett kontextfönster – ett "arbetsminne" som kan hålla ett visst antal tokens åt gången. I moderna modeller kan detta vara relativt stort, men det är alltid begränsat. När konversationen blir tillräckligt lång börjar den äldsta informationen trängas ut ur kontextfönstret. Det är då AI:n "glömmer" vad ni pratat om i början.',
        items: [
          'Token ≈ 3–4 tecken (inte ord)',
          'Kontextfönstret = modellens aktiva arbetsminne',
          'Äldre information kan trängas ut ur kontexten',
          'AI har inget minne mellan separata sessioner (som standard)',
        ],
      },
      {
        id: '2-example',
        type: 'example',
        title: 'Kursplaner och försvinnande krav',
        content:
          'Du arbetar med att revidera kursplaner för tre utbildningar. Du startar en lång konversation med AI:n om den första utbildningen och specificerar tidigt vilka formatkrav som gäller. Sedan hoppar du till den tredje utbildningen – och märker att AI:n nu ignorerar formatkraven du angav i början.\n\nDetta är ett strukturproblem, inte ett AI-problem. Lösningen är att börja nya uppgifter i nya sessioner, att sammanfatta och återintroducera viktiga krav, och att organisera arbetet i kortare, väldefinierade block snarare än en enda lång konversation.',
      },
      {
        id: '2-concept',
        type: 'concept',
        title: 'Strategier för att hantera kontextbegränsningar',
        content:
          'Det finns etablerade strategier för att arbeta effektivt trots dessa begränsningar:',
        items: [
          'Börja varje ny deluppgift med en kort sammanfattning av relevanta krav och kontext',
          'Dela upp komplexa uppdrag i separata, avgränsade sessioner',
          'Spara viktiga instruktioner och krav i ett separat dokument som du kan klistra in',
          'Verifiera att AI:n "minns" kritiska krav genom att be den bekräfta vad den ska utgå från',
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
          '"Jag kan lita på att AI håller reda på alla krav jag nämnt" → Tidiga krav kan trängas ut och ignoreras',
        ],
      },
      {
        id: '2-warning',
        type: 'warning',
        title: 'När bör du INTE förlita dig på AI:ns minne?',
        content:
          'I alla uppgifter där korrekt tillämpning av specifika krav är kritisk – t.ex. förordningskrav, juridiska villkor eller specifika formatkrav – ska du aldrig förutsätta att AI:n "minns" dessa krav från tidigare i konversationen. Återintroducera alltid kritiska begränsningar i varje nytt block av arbetet.',
      },
      {
        id: '2-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Hur hanterar du i dag viktig information i långa e-posttrådar eller komplexa möten – hur säkerställer du att alla parter är på samma sida? Vilka av dessa strategier är direkt överförbara till hur du organiserar din interaktion med AI?',
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
          'En prompt är din instruktion till AI-systemet. Kvaliteten på prompten avgör i hög grad kvaliteten på svaret – inte för att AI:n är kräsen, utan för att vaga instruktioner leder till vaga svar och att AI:n fyller tomrummen med sina egna antaganden. Att lära sig skriva välstrukturerade promptar är en praktisk kompetens, inte en teknisk.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Promptens fyra beståndsdelar',
        content:
          'En välstrukturerad prompt innehåller fyra element. Du behöver inte alltid använda alla fyra – men att veta om dem hjälper dig att identifiera vad som saknas när resultatet inte blir bra.',
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
          'Jämför dessa två promptar för samma uppgift:\n\n❌ Svag prompt:\n"Hjälp mig skriva en kursplan."\n\n✅ Välstrukturerad prompt:\n"Du är en erfaren utbildningsutvecklare med god kännedom om YH-förordningen 2009:128. Jag ska skriva en kursplan för kursen Hållbar logistik på en KY-utbildning inom Supply Chain. Utbildningens målgrupp är yrkesverksamma vuxna med erfarenhet från lager och transport. Skriv ett förslag på kursens syfte (ca 150 ord), fem lärandemål och tre examinationsformer. Utgå från krav i YH-förordningen. Inkludera inte generisk introduktionstext om hållbarhet – fokusera direkt på kursinnehållet."\n\nResultaten är inte marginellt olika – de är fundamentalt olika i relevans och användbarhet.',
      },
      {
        id: '3-concept',
        type: 'concept',
        title: 'Negativa instruktioner och iterativ design',
        content:
          'Negativa instruktioner – att säga vad AI:n INTE ska göra – är kraftfulla och underanvända. "Undvik marknadsföringsspråk", "inkludera inte teknisk systemdokumentation", "skriv inte en inledning om AI:s historia" kan dramatiskt förbättra relevansen.\n\nPromptdesign är iterativt. Börja med ett utkast, granska vad som saknades eller var fel, och förfina prompten. Tre iterationer ger ofta ett markant bättre resultat än det första försöket.',
        items: [
          'Precision > längd – en kort precis prompt slår en lång vag',
          'Testa negativa instruktioner för att eliminera oönskat innehåll',
          'Iterera – bra promptar skrivs sällan rätt på första försöket',
          'Spara dina bästa promptar som mallar för återbruk',
        ],
      },
      {
        id: '3-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om promptar',
        content: '',
        items: [
          '"En bra prompt är en lång prompt" → Precision är viktigare än längd; för lång prompt kan späda ut instruktionerna',
          '"AI förstår vad jag menar om jag är ungefär tydlig" → Tvetydighet i input ger tvetydighet i output',
          '"Jag behöver bara skriva prompten en gång" → Promptdesign är iterativt arbete',
        ],
      },
      {
        id: '3-warning',
        type: 'warning',
        title: 'När precisering är särskilt kritisk',
        content:
          'I arbetsmoment där AI-output ska användas direkt utan omfattande granskning – t.ex. kommunikation till studerande, formella dokument, dagordningar till ledningsgrupper – är välstrukturerade promptar inte valfritt utan nödvändigt. En vag prompt i ett högrisk-sammanhang är en professionell risk.',
      },
      {
        id: '3-reflection',
        type: 'reflection',
        title: 'Övning och reflektionsfråga',
        content:
          'Välj en av dessa tre verkliga arbetsuppgifter och skriv en välstrukturerad prompt med alla fyra elementen (roll, kontext, uppgift, begränsning):\n\n1. Sammanfatta en tillsynsrapport från MYH inför ett ledningsgruppsmöte\n2. Skriv en dagordning för ett kursplanerevideringmöte\n3. Utforma en kommunikation till LIA-handledare om uppdaterade krav\n\nEfter att du skrivit prompten: Vilken del var svårast att formulera? Vad säger det om vad som verkligen är komplext i den uppgiften?',
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
          'Att tilldela AI:n en roll – en persona – är inte ett marknadsföringtrick eller en rolig funktion. Det är en systematisk metod för att styra svarets perspektiv, prioriteringar och tonalitet. För utbildningsledare öppnar det möjligheten att använda AI som ett genuint stöd för professionell förberedelse.',
      },
      {
        id: '4-concept',
        type: 'concept',
        title: 'Vad en persona faktiskt gör',
        content:
          'När du ger AI:n en roll – "Du är en extern granskare från MYH" – ändras svarets karaktär på ett förutsägbart sätt. Modellen anpassar ordval, betoning och vad den väljer att lyfta fram baserat på hur texter skrivna av den rollen typiskt ser ut i träningsdatan.\n\nPersonan ändrar perspektiv och ton. Den ändrar inte kunskapsbasen. En AI som spelar rollen av en juridisk expert vet inte mer juridik än en utan persona – men den formulerar sig mer som en jurist och lyfter fram juridiska aspekter.',
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
          'Inför ett ledningsgruppsmöte om ny AI-policy vill du förbereda dig på motargument och kritiska frågor. I stället för att försöka föreställa dig alla möjliga invändningar ber du AI:n:\n\n"Anta rollen som en kritisk extern granskare från Myndigheten för yrkeshögskolan med erfarenhet av tillsyn. Granska följande förslag till AI-policy för vår utbildningsorganisation och identifiera de tre svagaste punkterna ur ett tillsynsperspektiv. Motivera varje punkt med hänvisning till vad som typiskt granskas vid tillsyn."\n\nResultatet ger dig specifika, relevanta invändningar att förbereda svar på – mycket mer användbart än ett generellt "identifiera svagheter".',
      },
      {
        id: '4-concept',
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
          '"Rollspel med AI är oseriöst" → Strukturerad användning av personas är ett etablerat pedagogiskt verktyg',
          '"AI:ns persona-svar är objektivt" → Det är fortfarande ett sannolikhetsbaserat svar, nu styrt av rollinstruktionen',
        ],
      },
      {
        id: '4-warning',
        type: 'warning',
        title: 'Risken med bekräftande personas',
        content:
          'En persona kan förstärka din egen bild av en situation snarare än utmana den – om du ber AI:n spela en roll som du redan håller med, riskerar du att få ett välformulerat instämmande i stället för en genuin utmaning. Sök aktivt perspektiv som utmanar, inte bekräftar.',
      },
      {
        id: '4-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'I vilka situationer i din roll som utbildningsledare behöver du se ett ärende från flera perspektiv? Hur gör du det i dag – och vem eller vad hjälper dig att se blinda fläckar? Hur kan AI:n komplettera detta utan att ersätta det verkliga samtalet med kollegor och studerande?',
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
          'Hittills har vi pratat om AI som ett verktyg du frågar och som svarar. Agentic AI är något annat – ett system som sätter upp ett mål, delar upp det i deluppgifter, utför dem i sekvens och itererar tills målet är uppnått. Det är kraftfullt. Det är också potentiellt riskabelt utan rätt kontrollpunkter.',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Vad skiljer en agent från en prompt',
        content:
          'En vanlig AI-interaktion: Du skriver en prompt, AI:n svarar, du läser svaret. Klart.\n\nEn agent: Du anger ett mål. Agenten analyserar vad som behöver göras, anropar verktyg (sökning, dokumentläsning, formulärfyllning), utvärderar resultaten, justerar planen och fortsätter – tills målet är uppnått eller den fastnar.\n\nDetta gör agenter väl lämpade för repetitiva, flerstegiga uppgifter. Det gör dem också mer benägna att göra sammansatta fel – ett fel tidigt i flödet kan fortplantas och förstoras.',
        items: [
          'Agenter sätter upp delmål och utför dem i sekvens',
          'De kan anropa externa verktyg och system',
          'Fel i tidiga steg fortplantas till senare steg',
          'Mänsklig kontroll vid kritiska beslutspunkter är inte valfritt',
        ],
      },
      {
        id: '5-example',
        type: 'example',
        title: 'Agentflöde: Kursplanegranskning',
        content:
          'Tänk dig ett agentbaserat stöd för kvalitetsgranskning av kursplaner:\n\nSteg 1 → Tar emot kursplan som dokument\nSteg 2 → Kontrollerar att alla obligatoriska fält är ifyllda\nSteg 3 → Jämför lärandemålen mot förordningskrav i databasen\nSteg 4 → Genererar checklista med avvikelser\nSteg 5 → Skapar utkast till återkoppling till ansvarig lärare\n\nFrågan är inte "kan detta fungera?" (svaret är ja). Frågan är: Var i detta flöde MÅSTE en människa granska? Vad händer om agenten feltolkar ett förordningskrav? Vem har ansvar för den återkoppling som skickas till läraren?',
      },
      {
        id: '5-concept',
        type: 'concept',
        title: 'Kontrollpunkter i agentflöden',
        content:
          'En väldesignad agentprocess har explicita mänskliga kontrollpunkter – ställen där flödet pausar och en människa granskar och godkänner innan det fortsätter. Kontrollpunkter är inte ett tecken på att systemet inte litar på AI. De är ett tecken på att organisationen tar ansvar.',
        items: [
          'Definiera i förväg: Vilka beslut får agenten fatta autonomt?',
          'Definiera i förväg: Vilka beslut kräver alltid mänskligt godkännande?',
          'Bygg in stoppunkter vid beslut med hög konsekvens',
          'Logga vad agenten gör – spårbarhet är en förutsättning för ansvar',
        ],
      },
      {
        id: '5-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om agenter',
        content: '',
        items: [
          '"Agenten gör det automatiskt, så det är klart" → Automation garanterar inte korrekthet',
          '"Om systemet är konfigurerat rätt behöver jag inte granska" → Konfigurationen kan ha fel; data är komplex',
          '"Agentic AI är framtiden – vi bör implementera det omedelbart" → Mognadsnivå, risknivå och juridik måste utvärderas per verksamhet',
        ],
      },
      {
        id: '5-warning',
        type: 'warning',
        title: 'Var agentbaserad AI INTE är lämpligt',
        content:
          'I arbetsmoment som direkt påverkar studeranderättigheter – antagning, betygssättning, LIA-godkännande, disciplinärenden – ska det alltid finnas en definierad och faktisk mänsklig beslutspunkt. Att "godkänna" en agents output utan verklig granskning är inte en kontrollpunkt. Det är en formell procedur utan reellt innehåll.',
      },
      {
        id: '5-reflection',
        type: 'reflection',
        title: 'Designövning',
        content:
          'Välj ett administrativt arbetsmoment i din verksamhet som är repetitivt och tidskrävande. Skissa ett enkelt flöde:\n\n1. Vad skulle ett agentbaserat stöd göra i steg 1, 2, 3?\n2. Var i flödet MÅSTE du som utbildningsledare vara med och fatta ett aktivt beslut?\n3. Vad händer i värsta fall om agenten gör fel – och vem bär ansvar?\n\nFundera sedan: Är fördelarna med automation tillräckliga för att motivera det arbete som krävs för att bygga och underhålla rätt kontrollpunkter?',
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
          'Realtids-AI – chatbottar, live-assistenter, adaptivt stöd – ger intrycket av omedelbarhet och tillgänglighet. För utbildningsorganisationer är det frestande: tillgänglig support dygnet runt, snabba svar på vanliga frågor, skalbar vägledning. Men frestelserna i denna kategori är lika stora som möjligheterna.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Vad realtids-AI egentligen innebär',
        content:
          'En realtids-AI-lösning kräver mer än en chatbot. Det kräver kontinuerligt underhåll av den informationsbas systemet hämtar svar från, tydlig kommunikation till användarna om systemets begränsningar, rutiner för vad som händer när systemet ger fel svar, och en eskalationsväg till en människa.\n\nUtan dessa delar är en chatbot inte ett stöd – det är en felkälla med ett gränssnitt.',
        items: [
          'Realtid kräver aktiv underhåll av kunskapsbasen – information blir inaktuell',
          'Svarstid och tillgänglighet skapar förväntningar som måste hanteras',
          'Användare förutsätter ofta att systemet är uppdaterat och korrekt',
          'Eskalationsväg till människa är nödvändig, inte valfri',
        ],
      },
      {
        id: '6-example',
        type: 'example',
        title: 'LIA-chatbotten som gav fel svar',
        content:
          'En YH-utbildning implementerar en AI-driven chatbot för studerande under LIA-perioden. Systemet är snabbt och tillgängligt dygnet runt. En studerande ställer frågan: "Vad händer om jag är sjuk under LIA?"\n\nChatbotten ger ett svar baserat på äldre rutiner som inte längre stämmer med det uppdaterade LIA-avtalet. Studeranden handlar utifrån felaktigt information. Situationen eskalerar och leder till en formell tvist.\n\nVem har ansvar? Utbildningsorganisationen som implementerade systemet utan tillräckliga säkerhetsmekanismer. Hur hade detta kunnat undvikas? Tydlig kommunikation om begränsningar, begränsad scope (bara FAQ, inte avtalstolkning), och rutinmässig uppdatering av kunskapsbasen.',
      },
      {
        id: '6-concept',
        type: 'concept',
        title: 'Rätt scope för realtids-AI',
        content:
          'Det finns uppgifter där realtids-AI fungerar väl och uppgifter där det är direkt olämpligt. Nyckeln är att definiera scope tydligt och kommunicera det till användarna.',
        items: [
          'Lämpligt: Vägledning om var information finns, öppettider, kontaktuppgifter',
          'Lämpligt: Generella FAQ om utbildningens upplägg',
          'Lämpligt: Navigeringsstöd i system och plattformar',
          'Olämpligt: Tolkning av avtal, LIA-krav eller regelverk',
          'Olämpligt: Individuella bedömningar eller undantag',
        ],
      },
      {
        id: '6-misconceptions',
        type: 'misconceptions',
        title: 'Vanliga missförstånd om realtids-AI',
        content: '',
        items: [
          '"En chatbot är alltid tillgänglig, alltså är det bättre än mänskligt stöd" → Tillgänglighet kompenserar inte felaktighet',
          '"Vi kan använda AI-vägledning utan att kommunicera begränsningarna" → Transparens är ett etiskt och juridiskt krav',
          '"Realtids-AI är en kostnadsbesparing" → Implementering, underhåll och felhantering medför egna kostnader',
        ],
      },
      {
        id: '6-warning',
        type: 'warning',
        title: 'Transparens som grundkrav',
        content:
          'Det är inte acceptabelt att implementera ett AI-drivet stödsystem utan att tydligt kommunicera till användarna att de interagerar med ett automatiserat system. Studierande och lärare har rätt att veta att svaret de får kommer från ett AI-system – och att eskalera till en människa om de vill det.',
      },
      {
        id: '6-reflection',
        type: 'reflection',
        title: 'Reflektionsfråga',
        content:
          'Identifiera tre typer av frågor du eller dina kollegor får regelbundet från studerande eller lärare. Kategorisera dem:\n\n1. Standardiserade faktafrågor med enkla, entydiga svar\n2. Frågor som kräver tolkning av specifik situation\n3. Frågor med rättsliga eller avtalsrättsliga dimensioner\n\nVilken kategori är lämplig för AI-stöd? Var går gränsen – och hur kommunicerar du den gränsen till dina användare?',
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
          'Den här modulen är kursens viktigaste. Alla positiva möjligheter med AI är villkorade av en grundläggande sanning: ansvar kan inte delegeras till ett system. Det gäller oavsett hur imponerande systemet är, hur väl det fungerar i normala fall, eller hur lite tid du hade att granska det.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Hallucination – definition och konsekvenser',
        content:
          'Hallucination är termen för när en AI-modell producerar information som är felaktig men presenteras med samma eller till och med högre konfidens än korrekt information. Det är inte ett undantagsfall. Det händer för alla modeller, i alla sammanhang, med varierande frekvens.\n\nDet som gör hallucinationer farliga i utbildningssammanhang är inte att de förekommer – det är att de ofta är välformulerade och specifika. En hallucination är inte "jag vet inte". Det är ett skenbart säkert svar med fel innehåll.',
        items: [
          'Hallucinationer är vanligare för specifik faktainformation (paragrafnummer, datum, namn)',
          'Välformulerat svar = inte nödvändigtvis korrekt svar',
          'Modeller saknar förmåga att signalera sin egen osäkerhet tillförlitligt',
          'Verifiera alltid mot primärkällan vid faktapåståenden med konsekvenser',
        ],
      },
      {
        id: '7-example',
        type: 'example',
        title: 'Tre scenarier från utbildningsverkligheten',
        content:
          'Scenario 1 – Hallucination med konsekvens:\nEn utbildningsledare ber AI:n formulera vilka krav MYH ställer på pedagogisk kompetens hos LIA-handledare. AI:n anger en specifik paragraf och procentsats med övertygande precision. Paragrafen existerar inte. Dokumentet skickas till arbetsgivare.\n\nScenario 2 – Personuppgifter:\nStudieadministratörer uppmuntras att klistra in studerandeuppgifter i ett kommersiellt AI-verktyg för att få hjälp med schemaläggning. Uppgifterna lämnar organisationens kontrollerade miljö och behandlas på en extern server. GDPR tillämpas på varje bearbetning av personuppgifter – inte bara lagring.\n\nScenario 3 – Ansvarskedjan:\nEn kursplan är till 80% skriven av AI och 20% redigerad av utbildningsledaren. MYH anmärker vid tillsyn på bristande förankring i förordningen. Vem bär ansvar? Utbildningsledaren. Alltid.',
      },
      {
        id: '7-concept',
        type: 'concept',
        title: 'Juridiska ramar du behöver känna till',
        content:
          'Tre regelverk är centrala för utbildningsorganisationers AI-användning:',
        items: [
          'GDPR: Varje bearbetning av personuppgifter är reglerad. Att klistra in studerandedata i ett externt AI-verktyg är behandling av personuppgifter och kräver rättslig grund.',
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
          '"GDPR gäller bara om vi lagrar data" → Varje bearbetning av personuppgifter är reglerad',
          '"AI Act berör inte oss – vi är en utbildningsorganisation" → AI Act påverkar alla som använder AI-system i EU',
          '"Om vi inte officiellt implementerat AI är vi inte berörda" → Informell användning av kommersiella AI-verktyg räknas',
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
          'Kursen avslutas där den är mest relevant: vid ditt skrivbord, i dina möten, inför dina beslut. Du är inte teknisk specialist och ska inte vara det. Men du leder en organisation där AI redan används – formellt eller informellt – och där fler beslut om AI-användning väntar. Den här modulen handlar om hur du tar det ansvaret.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Ramverk för AI-beslut',
        content:
          'Varje beslut om att introducera eller utöka AI i en verksamhet bör bedömas längs fyra dimensioner. De behöver inte vara formella – men de bör vara genomtänkta.',
        items: [
          'Nytta: Vad löser AI faktiskt i det här arbetsflödet? Är det ett reellt problem eller ett upplevt problem?',
          'Risk: Vad kan gå fel? Vilka är konsekvenserna av ett fel? Vem drabbas?',
          'Genomförbarhet: Har vi kapacitet att implementera, underhålla och utbilda kring det här systemet?',
          'Ansvar: Vem äger systemet? Vem granskar output? Vem är ansvarig när det går fel?',
        ],
      },
      {
        id: '8-example',
        type: 'example',
        title: 'Styrelsens fråga',
        content:
          'Styrelsen frågar utbildningsledaren: "Borde vi använda AI mer systematiskt?"\n\nEtt välgrundat svar är varken "Ja, absolut – alla gör det" eller "Nej, det är för riskabelt". Det är ett analytiskt svar som identifierar var i er specifika verksamhet AI skapar reellt värde, var riskerna är hanterbara, och vad som behöver vara på plats organisatoriskt och juridiskt för att använda det ansvarsfullt.\n\nDet svaret kan bara en utbildningsledare med förståelse för verksamheten, ansvaret och teknologins begränsningar ge. Det är inte ett teknikexpertsvar. Det är ett ledarskapssvar.',
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Att vara informerad beställare',
        content:
          'En av de viktigaste kompetenserna för en utbildningsledare i AI-frågor är att vara en informerad beställare – att kunna ställa rätt frågor till leverantörer, IT-avdelning och externa konsulter.',
        items: [
          '"Vilken data tränar systemet på, och äger vi den datan?"',
          '"Var lagras den data vi matar in, och under vilka villkor?"',
          '"Hur uppdateras kunskapsbasen, och hur ofta?"',
          '"Vad är er garantinivå för korrekthet, och vad händer när den bryts?"',
          '"Hur kan vi audita systemets beslut i efterhand?"',
        ],
      },
      {
        id: '8-concept',
        type: 'concept',
        title: 'Principiella riktlinjer för organisationen',
        content:
          'Detaljerade regler åldras snabbt. Principbaserade riktlinjer håller längre. En AI-policy för din organisation behöver inte vara teknisk – den bör vara värderingsbaserad:',
        items: [
          'Transparens: Vi kommunicerar alltid till studerande och personal när AI är involverat',
          'Ansvar: AI frigör inte mänskligt ansvar – det kvarstår hos den människa som fattar beslutet',
          'Kvalitet: AI-stödd produktion håller samma kvalitetskrav som mänsklig produktion',
          'Integritet: Personuppgifter hanteras med samma skärpa oavsett om AI är involverat',
          'Kontinuerlig granskning: Vår AI-användning utvärderas regelbundet',
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
          '"En AI-policy kan vänta tills vi vet mer" → Fördröjning är ett beslut – det innebär oreglerad användning',
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
  },
]

export function getModule(id: number): CourseModule | undefined {
  return modules.find((m) => m.id === id)
}

export function getTotalSections(): number {
  return modules.reduce((acc, m) => acc + m.sections.length, 0)
}
