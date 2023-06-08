export default function Footer() {
  return (
    <footer className="py-2 text-center text-sm">
        <span className="font-bold text-lg mr-2">Allawi</span>
        <span className="text-lightGray dark:text-darkGrey">
          &copy; {new Date().getFullYear()} All Rights Reversed
        </span>
    </footer>
  );
}
