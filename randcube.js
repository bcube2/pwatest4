arr = [
"OGGWRYOBRRWWYOOROYYWGYYRWBBWOGRWGWGRBGBRGRYBGOOYBBWBYO",
"RWYYROOROBBYYOBRBYGOOGYGBBWYOGWWOGGGWRWGGRWRRRYBWBWBYO",
"YBWWRBOBRGBBYOGBWGGOORYGBROBGRWWWGORROWGGYYOWOYYYBRYRW",
"OYWORWYYYRWRWOOROOYYBBYBBOYRBGGWBGGGBYORGRWRWOWGGBGBRW",
"WRBYRRGGGRBYBOWYGROWBWYORROOYGOWGRWBBBWOGBWROYYGGBYWOY",
"RGWBROYOOYOYYOWORWGYORYBRWBGOOGWRRBRWWGGGRBWBBGWYBYYBG",
"YWOWRGWWOYBBOOOBWWRYRRYYGBWGBRGWGGGOBBRRGRGRYWOOYBOYYB",
"OGBRRWYRGYYBYORWYWYYGOYGWBGROGBWGBWWBWRBGBOOOROOGBRYWR",
"BWOGROWYWWGYROGGWYOYGBYBYOOOYBOWORYGYRBGGRRWRGWWBBRBBR",
"OORYRBGRWYGOWOBBOGYRGWYRBYYRGYYWYWWBBGOBGBOWWWOROBGGRR",
"GGGBRGWGWBWGROBGWBOYYOYBRYRBORRWWBGYWYORGYOOOWOYWBRRBY",
"GOOORRYGBWYRGOGYWGWWBYYOGYBYRYWWRGRWRBOBGBOGBWBOYBORWR",
"WRYORWRBGYBYWOYROOORGGYGRGGOYBRWGBBRBBWWGYOWBGOWOBYWRY",
"BRBORRYGGBOWGOWWWWRRRYYWYORYROYWBRBOWGGGGYYBBOYGBBOOWG",
"OROWRRRWGWWYBOGWYYYOOYYOWRBYBRGWOWRRBBGYGBGOBBWRGBGOYG",
"YWGORWOWWOGRGOWWBRGRYBYYWYBORYOWRBOGRGYYGBGRWOORGBYBBB",
"BYBOROGORGWRYOYWBGOWYRYGORBBRWGWOOBGYWYBGYRGWWGRBBRYWO",
"RBOWRRBYORGROOWRYWWYGOYGYGGBROOWBYOBBROBGWYYYGWWGBRWBG",
"ROWOROGYWWWOBOGGGBWYOWYYBWYRRRRWWYGYBYRGGOGRBOBOBBRGBY",
"YOBORBGOBGRWGOOWRYRRYWYWOGRRWOGWYOGGBBYBGYRWOWRGYBYWBB",
"BWORRYGBBRGOWOGYRBRYWBYGGOOYBYYWOYWBWBRGGRGRWWWGOBYROO",
"RGWRRBGGYOOYOOBGRBWWBYYYGWOGROOWOORRBYYGGGYWBRBWYBBRWW",
"YWWYRWYRGWWRBOOOOWOYOGYRBOYWYRYWGBGYGGRBGRGBGOBBRBWROB",
"ORWGRBGRRWRBYOOOWWGOBWYROWYBYGBWWYORYYRGGBOGWGGBYBBYOR",
"YWBRRORGROOYOOGYBWGYGOYGYBOWRBWWRWBRRWGGGRWYBOWGBBYBYO",
"WORBRWYWBWOBROOOWGRRBGYWYRWRGYOWYGGOGYOBGROBYBYGGBBWYR",
"BORWRGWBBOOYBOWBGWORYWYYWRYRRBOWBORGYGGGGBGYRGWROBYWYO",
"WROBRBYGORBWGOOWOYBRYBYWWGGGYRRWWOGRROBWGYBYGBOOWBYYRG",
"YRGBRWWGBGOBWOGBGBGRWYYOORROYROWRGYWRWRWGBOBOYBWGBYYOY",
"BOORRBOYRGYRYORWBYWWOGYGBWRYOBRWGGWWOWWBGOYBBYGGRBOGYR",
"RGGYRYGWWRYBBOGYOYBOBWYROBGGOOOWRRRWYGWYGWWBOYWRRBGOBB",
"WROGRYBBBYOYBOGOGWBYBWYRGYGWGGOWWYWGRROOGBRWRWBYRBOOYR",
"BWOGRGYBRGYYOOGYBGRWWGYYWBBGWOYWOBRGWRRBGWORRBROYBOWOY",
"GGORRBRGRRWYOOYOWOOYYWYGYWBGYBRWRBBGWBWGGYBRRGBWOBOWOY",
"OGRGRBWYWRWRROWYBWYRYYYBWOOBYBBWRORYBOGGGYBGGGWGOBWROO",
"WROBRGORGRGYGORBOBGBBWYOYYOWBRBWGWWGOWBOGOWWRGRYYBYRYY",
"GRWRRWBRGOGBGOWBWBRBYYYYGYWOBWWWGRYOYGYOGOGOYRBOOBBWRR",
"GOBOROBGROWWGORWYYOYBWYYRRRYBGOWBORBWYWBGGYGRYWGBBRGWO",
"RYOORGOBBRRGWOOWYWGRYRYGWWGOYRWWGYGRWBGBGRBWYBOOYBBYOB",
"GRYYRBWOBWWYROBYORWYOGYWRWOYGBGWRBBBRGORGOGOOGBGYBYRWW",
"YWORROOBYWRBWOORWYBWGRYGGBYRYGRWGWGROYBBGYRGWWYGBBOBOO",
"BGWRRRYBOOBGGOGGGBOOYWYORBRWOOYWYBBWYYRWGRGORBWYWBRGYW",
"YRWYRWOOGRYOBOOROWBWGGYRGBBORRYWGWYGORBGGBYGYRWYOBBWWB",
"RYWYRBGGORRYWOYBBOGWBRYGOOWYWYOWGYBRWOROGWWGBGBORBYBRG",
"YBOORBYWWWYRGOBBGWBOBYYWYYRRBORWWRRBOWGYGGOGYGRWRBOGOG",
"YBGGROBWYYYWOOBGGBOGBRYWRYRBOORWWWGGGWRYGORROWBYBBROYW",
"GGOWRROBYYWWBOGRROWOGYYOGYYRRWYWWBOBROYGGYOBRWRGWBGBBB",
"BWWRRBOOYRYOYOYOGYRYWGYGOBYRRRWWOYBBWWGBGRGRWGOBWBOBGG",
"YGWRROOWWGBRGOGRORBWORYYBYWRWGOWWGRBOYWRGBYOYOBBGBYGBY",
"BROORRBBRYWWYOYBWYYBGGYOGGOWWRWWBOYRRBWRGGOOGWOYYBGBRG",
"YYGORGRWYGWWROYRRBBYWBYBYBBORORWGWWBOWGOGGOBRROYOBYGGW",
"OGYYRGWYYRBOOOYGRWWBYWYWORYGBRRWOGWBGGRYGRBOWBGOOBBRWB",
"OROORRGOBYWRGOBWWBBORYYRYOROGWWWRWBBWBOGGYGGYGYGWBBYYR",
"BOYYRRYROOOOOOBRRBYOGWYYGWGYBWWWWRRBRGGBGBWGWOGWYBGBYR",
"GWGORBOGBRORBOYGRBYOWRYOWRRRGYYWBWBBOYBWGWGGYOYYRBGWWO",
"YORGRRRYBOOGYOROBWRYGGYBGWBOGRGWBWOYBWGRGWWYOYBWWBOYRB",
"WYYGRRGWBWGWWOYWBRRROBYOGBOOOYRWGYOBGRRBGYGWROWBYBOYGB",
"GBOBRRBBBGWOGORRYGYYRWYYGRWWGYYWBRWYOOYRGGWOBWWBGBOOOR",
"YOOBRGRRBROBGOGBWWOBWYYRGBRYWBYWWGWOGRYOGRGGYWYWYBBROO",
"WGORRWRGYYOWGOWORBRYRWYOBRWOOWYWBYOOGYBBGBGYBYGGRBBGWR",
"ORYGRORYYGBOWOBROGGOWWYBOGWRYRRWOGBBYRYYGROYWBWBWBGBGW",
"GOYGRWOWOWBOOOORYORBGWYGBRWGGBGWYGWBYYWOGBRYWRBBRBRYRY",
"YYWGRYWWOBWRYOGBBRGYOGYOOWOGGYOWRRRGROBBGBWBWGRYRBOYWB",
"RGBYRYRRRBRWROGYWYGYRWYGOOBYOGBWOBYGWRWGGBYWOWBOOBBGWO",
"WGBORWOWBYRYGOWWYGBOGYYORBGORRGWOWWGRBBYGROBRYYOBBRYGW",
"GBWBRBBGBROYWOYYRGWGGRYGROBWRWYWRROORYYOGWYBGBYOWBWOGO",
"RRGBRGOBOOOYOOWYRWWBYYYGRYGWOBRWGBORBYYWGBGYBWGRRBWGWO",
"YGOYRORYORYOBORWBBBOWRYRWWBWGROWYGOGOGYGGBGBYBRRWBWGWY",
"YWGYRWOYRBGRBOBOYRGROOYROBWGGBRWWBGBRBYGGWWYYYOGRBOWOW",
"WWRYRYBYRYGWWOOROOGORGYRBBGBBYBWGYYOOGOWGRGRBWRWOBBYWG",
"OBRBRWBYBYWYBOYBBGWWROYRYGORYRGWOOGOGYWOGOGRGBRYGBWWRW",
"ROBGRWWRORBGGOBOGOBOWBYYWYWGWBYWWBYRYWOGGOGRYRBGRBRYOY",
"YWBORRRWGRYYBOGYWBGGYGYYWOBOBORWRWOORYGYGWBRGRGOBBBWOW",
"WRWWROOBBOGYWOBGBWOGGGYRRBRYGGRWOYYBBOGYGRWOOBWYYBYRWR",
"WYOBRWBYRWRGBOGRWROROOYOBWBGRGGWOWWYBYRYGOGGOYBYGBRWBY",
"RWBBRROYWYOWWOOGWOWGRGYORYWGBYGWGBYOBRYRGRGBBYORWBBOYG",
"ORWWRBRGORRBYOYRWOBWWBYGORBGOBOWBGORWRYGGYGGWGYYWBOYBY",
"RORYRRGORGWOYOBBGGWWYBYBWGWBBWYWWOWYBGYRGGROBGOOYBRYRO",
"OWBYRBOBYWOYWOOYBOBOGRYOWWROYBYWBGRGWRWYGGRGRRGBWBRGGY",
"GGBGROWWOWBYYOOBYGRYOWYBWBOGRRBWWBRRYYORGGGOBRRYGBOYWW",
"YYWRRBRWOBGYGOOOBBOGYOYWGGBWRWBWWYWGGYBOGRORRRYWOBYGBR",
"OWWYRRYGRBRGOORROGBBYOYGRBBGBWWWWGYRWGOWGROBYBOYGBYWYO",
"WBGRRWOGWRRYBOYOOGRRYWYYYGBBOWYWRBOOGWYBGBBGGRWWOBYRGO",
"WOGBRWBYOGOGWOORGOOBYBYGWBBYOYRWGWRWBWRRGGRWROYYRBYBYG",
"WYWWRBRGRGOYYOOOOOBWOBYRBBWGBBYWYGRRRGYRGGYWBOWGOBGWRY",
"YRYRRYROORGOWOYBGBRRGBYOOWWWBWBWOWWGBGGYGRYOYBBOGBWGYR",
"OWOWRWYORROBBOYOGBYBWRYYGRGWROGWORYYBBGOGRGWRWGYGBYBBW",
"YOWRRGWGRWBGROORYRBWOYYWBYBGWGOWBROYOGBBGWGROOBYYBRWGY",
"GBGGROBWGGRBOOBROOOWYWYYORWWOWGWYYRYWYORGBRGRYYBWBBRGB",
"GGYYRBBBOYWYYORWYRWGGOYOOOOWRYWWBWYGRGRRGROGRBWBOBBGWB",
"RBRWRBGOYGOYROBOGRYYROYWYOBBWBYWYWGOGGORGRWWGBGWRBYOBW",
"WGYWROBROYOYRORYOGBGBWYGOYGWRRWWBOBORBWYGYRGGBORWBBGYW",
"BRRGRYGWYBWOROYYBOWOWYYGWRORGGBWGYRYOWRYGBROBGWGBBOBOW",
"GOWGRWOWRBWGRORYOORYWBYBBYRGYBRWGGWYYOWBGGRBOORBOBYWGY",
"WGOBRWOBRWGRWORBYRRWBRYOYROBGBRWWGBYGYWBGOOYGGYYGBOYOW",
"RRBRRYOWBWGOOOBGBRYOGYYWOOYRBYRWYGGYGBWYGRRWBWGOGBWWOB",
"BGOWRBYRWOYYGORWGBYBWRYYBWGRBWBWWGOGRGOOGYBRRYOOWBOGYR",
"GYGORGYBWYYWYOOBOYOBOBYOYRRORGWWGBWRWWRRGGBGGRYWRBBBWO",
"OBWGRORGBWWYBORGBYYGOWYRBGYROROWWWRRBRGWGYGOBOYOBBYWYG",
"YGGRRYWBRYGGYORBRBBWGYYRYBWBGWOWBGWOOGRBGOOWWRYOOBWYOR",
"GYYBRRYOGGWYBOGBGWWOORYYOOROBBYWYBRGRWRWGWYGRBGWBBRWOO",
"OWRWRGYORWWWOOYYGBGROGYBBRBBROYWBRGRYBGYGOGOGWBOYBRYWW",
"RYRORRRRGOYROOGBYOBBBOYBBWWOGYBWRWWYYGGWGRYGGWOOYBBWWG",
"YROORGBWBRYGYOWYWBRYWBYRGWGWBWBWGYOYBBOGGGGOOWORRBROYR",
"GRWOROGBYROGGOYOYBYRYBYRBWWBRWWWBYGWOYRYGWBBROOGGBGOWR",
"RWWORYOBRBRRYOWOYOGYYGYRRWBYOYRWRGOBWWWOGBOGYBBWBBGGGG",
"BYOWRWYGRYYGOORWOWYGRBYBYWRWRBOWYORORRBWGBGGWGOGBBYBGO",
"OROGRWBYWYBBYORGBGYORGYRYGOOBRBWWRORBOYYGWGOWGYWGBWBRW",
"OWORRYGWRGYYBOYYGWYRYBYRGBOWOBGWGRRRBYWGGWROBWOGBBOBWO",
"YWYBRRWYWBGYGOBBWROOYBYRBYROGWGWYOYGGOGWGROORROWBBRBWG",
"YWRGRYGWWGRYOORRROBBWOYYBRGOGYGWYYOROYRWGBOGBWWWBBBBOG",
"WWGBROBGYROOROWYBGOYYOYYRBGBRWWWRWOGBYRGGYBBYWRRGBWOGO",
"OGOGRBYYWGOWROWGOGYBRWYGGRYBWYBWOBOOBYRRGBWYBWYOWBGRRR",
"BBBGROWRWWYRROOYGYWYRYYBRWORYOWWBOWYOWGOGBBRGYOGGBRGGB",
"WBWRRGYBOYWOGOOYRWOOBWYYGGBGRRYWYRRWBGGBGYROGRWOOBBYWB",
"GBGBRBGRGBGYOORBWYWGWOYYWRWROBWWBORBRYYWGYRYOOGOWBOYGR",
"YOORRWYGRRBGOOYORRRYWYYWWGYYGBWWBGOOBWOGGBGRWBOBBBYGRW",
"WOWGRBOROOOYRORYWRROBGYYOOGGGBBWGWWRGYBYGRYWBGBRYBBYWW",
"RGRYRYYRROOWBOWRYBYBGRYOYGWGRYWWBGGOGOORGOWWBBWBGBBWYO",
"BBGGRROOOYRWOOGYROYORWYYROOBYGGWWBYBRYYWGRGGRWBGWBBWBW",
"YWYYRYWBYBYBGOBWOWBWRGYOGRRGRBYWROBRORGBGOYOWOWGGBWRGO",
"GBRGRGBWWYYWWOOYBWWGOYYBGBOBWBOWYRGGRYYRGOBROYOGWBRRRO",
"GWRGRYYYYGYYWORGWBYRROYGBBOGROGWGBBBOORYGOWBOWWWOBRRBW",
"YYRBRBWOWOWBROYGYWORBOYGYBRBROWWGGGWGORWGOYGOBYYWBRRBG",
"OOBGRBGYORWYBOOBOYYWWWYYORRWOGGWGYWRBRRGGRGBBWYWRBBGYO",
"BOBGRBGWBGYRROGYYYWOWWYWWBGYWOGWYOOGORYGGBORWRRRYBORBB",
"BGBORWOYOWYGOORWGGORGWYYRBBWROBWYWORYBBBGWRGYYWRRBOGGY",
"OGGYRRYBYWRGOOWYOOBORWYYYYOBBGWWOBGWWBRGGYBWRRRGGBBORW",
"BGBWRGOBORWWOOYYBWRRYOYYYRGWWBYWGYRRWBGYGBBRGOGRWBOGOO",
"WOYORBWRGGWOWOYROYGROGYBOYWRWBYWGGOBOWRGGYYGWBBBRBBYRR",
"OWRORYBBORBRRORRWWGGYGYGGYGBBOWWWYOWYGOYGYBRBYRWBBOWOG",
"GRBORYOBYRGGROGGBYRYBYYBOWWBOBWWOYGOYWGBGRWWWWRRGBOOYR",
"RGOBRYGOYORBWOROORWBGRYGBYBGYWGWWOOYBOYWGYWBRYRWGBWRBG",
"BRGRROOGGWBRYOBYGYYOBYYBRBGOOGWWWBGWRWYYGYOOBWRRGBRWWO",
"BORRRYBBGYWYOOORWOWBBYYGWWYOGBYWWWGOOBROGRRBGGGGRBRWYY",
"WRYOROOGRBWWGOORYWRBYYYRGWYBWRYWWGOOGYWRGGORBOGGBBBYBB",
"ROYWRGWYOROWGOYBBYYOWWYYBGWGBORWORWGGBBBGRGGORROWBRYYB",
"WWOBRGROYWYBROOYYYBWORYGWBOGOBYWGWROROGBGYGGYBRGWBBRWR",
"WOGORRBYOWOGOORRBWRGRWYBOWBBYOBWYYWRGYORGBBGYYGYWBRWGG",
"RBGORGWGBOWGWOORGOWYBYYOORYYRWWWBGROBYRRGWYBWYGGYBORBB",
"WBGYRGRGRWBYROWOWWRGOWYBYBYBGBYWRBROGOWOGYGOGRYBRBOYWO",
"ROBRRYOBRGOWGORBGBGOWYYWRROYWWWWYYROWBGBGGOGBYWYBBYGOR",
"BGBRRBBBGBGGROOWOOWYWYYWRWRRYYRWGYYOOGOOGBRWWYBGOBWYRG",
"YYOORGGYWRORWOWOGOGBBGYBYGYGYWBWRRRBRYWOGBWWYGOBWBRORB",
"WRGORWGOWYBROOGYRWGWBWYYOBBOGRGWWRGYOBWOGRRRGYYOBBYBYB",
"GYYORGBWOYWOBOOYYWWRROYRGWRBGRGWBYWWRGOYGRGOGOBBYBBWRB",
"BOYRROOGGWWGGOWGOYRBBBYWBRWOBORWOYYRWYGYGGORYRBRGBYWWB",
"RBGGRWOYBYYGGOYBRRGYBOYWYBWOOBOWRYROWOGGGWRBWRROBBGYWW",
"OOGRRRBBRYBYGORRYYBYRBYOWGWGYBYWBYOOWWOGGWGWGOWBGBRWOR",
"BROGRWYROWBGWOYBYGRGBGYOBRYGOWYWBRWWWWGYGBOORYBRRBOYGO",
"YORWROBWOOBGROOORORBYGYGWWBWYBGWYWGRBORWGYGYYGRWBBBGRY",
"GWOGRGOBBWBOOOWYOGOOROYBYRGYWRRWRWYYWRBYGGBYBGYRWBGRBW",
"BBWWRGGYOGGOGOOGORYGORYYRBWBOGRWYWYYRROWGBYRBBWROBBWWY",
"RROWRWWYROYOBOWRRYWBWGYOBOYGRBBWROGGBOGWGYBOYYGGGBBWYR",
"YYBYRWGWYYBBYOWGWWRGOGYBOOROROOWBRBRBRWOGRBOWWYYRBGGGG",
"BRWWRWGYBGRBOOOGGOWBOYYYRRRYGGBWGRWOOBWOGGYBYBWYOBRRYW",
"BORORBWROGBGYOOYRGYBWWYRBGBBBOWWGGYRRYRWGGORYWWOOBGWYY",
"WROWRWRGRWGWYOYWOORYBBYOBOGYRYWWGYRBGRBBGYOORYBOBBWGGG",
"YGYGRWBWWWYOROORRWBWORYBRBBRYBOWBWWGOORBGGGOYGYYRBYGGO",
"RRGORGBBGBWBOOYYOWYWRGYBRYOOGBRWRYGRGWORGOYBWWBGWBYWYO",
"OBBGRBGGROWBROGGOBWYBYYWOWYYYWRWORBYGWWRGRYORWBOOBYGGR",
"RBOYRWORWGBWWOGRWWBYOWYRGYYORGGWYBGBYOYBGOYORWRGGBOBBR",
"OGGWRRRBBRYWROWWOBGWGOYYRRGOBOOWOYYBYBBGGBYGRWGOWBYYRW",
"BWGBRGGOGBYWRORYYBRWOBYBRWRYYYBWGYWGWYRRGOWOOWGBOBGORO",
"GWWBRBYWBWRBBOYRYYYGOOYWRYGOYRGWBBWWORROGRGGOBOWOBRYGG",
"GBGOROBWGBGYYOGYBROWORYROYGWWYOWWWYBWGRBGGWROYORBBYRRB",
"ROBGRYRYYGWBWOORROBGWWYBYGWGWYOWBWYWYRGYGBOGOOOBRBBRRG",
"BRRBRGBOWYRWGORWBGOORYYWYBGROOWWWOGBYWWGGRGBRBYOYBOGYY",
"BGYRRRWWYRWGROOWGWROYWYBGYOBYOOWYGYRWWRBGBBBYORBGBOOGG",
"BYWWRGROWBRRBOWBRYWOYOYYORYRWGBWBGOWOGYWGGOYBGBRYBGGRO",
"BBRYRWGOGOBBGOROBBOWWRYRWYGRYWWWYWOYYBORGGBWRGGYGBOYOR",
"BBGGROGBYYGYYOBOWWYORYYGWBBOYRWWOROBRWWGGYGROORWWBRGRB",
"GYWRRWGGBRBGYOOBYOYWBBYOGRWYGBWWWWYROBOBGRWOYRGORBGROY",
"BWYRRGGOBWOOYOYRWWYBRRYOOBYWROBWGRRGRGWYGBBGYBWGWBOOYG",
"RYOGRORYWGRBGORYBWBOYRYOYWBBBOGWWWGWYRGYGWRBOGBOWBYROG",
"OGRORBRGYWRGOOYBGWBWRYYBWBOGWORWRYYYWGBOGOBWOGRYYBWRBG",
"YGBBRYWRWWYBWORGGOGWROYBRBWOGYGWWOYORRGOGRBOYYORBBYBWG",
"GGBWRRGOOBBROOBGYGYGWRYGOBOYYYWWORBBOGWYGYRRYWWWWBRBOR",
"WBYWRORRWWOYOORGGYGGRYYWGWWOWRGWBYRBOGBYGYBYOOBRBBOBRG",
"OBGGRWYYBBYOBOBOOWGRYOYWROWYBRRWRRGBYWGGGOOGWWYGRBWRYB",
"WOGBRGBOYBWRBOROGWRBRWYOWGYOYRYWYOGYGRWWGOYRGOYBRBWGBB",
"YYRBRROGORBWOOYBYGOGBBYGWBYBRYRWOBOGGWYWGWWOOGRRYBGWWR",
"GBRWRBOWBBOYROBWRYOWOWYGBORYBROWRBYOWRYGGGWYGWGGYBYROG",
"WRWORYGOYBWOWOYRWYOOYGYRGYWORBGWOYGWBBRWGYOGGRBBRBBGBR",
"BROBRGWGYBOYBOOWRYOWWBYWWGRORRWWBOYRYYGOGGRYBBOGRBWGYG",
"GWBBRYRBBGBRYOOOYWYWYOYOYBWRRBYWGWWBOWGGGRRRYOOGGBRWGO",
"WBGYRWOWWOGRBOOBGBOBGOYRYWORYROWYYRWBRGWGGWOBRGYRBYGBY",
"WYWGRBBYBGWGYOROWGRBWGYOBYYRWYBWGROYGOYRGWOROORBOBBWGR",
"WGGOROGBWYGBOORBBRGOOWYWORROBGYWGRWYOYWGGRBYRYYWBBWBRY",
"WWYORYWBYOORROYOWGGYBGYGRWBRGORWRRRGOYBBGWYBWGBWGBOBOY",
"GBWYRYYRGBYBGOWWBWYGYRYORGGRWGWWOBWWOBRRGGOROBYOOBOYBR",
"OBYRROBGOWOOYOBROWGOGWYGRGBBYRWWRYRWYYOYGWRBGGRYWBGWBB",
"OGYYRWRYYOGOOOWRBBGWGYYYOBGGGRBWRBWBYRWGGOWRWBRWBBOROY",
"BYOWRBGWYWOWYOGGWBYBBRYOGBWGGYGWROOBRRYRGWOGRWYROBBRYO",
"ROWRRRRYBRYOWOOWOGBGGYYBOWOORRGWWBOGYGWWGBYBYGRBYBGYBW",
"WOOBRRWYRRYRGORYGGGWYWYYYWBGGYRWWBOWOYOGGBBOBGBOBBRWOR",
"BWYGRGYGGYYBBOYYOGWOGRYRRYBWYWOWGBBROWRWGWOBWGOORBBRRO",
"YGRRRRRWOWOGGOYGOGBGROYRYWWBYWBWBGOYOWYYGYBBOBGRBBWWRO",
"RBYBRWBOGGRBGORWOWBGWWYYGRBROGYWWOGOYYWWGROBYOYROBBYGR",
"BRBORYBYOWRYGOOOGGOWBBYORBWGRRBWYWGGYWRBGWOWRYOGGBRYYW",
"BRWWRBBWYYORBOYGBGOOBYYYOWYGRROWGOBWYRWYGORGBGGORBWRGW",
"YWOYRYWBYOOOGOYWRGRRWGYYGOROWYWWBRGYBRBGGOBBBWWGOBBGRR",
"RYWYRWYYWRGBOOBOWOGWGOYBOGGBRWBWRBROWGROGYYWYGOYRBBRGB",
"BOWWRWGYYWORGOWORGWBRBYYOYYGRRBWOOBBOGYRGWBGYGOBRBYRGW",
"GGWORBOGGYGRYOORBRORRYYRBOBYOWRWYBYWWGYWGBGWBOWYWBROBG",
"WGRORBROOBWRBOORGGGROYYWGYBYROBWGBWGOWWYGGWRWYOYYBRBBY",
"RBYYROORBOWGWOROGWWBBYYGRGBYRGWWBYWOBRGOGBYOWGOWYBYRGR",
"WGWBRBYRYOGOWOOYRYRBGYYRRGRGWOGWYGRBGYOWGBWWWBOBOBYROB",
"YWRBRRBGYRRWWOBROGGGWBYOBYBOGWYWRYBORYOWGOGYBWOYWBGGRO",
"RBBWRGRWOGWGGORROBGROYYOORBWOYOWGBGRWBWYGWYRYWBYYBYGBO",
"WYGRRYWOBBRRBOOOOGRBYGYYYGGRWWGWWBOBGBOWGBOWYRRYRBYWGO",
"YGGORBBWOYYRBORWRWOYOWYOWWRBRRRWGRGYGYYBGOBGGOOGWBBWYB",
"YGGYRORBRBROYOWGOYRBOYYRRBYYGOOWGBBWBOWYGWWWGWROGBWGRB",
"YYOYRYRBWOBBGOOYBOGGBOYRGOORRWOWGBGYRRWYGWYRRWWGBBWGWB",
"YGRYRGYRGOOBBOWWBWRWGYYOWROYYRWWOROOBBGGGGWYYGBBRBWORB",
"GBBRRYGOBBOGWORRBYWYROYOOYWOWRGWBORORWYRGGYYWWGBBBWYGG",
"BBBWRYOGBRYYROOWWOYGWOYGWYGWRBWWGYOGRRGYGWGRRROOBBBOBY",
"OOBBRGWBGOYBWOGBYOGOGWYBYWYROWRWYGGRYYRBGRWRWORRWBOYGB",
"OGBORYOWGWGYRORRGYGWBYYBWYGRBBRWGGBBYYWOGWOWORBWRBOYOR",
"YRYWRGBYBGWRBOYWYGGROYYOORRWWWGWORGWROYGGWYRBBBGOBBOBO",
"RGBWROGBOWORROOWBWYGORYYRYBYRBWWWOGGGRYYGWGGWYBRYBOBBO",
"GWYWRWOOYGYBGORBWYYRROYRBYWBORGWBGYROGWYGBWOWRGORBBOBG",
"GBOBROOGGYROOOWOGWRBBOYYGWYWWRYWGYRBYYGRGYRWWWBBGBRROB",
"GROGRRBWWYYWWOWGBWYRBWYBGBRBGBGWOYOROYOGGBROGWYYYBRROO",
"YRBGRWYGRGRWYOBWOOOOYGYOOBBBBGYWWOBRGWBWGRRYGWORRBGYYW",
"BRGYRRGRBYGOWOBBGOWWGWYBROYRYBYWOYBWOOROGYOWGWGRBBRWGY",
"GYGBRYRBGWGBOOWWWOYRBOYGYRBORBWWOWYYOOGBGGOWRRGRBBRWYY",
"RRBORGWBYOBOROOGWWYYYWYYORWRBRRWWOOYGBGGGYGYBWGROBGBWB",
"WBYYRGOGWYYBYOBYWWBWRRYROBORROOWOWBYROBOGWGGRBYGWBRGGG",
"WWGGRYBBOYBROOOOYYBBBRYYYWBWBGYWGYWGRROWGGROWROWGBRGRO",
"OBWORBYYYYRYROGWOBWWGOYYGGOGWWGWROWRGYBRGBOBBRWBYBGROR",
"BROWRWBOOWGGYOOORYRROBYBYBYBRRBWYRGWWOYYGOGYRGWBGBWWGG",
"WYBBRWWYBGRYGOWOOYRBORYOWOBYGRGWBOOBGYGRGBYGORWWRBYRWG",
"RBGORGYOOGYGGOWRRBYBWOYORWWBGRYWBOYYGWBRGGOBOWRBRBYWWY",
"OOOWRRBBWRYBYOYROBWBBWYBYGYRORWWROWOGGWRGRWOYGYGGBGGBY",
"OYGBRWOBYOWRRORRGOBRGBYWRGYRYBOWGYWWWRGYGOWBBWOGGBYBOY",
"BGBWRGOBYGYYYOGRWRYRWYYROOGBRBYWWYWGROGGGROORWBWOBBOBW",
"OBRBRBRRWRGOYOWOGYWYBWYRYOYOYRGWRWOGGRGBGWWWYBGBOBYBOG",
"ORRRRBYYYGWRYOGGWYBWYGYOBOOOYBRWOOWGWBBGGRRBWWBWYBOGGR",
"GOWRRBWGRWYRWOOYGGYWGYYGBGBYOWRWWRBBOWBBGYRRYOOORBYGBO",
"YRGORYRWWYOOROYOYOGRBGYWWBBBWBGWOWOGRWGYGBRGYORWGBBRBY",
"WORWRYWRWBRROORGBWGGYYYWGBYOYGYWGROBORBWGGOBYYWOBBOBGR",
"BRYGRBWBGWYGGOGYBOWORWYWBOORBBOWYGROORRWGYBOWRGGYBRYWY",
"OGYORRWYYORYBOWOBRYYGOYRBBBOOWGWGRWGBBBOGRWGRRYWYBWGWG",
"RWYGRGBBBORGBOOWWYWRGGYOGWRWBOYWYRYRBYYBGRWGYORGOBOOWB",
"BORGRGBWRGBOGORWBRORWYYWGBBBRWOWWOGGYRWYGYOYYYWROBOYBG",
"ROWBRYOGRWBYYOWOGOYRBBYGGGYWBYOWOGORGWWWGYOYBRWBRBRBRG",
"OGOGRWRGWOBYYOBWBGYRGYYOYWBOWROWRGRRBRYYGWWOBGGROBYBBW",
"GBWRRBOWROOROOOORROGWOYWRRGGBYGWGBYYWYYRGGBYGBWYWBBWYB",
"WWWGRORRBRORYOBOGBGWWGYBBRGYYYBWWGGWORYOGYGYBOWYBBORRO",
"YWWORBRGOWWOYORRBWGOOOYRGGWGOBYWWYWYRYBGGBGGBRRBRBYYBO",
"GBGYRWYBOBYRBOYBRWWWRWYOYROBGORWOGGWRROGGOYBBRWYOBGWYG",
"OGOWRGROGWGGGORORRBBGWYRBYGRRBWWBYOOWBBYGBRYWYOYOBWYYW",
"YWRGRORBYRGWOORWRBRYWOYBGGOOGYWWBBBGBYWRGYGROYWBYBWGOO",
"WRWGRBOGGYGBBOWRWWORRBYYOYBYGGWWBBRRBYYYGWGRWGOYOBOOOR",
"ROWORGWOWYRYROGRBYGRGWYYOYYBWBBWOBGBWYOBGWOWOGGGRBYRBR",
"OGWRRGOOOWRYWOGGOYGYOWYBRBWYORGWYWWRYWBRGOGBBBYRRBBBYG",
"GBRGRWRRWYWOYOYWBBYBRRYOYWGBYYGWGWYBOOGWGRGRWBOOGBORBO",
"BBWORGRRWORGBOROBROGYWYYROWOYGGWWYBWYWBWGRGYRBYGOBOBGY",
"WGYGRYOBOOORROGRBBOYBWYWBOGWWWRWRYRYBYGBGYYWGRGWOBOGBR",
"GOOORRGGWWRRGOYBBGYBBYYWBRYBRYYWBWOGOGOWGWOGWYWRBBORYR",
"YROWROBOGYGWGORGYROBOBYWWYWRRYYWYWOGGRRWGBBOOBGRWBBYGB",
"OBYRRRRGYOOBWOOBYYBRGOYBRBORBGWWWWORWWGGGGWYWGYYYBGBRO",
"BGRRRGYBOGWOOORGWWOGORYYBYRBOGOWBBGWYYRWGYYBGWBYOBRWWR",
"WOYRRWBBOBRYOORYYRBBYGYYBBOWWWYWYORGRWWWGGOBRROGGBGGOG",
"OYBWRYOWOWRGBOYWOOBYROYRRORGWBOWRGGRWRWGGWBGYYGGBBBYBY",
"OYOGROBRGGWBGORGYBWYRRYRWWRYORWWBWOOGWRBGBWBYBOYGBGOYY",
"GRYBRWWWWRROOOYGWBRWWGYGBOYBYYGWGORBYYGRGBGYWRBOOBBROO",
"WYOGRRBBBGGRBOWRWOBYYGYYYRBWOGRWBYWGROOOGGRRWGYYWBOOBW",
"YBWORRBWBRYYBORRWYRGBRYOOGGWBRBWGYROBWOYGWWOGGOWYBGOYG",
"BWWRRBYWRORRBOOWOOOYYGYOOBBGGWRWYBYYYGRGGRGBGGYRWBWWOB",
"OORGRGOYGOOWYOWROGYOGBYRYYYWROGWBWWBBRBWGRWGRBBGWBYRBY",
"BYBYRGYWGWBOOOOOYOYROBYWWGYWYYRWGRWBROGBGBGOWRRBWBRRGG",
"BRWWRGWWYYRWOORYORWYOBYYRRGOGYBWWOGROOGBGWBYGBGRYBBGOB",
"YBGBROWYBBBWGOBBGOGORYYOWGROWYRWWBGRROOWGWYRGORWYBYYRG",
"WBWRROBOYORWOOWYBWRBYYYWBRBGGOYWRRGBGYYOGYGGROBOGBWRWG",
"GOBGRRGYOOBBOOWOYYYBGBYWWRBYWRGWRRGYORWWGOWYRRBWYBOBGG",
"YRRGRGYWOGWOOOBGBYROOYYYBGWWRRRWYOOBBWBWGBYBWWYROBRGGG",
"RRYGRGOWGBOROOGBBOBBWBYYOGWRYYRWWGOGYYWYGWRBWBOORBWYRG",
"YOOYRWOGWGOBROBRRRGBWYYYYBWRGYWWRBYWRBYWGGOWOGOBRBGGOB",
"YBGRRWBWROOBYOGWRWGBYRYGRWOBOOGWRYYRRYOOGBGYWWOBBBWYGG",
"RGYOROOYYRGOYOOWOWWWYYYBORRGBBRWWGWGBGWGGBBRYBWGBBYRRO",
"YOGYRGRWBWWWBOGOYYORGYYOYRWOOBBWYBWOGBWBGRROBRGGWBRYGR",
"YOYGRGWROBWWBOWROYRBOYYOGBWYWRGWBGYGBWRRGRWROOYBYBGBOG",
"BGWORYRBGYWOBOOGRBRWGYYRGOROBYWWWYRBWGBGGGORWRBYOBYWYO",
"RBWWRGYOOWOOBOBWROBRRRYOBORYYYYWWRRWYGGWGGBGGOWGYBYBBG",
"WYYRRYGBOWRYWOGROWBWORYOBYGGOBWWRYOBRBRGGBGWORBWGBGYYO",
"YBOYRWGGBRROOORWBWROGWYGYGBWBOWWGRWYBOWBGOYYBGYRRBROYG",
"BYGBRYOWYBGGBOWYRGWWWOYYROORRYBWGBWOOOYOGRRRWWGGGBBBYR",
"RRBWRRYGGBYBROOGBGYYWWYYROYWBWRWYOWWGGBGGORBOYGOBBORWO",
"GWOORRGWRORBGORGBBRBWBYOYGWBBWOWWWWOYYOOGGBYYGYRGBRYYR",
"YOBWRWYYWBRGGOGWYRGWOBYWYOGBGWOWYBRYRBROGYWBOOGORBBRRG",
"WWGRRORORGWRGORBBBGOOBYWRGWBRYBWYBOYOBWYGGYRGWYOWBYYGO",
"BBBORRGYBWROGOYOGWRRGRYWOOYYOOOWBYWGWWRWGBRGYWBBYBYRGG",
"YRYWRBOGOYWWYOBGGROROGYORWWBWYYWRGBBGRWYGOBGRGORYBOWBB",
"RRGBRYBYWBORROWYWGYBYYYBWROBYROWGORBGOWWGWOGYOGGGBORBW",
"BORBRRWBGYBBYOOWWWRRBGYGGRRYYBOWWOOOWWGWGYRYYYBGGBGORO",
"OWGBRYBBRWGYGORYWRWWBGYOOOBWBWOWYRBGGWYOGYORRYYOGBRBRG",
"GYBBRYOWYWYGWOWRGWYROGYOYBGRGRRWBWRROOBGGBGOYOYWRBWBOB",
"RROYROWGBWBYYOGGRBWYBBYGGWYOBROWWGRGBORBGYOWRWROWBGYOY"];
