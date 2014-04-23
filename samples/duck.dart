class Duck {
  walkLikeADuck();
  String quack() => 'Coin !';
}

class GreenDuck implements Duck{
  walkLikeADuck(){}
  String quack(){
    return 'Green Coin !';
  }
}

class AnAnimal{
  walkLikeADuck();
  String quack(){
    return 'Coin !';
  }
}
