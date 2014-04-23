library s8_filter.badge_controller;

import 'package:angular/angular.dart';

import 'package:s8_filter/services/names_service.dart';
import 'package:s8_filter/model.dart' show PirateName;

@NgController(selector: '[badge-controller]', publishAs: 'ctrl')
class BadgeController {
  NamesService ns;
  PirateName pn = new PirateName();

  BadgeController(this.ns);

  String _name = '';
  get name => _name;
  set name(newName) {
    _name = newName;
    ns.randomAppellation().then((appellation) {
      // something
    });
  }
}