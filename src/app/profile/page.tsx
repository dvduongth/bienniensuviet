export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-800 mb-6">👤 Hồ sơ</h1>
      <div className="bg-white rounded-xl p-6 shadow border border-amber-200">
        <p className="text-stone-600">Tên: Khách</p>
        <p className="text-stone-500 text-sm mt-2">Tiến độ và thành tích sẽ hiển thị ở đây.</p>
      </div>
    </div>
  );
}
