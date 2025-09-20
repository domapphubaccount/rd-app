import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useConfirmModalStore } from "./store";

type ConfirmModalProps = {
  isPending: boolean;
  event: () => void;
};

export default function ConfirmModal({ isPending, event }: ConfirmModalProps) {
  const { show, description, title, btnText, type, close } =
    useConfirmModalStore();

  return (
    <Dialog open={show} onOpenChange={close}>
      <DialogContent>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-16 h-16 rounded-full">
            <img
              src={`/icons/${type}.svg`}
              alt="icon"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <DialogTitle className="font-bold text-[16px] text-[var(--main)]">
              {title}
            </DialogTitle>
            <p className="text-[14px] text-[var(--text)]">{description}</p>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button
            type="submit"
            variant={type === "warn" ? "secondary" : "destructive"}
            disabled={isPending}
            onClick={event}
            style={{ opacity: isPending ? 0.5 : 1 }}
          >
            {btnText}{" "}
            {isPending && <LoaderCircle className="animate-spin w-4 h-4" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
