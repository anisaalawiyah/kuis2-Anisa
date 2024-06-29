export default function Footer(){
    
    return(
       
        <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2024 Anisa Alawiyah</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    )
}