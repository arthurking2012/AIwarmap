/**
 * Preset Historical War Scenarios with Rich Prompts & Accurate Tactical Data
 * ისტორიული ომებისა და ბრძოლების მზა შაბლონები ქართულად
 */

export const HISTORICAL_PRESETS = [
  {
    id: "didgori_1121",
    title: "დიდგორის ბრძოლა (1121 წ.) - „ძლევაჲ საკვირველი“",
    period: "1121 წლის 12 აგვისტო",
    category: "საქართველოს ისტორია",
    description: "დავით IV აღმაშენებლის ბრწყინვალე სამხედრო ტაქტიკა და სელჩუკთა კოალიციის სრული განადგურება დიდგორის ველზე.",
    prompt: `1121 წლის 12 აგვისტო. დიდგორის ბრძოლა.
დავით IV აღმაშენებლის გაერთიანებული არმია (40,000 ქართველი, 15,000 ყივჩაყი, 500 ალანი და 200 ევროპელი ჯვაროსანი) დაბანაკდა მანგლისისა და დიდგორის ვიწრო ხეობებში.
ილღაზისა და დუბაისის 300,000-იანი სელჩუკთა კოალიციური არმია დაიძრა თბილისის მისადგომებისკენ.
დავითმა უკანდასახევი გზები ხეებით ჩახერგა და 200 თავდადებული რაინდი მოჩვენებითი მოლაპარაკებით გაგზავნა მტრის ბანაკში.
მოულოდნელი იერიშით ქართველთა 200-მა მეომარმა მტრის ცენტრი არია.
დავით აღმაშენებლის ძირითადი ძალები დაესხნენ თავს სელჩუკთა მთავარ კორპუსს, ხოლო დემეტრე უფლისწულის რაზმმა ნიჩბისის ხეობიდან ფლანგური და ზურგის გამანადგურებელი დარტყმა განახორციელა.
სელჩუკთა რიგები პანიკამ მოიცვა, არმიამ დაიწყო ქაოტური უკანდახევა. ქართველებმა გაათავისუფლეს თბილისი.`,
    scenarioData: {
      id: "didgori_1121",
      title: "დიდგორის ბრძოლა (1121 წ.) - „ძლევაჲ საკვირველი“",
      period: "1121 წლის 12 აგვისტო",
      mapBounds: { width: 1000, height: 650 },
      factions: [
        { id: "georgia", name: "საქართველოს სამეფო", primaryColor: "#2563eb", lightColor: "rgba(37, 99, 235, 0.25)", borderColor: "#1d4ed8" },
        { id: "seljuk", name: "სელჩუკთა კოალიცია", primaryColor: "#dc2626", lightColor: "rgba(220, 38, 38, 0.25)", borderColor: "#b91c1c" }
      ],
      cities: [
        { id: "didgori", name: "დიდგორის ველი", x: 450, y: 310, importance: "fortress", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 2 },
        { id: "manglisi", name: "მანგლისი", x: 340, y: 390, importance: "town", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 1 },
        { id: "tbilisi", name: "თბილისი (სამირო)", x: 700, y: 350, importance: "capital", ownerFactionId: "seljuk", isBesieged: false, fortificationLevel: 3 },
        { id: "nichbisi", name: "ნიჩბისის ხეობა", x: 440, y: 220, importance: "battlefield", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 1 }
      ],
      armies: [
        { id: "david_main", name: "დავით აღმაშენებლის სამეფო გვარდია", commander: "მეფე დავით IV", factionId: "georgia", startX: 350, startY: 310, x: 350, y: 310, strength: 40000, maxStrength: 40000, unitType: "infantry_heavy", status: "ready" },
        { id: "demetre_flank", name: "დემეტრე უფლისწულის კავალერია", commander: "დემეტრე უფლისწული", factionId: "georgia", startX: 430, startY: 190, x: 430, y: 190, strength: 15000, maxStrength: 15000, unitType: "cavalry", status: "ready" },
        { id: "crusaders", name: "200 ჯვაროსანი და ავანგარდი", commander: "ევროპელი რაინდები", factionId: "georgia", startX: 410, startY: 310, x: 410, y: 310, strength: 2000, maxStrength: 2000, unitType: "cavalry", status: "ready" },
        { id: "ilhazi_center", name: "ილღაზის სელჩუკთა ცენტრალური არმია", commander: "ნურ ად-დინ ილღაზი", factionId: "seljuk", startX: 620, startY: 310, x: 620, y: 310, strength: 180000, maxStrength: 180000, unitType: "infantry_heavy", status: "ready" },
        { id: "dubais_wing", name: "დუბაისის არაბულ-თურქმანული ფრთა", commander: "დუბაის იბნ სადაყა", factionId: "seljuk", startX: 630, startY: 410, x: 630, y: 410, strength: 120000, maxStrength: 120000, unitType: "cavalry", status: "ready" }
      ],
      keyframes: [
        {
          time: 0,
          date: "1121 წლის აგვისტოს დასაწყისი",
          title: "ძალთა განლაგება დიდგორისა და მანგლისის მიდამოებში",
          description: "დავით აღმაშენებელმა ქართული ლაშქარი ვიწრო ხეობებში განალაგა, რითაც სელჩუკთა რიცხობრივი უპირატესობა გაანეიტრალა. უკანდასახევი გზები ხეებით ჩაიხერგა.",
          phase: "mobilization",
          armyPositions: {
            david_main: { x: 350, y: 310, strength: 40000, status: "ready" },
            demetre_flank: { x: 430, y: 190, strength: 15000, status: "ready" },
            crusaders: { x: 410, y: 310, strength: 2000, status: "ready" },
            ilhazi_center: { x: 620, y: 310, strength: 180000, status: "ready" },
            dubais_wing: { x: 630, y: 410, strength: 120000, status: "ready" }
          },
          arrows: [],
          cityStates: [
            { id: "didgori", ownerFactionId: "georgia", isBesieged: false },
            { id: "manglisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "tbilisi", ownerFactionId: "seljuk", isBesieged: false },
            { id: "nichbisi", ownerFactionId: "georgia", isBesieged: false }
          ],
          tacticalNote: "დავითის სტრატეგია: ბრძოლის ველის შეზღუდვა ვიწრო ხეობაში."
        },
        {
          time: 4,
          date: "12 აგვისტო, დილა - 200 მეომრის თავგანწირული იერიში",
          title: "მოჩვენებითი მოლაპარაკება და მტრის რიგების არევა",
          description: "200 ქართველი და ჯვაროსანი მეომარი მშვიდობიანი მოლაპარაკების ნიღბით მიუახლოვდა სელჩუკთა ბანაკს, მოულოდნელად იშიშვლა ხმლები და მტრის ცენტრი პანიკაში ჩააგდო.",
          phase: "advance",
          armyPositions: {
            david_main: { x: 390, y: 310, strength: 40000, status: "marching" },
            demetre_flank: { x: 450, y: 220, strength: 15000, status: "marching" },
            crusaders: { x: 570, y: 310, strength: 1950, status: "in_combat" },
            ilhazi_center: { x: 600, y: 310, strength: 175000, status: "in_combat" },
            dubais_wing: { x: 610, y: 400, strength: 120000, status: "marching" }
          },
          arrows: [
            { fromX: 410, fromY: 310, toX: 570, toY: 310, color: "#2563eb", type: "advance", label: "200 მეომრის მოულოდნელი იერიში" }
          ],
          battleClashes: [
            { x: 585, y: 310, intensity: 0.9, label: "ავანგარდის შეტაკება" }
          ],
          cityStates: [
            { id: "didgori", ownerFactionId: "georgia", isBesieged: false },
            { id: "manglisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "tbilisi", ownerFactionId: "seljuk", isBesieged: false },
            { id: "nichbisi", ownerFactionId: "georgia", isBesieged: false }
          ],
          tacticalNote: "მოულოდნელობის ეფექტმა სელჩუკთა მართვის ცენტრი მოშალა."
        },
        {
          time: 8,
          date: "12 აგვისტო, შუადღე - ფრონტალური და ფლანგური შეტევა",
          title: "დავით აღმაშენებლისა და დემეტრეს შეთანხმებული დარტყმა",
          description: "დავით IV-ის მთავარი არმია ფრონტალურად დაესხა თავს სელჩუკთა ცენტრს, ხოლო დემეტრე უფლისწულმა ნიჩბისის ხეობიდან მოულოდნელად ზურგში დაარტყა მტერს.",
          phase: "battle",
          armyPositions: {
            david_main: { x: 490, y: 310, strength: 38500, status: "in_combat" },
            demetre_flank: { x: 560, y: 260, strength: 14700, status: "in_combat" },
            crusaders: { x: 550, y: 320, strength: 1800, status: "in_combat" },
            ilhazi_center: { x: 560, y: 310, strength: 110000, status: "in_combat" },
            dubais_wing: { x: 570, y: 390, strength: 85000, status: "in_combat" }
          },
          arrows: [
            { fromX: 390, fromY: 310, toX: 520, toY: 310, color: "#2563eb", type: "advance", label: "მეფის მთავარი იერიში" },
            { fromX: 450, fromY: 220, toX: 560, toY: 260, color: "#2563eb", type: "flank", label: "დემეტრეს ზურგის დარტყმა" }
          ],
          battleClashes: [
            { x: 525, y: 310, intensity: 1.0, label: "დიდგორის მთავარი ბრძოლა" },
            { x: 560, y: 270, intensity: 0.9, label: "ზურგის ალყა" }
          ],
          cityStates: [
            { id: "didgori", ownerFactionId: "georgia", isBesieged: false },
            { id: "manglisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "tbilisi", ownerFactionId: "seljuk", isBesieged: false },
            { id: "nichbisi", ownerFactionId: "georgia", isBesieged: false }
          ],
          tacticalNote: "ორმხრივი ალყა: სელჩუკები ვერ იყენებენ რიცხობრივ უპირატესობას."
        },
        {
          time: 12,
          date: "12-14 აგვისტო - სელჩუკთა გაქცევა და 3-დღიანი დევნა",
          title: "სელჩუკთა კოალიციის სრული განადგურება",
          description: "ილღაზის არმია სრულად დაიშალა და პანიკურად დაიხია უკან. ქართველთა ცხენოსანმა რაზმებმა მტერი მდინარე არაქსამდე სდია.",
          phase: "retreat",
          armyPositions: {
            david_main: { x: 620, y: 320, strength: 37500, status: "pursuing" },
            demetre_flank: { x: 670, y: 280, strength: 14500, status: "pursuing" },
            crusaders: { x: 630, y: 350, strength: 1750, status: "pursuing" },
            ilhazi_center: { x: 860, y: 310, strength: 45000, status: "retreating" },
            dubais_wing: { x: 880, y: 440, strength: 30000, status: "disbanded" }
          },
          arrows: [
            { fromX: 560, fromY: 310, toX: 860, toY: 310, color: "#dc2626", type: "retreat", label: "სელჩუკთა პანიკური უკანდახევა" },
            { fromX: 520, fromY: 310, toX: 700, toY: 320, color: "#2563eb", type: "pursuit", label: "დევნა" }
          ],
          cityStates: [
            { id: "didgori", ownerFactionId: "georgia", isBesieged: false },
            { id: "manglisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "tbilisi", ownerFactionId: "georgia", isBesieged: true },
            { id: "nichbisi", ownerFactionId: "georgia", isBesieged: false }
          ],
          tacticalNote: "მტრის კოალიცია დაიშალა და დატოვა საბრძოლო ალაფა."
        },
        {
          time: 16,
          date: "1122 წელი - თბილისის გათავისუფლება",
          title: "„ძლევაჲ საკვირველი“ - თბილისის შემოერთება დედაქალაქად",
          description: "დიდგორის ბრწყინვალე გამარჯვების შედეგად 1122 წელს დავით აღმაშენებელმა 400-წლიანი არაბული მმართველობისგან გაათავისუფლა თბილისი და საქართველოს სატახტო ქალაქად გამოაცხადა.",
          phase: "victory",
          armyPositions: {
            david_main: { x: 700, y: 340, strength: 37000, status: "garrison" },
            demetre_flank: { x: 690, y: 380, strength: 14500, status: "garrison" },
            crusaders: { x: 710, y: 320, strength: 1750, status: "garrison" },
            ilhazi_center: { x: 990, y: 310, strength: 15000, status: "disbanded" },
            dubais_wing: { x: 990, y: 440, strength: 0, status: "eliminated" }
          },
          arrows: [],
          cityStates: [
            { id: "didgori", ownerFactionId: "georgia", isBesieged: false },
            { id: "manglisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "tbilisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "nichbisi", ownerFactionId: "georgia", isBesieged: false }
          ],
          tacticalNote: "ისტორიული შედეგი: საქართველოს ოქროს ხანის დასაწყისი."
        }
      ],
      duration: 16,
      terrain: {
        rivers: [
          [ { x: 200, y: 150 }, { x: 420, y: 250 }, { x: 700, y: 350 }, { x: 950, y: 480 } ]
        ],
        mountains: [
          { x: 380, y: 140, radius: 55, label: "დიდგორის ქედი" },
          { x: 480, y: 130, radius: 60, label: "თრიალეთის მთაგრეხილი" },
          { x: 300, y: 470, radius: 50, label: "მანგლისის მთები" }
        ],
        forests: [
          { x: 430, y: 220, radius: 45, label: "ნიჩბისის ხეობა (ტყე)" }
        ]
      }
    }
  },

  {
    id: "stalingrad_1942",
    title: "სტალინგრადის ბრძოლა და ოპერაცია „ურანი“ (1942–1943 წწ.)",
    period: "1942 წლის 19 ნოემბერი – 1943 წლის 2 თებერვალი",
    category: "მეორე მსოფლიო ომი",
    description: "საბჭოთა წითელი არმიის ორმაგი ალყის ოპერაცია და ვერმახტის მე-6 არმიის კაპიტულაცია ვოლგის ნაპირებზე.",
    prompt: `1942 წლის 19 ნოემბერი. სტალინგრადის ბრძოლა - ოპერაცია „ურანი“.
ვერმახტის მე-6 არმია გენერალ პაულუსის მეთაურობით ქალაქ სტალინგრადში ქუჩის მძიმე ბრძოლებს აწარმოებდა.
საბჭოთა ჯარებმა გენერალ ჟუკოვის ხელმძღვანელობით შეიმუშავეს გრანდიოზული სტრატეგიული კონტრშეტევის გეგმა.
ჩრდილოეთით - სამხრეთ-დასავლეთის ფრონტი და დონის ფრონტი, ხოლო სამხრეთით - სტალინგრადის ფრონტი ერთდროულად გადავიდნენ შეტევაზე რუმინული და იტალიური ფლანგების წინააღმდეგ.
23 ნოემბერს ქალაქ კალაჩთან საბჭოთა ჯარების რკალი შეიკრა და მე-6 არმიის 300,000-იანი დაჯგუფება სრულ ალყაში (ქვაბში) მოექცა.
მანშტეინის განბლოკვის მცდელობა ჩაიშალა. 1943 წლის 2 თებერვალს პაულუსის არმიამ იარაღი დაყარა.`,
    scenarioData: {
      id: "stalingrad_1942",
      title: "სტალინგრადის ბრძოლა (ოპერაცია „ურანი“)",
      period: "1942–1943 წწ.",
      mapBounds: { width: 1000, height: 650 },
      factions: [
        { id: "soviet", name: "წითელი არმია (სსრკ)", primaryColor: "#dc2626", lightColor: "rgba(220, 38, 38, 0.25)", borderColor: "#991b1b" },
        { id: "germany", name: "ვერმახტი / ღერძი", primaryColor: "#2563eb", lightColor: "rgba(37, 99, 235, 0.25)", borderColor: "#1e40af" }
      ],
      cities: [
        { id: "stalingrad", name: "სტალინგრადი (ვოლგა)", x: 620, y: 320, importance: "capital", ownerFactionId: "germany", isBesieged: true, fortificationLevel: 3 },
        { id: "kalach", name: "კალაჩ-ნა-დონუ", x: 460, y: 320, importance: "fortress", ownerFactionId: "germany", isBesieged: false, fortificationLevel: 2 },
        { id: "sera", name: "სერაფიმოვიჩი (ჩრდ. პლაცდარმი)", x: 380, y: 170, importance: "town", ownerFactionId: "soviet", isBesieged: false, fortificationLevel: 1 },
        { id: "kotel", name: "კოტელნიკოვო (სამხრეთი)", x: 440, y: 480, importance: "town", ownerFactionId: "germany", isBesieged: false, fortificationLevel: 1 }
      ],
      armies: [
        { id: "soviet_north", name: "სამხრეთ-დასავლეთის ფრონტი (ვატუტინი)", commander: "გენერალი ვატუტინი", factionId: "soviet", startX: 380, startY: 170, x: 380, y: 170, strength: 400000, maxStrength: 400000, unitType: "infantry_heavy", status: "ready" },
        { id: "soviet_south", name: "სტალინგრადის ფრონტი (ერემენკო)", commander: "გენერალი ერემენკო", factionId: "soviet", startX: 520, startY: 480, x: 520, y: 480, strength: 350000, maxStrength: 350000, unitType: "infantry_heavy", status: "ready" },
        { id: "paulus_6th", name: "მე-6 არმია (პაულუსი)", commander: "გენერალ-ფელდმარშალი პაულუსი", factionId: "germany", startX: 620, startY: 320, x: 620, y: 320, strength: 300000, maxStrength: 300000, unitType: "infantry_heavy", status: "in_combat" },
        { id: "axis_flanks", name: "მე-3 და მე-4 რუმინული არმიები (ფლანგები)", commander: "ფლანგის კორპუსები", factionId: "germany", startX: 430, startY: 260, x: 430, y: 260, strength: 120000, maxStrength: 120000, unitType: "infantry_heavy", status: "ready" }
      ],
      keyframes: [
        {
          time: 0,
          date: "1942 წლის 18 ნოემბერი",
          title: "შეტევისწინა განლაგება და დაზვერვა",
          description: "მე-6 არმია ჩაფლულია სტალინგრადის ქუჩების ბრძოლებში. საბჭოთა სარდლობამ საიდუმლოდ მოამზადა უზარმაზარი ძალები ფლანგებზე.",
          phase: "mobilization",
          armyPositions: {
            soviet_north: { x: 380, y: 170, strength: 400000, status: "ready" },
            soviet_south: { x: 520, y: 480, strength: 350000, status: "ready" },
            paulus_6th: { x: 620, y: 320, strength: 300000, status: "in_combat" },
            axis_flanks: { x: 430, y: 260, strength: 120000, status: "ready" }
          },
          arrows: [],
          cityStates: [
            { id: "stalingrad", ownerFactionId: "germany", isBesieged: true },
            { id: "kalach", ownerFactionId: "germany", isBesieged: false },
            { id: "sera", ownerFactionId: "soviet", isBesieged: false },
            { id: "kotel", ownerFactionId: "germany", isBesieged: false }
          ],
          tacticalNote: "საბჭოთა ძალები მზად არიან ოპერაცია „ურანის“ დასაწყებად."
        },
        {
          time: 5,
          date: "19-20 ნოემბერი - საარტილერიო დარტყმა და გარღვევა",
          title: "ჩრდილოეთისა და სამხრეთის ფრონტების გარღვევა",
          description: "80-წუთიანი მძლავრი საარტილერიო დაბომბვის შემდეგ საბჭოთა ჯავშანსატანკო კორპუსებმა გაარღვიეს რუმინული დივიზიების პოზიციები.",
          phase: "advance",
          armyPositions: {
            soviet_north: { x: 420, y: 240, strength: 395000, status: "marching" },
            soviet_south: { x: 490, y: 400, strength: 345000, status: "marching" },
            paulus_6th: { x: 620, y: 320, strength: 295000, status: "in_combat" },
            axis_flanks: { x: 450, y: 270, strength: 60000, status: "in_combat" }
          },
          arrows: [
            { fromX: 380, fromY: 170, toX: 450, toY: 280, color: "#dc2626", type: "advance", label: "ჩრდილოეთის გარღვევა" },
            { fromX: 520, fromY: 480, toX: 470, toY: 360, color: "#dc2626", type: "advance", label: "სამხრეთის გარღვევა" }
          ],
          battleClashes: [
            { x: 440, y: 260, intensity: 1.0, label: "ფლანგის გარღვევა" }
          ],
          cityStates: [
            { id: "stalingrad", ownerFactionId: "germany", isBesieged: true },
            { id: "kalach", ownerFactionId: "germany", isBesieged: false },
            { id: "sera", ownerFactionId: "soviet", isBesieged: false },
            { id: "kotel", ownerFactionId: "germany", isBesieged: false }
          ],
          tacticalNote: "ფლანგები მოიშალა, საბჭოთა ტანკები კალაჩისკენ მიიწევენ."
        },
        {
          time: 10,
          date: "23 ნოემბერი 1942 - კალაჩთან შეერთება და ალყა",
          title: "სტალინგრადის ქვაბის (Kessel) შეკვრა",
          description: "საბჭოთა მე-4 და მე-26 სატანკო კორპუსები შეხვდნენ კალაჩ-ნა-დონუსთან. მე-6 არმია სრულ რკალში მოექცა.",
          phase: "battle",
          armyPositions: {
            soviet_north: { x: 460, y: 300, strength: 390000, status: "in_combat" },
            soviet_south: { x: 480, y: 340, strength: 340000, status: "in_combat" },
            paulus_6th: { x: 600, y: 320, strength: 260000, status: "in_combat" },
            axis_flanks: { x: 350, y: 320, strength: 15000, status: "disbanded" }
          },
          arrows: [
            { fromX: 420, fromY: 240, toX: 460, toY: 310, color: "#dc2626", type: "advance", label: "კალაჩთან შეერთება" },
            { fromX: 490, fromY: 400, toX: 470, toY: 330, color: "#dc2626", type: "advance", label: "ალყის რკალი" }
          ],
          battleClashes: [
            { x: 460, y: 320, intensity: 1.0, label: "კალაჩის ბრძოლა" },
            { x: 600, y: 320, intensity: 0.9, label: "სტალინგრადის ალყა" }
          ],
          cityStates: [
            { id: "stalingrad", ownerFactionId: "germany", isBesieged: true },
            { id: "kalach", ownerFactionId: "soviet", isBesieged: false },
            { id: "sera", ownerFactionId: "soviet", isBesieged: false },
            { id: "kotel", ownerFactionId: "germany", isBesieged: false }
          ],
          tacticalNote: "300,000 გერმანელი ჯარისკაცი მოექცა ალყაში."
        },
        {
          time: 15,
          date: "1943 წლის 2 თებერვალი - კაპიტულაცია",
          title: "მე-6 არმიის განადგურება და კაპიტულაცია",
          description: "ოპერაცია „კოლცოს“ შედეგად ალყაშემორტყმული არმია ორ ნაწილად გაიყო. ფელდმარშალმა პაულუსმა და მისმა შტაბმა იარაღი დაყარეს.",
          phase: "victory",
          armyPositions: {
            soviet_north: { x: 590, y: 300, strength: 380000, status: "garrison" },
            soviet_south: { x: 620, y: 350, strength: 335000, status: "garrison" },
            paulus_6th: { x: 620, y: 320, strength: 91000, status: "disbanded" },
            axis_flanks: { x: 200, y: 320, strength: 0, status: "eliminated" }
          },
          arrows: [],
          cityStates: [
            { id: "stalingrad", ownerFactionId: "soviet", isBesieged: false },
            { id: "kalach", ownerFactionId: "soviet", isBesieged: false },
            { id: "sera", ownerFactionId: "soviet", isBesieged: false },
            { id: "kotel", ownerFactionId: "soviet", isBesieged: false }
          ],
          tacticalNote: "მეორე მსოფლიო ომის გარდამტეხი ეტაპი და საბჭოთა სტრატეგიული გამარჯვება."
        }
      ],
      duration: 15,
      terrain: {
        rivers: [
          [ { x: 630, y: 50 }, { x: 620, y: 320 }, { x: 660, y: 600 } ], // Volga River
          [ { x: 380, y: 80 }, { x: 450, y: 320 }, { x: 350, y: 550 } ]  // Don River
        ],
        mountains: [],
        forests: [
          { x: 520, y: 220, radius: 40 }
        ]
      }
    }
  },

  {
    id: "cannae_216bc",
    title: "კანეს ბრძოლა (ძვ. წ. 216 წ.) - ჰანიბალის ტაქტიკური შედევრი",
    period: "ძვ. წ. 216 წლის 2 აგვისტო",
    category: "ანტიკური სამყარო",
    description: "ჰანიბალ ბარკას კლასიკური ორმაგი შემოფრენისა და ალყის ტაქტიკა რომაული ლეგიონების წინააღმდეგ.",
    prompt: `ძვ. წ. 216 წლის 2 აგვისტო. კანეს ბრძოლა (აპულია, სამხრეთ იტალია).
რომის კონსულების, ვარონისა და ემილიუს პაულუსის 86,000-იანი რომაული არმია განლაგდა მჭიდრო, ღრმა კოლონებით მდინარე აუფიდუსის გასწვრივ.
კართაგენელთა სარდალმა ჰანიბალმა თავისი 50,000-იანი არმია განალაგა ამოზნექილი რკალის ფორმით (ნახევარმთვარისებურად): ცენტრში სუსტი ესპანური და გალური ქვეითები, ხოლო ფლანგებზე ვეტერანი აფრიკელი ქვეითები და ნუმიდიელი მხედრები.
ბრძოლის დაწყებისას რომაელთა მძიმე ქვეითებმა ცენტრში ზეწოლა გააძლიერეს. ჰანიბალის ცენტრმა დაგეგმილად და ნელა დაიხია უკან, რითაც რკალი ჩაზნექილი გახდა.
ამ დროს კართაგენის მძიმე კავალერიამ გაანადგურა რომაული ცხენოსნები და ზურგიდან დაარტყა რომაულ ლეგიონებს.
რომის არმია სრულ ალყაში მოექცა და 70,000-მდე ლეგიონერი განადგურდა.`,
    scenarioData: {
      id: "cannae_216bc",
      title: "კანეს ბრძოლა (ძვ. წ. 216 წ.)",
      period: "ძვ. წ. 216 წლის 2 აგვისტო",
      mapBounds: { width: 1000, height: 650 },
      factions: [
        { id: "rome", name: "რომის რესპუბლიკა (ლეგიონები)", primaryColor: "#dc2626", lightColor: "rgba(220, 38, 38, 0.25)", borderColor: "#991b1b" },
        { id: "carthage", name: "კართაგენის არმია (ჰანიბალი)", primaryColor: "#2563eb", lightColor: "rgba(37, 99, 235, 0.25)", borderColor: "#1e40af" }
      ],
      cities: [
        { id: "cannae", name: "კანე (Cannae)", x: 500, y: 220, importance: "fortress", ownerFactionId: "carthage", isBesieged: false, fortificationLevel: 2 },
        { id: "roman_camp", name: "რომაელთა მთავარი ბანაკი", x: 500, y: 520, importance: "town", ownerFactionId: "rome", isBesieged: false, fortificationLevel: 1 },
        { id: "carthage_camp", name: "ჰანიბალის ბანაკი", x: 260, y: 340, importance: "town", ownerFactionId: "carthage", isBesieged: false, fortificationLevel: 1 }
      ],
      armies: [
        { id: "rome_legions", name: "რომაული ლეგიონების ცენტრი (ვარონი)", commander: "კონსული ტერენციუს ვარონი", factionId: "rome", startX: 500, startY: 450, x: 500, y: 450, strength: 75000, maxStrength: 75000, unitType: "infantry_heavy", status: "ready" },
        { id: "rome_cav", name: "რომაული კავალერია (ფლანგები)", commander: "ემილიუს პაულუსი", factionId: "rome", startX: 630, startY: 450, x: 630, y: 450, strength: 11000, maxStrength: 11000, unitType: "cavalry", status: "ready" },
        { id: "hannibal_center", name: "ჰანიბალის ცენტრი (გალები და იბერები)", commander: "ჰანიბალ ბარკა", factionId: "carthage", startX: 500, startY: 340, x: 500, y: 340, strength: 22000, maxStrength: 22000, unitType: "infantry_heavy", status: "ready" },
        { id: "hannibal_african", name: "აფრიკელი ვეტერანები (ფლანგები)", commander: "მაგო ბარკა", factionId: "carthage", startX: 380, startY: 350, x: 380, y: 350, strength: 16000, maxStrength: 16000, unitType: "infantry_heavy", status: "ready" },
        { id: "hasdrubal_cav", name: "ჰასდრუბალის მძიმე კავალერია", commander: "ჰასდრუბალი", factionId: "carthage", startX: 630, startY: 330, x: 630, y: 330, strength: 12000, maxStrength: 12000, unitType: "cavalry", status: "ready" }
      ],
      keyframes: [
        {
          time: 0,
          date: "ძვ. წ. 216 წლის 2 აგვისტო, დილა",
          title: "საწყისი წყობა - ამოზნექილი რკალი",
          description: "ჰანიბალმა თავისი ცენტრი წინ გამოწია ამოზნექილი რკალის სახით. რომაელებმა უზარმაზარი მასა ცენტრში მოაქციეს.",
          phase: "mobilization",
          armyPositions: {
            rome_legions: { x: 500, y: 450, strength: 75000, status: "ready" },
            rome_cav: { x: 630, y: 450, strength: 11000, status: "ready" },
            hannibal_center: { x: 500, y: 340, strength: 22000, status: "ready" },
            hannibal_african: { x: 380, y: 350, strength: 16000, status: "ready" },
            hasdrubal_cav: { x: 630, y: 330, strength: 12000, status: "ready" }
          },
          arrows: [],
          cityStates: [
            { id: "cannae", ownerFactionId: "carthage", isBesieged: false },
            { id: "roman_camp", ownerFactionId: "rome", isBesieged: false },
            { id: "carthage_camp", ownerFactionId: "carthage", isBesieged: false }
          ],
          tacticalNote: "ჰანიბალის გეგმა: ცენტრის კონტროლირებადი დახევა და ფლანგური ალყა."
        },
        {
          time: 5,
          date: "შუადღე - რომაული შეტევა და ცენტრის ჩაზნექა",
          title: "რომაელთა შეტყუება მახეში",
          description: "რომაული ლეგიონები მთელი მასით დააწვნენ კართაგენის ცენტრს. ჰანიბალის ცენტრმა ნელა დაიხია უკან და შექმნა ჩაზნექილი ტომარა.",
          phase: "battle",
          armyPositions: {
            rome_legions: { x: 500, y: 360, strength: 72000, status: "in_combat" },
            rome_cav: { x: 650, y: 400, strength: 6000, status: "in_combat" },
            hannibal_center: { x: 500, y: 300, strength: 19000, status: "in_combat" },
            hannibal_african: { x: 420, y: 360, strength: 16000, status: "in_combat" },
            hasdrubal_cav: { x: 630, y: 380, strength: 11500, status: "in_combat" }
          },
          arrows: [
            { fromX: 500, fromY: 450, toX: 500, toY: 360, color: "#dc2626", type: "advance", label: "რომაელთა ცენტრალური შეტევა" },
            { fromX: 630, fromY: 330, toX: 650, toY: 390, color: "#2563eb", type: "advance", label: "კავალერიის იერიში" }
          ],
          battleClashes: [
            { x: 500, y: 330, intensity: 1.0, label: "ცენტრის შეტაკება" }
          ],
          cityStates: [
            { id: "cannae", ownerFactionId: "carthage", isBesieged: false },
            { id: "roman_camp", ownerFactionId: "rome", isBesieged: false },
            { id: "carthage_camp", ownerFactionId: "carthage", isBesieged: false }
          ],
          tacticalNote: "რომაელები საკუთარი ნებით შევიდნენ კართაგენის მომწყვდევ ხაფანგში."
        },
        {
          time: 10,
          date: "ნაშუადღევი - ორმაგი ალყა და ზურგის ჩაკეტვა",
          title: "რომაული ლეგიონების სრული გარემოცვა",
          description: "ჰასდრუბალის ცხენოსნებმა გაანადგურეს რომაული კავალერია და ზურგიდან დაარტყეს ლეგიონებს. აფრიკელმა ქვეითებმა ფლანგებიდან ჩაკეტეს ალყა.",
          phase: "battle",
          armyPositions: {
            rome_legions: { x: 500, y: 350, strength: 45000, status: "in_combat" },
            rome_cav: { x: 700, y: 480, strength: 1000, status: "disbanded" },
            hannibal_center: { x: 500, y: 290, strength: 17000, status: "in_combat" },
            hannibal_african: { x: 440, y: 350, strength: 15500, status: "in_combat" },
            hasdrubal_cav: { x: 500, y: 410, strength: 11000, status: "in_combat" }
          },
          arrows: [
            { fromX: 630, fromY: 380, toX: 500, toY: 410, color: "#2563eb", type: "flank", label: "კავალერიის დარტყმა ზურგში" }
          ],
          battleClashes: [
            { x: 500, y: 350, intensity: 1.0, label: "სრული ალყა და განადგურება" }
          ],
          cityStates: [
            { id: "cannae", ownerFactionId: "carthage", isBesieged: false },
            { id: "roman_camp", ownerFactionId: "rome", isBesieged: false },
            { id: "carthage_camp", ownerFactionId: "carthage", isBesieged: false }
          ],
          tacticalNote: "სამხედრო ისტორიაში უდიდესი ტაქტიკური გარემოცვა (Cannae encirclement)."
        },
        {
          time: 15,
          date: "საღამო - კართაგენის ტრიუმფი",
          title: "კართაგენის სრული გამარჯვება",
          description: "რომის 70,000-მდე მეომარი დაიღუპა ან ტყვედ ჩავარდა, მათ შორის კონსული პაულუსი და 80 სენატორი. ჰანიბალმა მოიპოვა უდიდესი გამარჯვება.",
          phase: "victory",
          armyPositions: {
            rome_legions: { x: 500, y: 350, strength: 12000, status: "disbanded" },
            rome_cav: { x: 750, y: 550, strength: 0, status: "eliminated" },
            hannibal_center: { x: 480, y: 310, strength: 16500, status: "garrison" },
            hannibal_african: { x: 440, y: 350, strength: 15000, status: "garrison" },
            hasdrubal_cav: { x: 520, y: 380, strength: 10800, status: "garrison" }
          },
          arrows: [],
          cityStates: [
            { id: "cannae", ownerFactionId: "carthage", isBesieged: false },
            { id: "roman_camp", ownerFactionId: "carthage", isBesieged: false },
            { id: "carthage_camp", ownerFactionId: "carthage", isBesieged: false }
          ],
          tacticalNote: "კანეს ბრძოლა გახდა სამხედრო ტაქტიკის მსოფლიო ეტალონი."
        }
      ],
      duration: 15,
      terrain: {
        rivers: [
          [ { x: 300, y: 150 }, { x: 500, y: 250 }, { x: 750, y: 300 }, { x: 950, y: 350 } ] // Aufidus River
        ],
        mountains: [
          { x: 320, y: 480, radius: 45, label: "აპულიის მაღლობი" }
        ],
        forests: []
      }
    }
  },

  {
    id: "austerlitz_1805",
    title: "აუსტერლიცის ბრძოლა (1805 წ.) - სამი იმპერატორის ბრძოლა",
    period: "1805 წლის 2 დეკემბერი",
    category: "ნაპოლეონის ომები",
    description: "ნაპოლეონ ბონაპარტის გენიალური მანევრი პრაცენის სიმაღლეებზე რუსეთ-ავსტრიის მოკავშირე არმიის წინააღმდეგ.",
    prompt: `1805 წლის 2 დეკემბერი. აუსტერლიცის ბრძოლა (მორავია).
ნაპოლეონ ბონაპარტმა 73,000-იანი ფრანგული არმიით მიიზიდა რუსეთისა და ავსტრიის 85,000-იანი კოალიციური არმია (ალექსანდრე I და ფრანც II).
ნაპოლეონმა შეგნებულად დაასუსტა თავისი მარჯვენა ფლანგი და დატოვა სტრატეგიული პრაცენის სიმაღლეები, რათა მოკავშირეებს ეფიქრათ, რომ ფრანგები გარბოდნენ.
მოკავშირეებმა ძირითადი ძალები ფრანგთა მარჯვენა ფლანგის შემოსავლელად გაგზავნეს, რითაც ცენტრი შეათხელეს.
დილის ნისლის გაფანტვისთანავე, „აუსტერლიცის მზის“ ფონზე, მარშალ სულტის მე-4 კორპუსმა მოულოდნელი იერიშით დაიბრუნა პრაცენის სიმაღლეები და მტრის არმია ორად გაჭრა.
ფრანგებმა ალყაში მოაქციეს მოკავშირეთა მარცხენა ფრთა და გაყინულ ტბებზე განდევნეს. მესამე კოალიცია დაემხო.`,
    scenarioData: {
      id: "austerlitz_1805",
      title: "აუსტერლიცის ბრძოლა (1805 წ.)",
      period: "1805 წლის 2 დეკემბერი",
      mapBounds: { width: 1000, height: 650 },
      factions: [
        { id: "france", name: "საფრანგეთის იმპერია (ნაპოლეონი)", primaryColor: "#2563eb", lightColor: "rgba(37, 99, 235, 0.25)", borderColor: "#1d4ed8" },
        { id: "coalition", name: "მოკავშირეები (რუსეთი & ავსტრია)", primaryColor: "#dc2626", lightColor: "rgba(220, 38, 38, 0.25)", borderColor: "#b91c1c" }
      ],
      cities: [
        { id: "pratzen", name: "პრაცენის სიმაღლეები", x: 530, y: 310, importance: "fortress", ownerFactionId: "coalition", isBesieged: false, fortificationLevel: 2 },
        { id: "austerlitz", name: "სოფელი აუსტერლიცი", x: 740, y: 300, importance: "town", ownerFactionId: "coalition", isBesieged: false, fortificationLevel: 1 },
        { id: "zuran", name: "ჟურანის ბორცვი (ნაპოლეონის შტაბი)", x: 340, y: 250, importance: "town", ownerFactionId: "france", isBesieged: false, fortificationLevel: 1 },
        { id: "telnitz", name: "ტელნიცის ტბები", x: 420, y: 490, importance: "battlefield", ownerFactionId: "france", isBesieged: false, fortificationLevel: 1 }
      ],
      armies: [
        { id: "napoleon_guard", name: "იმპერიული გვარდია & სულტის კორპუსი", commander: "იმპერატორი ნაპოლეონი", factionId: "france", startX: 360, startY: 260, x: 360, y: 260, strength: 45000, maxStrength: 45000, unitType: "infantry_heavy", status: "ready" },
        { id: "davout_right", name: "მარშალ დავუს მარჯვენა ფრთა", commander: "მარშალი დავუ", factionId: "france", startX: 380, startY: 460, x: 380, y: 460, strength: 18000, maxStrength: 18000, unitType: "infantry_heavy", status: "ready" },
        { id: "kutusov_allies", name: "მოკავშირეთა მთავარი კოლონები", commander: "გენერალი კუტუზოვი / ალექსანდრე I", factionId: "coalition", startX: 550, startY: 310, x: 550, y: 310, strength: 55000, maxStrength: 55000, unitType: "infantry_heavy", status: "ready" },
        { id: "buxhowden_left", name: "ბუქსგევდენის მარცხენა ფრთა", commander: "გენერალი ბუქსგევდენი", factionId: "coalition", startX: 520, startY: 430, x: 520, y: 430, strength: 30000, maxStrength: 30000, unitType: "infantry_heavy", status: "ready" }
      ],
      keyframes: [
        {
          time: 0,
          date: "1805 წლის 2 დეკემბერი, 07:00",
          title: "დივიზიების განლაგება ნისლში",
          description: "ნაპოლეონი მიზანმიმართულად ტოვებს პრაცენის სიმაღლეებს და ასუსტებს მარჯვენა ფლანგს მოწინააღმდეგის მოსატყუებლად.",
          phase: "mobilization",
          armyPositions: {
            napoleon_guard: { x: 360, y: 260, strength: 45000, status: "ready" },
            davout_right: { x: 380, y: 460, strength: 18000, status: "ready" },
            kutusov_allies: { x: 550, y: 310, strength: 55000, status: "ready" },
            buxhowden_left: { x: 520, y: 430, strength: 30000, status: "ready" }
          },
          arrows: [],
          cityStates: [
            { id: "pratzen", ownerFactionId: "coalition", isBesieged: false },
            { id: "austerlitz", ownerFactionId: "coalition", isBesieged: false },
            { id: "zuran", ownerFactionId: "france", isBesieged: false },
            { id: "telnitz", ownerFactionId: "france", isBesieged: false }
          ],
          tacticalNote: "ნაპოლეონის ხაფანგი: მოკავშირეები ცენტრს აშიშვლებენ."
        },
        {
          time: 5,
          date: "09:00 - მოკავშირეთა შეტევა სამხრეთით",
          title: "მოკავშირეები ტოვებენ პრაცენის სიმაღლეებს",
          description: "მოკავშირეთა კოლონები დავუს დასამარცხებლად სამხრეთისკენ მიემართებიან. დავუ გმირულად აკავებს მტრის ჭარბ ძალებს.",
          phase: "advance",
          armyPositions: {
            napoleon_guard: { x: 420, y: 270, strength: 45000, status: "marching" },
            davout_right: { x: 390, y: 460, strength: 17200, status: "in_combat" },
            kutusov_allies: { x: 510, y: 340, strength: 48000, status: "marching" },
            buxhowden_left: { x: 440, y: 470, strength: 29000, status: "in_combat" }
          },
          arrows: [
            { fromX: 520, fromY: 430, toX: 440, toY: 470, color: "#dc2626", type: "advance", label: "მოკავშირეთა ზეწოლა" }
          ],
          battleClashes: [
            { x: 415, y: 465, intensity: 0.8, label: "ტელნიცის შეტაკება" }
          ],
          cityStates: [
            { id: "pratzen", ownerFactionId: "coalition", isBesieged: false },
            { id: "austerlitz", ownerFactionId: "coalition", isBesieged: false },
            { id: "zuran", ownerFactionId: "france", isBesieged: false },
            { id: "telnitz", ownerFactionId: "france", isBesieged: true }
          ],
          tacticalNote: "მოკავშირეთა ცენტრი გაშიშვლდა, ზუსტად ნაპოლეონის გათვლით."
        },
        {
          time: 10,
          date: "11:00 - „აუსტერლიცის მზე“ და პრაცენის აღება",
          title: "სულტის კორპუსის გადამწყვეტი დარტყმა ცენტრში",
          description: "ნაპოლეონის ბრძანებით სულტის დივიზიებმა ნისლიდან მოულოდნელი იერიშით დაიკავეს პრაცენის სიმაღლეები და მტრის არმია ორად გაჭრეს.",
          phase: "battle",
          armyPositions: {
            napoleon_guard: { x: 530, y: 310, strength: 44000, status: "in_combat" },
            davout_right: { x: 400, y: 460, strength: 16500, status: "in_combat" },
            kutusov_allies: { x: 620, y: 280, strength: 32000, status: "in_combat" },
            buxhowden_left: { x: 460, y: 490, strength: 20000, status: "in_combat" }
          },
          arrows: [
            { fromX: 360, fromY: 260, toX: 530, toY: 310, color: "#2563eb", type: "advance", label: "სულტის ელვისებური იერიში" },
            { fromX: 530, fromY: 310, toX: 470, toY: 480, color: "#2563eb", type: "flank", label: "დარტყმა მტრის ზურგში" }
          ],
          battleClashes: [
            { x: 530, y: 310, intensity: 1.0, label: "პრაცენის ბრძოლა" },
            { x: 460, y: 480, intensity: 0.9, label: "მოკავშირეთა ალყა" }
          ],
          cityStates: [
            { id: "pratzen", ownerFactionId: "france", isBesieged: false },
            { id: "austerlitz", ownerFactionId: "coalition", isBesieged: false },
            { id: "zuran", ownerFactionId: "france", isBesieged: false },
            { id: "telnitz", ownerFactionId: "france", isBesieged: false }
          ],
          tacticalNote: "მოკავშირეთა ფრონტი განადგურებულია."
        },
        {
          time: 15,
          date: "16:00 - სრული გამარჯვება",
          title: "მოკავშირეთა უკანდახევა და გაყინული ტბები",
          description: "მოკავშირეთა მარცხენა ფრთა გაიქცა გაყინული სატჩანის ტბებისკენ. ნაპოლეონმა მოიპოვა თავისი კარიერის ყველაზე ბრწყინვალე გამარჯვება.",
          phase: "victory",
          armyPositions: {
            napoleon_guard: { x: 600, y: 300, strength: 43000, status: "garrison" },
            davout_right: { x: 480, y: 470, strength: 16000, status: "garrison" },
            kutusov_allies: { x: 820, y: 250, strength: 18000, status: "retreating" },
            buxhowden_left: { x: 780, y: 520, strength: 5000, status: "disbanded" }
          },
          arrows: [],
          cityStates: [
            { id: "pratzen", ownerFactionId: "france", isBesieged: false },
            { id: "austerlitz", ownerFactionId: "france", isBesieged: false },
            { id: "zuran", ownerFactionId: "france", isBesieged: false },
            { id: "telnitz", ownerFactionId: "france", isBesieged: false }
          ],
          tacticalNote: "ავსტრიამ ზავი ითხოვა; საღვთო რომის იმპერიამ არსებობა შეწყვიტა."
        }
      ],
      duration: 15,
      terrain: {
        rivers: [
          [ { x: 350, y: 150 }, { x: 390, y: 350 }, { x: 430, y: 550 } ]
        ],
        mountains: [
          { x: 530, y: 310, radius: 55, label: "პრაცენის სიმაღლეები" },
          { x: 340, y: 250, radius: 35, label: "ჟურანი" }
        ],
        forests: [
          { x: 620, y: 200, radius: 40 }
        ]
      }
    }
  },

  {
    id: "krtsanisi_1795",
    title: "კრწანისის ბრძოლა (1795 წ.) - ერეკლე II-ის გმირული ბრძოლა",
    period: "1795 წლის 8–11 სექტემბერი",
    category: "საქართველოს ისტორია",
    description: "ქართლ-კახეთის მეფე ერეკლე II-ის 5,000-იანი მამაცი ლაშქრის თავდადება აღა-მაჰმად-ხანის 35,000-იანი ურდოს წინააღმდეგ.",
    prompt: `1795 წლის 10-11 სექტემბერი. კრწანისის ბრძოლა (თბილისის სამხრეთ მისადგომები).
სპარსეთის შაჰი აღა-მაჰმად-ხანი 35,000-იანი არმიით მოადგა თბილისს.
ერეკლე II-მ შეკრიბა 5,000-მდე ქართველი და იმერელი მეომარი (მათ შორის 300 არაგველი) და პოზიციები დაიკავა კრწანისისა და სეიდაბადის ვიწრო გასასვლელებში.
10 სექტემბერს ქართველებმა წარმატებით მოიგერიეს მტრის ავანგარდი და უკუაქციეს სპარსელები.
11 სექტემბერს აღა-მაჰმად-ხანმა მთელი თავისი რეზერვი ბრძოლაში ჩართო. 75 წლის ერეკლე II პირადად ხელმძღვანელობდა იერიშებს.
300 არაგველმა საკუთარი სიცოცხლის ფასად შეაკავა მტერი, რათა მეფე ბრძოლის ველიდან უვნებლად გამოეყვანათ.`,
    scenarioData: {
      id: "krtsanisi_1795",
      title: "კრწანისის ბრძოლა (1795 წ.)",
      period: "1795 წლის სექტემბერი",
      mapBounds: { width: 1000, height: 650 },
      factions: [
        { id: "georgia", name: "ქართლ-კახეთის სამეფო", primaryColor: "#2563eb", lightColor: "rgba(37, 99, 235, 0.25)", borderColor: "#1d4ed8" },
        { id: "persia", name: "სპარსეთის არმია (ყაჯარები)", primaryColor: "#dc2626", lightColor: "rgba(220, 38, 38, 0.25)", borderColor: "#b91c1c" }
      ],
      cities: [
        { id: "tbilisi", name: "თბილისი (ციტადელი)", x: 480, y: 200, importance: "capital", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 3 },
        { id: "krtsanisi", name: "კრწანისის ველი", x: 480, y: 360, importance: "battlefield", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 1 },
        { id: "seidabadi", name: "სეიდაბადის ბაღები", x: 490, y: 280, importance: "town", ownerFactionId: "georgia", isBesieged: false, fortificationLevel: 1 },
        { id: "soghanlughi", name: "სოღანლუღი (მტრის ბანაკი)", x: 500, y: 520, importance: "town", ownerFactionId: "persia", isBesieged: false, fortificationLevel: 1 }
      ],
      armies: [
        { id: "erekle_royal", name: "ერეკლე II-ის სამეფო გვარდია", commander: "მეფე ერეკლე II (პატარა კახი)", factionId: "georgia", startX: 470, startY: 270, x: 470, y: 270, strength: 3500, maxStrength: 3500, unitType: "infantry_heavy", status: "ready" },
        { id: "aragveli_300", name: "300 არაგველი და იმერელთა რაზმი", commander: "არაგველთა მეთაური", factionId: "georgia", startX: 490, startY: 330, x: 490, y: 330, strength: 1500, maxStrength: 1500, unitType: "infantry_heavy", status: "ready" },
        { id: "qajar_main", name: "აღა-მაჰმად-ხანის ცენტრალური კორპუსი", commander: "შაჰი აღა-მაჰმად-ხანი", factionId: "persia", startX: 500, startY: 480, x: 500, y: 480, strength: 25000, maxStrength: 25000, unitType: "infantry_heavy", status: "ready" },
        { id: "persian_flank", name: "ყაჯარული ცხენოსანი დივიზია", commander: "ჯაფარ-ყული-ხანი", factionId: "persia", startX: 620, startY: 450, x: 620, y: 450, strength: 10000, maxStrength: 10000, unitType: "cavalry", status: "ready" }
      ],
      keyframes: [
        {
          time: 0,
          date: "1795 წლის 8 სექტემბერი",
          title: "პოზიციების დაკავება თბილისის სამხრეთით",
          description: "ერეკლე II-მ თავისი მცირერიცხოვანი არმია ვიწრო ხეობებსა და ბაღებში განალაგა, რათა მტრისთვის სივრცე შეეზღუდა.",
          phase: "mobilization",
          armyPositions: {
            erekle_royal: { x: 470, y: 270, strength: 3500, status: "ready" },
            aragveli_300: { x: 490, y: 330, strength: 1500, status: "ready" },
            qajar_main: { x: 500, y: 480, strength: 25000, status: "ready" },
            persian_flank: { x: 620, y: 450, strength: 10000, status: "ready" }
          },
          arrows: [],
          cityStates: [
            { id: "tbilisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "krtsanisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "seidabadi", ownerFactionId: "georgia", isBesieged: false },
            { id: "soghanlughi", ownerFactionId: "persia", isBesieged: false }
          ],
          tacticalNote: "ქართველთა იმედი იყო ვიწრო რელიეფი და არტილერიის ზუსტი ცეცხლი."
        },
        {
          time: 5,
          date: "10 სექტემბერი - ქართველთა პირველი გამარჯვება",
          title: "სპარსელთა ავანგარდის მოგერიება და უკუგდება",
          description: "ქართველებმა მამაცური კონტრშეტევით უკუაქციეს სპარსელთა მოწინავე რაზმები და მძიმე დანაკარგი მიაყენეს.",
          phase: "battle",
          armyPositions: {
            erekle_royal: { x: 480, y: 300, strength: 3400, status: "in_combat" },
            aragveli_300: { x: 490, y: 350, strength: 1450, status: "in_combat" },
            qajar_main: { x: 500, y: 440, strength: 22000, status: "in_combat" },
            persian_flank: { x: 600, y: 420, strength: 9500, status: "marching" }
          },
          arrows: [
            { fromX: 490, fromY: 330, toX: 500, toY: 420, color: "#2563eb", type: "advance", label: "ქართველთა კონტრშეტევა" }
          ],
          battleClashes: [
            { x: 495, y: 380, intensity: 0.9, label: "სოღანლუღის შეტაკება" }
          ],
          cityStates: [
            { id: "tbilisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "krtsanisi", ownerFactionId: "georgia", isBesieged: false },
            { id: "seidabadi", ownerFactionId: "georgia", isBesieged: false },
            { id: "soghanlughi", ownerFactionId: "persia", isBesieged: false }
          ],
          tacticalNote: "აღა-მაჰმად-ხანი უკანდახევასაც კი ფიქრობდა, მაგრამ მოღალატეთა ცნობამ გადააფიქრებინა."
        },
        {
          time: 10,
          date: "11 სექტემბერი - კრწანისის გადამწყვეტი შეტაკება",
          title: "300 არაგველის თავგანწირვა",
          description: "მტრის რიცხობრივმა უპირატესობამ გადამწყვეტი როლი ითამაშა. 300 არაგველი უკანასკნელ წვეთამდე შეებრძოლა მტერს მეფის დასაცავად.",
          phase: "battle",
          armyPositions: {
            erekle_royal: { x: 460, y: 220, strength: 2200, status: "retreating" },
            aragveli_300: { x: 490, y: 320, strength: 300, status: "in_combat" },
            qajar_main: { x: 490, y: 330, strength: 19000, status: "in_combat" },
            persian_flank: { x: 530, y: 270, strength: 9000, status: "in_combat" }
          },
          arrows: [
            { fromX: 500, fromY: 440, toX: 490, toY: 330, color: "#dc2626", type: "advance", label: "შაჰის მთავარი იერიში" },
            { fromX: 600, fromY: 420, toX: 530, toY: 270, color: "#dc2626", type: "flank", label: "ფლანგური შემოვლა" }
          ],
          battleClashes: [
            { x: 490, y: 325, intensity: 1.0, label: "300 არაგველის ბრძოლა" }
          ],
          cityStates: [
            { id: "tbilisi", ownerFactionId: "georgia", isBesieged: true },
            { id: "krtsanisi", ownerFactionId: "persia", isBesieged: false },
            { id: "seidabadi", ownerFactionId: "persia", isBesieged: false },
            { id: "soghanlughi", ownerFactionId: "persia", isBesieged: false }
          ],
          tacticalNote: "„თუ არა ქართველთა სიმცირე, ვერც ერთი მტერი ვერ გაუძლებდა მათ მამაცობას“."
        },
        {
          time: 15,
          date: "11 სექტემბრის საღამო",
          title: "მეფის გადარჩენა და თბილისის დაცემა",
          description: "ერეკლე II იძულებული გახდა მთიულეთში გადასულიყო. 300 არაგველის გმირობა სამუდამოდ დარჩა ქართველი ერის მეხსიერებაში.",
          phase: "victory",
          armyPositions: {
            erekle_royal: { x: 380, y: 120, strength: 1800, status: "garrison" },
            aragveli_300: { x: 490, y: 320, strength: 0, status: "eliminated" },
            qajar_main: { x: 480, y: 210, strength: 18000, status: "garrison" },
            persian_flank: { x: 520, y: 220, strength: 8800, status: "garrison" }
          },
          arrows: [],
          cityStates: [
            { id: "tbilisi", ownerFactionId: "persia", isBesieged: false },
            { id: "krtsanisi", ownerFactionId: "persia", isBesieged: false },
            { id: "seidabadi", ownerFactionId: "persia", isBesieged: false },
            { id: "soghanlughi", ownerFactionId: "persia", isBesieged: false }
          ],
          tacticalNote: "ისტორიული ეპოპეა თავისუფლებისთვის თავდადებისა."
        }
      ],
      duration: 15,
      terrain: {
        rivers: [
          [ { x: 460, y: 80 }, { x: 480, y: 220 }, { x: 520, y: 400 }, { x: 580, y: 600 } ] // Mtkvari River
        ],
        mountains: [
          { x: 380, y: 240, radius: 50, label: "სოლოლაკის ქედი / თაბორი" },
          { x: 620, y: 260, radius: 45, label: "მახათას მთა" }
        ],
        forests: [
          { x: 490, y: 280, radius: 35, label: "სეიდაბადის ბაღები" }
        ]
      }
    }
  }
];
