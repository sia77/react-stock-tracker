import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours (data stays fresh for a day)
    },
  },
});

// Create a persister that uses localStorage
const persister = createSyncStoragePersister({ storage: window.localStorage });

// Persist the query client so cache survives across page reloads
persistQueryClient({
  queryClient,
  persister,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
});

export default queryClient;