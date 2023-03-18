export const LabelAndValueContainer = ({ label, values }) => (
  <div className="flex items-center gap-5">
    <h5 className="text-sm text-darkfs font-semibold capitalize">{label}:</h5>
    <h6 className="text-sm text-darkfs">{values}</h6>
  </div>
);
