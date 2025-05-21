import { useState } from "react";

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm =() => {
  const [form, setForm] = useState<PasswordForm>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<PasswordForm>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess(false);
  };

  const validate = () => {
    const newErrors: Partial<PasswordForm> = {};
    if (!form.currentPassword) newErrors.currentPassword = "Current password is required.";
    if (form.newPassword.length < 8) newErrors.newPassword = "Password must be at least 8 characters.";
    if (form.newPassword !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Changing password:", form);
    // Example API call here
    // await changePasswordAPI(form);

    setSuccess(true);
    setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-6 bg-white p-8 rounded-xl"
    >
      <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>

      {success && (
        <div className="text-green-600 font-medium bg-green-100 px-4 py-2 rounded">
          Password updated successfully.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.currentPassword ? "border-stockTrackerRed" : "border-gray-300"
          } rounded-md focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.currentPassword && (
          <p className="text-sm text-stockTrackerRed mt-1">{errors.currentPassword}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.newPassword ? "border-stockTrackerRed" : "border-gray-300"
          } rounded-md focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.newPassword && (
          <p className="text-sm text-stockTrackerRed mt-1">{errors.newPassword}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Must be at least 8 characters. Use a mix of letters, numbers & symbols.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`mt-1 block w-full px-4 py-2 border ${
            errors.confirmPassword ? "border-stockTrackerRed" : "border-gray-300"
          } rounded-md focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-stockTrackerRed mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-stockTrackerBlue hover:bg-stockTrackerBlue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
      >
        Update Password
      </button>
    </form>
    </>
    
  );
}

export default ChangePasswordForm;
