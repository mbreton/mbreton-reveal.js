class Person {
  String name;
  Person(this.name);
}

class Maestro extends Person with Musical, Aggressive, Demented {
  Maestro(name):super(name);
}