import { useSearchParams } from 'react-router-dom';
import { useSearchResult } from '@/hooks/useSearchResult';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const { searchResult, error } = useSearchResult(query); 

  if (error) return <p>Error: {error}</p>;
  if (!query.trim()) return <p>Please enter a search term.</p>;

  return (
    <div className="p-4">
      <h2>Results for "{query}"</h2>
      {searchResult?.length > 0 ? (
        <ul>
          {searchResult.map((item:any) => (
            <li key={item.id}>{item.name}</li> // Adjust fields to your data
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;