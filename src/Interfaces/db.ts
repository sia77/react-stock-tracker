export interface User {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    address: string | null;
    state_province: string | null;
    postal_code: string | null;
    auth0_sub: string;
    created_at: string; // ISO 8601 date string
  }