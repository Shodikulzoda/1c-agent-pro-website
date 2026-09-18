import {
  BarChart3,
  Camera,
  CheckCircle2,
  ClipboardList,
  Factory,
  MapPin,
  Package,
  RefreshCw,
  Route,
  ShoppingCart,
  Store,
  Truck,
  Users,
  UsersRound,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  "refresh-cw": RefreshCw,
  route: Route,
  "map-pin": MapPin,
  "shopping-cart": ShoppingCart,
  camera: Camera,
  "check-circle-2": CheckCircle2,
  users: Users,
  package: Package,
  "clipboard-list": ClipboardList,
  truck: Truck,
  factory: Factory,
  store: Store,
  "users-round": UsersRound,
  utensils: Utensils,
  "bar-chart-3": BarChart3,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
