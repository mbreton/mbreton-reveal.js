import 'dart:js';

main() {
  var object = new JsObject(context['Object']);
  object['greeting'] = 'Hello';
  object['greet'] = (name) => "${object['greeting']} $name";
  var message = object.callMethod('greet', ['JavaScript']);
  context['console'].callMethod('log', [message]);
}