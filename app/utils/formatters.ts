export const getStatusClasses = (status: string) => {
    switch(status) {
      case 'New': return 'bg-sky-100 text-sky-900 border border-sky-200'; // Modern Sky Blue
      case 'Scheduled': return 'bg-orange-100 text-orange-950 border border-orange-200'; // Soft Orange
      case 'Estimate Sent': return 'bg-zinc-100 text-zinc-600 border border-zinc-200'; // Clean Grey
      default: return 'bg-zinc-50 text-zinc-400';
    }
  };