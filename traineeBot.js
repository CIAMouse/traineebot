const version = '1.1';
const versionMessage = 'Disabled [overAddTrainee]';

//   © Kaleb Wasmuth, 2016.
//   All Rights Reserved.
//   This script was originally designed for use in lifeboatcrew.slack.com, for Lifeboat Network™

var fixKnownUsers = [];
var makeNewKnownUsers = [];
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
var currentLogs;
var commentToAdd;

//   Comment Prototype
function Comment(text, sender, dateSent, isHidden, commentID){
    //   Properties
    this.text = text;
    this.sender = sender;
    this.dateSent = dateSent;
    this.isHidden = isHidden;
    this.commentID = commentID;
}

function Trainee(name, IGN, IP, adder, tag, dateAdded, lastUpdated, isOfficial, comments, commentNumber, persVersion){
    this.name = name,
    this.IGN = IGN,
    this.IP = IP,
    this.adder = adder,
    this.tag = tag,
    this.dateAdded = dateAdded,
    this.lastUpdated = lastUpdated,
    this.isOfficial = isOfficial,
    this.comments = comments,
    this.commentNumber = commentNumber
    this.persVersion = persVersion;
}

//    <><><> permissionNodes <><><>
var users = {
    bouncyjeffer: {
	    permissionNode: 'regMod'  
    },
    brandonvalencia: {
        permissionNode: 'regMod'
    },
    bruhitzzlandon: {
        permissionNode: 'regMod'
    },
    ciamouse: {
        permissionNode: 'leadMod'
    },
    damario42: {
        permissionNode: 'regMod'
    },
    darthknight360: {
	    permissionNode: 'regMod'
    },
    delta4x:{
        permissionNode: 'regMod'
    },
    diamondav: {
        permissionNode: 'regMod'
    },
    dogcatdogcat4: {
        permissionNode: 'regMod'
    },
    dudeitz_holly: {
        permissionNode: 'regMod'
    },
    frost1161: {
        permissionNode: 'regMod'
    },
    galactic_storm: {
        permissionNode: 'regMod'
    },
    glisss:{
        permissionNode: 'regMod'
    },
    jacob_gates: {
        permissionNode: 'regMod'
    },
    kaleb418:{
        permissionNode: 'leadMod'
    },
    sashasparkle:{
        permissionNode: 'regMod'
    },
    sparklesb: {
        permissionNode: 'regMod'
    },
    tdehaney:{
        permissionNode: 'regMod'
    },
    truepenguin:{
        permissionNode: 'regMod'
    },
    ultramarine: {
        permissionNode: 'regMod'
    },
    yetii: {
        permissionNode: 'regMod'
    },
    ziqtheman: {
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
function getUpdatedDate(dateObj){
    if(dateObj.getMinutes() < 10){
        minutes = '0' + (dateObj.getMinutes()).toString();
    }else{
        minutes = (dateObj.getMinutes()).toString();
    }
    var dateUpdated = (dateObj.getMonth() + 1) + '/' + (dateObj.getDate()) + '/' + (dateObj.getFullYear()) + ' ' + (dateObj.getHours() + 1) + ':' + minutes;
    return dateUpdated;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
function unknownTraineeError(traineeName){
    context.sendResponse(':warning: Error: *' + traineeName + '* is an unknown trainee. Trainee names are CaSe SeNsItIvE. Try `[getTrainees]` to get the up-to-date list of trainees.\n>_I am a bot. This action was performed automagically._');
}
        function MessageHandler(context, event) {
            checkPerms(event.senderobj.subdisplay);
	        if(event.message !== undefined){
	        if (event.message[0] === '['){
	            
	            var isTesting = context.simpledb.botleveldata.isTesting;
	            function updateLogList(){
	                if(!isTesting || (event.senderobj !== 'kaleb418')){
	                    // Make a log list WITHOUT the update logs
	                    makeLogListVar = [];
	                    for(var ab in context.simpledb.botleveldata.logs){
	                        if(context.simpledb.botleveldata.logs[ab].substring(0, 10) !== '@undefined'){
	                        makeLogListVar.push(context.simpledb.botleveldata.logs[ab]);
	                        }else{
	                            
	                        }
	                    }
	                    // Define variables
                        var currentLogs = makeLogListVar;
                        var userForLog = event.senderobj.subdisplay;
                        var dateForLog = new Date();
                        var msgForLog = event.message;
			var maximumLogCount = 100
                        // Add log to front
                        currentLogs.unshift('@' + userForLog + ' invoked the bot at ' + (dateForLog.getMonth() + 1) + '/' + (dateForLog.getDay() + 1) + '/' + (dateForLog.getFullYear()) + ' using the message *' + msgForLog + '*.');
                        // Remove 101st log if there are 101 logs
                        if(currentLogs.length > maximumLogCount){
                            currentLogs.splice(currentLogs.length - 1, 1);
                        }else{
                            
                        }
                        // Double check for undefined user
                        if(userForLog !== undefined){
                            context.simpledb.botleveldata.logs = currentLogs;
                        }else{
                            
                        }
	                }else{
	                    
	                }
                }
	        
	            if(event.message.toLowerCase() === '[test]'){
	                updateLogList();
	                /*context.simpledb.botleveldata.timesused = 0;
	                context.simpledb.botleveldata.timestraineeused = 0;
	                context.simpledb.botleveldata.timesmodused = 0;*/
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Test successful: No fatal errors.\n>_I am a bot. This action was performed automagically!_');
	            }
	            // ------------------------
	            else if((event.message.toLowerCase() === '[help]')||(event.message.toLowerCase() === '[info]')){
	                updateLogList();
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Hello ' + event.senderobj.display + '. Glad I could help. My name is Trainee Helper, and I am a bot. My job is to help you learn more about the trainee team. To get started, click on my name, then *Direct Message*, and send me `[menu]`.\n*This bot was created by @kaleb418*\n>_I am a bot. This action was performed automagically!_');
	            }
	        // ------------------------
	            else if(event.message.toLowerCase() === '[menu]'){
	                updateLogList();
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                   switch(resultOfPermCheck){
	                       case 'regMod': context.sendResponse('_Showing menu..._\n\n*Type the command shown in red for each article. These commands are for the regMod permission group.*\n\nGetting Started...`[start]`\nMenu... `[menu]`\nCommands...`[tools]`\nChannel Guide...`[channels]`\nVideo...`[t-vid]`\nAdministration...`[admins]`\nGet your Permission Node...`[getMyPerm]`\nGet Bot Info...`[getBotInfo]`\nAdd Trainee Profile...`[addTrainee]`\nGet Trainee List...`[getTrainees]`\nEdit Trainee Profile...`[editTrainee]`\nGet Trainee Profile...`[getTraineeInfo]`\nAdd Comment...`[comment]`\nEdit Comment...`[editComment]`\nDelete Comment...`[delComment]`\nGet Version History...`[vHistory]`\n>_I am a bot. This action was performed automagically!_');
	                           break;
	                       case 'leadMod': context.sendResponse('_Showing menu..._\n\n*Type the command shown in red for each article. These commands are for the leadMod permission group.*\n\nGetting Started...`[start]`\nMenu... `[menu]`\nCommands...`[tools]`\nChannel Guide...`[channels]`\nVideo...`[t-vid]`\nAdministration...`[admins]`\nGet your Permission Node...`[getMyPerm]`\nGet Bot Info...`[getBotInfo]`\nAdd Trainee Profile...`[addTrainee]`\nGet Trainee List...`[getTrainees]`\nEdit Trainee Profile...`[editTrainee]`\nGet Trainee Profile...`[getTraineeInfo]`\nCheck an IP...`[checkIP]`\nAdd a Bad IP...`[addBadIP]`\nClear Bad IP List...`[clearBadIPs]`\nClear Trainee List...`[clearTrainees]`\nClear Known Users List...`[resetKnownUsers]`\nRemove Known User...`[rmKnownUser]`\nRemove Trainee...`[rmTrainee]`\nSpam-Ping Everyone...`[getKnownUsers]`\nMake a Trainee Official...`[makeOfficial]`\nOverride Add Trainee...`[overAddTrainee]`\nGet Bot Logs...`[getLogs]`\nClear Bot Logs...`[clearLogs]`\nAdd Comment...`[comment]`\nEdit Comment...`[editComment]`\nDelete Comment...`[delComment]`\nGet Old Trainee Profile...`[getOldTrainee]`\nGet Version History...`[vHistory]`\n>_I am a bot. This action was performed automagically!_');
	                           break;
	                       default: context.sendResponse('_Showing menu..._\n\n*Type the command shown in red for each article. These commands are for the defaultUser permission group.*\n\nGetting Started...`[start]`\nMenu... `[menu]`\nCommands...`[tools]`\nChannel Guide...`[channels]`\nVideo...`[t-vid]`\nAdministration...`[admins]`\nGet your Permission Node...`[getMyPerm]`\nGet Bot Info...`[getBotInfo]`\n>_I am a bot. This action was performed automagically!_');
	                   }
	            }
	            // ------------------------
	            else if(event.message.toLowerCase() === '[t-vid]'){
	                updateLogList();
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('Please watch this entertaining video for more info! https://www.youtube.com/watch?v=Butvl6MzG50&feature=youtu.be');
	            }
	        // ------------------------
	            else if (event.message.toLowerCase() === '[tools]'){
	                updateLogList();
	                context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	                context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                context.sendResponse('_Showing mod tools..._\n\n*Please note:* Trainees do *NOT* have access to these tools; they are here for you to learn them and know how to use them for when you graduate.\n\n`/lbban` - The main moderator command. Follow `/lbban` with `<player> <time-in-minutes|skin|warn> [reason (optional)]`. For example, if I were to ban myself (elite041802) for 15 minutes for reason: hacking, I would use `/lbban elite041802 15 Hacking`.\n\n`/lbban <player> skin` - Replaces a players current skin with its Alex or Steve counterparts.\n\n`/lbban <player> warn` - Warns the player that they are using inappropriate conduct and mutes them for five minutes.\n\n`/mod fly` - Toggles invisibility and flying ability.\n\n`/separate <player1> <player2>` - Bounces the two specified players back from each other and prevents them from seeing each other\'s chat messages.\n\n`/move <player>` - Teleports you to the specified player.\n\n>_I am a bot. This action was performed automagically!_');
	            }
	        // ------------------------
	        else if (event.message.toLowerCase() === '[admins]'){
	            updateLogList();
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing admins..._\n\nLuke Hoffman (@luke_hoffman)\nJiselle Angeles (@ramennoodles)\nKaleb Wasmuth (@kaleb418)\nDave Diaz (@ciamouse)\nSpencer Steiner (@spencersteiner)\nJacob Gates (@jacob_gates)\nLuca Kermas (@craftyourbukkit)\n Vraj Patel (@frost1161)\n\n *If you have any questions, feel free to DM any of these people, or any other official moderator.*\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message === '[getMyPerm]'){
	            updateLogList();
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	                checkPerms(event.senderobj.subdisplay);
	                if(resultOfPermCheck === 'fail'){
	                    resultOfPermCheck = 'defaultUser';
	                }else{
	                    
	                }
	                context.sendResponse('Your permission node: *' + resultOfPermCheck + '*.\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[start-3]'){
	            updateLogList();
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 3 of 3 in \'start\'..._\n\nAnd, last but not least, please direct message @kaleb418 or @ciamouse to have your [Crew] rank added. When (and if) the moderators and staff members feel you are ready to become a full moderator, you will be processed into a member of our team. For now, the only extra command you have is `/d`.\nIn regards to reporting users, you should have an account on crew.lbsg.net for reporting players. If you do not have one, please direct message a lead moderator to have them make you one.\nAs a side note, please keep in mind that the agreement you signed and returned to a staff member is to be kept in effect until you are no longer a volunteer or employee for Hydreon, which terminates the entire agreement.\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[start-2]'){
	            updateLogList();
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 2 of 3 in \'start\'..._\n\nAfter that, let\'s learn the basics of Slack, our chatting application. Here are some links to help you get started:\nhttps://get.slack.help/hc/en-us/articles/218080037-Getting-started-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626328-Onboarding-checklist-for-new-users\nhttps://get.slack.help/hc/en-us/articles/217626358-Cheat-sheet-for-basics-and-shortcuts\n\n*To continue with the introduction, direct message me* `[start-3]` *.*\n>_I am a bot. This action was performed automagically!_');
	        }
	        // ------------------------
	        else if(event.message.toLowerCase() === '[start]'){
	            updateLogList();
	            context.simpledb.botleveldata.timestraineeused = context.simpledb.botleveldata.timestraineeused + 1;
	            context.simpledb.botleveldata.timesused = parseInt(context.simpledb.botleveldata.timesused) + 1;
	            context.sendResponse('_Showing page 1 of 3 in \'start\'..._\n\nHey there! I would like to welcome you to a program that you will be involved in for the next 1-3 weeks of your Lifeboat experience. Here at Lifeboat, we strive to provide the best server experience possible. We have a player base of around 8 million people, ranging from very young children to adults and parents. We have over 100 different servers, and over 7 gamemodes to choose from. We are the largest *Minecraft: Pocket Edition* server community, and have been the largest Minecraft network community above all Minecraft servers, PE and PC. Of course, with this huge player fanbase, there comes a huge responsibility. Part of that responsibility is making sure our players are enjoying their time on our servers, and aren\'t experiencing problems. Thus we introduced moderators to our servers.\n\nSomething we must be exceptionally clear on: Moderators do *NOT* exist to boss players around. They do not exist to tell players what to do. They do not exist to make a Lifeboat player\'s experience miserable. They are our line of defense against players who refuse to follow rules. Another thing we try to tell our moderators often is that we must *always* warn with correction before punishment. What good is punishing a player if they don\'t learn anything? We strive to verbally warn and correct a player when they are breaking our rules, so that they learn from their mistakes. Moderator tools are only necessary when a player defies a moderator\'s request to play by the rules of our servers. Then, and only then, are we to use the necessary force, and only in incremental amounts, usually starting with a mute, then working the way up to a 10 minute ban, and so on, if the player refuses to obey after the mute. However, a moderator should never be afraid to use his or her tools at their disposal. If a player continously disobeys correction, we must act according to the severity of the punishment. There are two exceptions to this rule: Hacking and inappropriate names. If you encounter a hacker or a user with a swear word in his name, please ban him for a full day (/lbban <player> 1440), and report him in #report-desk.\n\nThis was a brief introduction to how our moderators operate, please direct message any moderator or staff member for any questions or concerns you may have. Also, if you have not already done so, please set up your profile now, before continuing.\n\n*To continue with the introduction, direct message me* `[start-2]` *.*\n>_I am a bot. This action was performed automagically!_');
            }
            // ------------------------
            else if(event.message.toLowerCase() === '[channels]'){
                updateLogList();
                context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                context.sendResponse('*#announcements* - You cannot post in this channel. This is for staff members only to communicate important information with the trainees and/or moderators.\n*#trainee-crew* - This is the main channel. Moderators and trainees can communicate about Lifeboat-related topics.\n*#trainee-chatter* - This channel is for non-work related topics. It is meant to reduce stress and have fun discussions with your fellow crew members.\n>_I am a bot. This action was performed automagically!_');
            }
	        // ------------------------
	        else if(event.message === '[getBotInfo]'){
	            updateLogList();
	            context.sendResponse('>*Times Used:* ' + context.simpledb.botleveldata.timesused + '\n\n>*Times Trainee Commands Used:* ' + context.simpledb.botleveldata.timestraineeused + '\n\n>*Times Moderator Commands Used:* ' + context.simpledb.botleveldata.timesmodused + '\n\n>*Current Version:* ' + version + '\n\nThis bot was created and published by KaIeb Wasmuth. Please contact him for feature requests.\n*---*\n>_I am a bot. This action was performed automagically!_');
	        }
	        
                
                
            // MOD COMMANDS
                
                
                
	        // ------------------------
	        else if((event.message.substring(0, 12) === '[addTrainee]')){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	           if(resultOfPermCheck === 'leadMod'){
	               if((event.message[11] === ']') && (event.message[12] === ' ') && (event.message[13] === '"') && (event.message[event.message.length - 1] === '"')){
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
                            var newTraineeProfileToStringify = new Trainee("Unknown", "Unknown", "Unknown", event.senderobj.display, "Unknown", dateToAdd, getUpdatedDate(dateToEdit), "No", {}, 1, version);
                            var newTraineeProfileToAdd = JSON.stringify(newTraineeProfileToStringify);
	                        context.simpledb.doPut(newTrainee, newTraineeProfileToAdd);
                            
                            // FORMAT FOR NEW TRAINEE OBJECT
                            // (name, IGN, IP, adder, tag, dateAdded, lastUpdated, isOfficial, comments, commentNumber)
                            
                            // BACKUP TEXT FOR MAKING TRAINEE:
                            /*   '{"name":"Unknown", "IGN":"Unknown", "IP":"Unknown", "adder":"' + event.senderobj.display + '", "tag": "Unknown", "dateAdded": "' + dateToAdd + '", "isOfficial":"No", "comments":[], "commentNumber":1}'   */
                            
	                        context.sendResponse(':heavy_plus_sign: Added *' + newTrainee + '* to the trainee list!\n>_I am a bot. This action was performed automagically!_');
	                    }else{
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
	            updateLogList();
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
	            updateLogList();
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
	            if(event.message[11] === ' ' && event.message[12] === '"' && (event.message[event.message.length - 1] === '"')){
	            var deletionIndex = context.simpledb.botleveldata.trainees.indexOf(newDeletionFinal);
	            if(deletionIndex > -1){
	                context.simpledb.botleveldata.trainees.splice(deletionIndex, 1);
	                context.sendResponse(':heavy_minus_sign: Successfully deleted *' + newDeletionFinal + '*.\n>_I am a bot. This action was performed automagically!_');
	            }
	            else{
	                unknownTraineeError(newDeletionFinal);
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
	        /*else if(event.message.substring(0, 16) === '[overAddTrainee]'){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[16] === ' ') && (event.message[17] === '"') && (event.message[event.message.length - 1] === '"')){
	                    isTrainee = false;
	                    makeListVar = '';
	                    
	                    for(var i = 18; i < event.message.length; i++){
	                        if(event.message[i] !== '"'){
	                            makeListVar = makeListVar + event.message[i];
	                        }else{
	                            makeListVar = makeListVar;
	                            break;
	                        }
	                    }
	                    for(var x = 0; x < context.simpledb.botleveldata.trainees.length; x++){
	                        if(context.simpledb.botleveldata.trainees[x] === makeListVar){
	                            isTrainee = true;
	                            break;
	                        }else{
	                            isTrainee = false;
	                        }
	                    }
	                    if(!isTrainee){
	                        var tempTrainees = context.simpledb.botleveldata.trainees;
	                        tempTrainees.push(makeListVar);
	                        context.simpledb.botleveldata.trainees = tempTrainees;
	                        context.sendResponse(':heavy_plus_sign: Added *' + makeListVar + '* to the trainee list, with the same trainee profile information as the last one.\n>_I am a bot. This action was performed automagically!_');
	                    }else{
	                         context.sendResponse(':warning: Error: Trainee name already in use.\n>_I am a bot. This action was performed automagically!_');
	                    }
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[overAddTrainee] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }*/
	        else if(event.message.substring(0, 16) === '[getTraineeInfo]'){
	            updateLogList();
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
	                    unknownTraineeError(makeList);
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
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[10] === ' ') && (event.message[11] === '"') && (event.message[event.message.length - 1] === '"')){
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
	            updateLogList();
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
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[9] === ' ') && (event.message[10] === '"') && (event.message[event.message.length - 1] === '"')){
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
	                            context.sendResponse(':rotating_light: Warning: The IP *' + badIPToCheck + '* is a match. Please beware users with this IP.\n>_I am a bot. This action was performed automagically!_');
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
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                context.simpledb.botleveldata.trainees = [];
	                context.sendResponse('Successfully cleared trainee list!\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        else if(event.message.substring(0,13) === '[editTrainee]'){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
	            if((event.message[14] === '"') && (event.message[event.message.length - 1] === '"')){
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
	                    if((event.message[lastKnownQuote + 1] === ' ') && (event.message[lastKnownQuote + 2] === '"') && (event.message[event.message.length - 1] === '"')){
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
	                    unknownTraineeError(traineeToEditFinal);
	                }
	                
	            }else{
	                editTraineeSyntaxError();
	            }
	        
	        }else{
	            permError();
	            }
	        }
	        // ------------------------
	        
	        else if(event.message.substring(0, 14) === '[makeOfficial]'){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[14] === ' ') && (event.message[15] === '"') && (event.message[event.message.length - 1] === '"')){
	                    makeListVar = '';
	                    for(var d = 16; d < event.message.length; d++){
	                        if(event.message[d] !== '"'){
	                            makeListVar = makeListVar + event.message[d];
	                        }else{
	                            makeListVar = makeListVar;
	                            break;
	                        }
	                    }
	                    isTrainee = false;
	                    for(var q = 0; q < context.simpledb.botleveldata.trainees.length; q++){
	                        if(makeListVar === context.simpledb.botleveldata.trainees[q]){
	                            isTrainee = true;
	                            break;
	                        }else{
	                            isTrainee = false;
	                        }
	                    }
	                    
	                    if(isTrainee === true){
	                        thingToDBValueCheck = 'makeofficial';
	                        context.simpledb.doGet(makeListVar);
	                    }else{
	                        unknownTraineeError(makeListVar);
	                    }
	                    
	                }else{
	                    context.sendResponse(':warning: Error: Can\'t parse the command. Correct Syntax:\n`[makeOfficial] "<trainee-name>"`\n>_I am a bot. This action was performed automagically!_');
	                }
	            }else{
	                permError();
	            }
	        }
	        
	        // ------------------------
	        else if(event.message === '[resetKnownUsers]'){
	            updateLogList();
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
	        
	        
	        /*else if(event.message.substring(0, 9) === '[giveTag]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
    	        if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
	                if((event.message[9] === ' ') && (event.message[10] === '"') && (event.message[event.message.length - 1] === '"')){
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
	        }*/
	        
	        
	        // ------------------------
	        
	        else if(event.message.substring(0, 13) === '[rmKnownUser]'){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                if((event.message[13] === ' ') && (event.message[14] === '"') && (event.message[event.message.length - 1] === '"')){
	                    
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
	            updateLogList();
                context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(event.senderobj.subdisplay === 'kaleb418'){
                    context.sendResponse('Nothing to test.');
	            }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message.substring(0, 15) === '[getOldTrainee]'){
                updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                if(resultOfPermCheck === 'leadMod'){
                    if((event.message[15] === ' ') && (event.message[16] === '"') && (event.message[event.message.length - 1] === '"')){
                        makeListVar = '';
                        for(i = 17; i < event.message.length; i++){
                            if(event.message[i] !== '"'){
                                makeListVar = makeListVar + event.message[i];
                            }else{
                                makeListVar = makeListVar;
                                break;
                            }
                        }
                        thingToDBValueCheck = 'getOldTrainee';
                        context.simpledb.doGet(makeListVar);
                    }else{
                        context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[getOldTrainee] "<trainee>"`\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    permError();
                }
            }
            // ------------------------
            else if(event.message.substring(0, 9) === '[comment]'){
                updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                if((resultOfPermCheck === 'regMod')||(resultOfPermCheck === 'leadMod')){
                    if(event.message[9] === ' ' && event.message[10] === '"'){
                        
                        //   Get Trainee Name
                        makeListVar = '';
                        for(i = 11; i < event.message.length; i++){
                            if(event.message[i] !== '"'){
                                makeListVar = makeListVar + event.message[i];
                            }else{
                                lastKnownComma = i;
                                makeListVar = makeListVar;
                                break;
                            }
                        }
                        traineeToCommentOn = makeListVar;
                        
                        //   Check if syntax works for second round.
                        if(event.message[lastKnownComma + 1] === ' ' && event.message[lastKnownComma + 2] === '"'){
                            
                            makeListVar = '';
                            for(i = lastKnownComma + 3; i < event.message.length; i++){
                                if(event.message[i] !== '"'){
                                    makeListVar = makeListVar + event.message[i];
                                }else{
                                    lastKnownComma = i;
                                    makeListVar = makeListVar;
                                    break;
                                }
                            }
                            commentToAdd = makeListVar;
                            
                            // Test syntax of command one last time.
                            if((event.message[event.message.length - 1] === '"') || (event.message.substring((event.message.length - 2),(event.message.length)) === '-h')){
                                
                                isTrainee = false;
                                for(i = 0; i < context.simpledb.botleveldata.trainees.length; i++){
                                    if(context.simpledb.botleveldata.trainees[i] === traineeToCommentOn){
                                        isTrainee = true;
                                        break;
                                    }else{
                                        isTrainee = false;
                                    }
                                }
                                
                                //Check If Trainee Exists
                                
                                if(isTrainee === true){
                                    if(event.message.substring((event.message.length - 2),(event.message.length)) === '-h'){
                                        newCommentIsHidden = true;
                                    }else{
                                        newCommentIsHidden = false;
                                    }
                                    if(((newCommentIsHidden === true) && (resultOfPermCheck === 'leadMod')) || (newCommentIsHidden === false)){
                                        thingToDBValueCheck = 'comment';
                                        context.simpledb.doGet(traineeToCommentOn);
                                    }else{
                                        context.sendResponse(':warning: Error: You cannot add a hidden comment with permission node *' + resultOfPermCheck + '*.\n>_I am a bot. This action was performed automagically!_');
                                    }
                                }else{
                                    unknownTraineeError(traineeToCommentOn);
                                }
                                
                            }else{
                                context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[comment] "<trainee-name>" "<comment>"`\n>_I am a bot. This action was performed automagically!_');
                            }
                            
                        }else{
                            context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[comment] "<trainee-name>" "<comment>"`\n>_I am a bot. This action was performed automagically!_');
                        }
                        
                    }else{
                        context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[comment] "<trainee-name>" "<comment>"`\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    permError();
                }
            }
            // ------------------------
            else if(event.message.substring(0, 13) === '[editComment]'){
                updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
                    if(event.message[13] === ' ' && event.message[14] === '"'){
                        makeListVar = '';
                        for(i = 15; i < event.message.length; i++){
                            if(event.message[i] !== '"'){
                                makeListVar = makeListVar + event.message[i];
                            }else{
                                lastKnownComma = i;
                                makeListVar = makeListVar;
                                break;
                            }
                        }
                        traineeToEditCommentOn = makeListVar;
                        
                        if(event.message[lastKnownComma + 1] === ' ' && event.message[lastKnownComma + 2] === '"'){
                            makeListVar = '';
                            for(i = lastKnownComma + 3; i < event.message.length; i++){
                                if(event.message[i] !== '"'){
                                    makeListVar = makeListVar + event.message[i];
                                }else{
                                    lastKnownComma = i;
                                    makeListVar = makeListVar;
                                    break;
                                }
                            }
                            commentIDToEdit = makeListVar;
                            
                            if(event.message[lastKnownComma + 1] === ' ' && event.message[lastKnownComma + 2] === '"' && event.message[event.message.length - 1] === '"'){
                                makeListVar = '';
                                for(i = lastKnownComma + 3; i < event.message.length; i++){
                                    if(event.message[i] !== '"'){
                                        makeListVar = makeListVar + event.message[i];
                                    }else{
                                        lastKnownComma = i;
                                        makeListVar = makeListVar;
                                        break;
                                    }
                                }
                                commentChange = makeListVar;
                                
                                //   Check for existing trainee, syntax is confirmed valid at this point.
                                isKnownTrainee = false;
                                for(abcde in context.simpledb.botleveldata.trainees){
                                    if(context.simpledb.botleveldata.trainees[abcde] === traineeToEditCommentOn){
                                        isKnownTrainee = true;
                                        break;
                                    }else{
                                        isKnownTrainee = false;
                                    }
                                }
                                
                                if(isKnownTrainee){
                                    //   All is well (besides whether or not comment exists, and perms). Send to database.
                                    thingToDBValueCheck = 'editComment';
                                    context.simpledb.doGet(traineeToEditCommentOn);
                                }else{
                                    unknownTraineeError(traineeToEditCommentOn);
                                }
                                
                            }else{
                                context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[editComment] "<trainee-name>" "<comment-number>" "<text>"`\n>_I am a bot. This action was performed automagically!_');
                            }
                            
                        }else{
                            context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[editComment] "<trainee-name>" "<comment-number>" "<text>"`\n>_I am a bot. This action was performed automagically!_');
                        }
                        
                    }else{
                        context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[editComment] "<trainee-name>" "<comment-number>" "<text>"`\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    permError();
                }
            }
            // ------------------------
            else if(event.message.substring(0, 12) === '[delComment]'){
                updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                if((resultOfPermCheck === 'leadMod') || (resultOfPermCheck === 'regMod')){
                    if(event.message[12] === ' ' && event.message[13] === '"' && event.message[event.message.length - 1] === '"'){
                        makeListVar = '';
                        for(i = 14; i < event.message.length; i++){
                            if(event.message[i] !== '"'){
                                makeListVar = makeListVar + event.message[i];
                            }else{
                                makeListVar = makeListVar;
                                lastKnownComma = i;
                                break;
                            }
                        }
                        traineeToDeleteCommentOn = makeListVar;
                        
                        if(event.message[lastKnownComma] === '"' && event.message[lastKnownComma + 1] === ' ' && event.message[lastKnownComma + 2] === '"'){
                            makeListVar = '';
                            for(i = lastKnownComma + 3; i < event.message.length; i++){
                                if(event.message[i] !== '"'){
                                    makeListVar = makeListVar + event.message[i];
                                }else{
                                    makeListVar = makeListVar;
                                    break;
                                }
                            }
                            commentIDOfDeletion = makeListVar;
                            
                            //   Make sure the ID provided is a number.
                            if(!(isNaN(parseInt(commentIDOfDeletion)))){
                                //   Check if trainee exists.
                                isKnownTrainee = false;
                                for(i in context.simpledb.botleveldata.trainees){
                                    if(traineeToDeleteCommentOn !== context.simpledb.botleveldata.trainees[i]){
                                        isKnownTrainee = false;
                                    }else{
                                        isKnownTrainee = true;
                                    }
                                }
                                
                                if(isKnownTrainee){
                                    thingToDBValueCheck = 'delComment';
                                    context.simpledb.doGet(traineeToDeleteCommentOn);
                                }else{
                                    unknownTraineeError(traineeToDeleteCommentOn);
                                }
                                
                            }else{
                                context.sendResponse(':warning: Error: Invalid comment ID. Comment IDs should be provided in numerical form, such as "3".\n>_I am a bot. This action was performed automagically!_');
                            }
                        }else{
                            context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[delComment] "<trainee-name>" "<comment-number>"`\n>_I am a bot. This action was performed automagically!_');
                        }
                    }else{
                        context.sendResponse(':warning: Error: Can\'t parse command. Correct syntax:\n`[delComment] "<trainee-name>" "<comment-number>"`\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    permError();
                }
            }
            // ------------------------
            else if(event.message === '[vHistory]'){
		updateLogList();
	        context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	        context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
                if((resultOfPermCheck === 'regMod') || (resultOfPermCheck === 'leadMod')){
                    context.sendResponse('*1.0:* Removed a few unneeded bits; Initialized version system\n*1.0.1:* Fixed issue with [vHistory] not counting towards times used\n*1.1:* Disabled [overAddTrainee]\n\n*Current Version:* ' + version + ' (' + versionMessage + ')\n\n>_I am a bot. This action was performed automagically!_');
                }else{
                    permError();
                }
            }
	        // ------------------------
	        else if(event.message === '[getKnownUsers]'){
	            updateLogList();
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
	        /*else if(event.message === '[clearBadKnownUsers]'){
	            var makeMyDay = [];
	            for(var ac in context.simpledb.botleveldata.oldusers){
	                if(context.simpledb.botleveldata.oldusers[ac] !== null){
	                    makeMyDay.push(context.simpledb.botleveldata.oldusers[ac]);
	                }else{
	                    
	                }
	            }
	            context.simpledb.botleveldata.oldusers = makeMyDay;
	            context.sendResponse('Fixed.');
	        }*/
	        // ------------------------
	        else if(event.message === '[getLogs]'){
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                for(var logIndex in context.simpledb.botleveldata.logs){
	                    if(context.simpledb.botleveldata.logs[logIndex].substring(0, 10) !== '@undefined'){
	                        makeListVar = makeListVar + context.simpledb.botleveldata.logs[logIndex] + '\n\n>';
	                    }else{
	                        
	                    }
	                }
	                makeListVar = makeListVar.substring(0, makeListVar.length - 2);
	                context.sendResponse('_Listing last 50 logs..._\n\n' + makeListVar + '*---*\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                permError();
	            }
	        }
	        // ------------------------
	        else if(event.message === '[clearLogs]'){
	            updateLogList();
	            context.simpledb.botleveldata.timesmodused = context.simpledb.botleveldata.timesmodused + 1;
	            context.simpledb.botleveldata.timesused = context.simpledb.botleveldata.timesused + 1;
	            if(resultOfPermCheck === 'leadMod'){
	                context.simpledb.botleveldata.logs = [];
	                updateLogList();
	                context.sendResponse('Successfully cleared bot logs.\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                updateLogList();
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
	            if(addOldUser !== null){
	            asdfg.push(addOldUser);
	            }else{
	                
	            }
	            context.simpledb.botleveldata.oldusers = asdfg;
	            updateLogList();
	            context.sendResponse('Hello ' + event.senderobj.display + ', and welcome to the Lifeboat Trainees Program! I will be your guide as you learn what will be expected of you during your time as a trainee. Please wait for someone to talk to you, it shouldn\'t take too long.\n>_I am a bot. This action was performed automagically!_');
	            /*var messageJSON = {
	                "type":"msg",
	                "text":"Test JSON"
	            };
	            var blahBlah = JSON.stringify(messageJSON);
	            context.sendResponse(blahBlah);*/
	    	}else{
	            
	        }
	        }
	        
	        }
	        
	    }

	    function EventHandler(context, event) {
	        
	    }
	
	    function HttpResponseHandler(context, event) {
	        
	    }
	
	    function DbGetHandler(context, event) {
	        var traineeToEditObj = JSON.parse(event.dbval);
	        var traineeAdder = traineeToEditObj.adder;
            var thisDate = new Date();
            var currentVersion = traineeToEditObj.persVersion;
	        
	        if(thingToDBValueCheck === 'editTrainee'){
	   
	            var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            var isOfficial = traineeToEditObj.isOfficial;
	            var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
                
	            if(currentComments === undefined){
	                currentComments = {};
	            }else{
	                
	            }
	            
	            if(currentCommentNumber === undefined){
	                currentCommentNumber = 1;
	            }else{
	                
	            }
	            
	            if(thingToEditFinal === 'name'){
	                var oldName = currentTraineeName;
                    //   Make Trainee
	                var newTraineeObj = new Trainee(editToAddFinal, currentTraineeIGN, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, currentComments, currentCommentNumber, currentVersion);
	                context.simpledb.doPut(traineeToEditFinal, newTraineeObj);
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s name from *' + oldName + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IGN'){
	                var oldIGN = currentTraineeIGN;
                    //   Make Trainee
	                var newTraineeObj = new Trainee(currentTraineeName, editToAddFinal, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, currentComments, currentCommentNumber, currentVersion);
	                context.simpledb.doPut(traineeToEditFinal, newTraineeObj);
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IGN from *' + oldIGN + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	            }
	        
	            else if(thingToEditFinal === 'IP'){
	                if(resultOfPermCheck === 'leadMod'){
	                var oldIP = currentTraineeIP;
                    //   Make Trainee
	                var newTraineeObj = new Trainee(currentTraineeName, currentTraineeIGN, editToAddFinal, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, currentComments, currentCommentNumber, currentVersion);
	                context.simpledb.doPut(traineeToEditFinal, newTraineeObj);
	                context.sendResponse(':pencil2: Successfully changed ' + traineeToEditFinal + '\'s IP from *' + oldIP + '* to *' + editToAddFinal +'*.\n>_I am a bot. This action was performed automagically!_');
	                //context.sendResponse(makeListVar);
	                }else{
	                    permError();
	                }
	            }else{
	                context.sendResponse(':warning: Error: Unknown subcommand. Please specify a subcommand (name/IGN/IP).\n>_I am a bot. This action was performed automatically!_');
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
                var lastUpdated = traineeToEditObj.lastUpdated;
	            var isOfficial = traineeToEditObj.isOfficial;
	            var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
	            
	            if(currentTraineeTag === '`Unknown`'){
	                currentTraineeTag = '';
	            }else{
	                
	            }
	            
	            if(currentComments === undefined){
	                currentComments = {};
	            }else{
	                
	            }
	            
	            if(currentCommentNumber === undefined){
	                currentCommentNumber = 1;
	            }else{
	                
	            }
	            //   Make Comment String
	            var commentStringToAddto = '>';
	            for(cid in currentComments){
	                currentCommentObject = currentComments[cid];
	                if(resultOfPermCheck === 'leadMod'){
                        if(currentCommentObject.isHidden === true){
	                        commentStringToAddto = commentStringToAddto + '`H`  *C-' + currentCommentObject.commentID + ':* ' + currentCommentObject.sender + ' at ' + currentCommentObject.dateSent + ': ' + currentCommentObject.text + '\n\n>';
                        }else{
                            commentStringToAddto = commentStringToAddto + '*C-' + currentCommentObject.commentID + ':* ' + currentCommentObject.sender + ' at ' + currentCommentObject.dateSent + ': ' + currentCommentObject.text + '\n\n>';
                        }
	                }else{
	                    if(currentCommentObject.isHidden === false){
	                        commentStringToAddto = commentStringToAddto + '*C-' + currentCommentObject.commentID + ':* ' + currentCommentObject.sender + ' at ' + currentCommentObject.dateSent + ': ' + currentCommentObject.text + '\n\n>';
	                    }else{
	                        
	                    }
	                }
	            }
	            
	            commentStringToAddto = commentStringToAddto.substring(0, commentStringToAddto.length - 3);
	            
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
	            
	            if(isOfficial === undefined){
	                isOfficial = 'Unknown (Error: Not supported for this trainee profile.)';
	            }else{
	                
	            }
                
                if(currentVersion === undefined){
                    currentVersion = '<= 1.0';
                }else{
                    
                }
	            
	            if(checkedAndBadIP === false){
	                context.sendResponse('*Information:*\n\n>*Trainee Name:* ' + traineeToGetInfoOf + '\n\n>*Is Official?* ' + isOfficial + '\n\n>*Version Added:* ' + currentVersion + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n_Last Updated on ' + lastUpdated + ' (UTC)_\n*---*\n*Comments:*\n\n' + commentStringToAddto + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	            }else{
	                if(resultOfPermCheck === 'leadMod'){
	                    context.sendResponse('*Information:*\n\n>*Trainee Name:* ' + traineeToGetInfoOf + '\n\n>*Is Official?* ' + isOfficial + '\n\n>*Version Added:* ' + currentVersion + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n_Last Updated on ' + lastUpdated + ' (UTC)_\n\n*Warning: The IP of this trainee (' + currentTraineeIP + ') matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n' + '*---*\n*Comments:*\n\n' + commentStringToAddto + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	                }else{
	                    context.sendResponse('*Information:*\n\n>*Trainee Name:* ' + traineeToGetInfoOf + '\n\n>*Is Official?* ' + isOfficial + '\n\n>*Version Added:* ' + currentVersion + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n_Last Updated on ' + lastUpdated + ' (UTC)_\n\n*Warning: The IP of this trainee matches a known blacklisted IP. This is a critical warning, please alert a staff member immediately.*\n\n' + '*---*\n*Comments:*\n' + commentStringToAddto + '\n*---*\n>_I am a bot. This action was performed automagically!_');
	                }
	            }
	            
	        }
	        
	        /*else if(thingToDBValueCheck === 'giveTag'){
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
	            
	        }*/
	        else if(thingToDBValueCheck === 'makeofficial'){
	            var traineeToEditObj = JSON.parse(event.dbval);
                var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            var isOfficial = traineeToEditObj.isOfficial;
                var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
	            
	            if(currentComments === undefined){
	                currentComments = {};
	            }else{
	                
	            }
	            
	            if(currentCommentNumber === undefined){
	                currentCommentNumber = 1;
	            }else{
	                
	            }
	            
	            if(isOfficial === 'No'){
                    //   Make Trainee
                    var newTraineeObj = new Trainee(currentTraineeName, currentTraineeIGN, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), 'Yes', currentComments, currentCommentNumber, currentVersion);
	                context.simpledb.doPut(makeListVar, newTraineeObj);
	                context.sendResponse(':pencil2: Successfully made *' + makeListVar + '* an official trainee.\n>_I am a bot. This action was performed automagically!_');
	            }
	            else if(isOfficial === undefined){
	                context.sendResponse(':warning: This trainee profile does not support "official" statuses. Only trainees added after the "official" status was implemented may be given official status.\n>_I am a bot. This action was performed automagically!_');
	            }
	            else{
	                context.sendResponse(':warning: The trainee *' + makeListVar + '* is already an official trainee.\n>_I am a bot. This action was performed automagically!_');
	            }
	        }
            else if(thingToDBValueCheck === 'getOldTrainee'){
                var traineeToEditObj = JSON.parse(event.dbval);
                var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
                var lastUpdated = traineeToEditObj.lastUpdated;
	            var isOfficial = traineeToEditObj.isOfficial;
                var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;

                context.sendResponse('>*Trainee Name:* ' + makeListVar + '\n\n>*Is Official?* ' + isOfficial + '\n\n' + '>*Real Name:* ' + currentTraineeName + '\n\n' + '>*Trainee IGN:* ' + currentTraineeIGN + '\n\n' + '>*Trainee IP:* ' + currentTraineeIP + '\n\n_Added by ' + traineeAdder + ' on ' + traineeAddedDate + ' (UTC)_' + '\n_Last Updated on ' + lastUpdated + ' (UTC)_\n*---*\n>_I am a bot. This action was performed automagically!_');
            }
            else if(thingToDBValueCheck === 'comment'){
                var traineeToEditObj = JSON.parse(event.dbval);
                var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            var isOfficial = traineeToEditObj.isOfficial;
                var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
                
                var dateToUseForComment = new Date();
                var dateCommentWasSent = (dateToUseForComment.getMonth() + 1) + '/' + (dateToUseForComment.getDate()) + '/' + (dateToUseForComment.getFullYear());
                
                var commentToSave = new Comment(commentToAdd, event.senderobj.display, dateCommentWasSent, newCommentIsHidden, currentCommentNumber);
                currentComments['c-' + currentCommentNumber.toString()] = commentToSave;
                
                var newComments = currentComments;
                var newCommentNumber = currentCommentNumber + 1;
                //   Make Trainee
                var traineeWithNewComment = new Trainee(currentTraineeName, currentTraineeIGN, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, newComments, newCommentNumber, currentVersion);
                context.simpledb.doPut(traineeToCommentOn, traineeWithNewComment);
                context.sendResponse(":heavy_plus_sign: Successfully commented on *" + traineeToCommentOn + '*.\n>_I am a bot. This action was performed automagically!_');
            }
            else if(thingToDBValueCheck === 'delComment'){
                var traineeToEditObj = JSON.parse(event.dbval);
                var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            var isOfficial = traineeToEditObj.isOfficial;
                var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
                
                var prop = 'c-' + commentIDOfDeletion.toString();
                commentObjToDelete = currentComments[prop];
                if(currentComments[prop] !== undefined){
                    if(((commentObjToDelete.sender === event.senderobj.display) && (commentObjToDelete.isHidden === false)) || (resultOfPermCheck === 'leadMod')){
                        delete currentComments[prop];
                        //   Make Trainee
                        var newTraineeObj = new Trainee(currentTraineeName, currentTraineeIGN, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, currentComments, currentCommentNumber, currentVersion);
	                   context.simpledb.doPut(traineeToDeleteCommentOn, newTraineeObj);
                        context.sendResponse('Successfully deleted comment *CID-' + commentIDOfDeletion + '*.\n>_I am a bot. This action was performed automagically!_ ');
                    }else{
                        context.sendResponse(':warning: Error: The comment is private or you are not the original sender.\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    context.sendResponse(':warning: Error: Comment doesn\'t exist.\n>_I am a bot. This action was performed automagically!_');
                }
            }
            else if(thingToDBValueCheck === 'editComment'){
                var traineeToEditObj = JSON.parse(event.dbval);
                var currentTraineeName = traineeToEditObj.name;
	            var currentTraineeIGN = traineeToEditObj.IGN;
	            var traineeAdder = traineeToEditObj.adder;
	            var currentTraineeIP = traineeToEditObj.IP;
	            var currentTraineeTag = traineeToEditObj.tag;
	            var traineeAddedDate = traineeToEditObj.dateAdded;
	            var isOfficial = traineeToEditObj.isOfficial;
                var currentComments = traineeToEditObj.comments;
                var currentCommentNumber = traineeToEditObj.commentNumber;
                
                var prop = 'c-' + commentIDToEdit.toString();
                commentObjToEdit = currentComments[prop];
                if(currentComments[prop] !== undefined){
                    if(commentObjToEdit.sender === event.senderobj.display){
                        commentObjToEdit.text = commentChange;
                        //   Make Trainee
                        var newTraineeObj = new Trainee(currentTraineeName, currentTraineeIGN, currentTraineeIP, traineeAdder, currentTraineeTag, traineeAddedDate, getUpdatedDate(thisDate), isOfficial, currentComments, currentCommentNumber, currentVersion);
                        context.simpledb.doPut(traineeToEditCommentOn, newTraineeObj);
                        context.sendResponse('Successfully edited comment *C-' + commentIDToEdit.toString() + '*.\n>_I am a bot. This action was performed automagically!_');
                    }else{
                        context.sendResponse(':warning: Error: You are not the original sender of the comment.\n>_I am a bot. This action was performed automagically!_');
                    }
                }else{
                    context.sendResponse(':warning: Error: Comment doesn\'t exist.\n>_I am a bot. This action was performed automagically!_');
                }
            }
	        else{
	            
	        }
	    }
	
	    function DbPutHandler(context, event) {

	    }
