
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="font-semibold">altafkhan.dev</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
