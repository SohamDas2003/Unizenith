'use client'
import { CheckCircle, Trophy, FileText, Users } from 'lucide-react'
interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  bgColor?: string
  iconColor?: string
}
const StatCard = ({ icon, label, value, iconColor = 'text-gray-600', isFirst }: StatCardProps & { isFirst?: boolean }) => {
  const getBgColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'text-green-500': 'bg-green-100',
      'text-amber-500': 'bg-amber-50',
      'text-indigo-500': 'bg-indigo-50',
      'text-blue-500': 'bg-blue-50',
    };
    return colorMap[color] || 'bg-gray-50';
  };
  return (
    <div className={`h-full ${isFirst ? 'bg-green-100 p-2 rounded-lg' : 'mt-2'}`}>
      <div className="flex items-center justify-center gap-4 px-6 py-4">
        <div className={`${getBgColor(iconColor)} p-2.5 rounded-xl
             transition-shadow duration-200   ${!isFirst && 'shadow-sm hover:shadow-md'}`}>
          <div className={`${iconColor} w-7 h-7 sm:w-9 sm:h-9 `}>
            {icon}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-600 text-xs sm:text-sm font-medium">{label}</h3>
          <p className="text-gray-900 text-base sm:text-lg font-bold mt-0.5">{value}</p>
        </div>
      </div>
    </div>
  );
};
export default function StatsDisplay() {
  const stats = [
    {
      icon: <CheckCircle className="w-full h-full" />,
      label: "Registered Students",
      value: "6.5+ Lakh",
      iconColor: "text-green-500"
    },
    {
      icon: <Trophy className="w-full h-full " />,
      label: "Student Selections",
      value: "4+ Lacs",
      iconColor: "text-amber-500"
    },
    {
      icon: <FileText className="w-full h-full " />,
      label: "Tests Attempted",
      value: "242+ K",
      iconColor: "text-indigo-500"
    },
    {
      icon: <Users className="w-full h-full " />,
      label: "Classes Attended",
      value: "5.5+ Lakh",
      iconColor: "text-blue-500"
    }
  ]
  return (
    <div className="py-2 sm:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg
              border border-gray-100
              relative overflow-hidden
              before:absolute before:inset-0
              before:rounded-xl before:pointer-events-none ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            divide-y sm:divide-y-0 sm:divide-x divide-gray-100 p-2">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                iconColor={stat.iconColor}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}