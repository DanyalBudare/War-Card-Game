//create array of a standard 52-card deck
let deck = [];

function createDeck() {
    const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    for (let i = 0; i < rank.length; i++) {
        for (let x = 0; x < suit.length; x++) {
            let card = { Rank: rank[i], Suit: suit[x] };
            deck.push(card);
        }
    }

    return deck;
}


//function to randomly shuffle 52-card deck
function shuffleDeck() {
    createDeck();
    for (let i = deck.length -1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temporaryCard = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temporaryCard;
    }
    
    if (deck.length != 52) {
        throw new Error('deck.length must equal 52')
    }

    return deck;
}


//create menu app for game
class Menu {

    //set menu options (start or exit game)
    start() {
        let selection = this.showMainMenuOptions();
        while(selection !=0) {
            switch (selection) {
                case '1':
                    this.startNewGame();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }


    
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Start New WAR GAME
        `)
    }

    //create gameplay. Start game, set points for both players.

    startNewGame() {        
        let playerOnePoints = 0;
        let cpuPoints = 0;

        if (confirm(`       
        Press OK to start...
        
        THE WAR!
        `)) {
    
            //shuffle a new deck, split deck between both user and automated players

            shuffleDeck();

            let playerOneDeck = deck.slice(0, 25);
            let cpuDeck = deck.slice(26, 51);

            //loop through turns of play, ONE card from each player discarded after each turn
            //different alert depending on card drawn (informs who won, or if draw/tie)
            //switch named cards into NAME from rank number so prints correctly during gameplay
            //inform result of round being played via alert
            //add points during each loop. ties result in no points to either player.

            while (playerOneDeck.length > 0) {
                    let playerOneCard = playerOneDeck.shift();
                    let cpuCard = cpuDeck.shift();

                    if (playerOneCard.Rank > cpuCard.Rank) {
                        playerOnePoints += 1;
                        switch (playerOneCard.Rank) {
                            case 11:
                                playerOneCard.Rank = 'JACK';
                                break;
                            case 12:
                                playerOneCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                playerOneCard.Rank = 'KING';
                                break;
                            case 14:
                                playerOneCard.Rank = 'ACE';
                                break;
                            default:
                        }

                        switch (cpuCard.Rank) {
                            case 11:
                                cpuCard.Rank = 'JACK';
                                break;
                            case 12:
                                cpuCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                cpuCard.Rank = 'KING';
                                break;
                            case 14:
                                cpuCard.Rank = 'ACE';
                                break;
                            default:
                        }

                        alert(`You BEAT computer's ${cpuCard.Rank} of ${cpuCard.Suit} with your ${playerOneCard.Rank} of ${playerOneCard.Suit}!!!`);

                    } else if (playerOneCard.Rank < cpuCard.Rank) {
                        cpuPoints += 1;
                        switch (playerOneCard.Rank) {
                            case 11:
                                playerOneCard.Rank = 'JACK';
                                break;
                            case 12:
                                playerOneCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                playerOneCard.Rank = 'KING';
                                break;
                            case 14:
                                playerOneCard.Rank = 'ACE';
                                break;
                            default:
                        }

                        switch (cpuCard.Rank) {
                            case 11:
                                cpuCard.Rank = 'JACK';
                                break;
                            case 12:
                                cpuCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                cpuCard.Rank = 'KING';
                                break;
                            case 14:
                                cpuCard.Rank = 'ACE';
                                break;
                            default:
                        }
                        alert(`Computer beat your ${playerOneCard.Rank} of ${playerOneCard.Suit} with a ${cpuCard.Rank} of ${cpuCard.Suit}`);

                    } else {
                        switch (playerOneCard.Rank) {
                            case 11:
                                playerOneCard.Rank = 'JACK';
                                break;
                            case 12:
                                playerOneCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                playerOneCard.Rank = 'KING';
                                break;
                            case 14:
                                playerOneCard.Rank = 'ACE';
                                break;
                            default:
                        }

                        switch (cpuCard.Rank) {
                            case 11:
                                cpuCard.Rank = 'JACK';
                                break;
                            case 12:
                                cpuCard.Rank = 'QUEEN';
                                break;
                            case 13:
                                cpuCard.Rank = 'KING';
                                break;
                            case 14:
                                cpuCard.Rank = 'ACE';
                                break;
                            default:
                        }
                        alert(`
                        Your ${playerOneCard.Rank} of ${playerOneCard.Suit} and computer's ${cpuCard.Rank} 
                        of ${cpuCard.Suit} results in a DRAW
                        `);
                    }
            }
            
            //ensure game play stops when all cards have been used
            //total points and winner tallied and displayed in an alert            
            while (playerOneDeck.length === 0){
                if (playerOnePoints > cpuPoints) {
                    
                    alert(`
                    ---GAME OVER---

                    *********************
                    YOU WON THE WAR!
                    *********************

                    You: ${playerOnePoints} points
                    Computer: ${cpuPoints} points
                    `);

                } else if (playerOnePoints < cpuPoints) {

                    alert(`
                    ---GAME OVER---

                    You LOST the war.
                    Better luck next time.

                    Computer: ${cpuPoints} points
                    You: ${playerOnePoints} points
                    `);

                } else {

                    alert(`
                    ---GAME OVER---

                    TIE GAME


                    Computer: ${cpuPoints} points
                    You: ${playerOnePoints} points
                    `);
                    
                } 
            }

        } else {
            this.showMainMenuOptions();
        }
    }
}

//run menu app

let menu = new Menu();
menu.start();