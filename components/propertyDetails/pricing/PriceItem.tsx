interface PropTypes {
  border?: boolean;
  featured?: boolean;
}

function PriceItem({ border, featured }: PropTypes) {
  const borderClass = "border-b";
  const featuredClass = "bg-brand-grey-light";

  return (
    <div className={`px-4 ${featured && featuredClass}`}>
      <div className={`flex justify-between py-4 ${border && borderClass}`}>
        <p className={` ${featured && "font-bold text-brand-grey-dark"}`}>
          Full market price from
        </p>
        <div className="flex items-center gap-2">
          <p className={`text-brand-grey-dark ${featured && "text-lg"}`}>
            £198,867
          </p>
          <div className="text-brand-dark-blue rounded-[4px flex bg-brand-blue-light px-2 text-xs font-bold ">
            i
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceItem;
