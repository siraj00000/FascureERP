export const LabelAndValueContainer = ({ label, values }) => (
  <div className="flex items-center gap-5">
    <h5 className="text-md text-darkfs font-semibold">{label}:</h5>
    <h6 className="text-md text-darkfs">{values}</h6>
  </div>
);
