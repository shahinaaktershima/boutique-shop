import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-gray-900  text-[#969F9C]">
      <div className="container mx-auto px-4">
        <div className="py-16 flex gap-8 flex-col md:flex-row">
          <div className="flex-1">
            <div className="flex items-center gap-2 rounded-full">
              <Image
                className="rounded-full md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
                src="https://i.postimg.cc/SxtcKzHq/image.png"
                alt="logo"
                width={50}
                height={50}
              />
              <p className="text-4xl text-green-600 font-semibold "> Boutique Shop </p>
            </div>
            <p className="mt-3 text-lg text-justify max-w-sm">Welcome to our online shopping site! We offer the best, most affordable products and services around. Shop now and start finding great deals!</p>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-green-600">Quick Links</h3>
              <ul className="mt-5 text-xl font-medium space-y-1">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Teams</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">Support</h3>
              <ul className="mt-5 text-xl font-medium space-y-1">
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">FAQs</li>
                <li className="cursor-pointer">Support Center</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">Company</h3>
              <ul className="mt-5 text-xl font-medium space-y-1">
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Updates</li>
                <li className="cursor-pointer">Jobs</li>
                <li className="cursor-pointer">Announce</li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="divider"></div> 
        <p className="text-center text-lg pb-6">© {currentYear} All Rights Reserved By Tradeswift</p>
      </div>
    </div>
  );
};

export default Footer;
