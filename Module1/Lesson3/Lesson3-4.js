//Prototype inheritance

//1. Navigate to https://codepen.io/sean-noroff/pen/WNoqBde

//2. Attach a function to the prototype of the Guitar function called "play" and let it change the sound property of the Guitar object to
//"Sweet sounding chords"

//3. Create a second function called ElectricGuitar. It has a single property called "pickups" which can be assigned a value of "EMG 81/85"

//4. Use the prototype chain to let ElectricGuitarinherit the prototype of Guitar, instantiate a new ElectricGuitar object, call the play()
//method and log the value of the object to the console.

//From codepen
function Guitar() {
    this.sound = "Silence"
  }
  