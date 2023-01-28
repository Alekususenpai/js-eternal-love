/** Counting Cards
 
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	            2, 3, 4, 5, 6
0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

 */

let count = 0;

function cc(card) {

    // we'll use a switch case here since it's way shorter and easier to read than IF - ELSE IF 
    // 1. based on the card, the switch will do a certain operation
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            // here it will increase the count for 1 each time it has one of the cases above (2, 3, 4, 5, 6)
            count++
            break;
        case 7:
        case 8:
        case 9:
            // here it won't do anything to the count (7, 8, 9)
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            // here it will decrease the count for 1 each time it has one of the cases above ( 10, 'J', 'Q', 'K', 'A')
            count--
            break
    }

    // 2. finally, it will check whether the count is smaller or equal to 0 and return the count + 'Hold'
    if (count <= 0) {
        return count + ' Hold'
    } else {
        // otherwise it will return the count + 'Bet'
        return count + ' Bet';
    }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');