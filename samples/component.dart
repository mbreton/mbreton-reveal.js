import 'dart:convert';
import 'dart:html';

import 'package:polymer/polymer.dart';


@CustomTag('super-button')
class SuperButton {
  @observable
  String label;

  String color(String style) {
    return style == "warning" ? "red" : 'green';
  }
}