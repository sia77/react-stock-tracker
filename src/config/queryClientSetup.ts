import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Cached data stays fresh for 1 min
      gcTime: 5 * 60 * 1000, // Data removed after 5 min if not used
    },
  },
});

// Create a persister that uses localStorage
const persister = createSyncStoragePersister({ storage: window.localStorage });

// Persist the query client so cache survives across page reloads
persistQueryClient({
  queryClient,
  persister,
});

export default queryClient;