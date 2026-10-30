import {
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCalendarAlt,
  FaChevronDown,
  FaPlay,
  FaUsers,
  FaAward,
  FaChartLine,
  FaCheck,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type IconProps = {
  className?: string;
};

export function PinIcon({ className }: IconProps) {
  return <FaMapMarkerAlt className={className} aria-hidden="true" />;
}

export function GlobeIcon({ className }: IconProps) {
  return <FaGlobe className={className} aria-hidden="true" />;
}

export function MailIcon({ className }: IconProps) {
  return <FaEnvelope className={className} aria-hidden="true" />;
}

export function PhoneIcon({ className }: IconProps) {
  return <FaPhoneAlt className={className} aria-hidden="true" />;
}

export function ClockIcon({ className }: IconProps) {
  return <FaClock className={className} aria-hidden="true" />;
}

export function CalendarIcon({ className }: IconProps) {
  return <FaCalendarAlt className={className} aria-hidden="true" />;
}

export function ChevronDownIcon({ className }: IconProps) {
  return <FaChevronDown className={className} aria-hidden="true" />;
}

export function PlayIcon({ className }: IconProps) {
  return <FaPlay className={className} aria-hidden="true" />;
}

export function UsersIcon({ className }: IconProps) {
  return <FaUsers className={className} aria-hidden="true" />;
}

export function AwardIcon({ className }: IconProps) {
  return <FaAward className={className} aria-hidden="true" />;
}

export function ChartIcon({ className }: IconProps) {
  return <FaChartLine className={className} aria-hidden="true" />;
}

export function CheckIcon({ className }: IconProps) {
  return <FaCheck className={className} aria-hidden="true" />;
}

export function MenuIcon({ className }: IconProps) {
  return <FaBars className={className} aria-hidden="true" />;
}

export function CloseIcon({ className }: IconProps) {
  return <FaTimes className={className} aria-hidden="true" />;
}

export const iconMap = {
  pin: PinIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  clock: ClockIcon,
  calendar: CalendarIcon,
  play: PlayIcon,
  users: UsersIcon,
  award: AwardIcon,
  chart: ChartIcon,
  check: CheckIcon,
} as const;
