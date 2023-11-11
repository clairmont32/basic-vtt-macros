// Macro Name: Cast Create Bonfire and do a simple bubble message
// Macro Type: Script
// Specify the name of the spell
const spellName = "Create Bonfire";

// Get the currently controlled token
const controlledToken = canvas.tokens.controlled[0];

// Check if a token is controlled
if (controlledToken) {
 // Get the actor associated with the token
 const actor = controlledToken.actor;

 // Check if the actor has the specified spell
 const spell = actor.items.find((item) => item.name === spellName && item.type === "spell");

 if (spell) {
   // Roll the spell's attack/save and damage
let Traff = game.actors.getName("Traff Whiffer")
let spkr = ChatMessage.getSpeaker({actor: Traff})
ChatMessage.create({speaker: spkr, content:"Burn baby burn!", type: CONST.CHAT_MESSAGE_TYPES.EMOTE}, {chatBubble: true});

   spell.roll();
 } else {
   ui.notifications.warn(`Actor does not have the spell "${spellName}".`);
 }
} else {
 ui.notifications.warn("No token is currently controlled.");
}
