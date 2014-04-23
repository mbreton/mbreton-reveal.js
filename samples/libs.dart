// package : /src/libs.dart

library my_library;

@lazy
import 'duck.dart' as duck;

const lazy = const DeferredLibrary('com.example.duck');

main() {
  duck.method(); // Throws a NoSuchMethodError
  lazy.load().then((_) {
    duck.method();
  });
}

Bar() { /* something ...*/ }
class Qix { /* something ... */}
class Foo extends List with Qix { /* something ... */}