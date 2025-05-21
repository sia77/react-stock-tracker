import { useState } from "react";

type FormData = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
};

export default function UserSettingsForm() {
  const [form, setForm] = useState<FormData>({
    username: "siavash123",
    email: "siavash@example.com",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    // Optional: Add regex/email/phone format validation here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Saving user settings:", form);
    // Call API or do something with the data
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-6 bg-white p-8 rounded-xl border"
    >
      <h2 className="text-xl font-semibold text-gray-800">User Settings</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          readOnly
          className="mt-1 block w-full bg-gray-100 text-gray-600 px-4 py-2 border  rounded-md cursor-not-allowed"
        />
      </div>

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
        <label className="block text-sm font-medium text-gray-700">Address (optional)</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border  rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
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

      <button
        type="submit"
        className="w-full bg-stockTrackerBlue hover:bg-stockTrackerBlue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
      >
        Save Changes
      </button>
    </form>
  );
}
