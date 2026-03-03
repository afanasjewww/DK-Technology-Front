import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
      <Icon className="w-8 h-8 mx-auto mb-3 text-dk-yellow-500" strokeWidth={1.5} />
      <h3 className="font-bold text-dk-gray-900 dark:text-white mb-1">{title}</h3>
      {children}
    </div>
  );
}
