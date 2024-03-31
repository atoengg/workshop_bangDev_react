import { Link } from "react-router-dom";

interface SosialMediaFooterProps {
  patch: any;
  logo: any;
}

const SosialMediaFooter = ({ patch, logo }: SosialMediaFooterProps) => {
  return (
    <>
      <Link
        to={patch}
        className="flex items-center justify-center w-9 h-9 border border-solid border-[#f3fff4] rounded-[50%] mr-2"
      >
        <span>{logo}</span>
      </Link>
    </>
  );
};

export default SosialMediaFooter;
