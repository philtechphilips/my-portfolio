export const formatDate = (date: string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
};

export const formatReadTime = (minutes: number): string => {
  return `${minutes} min read`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const formatTechnology = (tech: string): string => {
  const techMap: Record<string, string> = {
    'reactjs': 'React.js',
    'react': 'React.js',
    'nextjs': 'Next.js',
    'next': 'Next.js',
    'nodejs': 'Node.js',
    'node': 'Node.js',
    'mongodb': 'MongoDB',
    'mongo': 'MongoDB',
    'typescript': 'TypeScript',
    'ts': 'TypeScript',
    'javascript': 'JavaScript',
    'js': 'JavaScript',
    'tailwind': 'Tailwind CSS',
    'tailwindcss': 'Tailwind CSS',
  };
  return techMap[tech.toLowerCase()] || tech;
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};
