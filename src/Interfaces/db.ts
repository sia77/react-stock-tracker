export interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    unit:string;
    address: string;
    city:string;
    state_province: string;
    postalCode: string;
    createdAt:string;
    country:string;
}

export interface ApiUser {    
    email: string;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    unit: string | null;
    address: string | null;
    city: string | null;
    state_province: string | null;
    postal_code: string | null;
    //auth0_sub: string;
    created_at: string;
    country:string;
}