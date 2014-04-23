import 'duck.dart';

// top level function
makeNoise(Duck duck) {
  print(duck.quack());
}

main() {
  AnAnimal myDuck = new AnAnimal();
  Duck myDuck2 = new GreenDuck();

  // 'Green Coin !'
  makeNoise(myDuck);

  // 'Coin !'
  makeNoise(myDuck2);
}