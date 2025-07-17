'use client';

export default function FormInput({ icon: Icon, name, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="font-medium">{placeholder} {error && <span className="text-red-500">*</span>}</label>
      <div className="relative">
        <Icon className="h-5 w-5 text-gray-400 absolute top-3.5 left-3" />
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="border rounded-md w-full p-3 pl-10"
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}