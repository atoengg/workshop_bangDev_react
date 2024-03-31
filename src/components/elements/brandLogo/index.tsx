interface BrandLogoProps {
  image: any;
  label: String;
}

const BrandLogo = ({ image, label }: BrandLogoProps) => {
  return (
    <div>
      <a
        href=""
        className="flex items-center font-[700] text-[20px] text-[#1f1235]"
      >
        <img src={image} alt={`ini logo ${image}`} width="70" height="60" />
        {label}
      </a>
    </div>
  );
};

export default BrandLogo;
