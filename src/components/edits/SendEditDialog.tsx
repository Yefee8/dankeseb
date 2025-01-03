"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "./Input";
import { useState } from "react";
import { toast } from "react-toastify";
import { SendEdit } from "./SendEdit";

export default function SendEditDialog() {
  const [editDatas, setEditDatas] = useState({
    name: "",
    editLink: "",
  });
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger className="text-xl bg-indigo-600 font-medium hover:bg-indigo-700 focus:bg-indigo-700 duration-150 px-2 py-1.5 rounded-lg">
        Send An Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Send one of the best edits of Sebastian Vettel
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="input#name"
              className="text-base text-white font-medium"
            >
              Name
            </label>

            <Input
              onChange={(e: { target: { value: string } }) =>
                setEditDatas({ ...editDatas, name: e.target.value })
              }
              required
              id="name"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="input#link"
              className="text-base text-white font-medium"
            >
              Edit Link
            </label>

            <Input
              onChange={(e: { target: { value: string } }) =>
                setEditDatas({ ...editDatas, editLink: e.target.value })
              }
              required
              id="link"
              placeholder="https://youtube.com"
            />
          </div>

          {step === 0 ? (
            <button
              onClick={() => {
                if (!loading) {
                  const expression =
                    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
                  const linkRegex = new RegExp(expression);

                  if (editDatas.name.length < 3) {
                    toast.error("Name must be at least 3 characters long.");
                    return;
                  } else if (!linkRegex.test(editDatas.editLink)) {
                    toast.error("Invalid link.");
                    return;
                  } else {
                    setLoading(true);
                    SendEdit(editDatas)
                      .then(() => {
                        toast.success("Edit sent successfully, waiting for a approval!");
                        setStep(1);
                      })
                      .catch(() => {
                        toast.error(
                          "An error occurred while sending the edit."
                        );
                      });
                  }
                }
              }}
              className="text-base disabled:opacity-30 text-white bg-indigo-600 font-medium hover:bg-indigo-700 focus:bg-indigo-700 duration-150 px-2 py-1 rounded-lg"
              disabled={loading}
            >
              Send The Edit
            </button>
          ) : (
            <DialogClose className="text-base text-white bg-indigo-600 font-medium hover:bg-indigo-700 focus:bg-indigo-700 duration-150 px-2 py-1 rounded-lg">
              Close The Dialog
            </DialogClose>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
