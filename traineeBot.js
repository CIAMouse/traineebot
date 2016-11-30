var min = 95;
var max = 100;
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
var traineeToEditFinal = '';
var editToAddFinal = '';
var thingToEditFinal = '';
var thingToDBValueCheck = '';
var makeList = '';
var errorIsNotTrainee = true;
var traineeToGetInfoOf = '';
var traineeAdder = '';
var makeTagList = '';
var traineeToSearchFor = '';
var isTrainee = false;
var makeTagNeeded = '';
var tagToAdd = '';
var badIP = '';
var testForRealIP = '';
var checkedAndBadIP = false;
var badIPAlreadyUsed = false;

//    <><><> permissionNodes <><><>

var users = {
    
    ante: {
        permissionNode: 'regMod'
    },
    antmasterj: {
        permissionNode: 'regMod'
    },
    areya_sunshine: {
        permissionNode: 'regMod'
    },
    bettyslays: {
        permissionNode: 'regMod'
    },
    blueboltz: {
        permissionNode: 'regMod'
    },
    brandonvalencia: {
        permissionNode: 'regMod'
    },
    brendini_007: {
        permissionNode: 'regMod'
    },
    bruhitzzlandon: {
        permissionNode: 'regMod'
    },
    captainlight22: {
        permissionNode: 'regMod'
    },
    ciamouse: {
        permissionNode: 'leadMod'
    },
    cookieeatemma: {
        permissionNode: 'regMod'
    },
    coolbro458: {
        permissionNode: 'regMod'
    },
    coretti33: {
        permissionNode: 'regMod'
    },
    damario42: {
        permissionNode: 'regMod'
    },
    danflex: {
        permissionNode: 'regMod'
    },
    danslxys: {
        permissionNode: 'regMod'
    },
    darthknight360: {
        permissionNode: 'regMod'
    },
    derpyclause: {
        permissionNode: 'regMod'
    },
    diamondav: {
        permissionNode: 'regMod'
    },
    diamondqueen105: {
        permissionNode: 'regMod'
    },
    djpips: {
        permissionNode: 'regMod'
    },
    dogcatdogcat4: {
        permissionNode: 'regMod'
    },
    eldesttoast: {
        permissionNode: 'regMod'
    },
    frostaurawolf_: {
        permissionNode: 'regMod'
    },
    gabby: {
        permissionNode: 'regMod'
    },
    galactic_storm: {
        permissionNode: 'regMod'
    },
    glisss: {
        permissionNode: 'regMod'
    },
    handyholly: {
        permissionNode: 'regMod'
    },
    hartbraker2003: {
        permissionNode: 'regMod'
    },
    helpful_wolf: {
        permissionNode: 'regMod'
    },
    hypeze: {
        permissionNode: 'regMod'
    },
    infinitefrost: {
        permissionNode: 'regMod'
    },
    itskylo: {
        permissionNode: 'regMod'
    },
    j_gizzle_135: {
        permissionNode: 'regMod'
    },
    jake5632: {
        permissionNode: 'regMod'
    },
    jiselleangeles: {
        permissionNode: 'leadMod'
    },
    kaleb418: {
        permissionNode: 'leadMod'
    },
    kurtroyle: {
        permissionNode: 'regMod'
    },
    legomite: {
        permissionNode: 'regMod'
    },
    lerondoesgaming: {
        permissionNode: 'regMod'
    },
    libby: {
        permissionNode: 'regMod'
    },
    lifeboat: {
        permissionNode: 'leadMod'
    },
    lizbeth: {
        permissionNode: 'regMod'
    },
    lukehoffman: {
        permissionNode: 'leadMod'
    },
    lulucrxftinq: {
        permissionNode: 'regMod'
    },
    meh1285: {
        permissionNode: 'regMod'
    },
    micah214: {
        permissionNode: 'regMod'
    },
    milescholly21: {
        permissionNode: 'regMod'
    },
    narwhalslovei: {
        permissionNode: 'regMod'
    },
    nevershoutbearr: {
        permissionNode: 'regMod'
    },
    paulchenhd: {
        permissionNode: 'regMod'
    },
    rosiemc: {
        permissionNode: 'regMod'
    },
    sashasparkle: {
        permissionNode: 'regMod'
    },
    shinyx123: {
        permissionNode: 'regMod'
    },
    sircometz: {
        permissionNode: 'regMod'
    },
    sparklesb: {
        permissionNode: 'regMod'
    },
    spencersteiner: {
        permissionNode: 'leadMod'
    },
    stephanie: {
        permissionNode: 'leadMod'
    },
    swaggeddiamond80: {
        permissionNode: 'regMod'
    },
    tdehaney: {
        permissionNode: 'regMod'
    },
    thefancypig: {
        permissionNode: 'regMod'
    },
    thenerdygamer: {
        permissionNode: 'regMod'
    },
    traineehelper: {
        permissionNode: 'leadMod'
    },
    truffledor: {
        permissionNode: 'regMod'
    },
    tyler989: {
        permissionNode: 'regMod'
    },
    ultramarine: {
        permissionNode: 'regMod'
    },
    veraqz: {
        permissionNode: 'regMod'
    },
    woobix: {
        permissionNode: 'regMod'
    },
    xfacelessraider: {
        permissionNode: 'regMod'
    },
    xkatethesavage: {
        permissionNode: 'regMod'
    },
    yetii: {
        permissionNode: 'regMod'
    },
    yuriplaysmcpeyt: {
        permissionNode: 'regMod'
    },
    ziqtheman: {
        permissionNode: 'regMod'
    },
    zombieslayer124: {
        permissionNode: 'regMod'
    }
    
    
};


