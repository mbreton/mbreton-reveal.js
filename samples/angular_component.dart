library s8_filter.badge.badge_component;

import 'package:angular/angular.dart';

@NgComponent(
    selector: 'badge',
    templateUrl: 'packages/s8_filter/components/badge_component.html',
    cssUrl: 'packages/s8_filter/components/badge_component.css',
    publishAs: 'cmp'
)
class BadgeComponent {
  @NgAttr('name')
  String name;
}
