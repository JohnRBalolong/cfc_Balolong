export default function FormInput({ icon: Icon, placeholder }) {
  return (
    <div className="relative">
      <Icon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder={placeholder}
        className="border rounded px-10 py-2 w-full"
      />
    </div>
  );
}