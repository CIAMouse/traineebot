var min = 0;
var max = 11;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var fixKnownUsers = [];
var makeNewKnownUsers = [];
var x;
var i;
var testListVar = '';
var newTrainee = '';
var makeListVar = '>';
var badNewName = false;
var newDeletion = '';
var lastKnownComma = 0;
var nameObject = {};
var isNewUserVariable = false;
var toMakeKnownUsers = '>';
var hasFoundUser = false;
var makeUserToRemove = '';
var thingToEdit = '';
var isKnownTrainee = false;
function editTraineeSyntaxError(){
    context.sendResponse('Error: Can\'t parse the command. Correct Syntax:\n`[editTrainee] "<trainee-name>" "<name/IGN/IP>" "<text>"`\n>_I am a bot. This action was performed automagically!_');
}
function addToListGet(){
    //>>Store name<<
	var traineeCurrentName = jsonParsed.name;
	//>>Store IGN<<
	var traineeCurrentIGN = jsonParsed.IGN;
	makeListVar += '>*' + eggs + '*\nName: ' + traineeCurrentName + '\nIGN: ' + traineeCurrentIGN + '\n\n';
}






	    function MessageHandler(context, event) {
	        if(event.message !== undefined){
	        if (event.message[0] === '['){
	        
	        
	            if(event.message.toLowerCase() === '[test]'){
	                context.sendResponse('Test successful! Message handler online!\n>_I am a bot. This action was performed automagically!_');
	            }
	            else if((event.message.toLowerCase() === '[help]')||(event.message.toLowerCase() === '[info]')){
	                context.sendResponse('Hello ' + event.senderobj.display + '. Glad I could help. My name is Trainee Helper, and I am a bot. My job is to help you learn more about the trainee team. To get started, click on my name, then *Direct Message*, and send me `[menu]`.\n*This bot was created by @kaleb418*\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(event.message.toLowerCase() === '[menu]'){
	                context.sendResponse('_Showing menu..._\n\n*Type the command shown in red for each article.*\n\nGetting Started...`[start]`\nCommands...`[tools]`\nVideo...`[t-vid]`\nAdministration...`[admins]`\nStaff Guidelines...`[guidelines]`\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(event.message === '[t-vid]'){
	                context.sendResponse('Please watch this entertaining video for more info! https://www.youtube.com/watch?v=Butvl6MzG50&feature=youtu.be');
	            }
	        
	            else if (event.message === '[tools]'){
	                context.sendResponse('_Showing mod tools..._\n\n*Please note:* Trainees do *NOT* have access to these tools; they are here for you to learn them and know how to use them for when you graduate.\n\n`/lbban` - The main moderator command. Follow `/lbban` with `<player> <time-in-minutes|skin|warn> [reason (optional)]`. For example, if I were to ban myself (elite041802) for 15 minutes for reason: hacking, I would use `/lbban elite041802 15 Hacking`.\n\n`/lbban <player> skin` - Replaces a players current skin with its Alex or Steve counterparts.\n\n`/lbban <player> warn` - Warns the player that they are using inappropriate conduct and mutes them for five minutes.\n\n`/mod fly` - Toggles invisibility and flying ability.\n\n`/separate <player1> <player2>` - Bounces the two specified players back from each other and prevents them from seeing each other\'s chat messages.\n\n`/move <player>` - Teleports you to the specified player.\n\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	        
	            /*else if (event.message === '!emailTo' && event.senderobj.display === 'Kaleb Wasmuth'){
	                var bug;
	                context.sendResponse('https://bugs.mojang.com/browse/' + bug);
	            }*/
	        
	        
	        
	        else if (event.message.toLowerCase() === '[admins]'){
	            context.sendResponse('_Showing admins..._\n\nLuke Hoffman (@luke_hoffman)\nJiselle Angeles (@ramennoodles)\nKaleb Wasmuth (@kaleb418)\nDave Diaz (@ciamouse)\nSpencer Steiner (@spencersteiner)\n\n *If you have any questions, feel free to DM any of these people, or any other official moderator.*\n>_I am a bot. This action was performed automagically!_');
	            
	        }
	        
	        else if (event.message.toLowerCase() === '[guidelines]'){
	            context.sendResponse('This page is still under development.');
	            //context.sendResponse('');
	            
	        }
	        
	        
	        else if(event.message.toLowerCase() === '[start-3]'){
	            context.sendResponse('_Showing page 3 of 3 in \'start\'..._\n\nAnd, last but not least, have fun! We offer an in-game tag `[Crew]` for all trainees, direct message @ciamouse or @kaleb418 your IGN (gamertag) to get it added.\n>_I am a bot. This action was performed automagically!_');
	        }
	        else if(event.message.toLowerCase() === '[start-2]'){
	            context.sendResponse('_Showing page 2 of 3 in \'start\'..._\n\nAfter that, let\'s learn the basics of slack. Here are some links to help you get started:\nhttps://get.slack.help/hc/en-us/articles/218080037-Getting-started-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626328-Onboarding-checklist-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626358-Cheat-sheet-for-basics-and-shortcuts\n\n*To continue with the introduction, direct message me* `[start-3]` *.*\n>_I am a bot. This action was performed automagically!_');
	        }
	        else if(event.message.toLowerCase() === '[start]'){
	            context.sendResponse('_Showing page 1 of 3 in \'start\'..._\n\nHey there! Welcome to the trainee team. While you’re here, you’ll be shadowing mods and helping them out. If (and when) we feel you are ready, you’ll be asked to join another team, where the real mods hang out. In the meantime, have fun! If you need help, feel free to DM @kaleb418, @lukehoffman, or @ciamouse2001. Go ahead and set up your profile if you have not already done so. *To continue with the introduction, direct message me* `[start-2]` *.*\n>_I am a bot. This action was performed automagically!_');
	        }
	        
	        
	        //Datastorage: Trainees [addTrainee]
	        
	        else if((event.message.substring(0, 12) === '[addTrainee]')){
	                
	               if((event.message[11] === ']') && (event.message[12] === ' ') && (event.message[13] === '"')){
	                   
	               
	                 for(i = 14; i < (event.message.length - 1); i++){
	                     
	                     if(event.message[i] !== '"'){
	                     newTrainee = newTrainee + event.message[i];
	                     }
	                     else{
	                         break;
	                     }
	                     
	                 }
	                    
	                    for(var x in context.simpledb.botleveldata.trainees){
	                        
	                        if(newTrainee === context.simpledb.botleveldata.trainees[x]){
	                            badNewName = true;
	                            break;
	                        }
	                        else{
	                            
	                        }
	                        
	                    }
	                    if(badNewName === false){
	                     context.simpledb.botleveldata.trainees.push(newTrainee);
	                     context.simpledb.doPut(newTrainee, '{"name":"' + newTrainee + '", "IGN":"", "knownIPs":[]}');
	                     context.sendResponse('Added *' + newTrainee + '* to the trainee list!\n>_I am a bot. This action was performed automagically!_');
	                    }
	                    else{
	                        context.sendResponse('Error: Trainee name already in use.\n>_I am a bot. This action was performed automagically!_');
	                    }
	                
	               
	               
	               }
	               else{
	                   context.sendResponse('Error: Can\'t parse the command. Correct syntax:\n`[addTrainee] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	               }
	               
	               }
	            
	            
	        
	        else if(event.message === '[getTrainees]'){
	            traineeList = context.simpledb.botleveldata.trainees;
	            
	            
	            for (f = 0; f < traineeList.length; f++){
	                if(traineeList[f] !== ''){
	                 makeListVar = makeListVar + traineeList[f] + '\n\n>';
	                }else{
	                    
	                }
	                
	            }
	            context.sendResponse('_Listing trainees..._\n\n' + makeListVar.substring(0, makeListVar.length - 2) + '*---*\n>_I am a bot. This action was performed automagically!_');
	        }
	        
	        else if(event.message.substring(0,11) === '[rmTrainee]'){
	            if(event.senderobj.display === 'Dave Diaz' || event.senderobj.display === 'Kaleb Wasmuth'){
	                
	            
	            
	            for(i = 13; i < (event.message.length); i++){
	                
	                if(event.message[i] !== '"'){
	                    newDeletion = newDeletion + event.message[i];
	                }
	                else{
	                    break;
	                }
	                
	            }
	            
	            newDeletionFinal = newDeletion;
	            if(event.message[11] === ' ' && event.message[12] === '"'){
	            var deletionIndex = context.simpledb.botleveldata.trainees.indexOf(newDeletionFinal);
	            if(deletionIndex > -1){
	                context.simpledb.botleveldata.trainees.splice(deletionIndex, 1);
	                context.sendResponse('Successfully deleted *' + newDeletionFinal + '*.\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	            else{
	                context.sendResponse('Error: *' + newDeletionFinal + '* is an unknown trainee. Trainee names are CaSe SeNsItIvE. Try `[getTrainees]` to get the up-to-date list of trainees.\n>_I am a bot. This action was performed automagically._');
	            }
	            }
	            else{
	                context.sendResponse('Error: Can\'t parse command. Correct syntax:\n`[rmTrainee] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	            }
	            }
	            else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	            }
	        }
	        else if(event.message === '[clearTrainees]'){
	            if(event.senderobj.subdisplay === "kaleb418"){
	                context.simpledb.botleveldata.trainees = [''];
	                context.sendResponse('Successfully cleared trainee list!\n>_I am a bot. This action was performed automagically!_');
	            }
	            else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	            }
	        }
	        
	        //   <<<<<<>>>>>>  EDIT TRAINEE BLOCK <<<<<<>>>>>>
	        
	        else if(event.message.substring(0,13) === '[editTrainee]'){
	            if(event.senderobj.subdisplay === 'kaleb418' || event.senderobj.subdisplay === 'ciamouse'){
	            if(event.message[14] === '"'){
	                var makingListAddon = '';
	                
	                
	                for(r = 15; r < event.message.length; r++){
	                    if(event.message[r] !== '"'){
	                        makingListAddon = makingListAddon + event.message[r];
	                    }else{
	                        lastKnownQuote = r;
	                        makingListAddon = makingListAddon;
	                        break;
	                    }
	                }
	                
	                var traineeToEditFinal = makingListAddon;
	                
	                 var isKnownTrainee = false;
	                for(x = 0; x < context.simpledb.botleveldata.trainees.length; x++){
	                    if(context.simpledb.botleveldata.trainees[x] === traineeToEditFinal){
	                        isKnownTrainee = true;
	                        break;
	                    }else{
	                        isKnownTrainee = false;
	                    }
	                }
	                
	                if(isKnownTrainee === true){
	                    // Trainee is known, begin parsing of what to change, what to change it to
	                    if((event.message[lastKnownQuote + 1] === ' ') && (event.message[lastKnownQuote + 2] === '"')){
	                        makingListAddon = '';
	                        
	                        for(x = lastKnownQuote + 1; x < event.message.length; x++){
	                            
	                            
	                            
	                            if(event.message[x] !== '"'){
	                                makingListAddon = makingListAddon + event.message[x];
	                            }else{
	                                lastKnownQuote = x;
	                                makingListAddon = makingListAddon;
	                                break;
	                            }
	                        }
	                        
	                        var thingToEditFinal = makingListAddon;



	                        if((event.message[lastKnownQuote + 1] === ' ') && (event.message[lastKnownQuote + 2] === '"')){
	                            
	                            makingListAddon = '';
	                            
	                            for(u = lastKnownQuote + 1; u < event.message.length; u++){
	                                
	                                if(event.message[u] !== '"'){
	                                    makingListAddon = makingListAddon + event.message[u];
	                                }else{
	                                    lastKnownQuote = u;
	                                    makingListAddon = makingListAddon;
	                                    break;
	                                }
	                                
	                            }
	                            
	                        }else{
	                            editTraineeSyntaxError();
	                        }
	                        
	                        
	                        
	                        
	                        
	                        
	                    }else{
	                        editTraineeSyntaxError();
	                    }
	                    
	                    
	                    
	                    
	                    
	                }else{
	                    context.sendResponse('Error: *' + traineeToEditFinal + '* is an unknown trainee. Please check for typos in your message, or use `[getTrainees]` to get the latest list of trainees.\n>_I am a bot. This action was performed automagically!_');
	                }
	                
	                
	                
	                //context.simpledb.doGet();
	            }else{
	                editTraineeSyntaxError();
	            }
	        }else{
	            context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	        }
	        }
	        else if(event.message === '[getRawTrainees]'){
	            if(event.senderobj.display === 'Kaleb Wasmuth'){
	            context.sendResponse(context.simpledb.botleveldata.trainees);
	            }else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	        }
	        
	        else if(event.message.substring(0,17) === '[getTraineeInfo]'){
	            //Space of message should be 17
	        }
	        
	        
	        
	        /*else if(event.message === '[testJSON]'){
	            var testSurvey = {
	                "type":"survey",
	                "question":"Test",
	                "options":["Why", "Does", "This", "Work"]
                    };
              context.sendResponse(JSON.stringify(testSurvey));
	        }*/
	        else if(event.message === '[getMyID]'){
	            context.sendResponse(event.sender);
	        }
	        else if(event.message === '[testNewCommand]'){
	            if(event.senderobj.subdisplay === 'kaleb418'){
	                var testCommand = 'oldusers';
	                context.sendResponse(context.simpledb.botleveldata[testCommand]);
	            }else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	            }
	        }
	        else if(event.message === '[resetKnownUsers]'){
	            if(event.senderobj.display === 'Kaleb Wasmuth' && event.senderobj.subdisplay === 'kaleb418'){
	            context.simpledb.botleveldata.oldusers = [''];
	            context.sendResponse('Reset known users list.');
	            }else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automagically!_');
	            }
	        }
	        
	        
	        else if(event.message === '[fixKnownUsers]'){
	            for(y = 0; y < context.simpledb.botleveldata.oldusers.length; y++){
	                if(context.simpledb.botleveldata.oldusers !== null){
	                    fixKnownUsers.push(context.simpledb.botleveldata.oldusers[y]);
	                }else{
	                    
	                }
	            }
	            
	            fixKnownUsers = fixKnownUsers;
	            context.simpledb.botleveldata.oldusers = fixKnownUsers;
	            context.sendResponse('Successfully fixed the known users list and removed all invalid names.\n>_I am a bot. This action was performed automagically!_');
	        }
	        
	        else if(event.message.substring(0, 13) === '[rmKnownUser]'){
	            if(event.senderobj.subdisplay === 'kaleb418'){
	                if((event.message[13] === ' ') && (event.message[14] === '"')){
	                    
	                    for(i = 15; i < (event.message.length); i++){
	                
	                if(event.message[i] !== '"'){
	                    newDeletion = newDeletion + event.message[i];
	                }
	                else{
	                    break;
	                }
	                
	            }
	            
	            newDeletionFinal = newDeletion;
	            
	            var deletionIndex = context.simpledb.botleveldata.oldusers.indexOf(newDeletionFinal);
	            if(deletionIndex > -1){
	                context.simpledb.botleveldata.oldusers.splice(deletionIndex, 1);
	                context.sendResponse('Successfully deleted *' + newDeletionFinal + '* from the known users list.\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	            else{
	                context.sendResponse('Error: *' + newDeletionFinal + '* is an unknown user. User names are CaSe SeNsItIvE.\n>_I am a bot. This action was performed automagically._');
	            }
	            
	                    
	                }else{
	                    context.sendResponse('Error: Can\'t parse command. Correct syntax:\n`[rmKnownUser] "<user_handle (@)>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automatically!_');
	            }
	        }
	        
	        else if(event.message === '[getKnownUsers]'){
	            if(event.senderobj.subdisplay === 'kaleb418'){
	                for(r = 0; r < context.simpledb.botleveldata.oldusers.length; r++){
	                    if(context.simpledb.botleveldata.oldusers[r] !== ''){
	                        if(makeNewKnownUsers === undefined){
	                            makeNewKnownUsers = [context.simpledb.botleveldata.oldusers[r]];
	                        }else{
	                            makeNewKnownUsers.push(context.simpledb.botleveldata.oldusers[r]);
	                        }
	                    }else{
	                        
	                    }
	                }
	                
	                for(k = 0; k < makeNewKnownUsers.length; k++){
	                    if(makeNewKnownUsers[k] !== null){
	                        toMakeKnownUsers = toMakeKnownUsers + makeNewKnownUsers[k] + '\n\n>';
	                    }else{
	                        makeNewKnownUsers.splice(k, 1);
	                    }
	                }
	                context.simpledb.botleveldata.oldusers = makeNewKnownUsers;
	                toMakeKnownUsers = toMakeKnownUsers;
	                
	                context.sendResponse('_Listing known users..._\n\n' + toMakeKnownUsers.substring(0, (toMakeKnownUsers.length - 3)) + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                context.sendResponse('Error: Incorrect Permissions.\n>_I am a bot. This action was performed automatically!_');
	            }
	        }
	        /*else if((event.message) && (isNewUser() === true)){
	            context.sendResponse('Hello, and welcome to the Lifeboat Trainees Program! I will be your guide as you learn what will be expected of you during your time as a trainee. Please wait for someone to talk to you, it shouldn\'t take to long.');
	        }*/
	        else{
	            context.sendResponse('Sorry, I don\'t understand! Please check for typos in your message, or don\'t use "[" at the beginning of your message. Alternatively, you can try `[help]` for me to help further.\n>_I am a bot. This action was performed automagically!_');
	        }
	        // END OF '[' MSGS
	        
	        }else{
	        //var notNewUsers = context.simpledb.botleveldata.oldusers;
	        for(g = 0; g < context.simpledb.botleveldata.oldusers.length; g++){
                if(event.senderobj.subdisplay === context.simpledb.botleveldata.oldusers[g]){
                    isNewUserVariable = false;
                    var stillGoing = false;
                    break;
                }else{
                    var stillGoing = true;
                }
	        }
	        if(stillGoing === true){
	            isNewUserVariable = true;
	        }else{
	            
	        }
	        if(isNewUserVariable === true){
	            var addOldUser = event.senderobj.subdisplay;
	            var asdfg = context.simpledb.botleveldata.oldusers;
	            if(addOldUser !== null || addOldUser !== 'null'){
	            asdfg.push(addOldUser);
	            }else{
	                
	            }
	            context.simpledb.botleveldata.oldusers = asdfg;
	            context.sendResponse('Hello ' + event.senderobj.display + ', and welcome to the Lifeboat Trainees Program! I will be your guide as you learn what will be expected of you during your time as a trainee. Please wait for someone to talk to you, it shouldn\'t take too long.\n>_I am a bot. This action was performed automagically!_');
	    	}else{
	            
	        }
	        }
	        
	        }
	        
	    }
	    
	    /*function isNewUser(){
	        var newuser = context.simpledb.roomleveldata.isnewuser;
	        if(!newuser){
	            context.simpledb.roomleveldata.isnewuser = true;
	            return true;
	        }else{
	            return false;
	        }
	    }*/

	    function EventHandler(context, event) {
	        
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        
	        var traineeToEditObj = JSON.parse(event.dbval);
	        var currentTraineeName = traineeToEditObj.name;
	        var currentTraineeIGN = traineeToEditObj.IGN;
	        var currentTraineeKnownIPs = traineeToEditObj.knownIPs
	        context.sendResponse(traineeToEditObj.name);
	        
	    }
	
	    function DbPutHandler(context, event) {
	        
	    }

	    