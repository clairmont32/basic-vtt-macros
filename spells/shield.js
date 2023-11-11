// Get currently contrtolled token (dont forget to select yourself first!)
const controlledToken = canvas.tokens.controlled[0];
const spellName = "Shield";

// Check if a token is controlled
if (controlledToken) {
    // Get the actor associated with the token
     const actor = controlledToken.actor;


    // Check if the actor has the specified spell
    const spell = actor.items.find((item) => item.name === spellName && item.type === "spell");   


 if (spell) {
    let spkr = ChatMessage.getSpeaker({actor: controlledToken})
    ChatMessage.create({speaker: spkr, content: "Yellow alert", type: CONST.CHAT_MESSAGE_TYPES.EMOTE}, {chatBubble: true});

    // load the sequence
    new Sequence()
        .effect()
        .file("jb2a.shield.01.loop.blue")
        .atLocation(token)
        .persist()
        .scale(.6)
        .play();


    spell.roll()

 } else {
   ui.notifications.warn(`Actor does not have the spell "${spellName}".`);
 }
} else {
 ui.notifications.warn("No token is currently controlled.");
}
