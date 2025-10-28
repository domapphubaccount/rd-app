import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { SlidersHorizontal } from "lucide-react";
import SavedFiltersSection from "./SavedFiltersSection";
import FilterInputsSection from "./FilterInputsSection";
import FilterActions from "./FilterActions";
import { useFilterModalLogic } from "./useFilterModalLogic";

export default function FilterModal() {
  const logic = useFilterModalLogic();

  return (
    <Dialog
      open={logic.isOpen}
      onOpenChange={(open) => !open && logic.closeFilter()}
    >
      <DialogContent
        style={{ left: "auto", transform: "none" }}
        className="max-w-[750px] p-0 shadow-lg rounded-lg border absolute right-[20px] top-[90px] bottom-6 flex flex-col gap-0
        h-[85vh]"
      >
        <DialogHeader className="border-b px-3 py-3 pb-0 mb-0 space-y-0">
          <div className="flex gap-3 items-center mb-5">
            <div className="p-1">
              <SlidersHorizontal className="w-5 h-5 text-[#344155]" />
            </div>
            <DialogTitle className="text-[18px] font-bold text-[#344155] p-0 m-0">
              Filters
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-1 h-200 overflow-y-auto">
          <SavedFiltersSection {...logic} />

          <div className="w-2/3 flex flex-col justify-between">
            <FilterInputsSection
              options={logic.options}
              filters={logic.filters}
              handleFilterChange={logic.handleFilterChange}
              handleFieldReset={logic.handleFieldReset}
            />

            <FilterActions
              appliedCount={logic.appliedCount}
              isFilterValid={logic.isFilterValid}
              handleApply={logic.handleApply}
              handleReset={logic.handleReset}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
