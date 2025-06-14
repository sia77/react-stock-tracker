import StatusMessage from "@/components/StatusMessage";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useUserInfoService } from "@/hooks/useUserInfoService";
import {FormData } from "@/Interfaces/db";
import { useEffect, useState } from "react";


export default function UserSettingsForm() {

  const [form, setForm] = useState<FormData>({    
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    state_province: "",
    postalCode:"",
    unit:"",
    city:"",
    createdAt:'',
    country:''
  });

  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});
  const { data, loading, error } = useUserInfoService(); 
  
 
  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  const { updateUser, saving, error:errorLoading } = useUpdateUser();

  if (loading || error || !data) {
    return <StatusMessage loading={loading} error={error} />;
  } 

  if ( saving || errorLoading) {
    return <StatusMessage loading={saving} error={errorLoading} />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("name: ", name);
    setForm((prev) => ({ ...prev, [name]: value.trim() }));
  };
  

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.state_province.trim()) newErrors.state_province = "Province/State is required.";
    if (!form.postalCode.trim()) newErrors.postalCode = "Postal/Zip code is required.";
    if (!form.country.trim()) newErrors.postalCode = "Country is required.";
    // Optional: Add regex/email/phone format validation here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    updateUser(form);    
  
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto my-10 space-y-6 bg-white p-8 rounded-xl border"
    >
      <h2 className="text-xl font-semibold text-gray-800">User Settings</h2>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          readOnly
          className="mt-1 block w-full bg-gray-100 text-gray-600 px-4 py-2 border  rounded-md cursor-not-allowed"
        />
      </div> */}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          readOnly
          className="mt-1 block w-full bg-gray-100 text-gray-600 px-4 py-2 border  rounded-md cursor-not-allowed"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            pattern="[a-zA-Z\s'-]+"
            maxLength={50}
            value={form.firstName}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.firstName ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.firstName && <p className="text-sm text-stockTrackerRed mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            pattern="[a-zA-Z\s'-]+"
            maxLength={50}
            value={form.lastName}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.lastName ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.lastName && <p className="text-sm text-stockTrackerRed mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-full md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">Unit # (optional)</label>
            <input
              type="text"
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
            />          
        </div>
        <div className="col-span-full md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Street Address (optional)</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.city ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.city && <p className="text-sm text-stockTrackerRed mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Province/State</label>
          <input
            type="text"
            name="state_province"
            value={form.state_province}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.state_province ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.state_province && <p className="text-sm text-stockTrackerRed mt-1">{errors.state_province}</p>}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal/Zip Code</label>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.postalCode ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.postalCode && <p className="text-sm text-stockTrackerRed mt-1">{errors.postalCode}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-2 border ${
              errors.country ? "border-stockTrackerRed" : ""
            } rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.country && <p className="text-sm text-stockTrackerRed mt-1">{errors.country}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-stockTrackerBlue hover:bg-stockTrackerBlue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
      >
        Save Changes
      </button>
    </form>
  );
}
