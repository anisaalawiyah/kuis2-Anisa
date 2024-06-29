

export default function MyList() {
  const foods = [
    {
      id: 1,
      nama: "Asinan",
      asalnya: "Bogor",
      image: "https://www.selasar.com/wp-content/uploads/2020/08/asinan-makanan-khas-indonesia-.jpg",
    },
    {
      id: 2,
      nama: "Mie Aceh",
      asalnya: "Aceh",
      image: "https://salamadian.com/wp-content/uploads/2020/05/makanan-khas-daerah-1.jpg",
    },
    {
      id: 3,
      nama: "Bika Ambon",
      asalnya: "Sumatra Utara",
      image: "https://salamadian.com/wp-content/uploads/2020/05/makanan-khas-daerah-2.jpg",
    },
    {
      id: 4,
      nama: "Otak-otak",
      asalnya: "Kepulauan Riau",
      image: "https://salamadian.com/wp-content/uploads/2020/05/makanan-khas-daerah-4.jpg",
    },
    {
      id: 5,
      nama: "Rendang",
      asalnya: "Sumatra Barat",
      image: "https://salamadian.com/wp-content/uploads/2020/05/makanan-khas-daerah-5.jpg",
    }
  ];

  const handleClick = (p) => {
    alert(`Nama makanan: ${p.nama}\nAsalnya: ${p.asalnya}`);
  };

  const handlePrompt = () => {
    let s = '';
    while (s === '') {
      s = prompt("Masukkan komentar Anda?");
      if (s === '') {
        alert("Komentar tidak boleh kosong");
      }
    }
    alert("Komentar: " + s);
  }

  const handleLike = () => {
    alert("Anda menyukai makanan ini");
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center">
        {foods.map((item, index) => (
          <div 
            key={item.id} 
            className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${index >= 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <img src={item.image} alt={item.nama} className="w-32 h-32 mx-auto mt-4 object-cover"/>
            <div className="p-4 text-center">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{item.nama}</h3>
              <p className="text-gray-600 mb-4">{item.asalnya}</p>
              <div className="flex justify-center space-x-2">
                <button 
                  onClick={() => handleClick(item)} 
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Informasi
                </button>
                <button 
                  onClick={() => handlePrompt()}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Komentar
                </button>
                <button 
                  onClick={() => handleLike()}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Suka
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
