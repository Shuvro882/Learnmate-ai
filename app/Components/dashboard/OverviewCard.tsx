type OverviewCardProps = {
title: string;
value: string | number;
icon: string;
};

export default function OverviewCard({
title,
value,
icon,
}: OverviewCardProps) {
return ( <div
   className="
     bg-white
     rounded-xl
     shadow-sm
     border
     p-5
     hover:shadow-md
     transition
   "
 > <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>

    <div className="text-3xl md:text-4xl">
      {icon}
    </div>

  </div>
</div>


);
}
