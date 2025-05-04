interface StatusMessageProps {
    loading?: boolean;
    error?: string | null;
    query?: string;
  }
  
  const StatusMessage: React.FC<StatusMessageProps> = ({ loading, error, query }) => {
    if (loading) {
      return <div className="text-center text-[#596479] text-lg mt-10">Loading...</div>;
    }
  
    if (error) {
      return <div className="text-center text-stockTrackerRed text-lg mt-10">{error}</div>;
    }
  
    if (query !== undefined && !query.trim()) {
      return <div className="text-center text-[#596479] text-lg mt-10">Please enter a search term...</div>;
    }
  
    return null; // No message to show
  };
  
  export default StatusMessage;