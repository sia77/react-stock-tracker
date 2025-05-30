import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import { useAuth } from "./useAuth";
import { ApiUser, FormData } from "@/Interfaces/db";

export const useUpdateUser = () => {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {getToken} = useAuth();

  const toApiUser = (form: FormData): ApiUser => ({
    email: form.email,
    first_name: form.firstName,
    last_name: form.lastName,
    address: form.address,
    phone: form.phone,
    state_province: form.state_province,
    postal_code: form.postalCode,
    unit: form.unit,
    city: form.city,
    created_at: form.createdAt,
    country:form.country
  });

  const updateUser = async (formData: any) => {
    setSaving(true);
    setError(null);
    
    try {

        const token = await getToken(
            {
            authorizationParams: {
              audience: 'https://stocktracker-react.netlify.app/v1/api/',
              scope: 'update:data'
            },
          }
        );

        const response = await axiosInstance.put("secure-api", toApiUser(formData), {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        //console.log('response: ', response);

        return response.data;
    } catch (err: any) {
        setError(err.response?.data?.message || "Update failed");
    } finally {
        setSaving(false);
    }
  };

  return { updateUser, saving, error };
}