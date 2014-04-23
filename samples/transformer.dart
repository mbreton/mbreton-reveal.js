import 'package:barback/barback.dart';

import 'dart:async';

class InsertCopyright extends Transformer {
  String copyright = "Copyright (c) 2014, the Example project authors.\n";

  InsertCopyright.asPlugin();

  Future<bool> isPrimary(Asset input) {
    return new Future.value(input.id.extension == '.txt');
  }

  Future apply(Transform transform) {
    return transform.primaryInput.readAsString().then((content) {
      var id = transform.primaryInput.id;
      String newContent = copyright + content;
      transform.addOutput(new Asset.fromString(id, newContent));
    });
  }
}