function getPermNode(user){
   var beans = users[user];
   return beans.permissionNode;
}
function checkPerms(handle){
    try{
       getPermNode(handle);
       resultOfPermCheck = getPermNode(handle);
    }
    catch (e){
        resultOfPermCheck = 'fail';
        
    }
}

function permError(){
    if(resultOfPermCheck === 'fail'){
        resultOfPermCheck = 'defaultUser';
    }else{
        
    }
    context.sendResponse(':warning: Error: Incorrect Permissions. Your permission node is *' + resultOfPermCheck + '*. Please contact KaIeb if you think this is in error.\n>_I am a bot. This action was performed automatically._');
    
}

function editTraineeSyntaxError(){
    context.sendResponse('Error: Can\'t parse the command. Correct Syntax:\n`[editTrainee] "<trainee-name>" "<name/IGN/knownIPs>" "<text>"`\n>_I am a bot. This action was performed automagically!_');
}
        
        function MessageHandler(context, event) {
            checkPerms(event.senderobj.subdisplay);
	        if(event.message !== undefined){
	        if (event.message[0] === '['){
	            
	            
	        
	            if(event.message.toLowerCase() === '[test]'){
	                /*context.simpledb.botleveldata.timesused = 0;
	                context.simpledb.botleveldata.timestraineeused = 0;
	                context.simpledb.botleveldata.timesmodused = 0;*/
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Test successful! Message handler online!\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	            // ------------------------
	            else if((event.message.toLowerCase() === '[help]')||(event.message.toLowerCase() === '[info]')){
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Hello ' + event.senderobj.display + '. Glad I could help. My name is Trainee Helper, and I am a bot. My job is to help you learn more about the trainee team. To get started, click on my name, then *Direct Message*, and send me `[menu]`.\n*This bot was created by @kaleb418*\n>_I am a bot. This action was performed automagically!_');
	            }
	        // ------------------------
	            else if(event.message.toLowerCase() === '[menu]'){
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('_Showing menu..._\n\n*Type the command shown in red for each article.*\n\nGetting Started...`[start]`\nMenu... `[menu]`\nCommands...`[tools]`\nChannel Guide...`[channels]`\nVideo...`[t-vid]`\nAdministration...`[admins]`\n>_I am a bot. This action was performed automagically!_');
	            }
	            // ------------------------
	            
	            else if(event.message.toLowerCase() === '[t-vid]'){
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Please watch this entertaining video for more info! https://www.youtube.com/watch?v=Butvl6MzG50&feature=youtu.be');
	            }
	        // ------------------------
	            else if (event.message.toLowerCase() === '[tools]'){
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('_Showing mod tools..._\n\n*Please note:* Trainees do *NOT* have access to these tools; they are here for you to learn them and know how to use them for when you graduate.\n\n`/lbban` - The main moderator command. Follow `/lbban` with `<player> <time-in-minutes|skin|warn> [reason (optional)]`. For example, if I were to ban myself (elite041802) for 15 minutes for reason: hacking, I would use `/lbban elite041802 15 Hacking`.\n\n`/lbban <player> skin` - Replaces a players current skin with its Alex or Steve counterparts.\n\n`/lbban <player> warn` - Warns the player that they are using inappropriate conduct and mutes them for five minutes.\n\n`/mod fly` - Toggles invisibility and flying ability.\n\n`/separate <player1> <player2>` - Bounces the two specified players back from each other and prevents them from seeing each other\'s chat messages.\n\n`/move <player>` - Teleports you to the specified player.\n\n>_I am a bot. This action was performed automagically!_');
	            }
	        // ------------------------
	        else if (event.message.toLowerCase() === '[admins]'){
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing admins..._\n\nLuke Hoffman (@luke_hoffman)\nJiselle Angeles (@ramennoodles)\nKaleb Wasmuth (@kaleb418)\nDave Diaz (@ciamouse)\nSpencer Steiner (@spencersteiner)\n\n *If you have any questions, feel free to DM any of these people, or any other official moderator.*\n>_I am a bot. This action was performed automagically!_');
	            
	        }
	        // ------------------------
	        else if(event.message === '[getMyPerm]'){
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                checkPerms(event.senderobj.subdisplay);
	                if(resultOfPermCheck === 'fail'){
	                    resultOfPermCheck = 'defaultUser';
	                }else{
	                    
	                }
	                context.sendResponse('Your permission node: *' + resultOfPermCheck + '*');
	        }
	        // ------------------------
	        
	        else if(event.message.toLowerCase() === '[start-3]'){
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 3 of 3 in \'start\'..._\n\nAnd, last but not least, have fun! We offer an in-game tag `[Crew]` for all trainees, direct message @ciamouse or @kaleb418 your IGN (gamertag) to get it added. When (and if) the moderators and staff members feel you are ready to become a full moderator, you will be processed into a member of our team. For now, the only extra command you have is `/d`.\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[start-2]'){
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 2 of 3 in \'start\'..._\n\nAfter that, let\'s learn the basics of Slack, our chatting application. Here are some links to help you get started:\nhttps://get.slack.help/hc/en-us/articles/218080037-Getting-started-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626328-Onboarding-checklist-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626358-Cheat-sheet-for-basics-and-shortcuts\n\n*To continue with the introduction, direct message me* `[start-3]` *.*\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[start]'){
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 1 of 3 in \'start\'..._\n\nHey there! I would like to welcome you to a program that you will be involved in for the next 1-3 weeks of your Lifeboat experience. Here at Lifeboat, we strive to provide the best server experience possible. We have a player base of around 8 million people, ranging from very young children to adults and parents. We have over 100 different servers, and over 7 gamemodes to choose from. We are the largest *Minecraft: Pocket Edition* server community, and have been the largest Minecraft network community above all Minecraft servers, PE and PC. Of course, with this huge player fanbase, there comes a huge responsibility. Part of that responsibility is making sure our players are enjoying their time on our servers, and aren\'t experiencing problems. Thus we introduced moderators to our servers.\n\nSomething we must be exceptionally clear on: Moderators do *NOT* exist to boss players around. They do not exist to tell players what to do. They do not exist to make a Lifeboat player\'s experience miserable. They are our line of defense against players who refuse to follow rules. Another thing we try to tell our moderators often is that we must *always* warn with correction before punishment. What good is punishing a player if they don\'t learn anything? We strive to verbally warn and correct a player when they are breaking our rules, so that they learn from their mistakes. Moderator tools are only necessary when a player defies a moderator\'s request to play by the rules of our servers. Then, and only then, are we to use the necessary force, and only in incremental amounts, usually starting with a mute, then working the way up to a 10 minute ban, and so on, if the player refuses to obey after the mute. However, a moderator should never be afraid to use his or her tools at their disposal. If a player continously disobeys correction, we must act according to the severity of the punishment. There are two exceptions to this rule: Hacking and inappropriate names. If you encounter a hacker or a user with a swear word in his name, please ban him for a full day (/lbban <player> 1440), and report him in #report-desk.\n\nThis was a brief introduction to how our moderators operate, please direct message any moderator or staff member for any questions or concerns you may have. Also, if you have not already done so, please set up your profile now, before continuing.\n\n*To continue with the introduction, direct message me* `[start-2]` *.*\n>_I am a bot. This action was performed automagically!_');
            }
            // ------------------------
            else if(event.message.toLowerCase() === '[channels]'){
                context.sendResponse('*#announcements* - You cannot post in this channel. This is for staff members only to communicate important information with the trainees and/or moderators.\n*#main* - This is the main channel. Moderators and trainees can communicate about Lifeboat-related topics.\n*#chatter* - This channel is for non-work related topics. It is meant to reduce stress and have fun discussions with your fellow crew members.\n *#report-desk* - This channel is under strict watch by a bot. If you send a message in here, you will be warned by the bot. Please only send player reports in this channel. Reports *must* consist of proof (image or video), the name of the accused, along with any additional information, such as what the report is about. It will be ignored if missing any of these components. Please ignore the bot if you send a video in the channel and it warns you.\n>_I am a bot. This action was performed automagically!_');
            }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[getBotInfo]'){
	            context.sendResponse('>*Times Used:* ' + context.simpledb.botleveldata.timesused + '\n\n>*Times Trainee Commands Used:* ' + context.simpledb.botleveldata.timestraineeused + '\n\n>*Times Moderator Commands Used:* ' + context.simpledb.botleveldata.timesmodused + '\n\nThis bot was created and published by KaIeb Wasmuth. Please contact him for feature requests.\n*---*\n>_I am a bot. This action was performed automagically!_');
	        }
	        
	        // MOD COMMANDS <><><><><><><><><><><><><><><><><><><><><><><>
	        
	        // ------------------------
	        
	        else if((event.message.substring(0, 12) === '[addTrainee]')){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	           if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
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
	                     var dateToEdit = new Date();
	                     var dateToAdd = dateToEdit.toDateString();
	                     context.simpledb.botleveldata.trainees.push(newTrainee);
	                     context.simpledb.doPut(newTrainee, '{"name":"' + newTrainee + '", "IGN":"Unknown", "IP":"Unknown", "adder":"' + event.senderobj.display + '", "tag": "Unknown", "dateAdded": "' + dateToAdd + '"}');
	                     context.sendResponse(':heavy_plus_sign: Added *' + newTrainee + '* to the trainee list!\n>_I am a bot. This action was performed automagically!_');
	                    }
	                    else{
	                        context.sendResponse(':warning: Error: Trainee name already in use.\n>_I am a bot. This action was performed automagically!_');
	                    }
	               }
	               else{
	                   context.sendResponse(':warning: Error: Can\'t parse the command. Correct syntax:\n`[addTrainee] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	               }
	               
	               }else{
	                permError();
	            }
	        }
	            
	        // ------------------------
	        else if(event.message === '[getTrainees]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){

	            traineeList = context.simpledb.botleveldata.trainees;
	            for (f = 0; f < traineeList.length; f++){
	                if(traineeList[f] !== ''){
	                 makeListVar = makeListVar + traineeList[f] + '\n\n>';
	                }else{
	                    
	                }
	            }

	            context.sendResponse('_Listing trainees..._\n\n' + makeListVar.substring(0, makeListVar.length - 2) + '*---*\n>_I am a bot. This action was performed automagically!_');

	        }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message.substring(0,11) === '[rmTrainee]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
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
	                context.sendResponse(':heavy_minus_sign: Successfully deleted *' + newDeletionFinal + '*.\n>_I am a bot. This action was performed automagically!_');
	            }
	            else{
	                context.sendResponse(':warning: Error: *' + newDeletionFinal + '* is an unknown trainee. Trainee names are CaSe SeNsItIvE. Try `[getTrainees]` to get the up-to-date list of trainees.\n>_I am a bot. This action was performed automagically._');
	            }
	            }
	            else{
	                context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[rmTrainee] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	            }
	            
	        }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message.substring(0, 16) === '[getTraineeInfo]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
	            if((event.message[16] === ' ') && (event.message[17] === '"')){
	                
	                for(t = 18; t < event.message.length; t++){
	                    
	                    if(event.message[t] !== '"'){
	                        makeList = makeList + event.message[t];
	                    }else{
	                        lastKnownComma = t;
	                        makeList = makeList;
	                        break;
	                    }
	                    
	                }
	                
	                for(h = 0; h < context.simpledb.botleveldata.trainees.length; h++){
	                    
	                    if(makeList === context.simpledb.botleveldata.trainees[h]){
	                        errorIsNotTrainee = false;
	                        break;
	                    }else{
	                        errorIsNotTrainee = true;
	                    }
	                    
	                }
	                
	                if(errorIsNotTrainee === false){
                            if(event.message.substring(lastKnownComma + 2, lastKnownComma + 5) === '-h'){
                            resultOfPermCheck = 'regMod';
	                        }else{
	                            
	                        }
	                        thingToDBValueCheck = 'getTraineeInfo';
	                        traineeToGetInfoOf = makeList;
	                        context.simpledb.doGet(makeList);
	                   
	                }else{
	                    context.sendResponse(':warning: Error: *' + makeList + '* is an unknown trainee. Trainee names are CaSe SeNsItIvE. Try `[getTrainees]` to get the up-to-date list of trainees.\n>_I am a bot. This action was performed automagically._');
	                }
	                
	            }else{
	                context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[getTraineeInfo] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	            }
	        }else{
	                permError();
	            }
	        }
	        // ------------------------
	        
	        else if(event.message.substring(0, 10) === '[addBadIP]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[10] === ' ') && (event.message[11] === '"')){
	                    makeListVar = '';
	                    
	                    for(var e = 12; e < event.message.length; e++){
	                        if(event.message[e] !== '"'){
	                            makeListVar = makeListVar + event.message[e];
	                        }else{
	                            makeListVar = makeListVar;
	                            break;
	                        }
	                    }
	                    
	                    badIP = makeListVar;
	                    makeListVar = '';
	                    
	                    for(var d = 0; d < badIP.length; d++){
	                        if(badIP[d] !== '.'){
	                            makeListVar = makeListVar + badIP[d];
	                        }else{
	                            
	                        }
	                    }
	                    
	                    testForRealIP = makeListVar;
	                    
	                    makeListVar = '';
	                    
	                    for(var j = 0; j < context.simpledb.botleveldata.badips.length; j++){
	                        if(badIP === context.simpledb.botleveldata.badips[j]){
	                            badIPAlreadyUsed = true;
	                            break;
	                        }else{
	                            badIPAlreadyUsed = false;
	                        }
	                    }
	                    if(badIPAlreadyUsed !== true){
	                        if(isNaN(testForRealIP) === false){
	                            var badIPList = context.simpledb.botleveldata.badips;
	                            badIPList.push(badIP);
	                            context.simpledb.botleveldata.badips = badIPList;
	                            context.sendResponse(':heavy_plus_sign: Successfully added *' + badIP + '* to the blacklisted IP list.\n>_I am a bot. This action was performed automagically!_');
	                        }else{
	                            context.sendResponse(':warning: Error: *' + badIP + '* is not a valid IP address.\n>_I am a bot. This action was performed automagically!_');
	                        }
	                    }else{
	                        context.sendResponse(':warning: Error: IP is already a blacklisted IP.\n>_I am a bot. This action was performed automagically!_');
	                    }
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[addBadIP] "<IP>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        
	        else if(event.message === '[clearBadIPs]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                context.simpledb.botleveldata.badips = [];
	                context.sendResponse(':heavy_minus_sign: Successfully cleared the blacklisted IP list.\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        
	        else if(event.message.substring(0, 9) === '[checkIP]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[9] === ' ') && (event.message[10] === '"')){
	                    makeListVar = '';
	                    for(var g = 11; g < event.message.length; g++){
	                        if(event.message[g] !== '"'){
	                            makeListVar = makeListVar + event.message[g];
	                        }else{
	                            makeListVar = makeListVar;
	                            break;
	                        }
	                    }
	                    
	                    var badIPToCheck = makeListVar;
	                    
	                    makeListVar = '';
	                    
	                    for(var d = 0; d < badIPToCheck.length; d++){
	                        if(badIPToCheck[d] !== '.'){
	                            makeListVar = makeListVar + badIPToCheck[d];
	                        }else{
	                            
	                        }
	                    }
	                    
	                    testForRealIP = makeListVar;
	                    
	                    for(var e = 0; e < context.simpledb.botleveldata.badips.length; e++){
	                        if(badIPToCheck === context.simpledb.botleveldata.badips[e]){
	                            checkedAndBadIP = true;
	                            break;
	                        }else{
	                            checkedAndBadIP = false;
	                        }
	                    }
	                    if(isNaN(testForRealIP) === false){
	                        if(checkedAndBadIP === true){
	                            context.sendResponse('Warning: The IP *' + badIPToCheck + '* is a match. Please beware users with this IP.\n>_I am a bot. This action was performed automagically!_');
	                        }else{
	                            context.sendResponse('The IP *' + badIPToCheck + '* is not a blacklisted IP.\n>_I am a bot. This action was performed automagically!_');
	                        }
	                    }else{
	                        context.sendResponse(':warning: Error: *' + badIPToCheck + '* is not a valid IP address.\n>_I am a bot. This action was performed automagically!_');
	                    }
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[checkIP] "<IP>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        
	        else if(event.message === '[clearTrainees]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                context.simpledb.botleveldata.trainees = [''];
	                context.sendResponse('Successfully cleared trainee list!\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                permError();
	            }
	        }
	        
	        
	        //   <<<<<<>>>>>>  EDIT TRAINEE BLOCK <<<<<<>>>>>>
	        // ------------------------
	        else if(event.message.substring(0,13) === '[editTrainee]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
	            if(event.message[14] === '"'){
	                var makingListAddon = '';
	                
	                
	                for(k = 15; k < event.message.length; k++){
	                    if(event.message[k] !== '"'){
	                        makingListAddon = makingListAddon + event.message[k];
	                    }else{
	                        lastKnownQuote = k;
	                        makingListAddon = makingListAddon;
	                        break;
	                    }
	                }
	                
	                traineeToEditFinal = makingListAddon;
	                
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
	                        for(r = lastKnownQuote + 3; r < event.message.length; r++){
	                            
	                            
	                            
	                            if(event.message[r] !== '"'){
	                                makingListAddon = makingListAddon + event.message[r];
	                            }else{
	                                lastKnownQuote = r;
	                                makingListAddon = makingListAddon;
	                                break;
	                            }
	                        }
	                        
	                        thingToEditFinal = makingListAddon;



	                        if((event.message[lastKnownQuote + 1] === ' ') && (event.message[lastKnownQuote + 2] === '"')){
	                            
	                            makingListAddon = '';
	                            
	                            for(u = lastKnownQuote + 3; u < event.message.length; u++){
	                                
	                                if(event.message[u] !== '"'){
	                                    makingListAddon = makingListAddon + event.message[u];
	                                }else{
	                                    lastKnownQuote = u;
	                                    makingListAddon = makingListAddon;
	                                    break;
	                                }
	                                
	                            }
	                            
	                            editToAddFinal = makingListAddon;
	                            thingToDBValueCheck = 'editTrainee';
	                            context.simpledb.doGet(traineeToEditFinal);
	                            
	                        }else{
	                            editTraineeSyntaxError();
	                        }
	                        
	                    }else{
	                        editTraineeSyntaxError();
	                    }
	                    
	                }else{
	                    context.sendResponse(':warning: Error: *' + traineeToEditFinal + '* is an unknown trainee. Please check for typos in your message, or use `[getTrainees]` to get the latest list of trainees.\n>_I am a bot. This action was performed automagically!_');
	                }
	                
	            }else{
	                editTraineeSyntaxError();
	            }
	        
	        }else{
	            permError();
	            }
	        }
	        
	        // ------------------------
	        else if(event.message === '[resetKnownUsers]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	            context.simpledb.botleveldata.oldusers = [''];
	            context.sendResponse('Reset known users list.');
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        
	        
	        else if(event.message.substring(0, 9) === '[giveTag]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
    	        if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
	                if((event.message[9] === ' ') && (event.message[10] === '"')){
	                    for(var c = 11; c < event.message.length; c++){
	                    
	                        if(event.message[c] !== '"'){
	                            makeTagList = makeTagList + event.message[c];
	                        }else{
	                            var lastKnownApost = c;
	                            makeTagList = makeTagList;
	                            break;
	                        }
	                    
	                    }
	                    if((event.message[lastKnownApost + 1] === ' ') && (event.message[lastKnownApost + 2] === '"')){
	                        for(var aa = lastKnownApost + 3; aa < event.message.length; aa++){
	                            if(event.message[aa] !== '"'){
	                                makeTagNeeded = makeTagNeeded + event.message[aa];
	                            }else{
	                                makeTagNeeded = makeTagNeeded;
	                                break;
	                            }
	                        }
	                    }else{
	                        context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[giveTag] "<trainee-name>" "<active/away/awol>"`\n>_I am a bot. This action was performed automagically!_');
	                    }
	                    
	                    
	                    tagToAdd = makeTagNeeded;
	                    traineeToSearchFor = makeTagList;
	                    
	                    for(var ab = 0; ab < context.simpledb.botleveldata.trainees.length; ab++){
	                        if(traineeToSearchFor !== context.simpledb.botleveldata.trainees[ab]){
	                            isTrainee = false;
	                        }else{
	                            isTrainee = true;
	                            break;
	                        }
	                    }
	                    
	                    if(isTrainee === true){
	                        thingToDBValueCheck = 'giveTag';
	                        context.simpledb.doGet(traineeToSearchFor);
	                    }else{
	                        context.sendResponse('Error: *' + traineeToSearchFor + '* is an unknown trainee. Please check for typos in your message, or use `[getTrainees]` to get the latest list of trainees.\n>_I am a bot. This action was performed automagically!_');
	                    }
	                    
	                    
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[giveTag] "<trainee-name>" "<active/away/mia (missing-in-action)>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }
	        
	        
	        // ------------------------
	        
	        else if(event.message.substring(0, 13) === '[rmKnownUser]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
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
	                context.sendResponse(':warning: Error: *' + newDeletionFinal + '* is an unknown user. User names are CaSe SeNsItIvE.\n>_I am a bot. This action was performed automagically._');
	            }
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[rmKnownUser] "<user_handle (@)>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message === '[testFeature]'){
	            if(event.senderobj.subdisplay === 'kaleb418'){
	                
	            }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message === '[getKnownUsers]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
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
	                permError();
	            }
	        }
	        
	        // ------------------------
	        
	        else{
	            context.sendResponse('Sorry, I don\'t understand! Please check for typos in your message, or don\'t use "[" at the beginning of your message. Alternatively, you can try `[help]` for me to help further.\n>_I am a bot. This action was performed automagically!_');
	        }
	        }else{
                // END OF '[' MSGS
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

	    function EventHandler(context, event) {
	        
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        var traineeToEditObj = JSON.parse(event.dbval);
	        var traineeAdder = traineeToEditObj.adder;
	        
	        if(thingToDBValueCheck === 'editTrainee'){
	   
	            var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            if(traineeAddedDate !== undefined){
	            if(thingToEditFinal === 'name'){
	                var oldName = currentTraineeName;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + editToAddFinal + '", "IGN":"' + currentTraineeIGN + '", "IP":"' + currentTraineeIP + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '", "dateAdded": "' + traineeAddedDate + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s name from *' + oldName + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IGN'){
	                var oldIGN = currentTraineeIGN;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + currentTraineeName + '", "IGN":"' + editToAddFinal + '", "IP":"' + currentTraineeIP + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '", "dateAdded": "' + traineeAddedDate + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IGN from *' + oldIGN + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IP'){
	                if(resultOfPermCheck === 'leadMod'){
	                var oldIP = currentTraineeIP;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + currentTraineeName + '", "IGN":"' + currentTraineeIGN + '", "IP":"' + editToAddFinal + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '", "dateAdded": "' + traineeAddedDate + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IP from *' + oldIP + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	                }else{
	                    context.sendResponse(':warning: Error: Incorrect Permissions.\n>_I am a bot. This action was performed automatically!_');
	                }
	            }else{
	                context.sendResponse(':warning: Error: Unknown subcommand. Please specify a subcommand (name/IGN/IP).\n>_I am a bot. This action was performed automatically!_');
	            }
	            }else{
	                if(thingToEditFinal === 'name'){
	                var oldName = currentTraineeName;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + editToAddFinal + '", "IGN":"' + currentTraineeIGN + '", "IP":"' + currentTraineeIP + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s name from *' + oldName + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IGN'){
	                var oldIGN = currentTraineeIGN;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + currentTraineeName + '", "IGN":"' + editToAddFinal + '", "IP":"' + currentTraineeIP + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IGN from *' + oldIGN + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IP'){
	                if(resultOfPermCheck === 'leadMod'){
	                var oldIP = currentTraineeIP;
	                context.simpledb.doPut(traineeToEditFinal, '{"name":"' + currentTraineeName + '", "IGN":"' + currentTraineeIGN + '", "IP":"' + editToAddFinal + '", "adder":"' + traineeAdder + '", "tag": "' + currentTraineeTag + '"}');
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IP from *' + oldIP + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	                }else{
	                    context.sendResponse(':warning: Error: Incorrect Permissions.\n>_I am a bot. This action was performed automatically!_');
	                }
	            }else{
	                context.sendResponse(':warning: Error: Unknown subcommand. Please specify a subcommand (name/IGN/IP).\n>_I am a bot. This action was performed automatically!_');
	            }
	            }
	        }
	        
	        else if(thingToDBValueCheck === 'getTraineeInfo'){
	            
	            var traineeToEditObj = JSON.parse(event.dbval);
	            var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeTag = '`' + traineeToEditObj.tag + '`';
	            var currentTraineeIP = traineeToEditObj.IP;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            
	            if(currentTraineeTag === '`Unknown`'){
	                currentTraineeTag = '';
	            }else{
	                
	            }
	            
	            var thisOne = context.simpledb.botleveldata.badips;
	            for(var o = 0; o < thisOne.length; o++){
	                if(currentTraineeIP === thisOne[o]){
	                    checkedAndBadIP = true;
	                    break;
	                }else{
	                    checkedAndBadIP = false;
	                }
	            }
	            
	            
	            if(resultOfPermCheck === 'leadMod'){
	                currentTraineeIP = traineeToEditObj.IP;
	            }
	            else if(traineeToEditObj.IP === "Unknown"){
	                currentTraineeIP = traineeToEditObj.IP;
	            }
	            else{
	                makeList = '';
	                for(g = 0; g < traineeToEditObj.IP.length; g++){
	                    
	                    if(traineeToEditObj.IP[g] === '.'){
	                        makeList = makeList + '.';
	                    }else{
	                        makeList = makeList + '*'
	                    }
	                    
	                }
	                makeList = makeList;
	                currentTraineeIP = makeList;
	            }
	            
	            if(traineeAddedDate !== undefined){
	            
	                if(checkedAndBadIP === false){
	                    context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	                }else{
	                    if(resultOfPermCheck === 'leadMod'){
	                        context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n\n*Warning: The IP of this trainee (' + currentTraineeIP + ') matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n' +'\n*---*\n>_I am a bot. This action was performed automagically!_');
	                    }else{
	                        context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n\n*Warning: The IP of this trainee matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n' +'\n*---*\n>_I am a bot. This action was performed automagically!_');
	                    }
	                }
	            
	            }else{
	                
	                if(checkedAndBadIP === false){
	                    context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + '_' + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	                }else{
	                    if(resultOfPermCheck === 'leadMod'){
	                        context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + '_' + '\n\n*Warning: The IP of this trainee (' + currentTraineeIP + ') matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n' +'\n*---*\n>_I am a bot. This action was performed automagically!_');
	                    }else{
	                        context.sendResponse('>*Trainee Name:* ' + traineeToGetInfoOf + '  ' + currentTraineeTag + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + '_' + '\n\n*Warning: The IP of this trainee matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n' +'\n*---*\n>_I am a bot. This action was performed automagically!_');
	                    }
	                }
	            }
	            
	            
	        }
	        
	        else if(thingToDBValueCheck === 'giveTag'){
	            var traineeToEditObj = JSON.parse(event.dbval);
	            var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            if(traineeAddedDate !== undefined){
	                if(tagToAdd === 'active'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Active", "dateAdded": "' + traineeAddedDate + '"}');
	                    context.sendResponse('Successfully added the tag *Active* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else if(tagToAdd === 'away'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Excused Absence", "dateAdded": "' + traineeAddedDate + '"}');
	                    context.sendResponse('Successfully added the tag *Excused Absence* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else if(tagToAdd === 'mia'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Inactive", "dateAdded": "' + traineeAddedDate + '"}');
	                    context.sendResponse('Successfully added the tag *Inactive* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else{
	                    context.sendResponse('Error: Unknown tag. Correct Syntax:\n`[giveTag] "<trainee-name>" "<active/away/mia (missing-in-action)>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                if(tagToAdd === 'active'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Active"}');
	                    context.sendResponse('Successfully added the tag *Active* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else if(tagToAdd === 'away'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Excused Absence"}');
	                    context.sendResponse('Successfully added the tag *Excused Absence* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else if(tagToAdd === 'mia'){
	                    context.simpledb.doPut(traineeToSearchFor, '{"name": "' + currentTraineeName + '", "IGN": "' + currentTraineeIGN + '", "IP": "' + currentTraineeIP + '", "adder": "' + traineeAdder + '", "tag": "Inactive"}');
	                    context.sendResponse('Successfully added the tag *Inactive* to *' + traineeToSearchFor + '*.\n>_I am a bot. This action was performed automagically!_');
	                }
	                else{
	                    context.sendResponse('Error: Unknown tag. Correct Syntax:\n`[giveTag] "<trainee-name>" "<active/away/mia (missing-in-action)>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }
	            
	        }
	        else{
	            
	        }
	    }
	
	    function DbPutHandler(context, event) {

	    }
