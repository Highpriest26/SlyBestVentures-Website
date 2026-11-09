import React from 'react';
import {
  Car,
  Snowflake,
  WashingMachine,
  Tv,
  Sun,
  BatteryCharging,
  Fan,
  Speaker,
  MonitorPlay,
  Home,
  Smartphone,
  PlugZap,
  Fuel,
  Printer,
  Package,
} from 'lucide-react';
import { CategoryIconKey } from '../config/catalogueConfig';

interface CategoryIconProps {
  icon: CategoryIconKey;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ icon, className = 'w-6 h-6' }) => {
  switch (icon) {
    case 'car':
      return <Car className={className} aria-hidden="true" />;
    case 'snowflake':
      return <Snowflake className={className} aria-hidden="true" />;
    case 'washing-machine':
      return <WashingMachine className={className} aria-hidden="true" />;
    case 'tv':
      return <Tv className={className} aria-hidden="true" />;
    case 'sun':
      return <Sun className={className} aria-hidden="true" />;
    case 'battery':
      return <BatteryCharging className={className} aria-hidden="true" />;
    case 'fan':
      return <Fan className={className} aria-hidden="true" />;
    case 'speaker':
      return <Speaker className={className} aria-hidden="true" />;
    case 'display':
      return <MonitorPlay className={className} aria-hidden="true" />;
    case 'house':
      return <Home className={className} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={className} aria-hidden="true" />;
    case 'plug':
      return <PlugZap className={className} aria-hidden="true" />;
    case 'fuel':
      return <Fuel className={className} aria-hidden="true" />;
    case 'printer':
      return <Printer className={className} aria-hidden="true" />;
    case 'package':
    default:
      return <Package className={className} aria-hidden="true" />;
  }
};
