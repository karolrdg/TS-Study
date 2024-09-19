/*enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function move(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up!");
            break;
        case Direction.Down:
            console.log("Moving down!");
            break;
        case Direction.Left:
            console.log("Moving left!");
            break;
        case Direction.Right:
            console.log("Moving right!");
            break;
        default:
            console.log("Unknown direction!");
    }
}

// Example usage:
move(Direction.Up);    // Output: Moving up!
move(Direction.Left);  // Output: Moving left!*/

//switch-case
let flor = 'tulipa';

switch (flor) {
  case 'rosa':
    console.log('Rosas são vermelhas');
    break;
  case 'violeta':
    console.log('Violetas são azuis');
    break;
  case 'tulipa':
    console.log('Tulipas são brancas');
    break;

  default:
    console.log('Por favor, selecione uma outra flor!');
}

