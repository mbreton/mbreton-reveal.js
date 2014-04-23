Future load() {
  Completer c = new Completer();
  context["google"].callMethod('load', //
  ['visualization', '1', new JsObject.jsify({
      'packages': ['gauge'], 'callback': new JsFunction.withThis(c.complete)
  })]);
  return c.future;
}