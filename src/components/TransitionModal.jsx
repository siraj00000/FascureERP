import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Loader from "./Loader";

const TransitionModal = ({ children, title, onPress, isLoading, isDisabled }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const triggerHandler = () => {
    setOpen(true);

    if (typeof onPress === "function" && onPress !== undefined) {
      onPress();
    }
  };

  const onClose = () => setOpen(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClose });
    }

    return child;
  });

  return (
    <Fragment>
      <button
        disabled={isDisabled}
        type="button"
        className="inline-block px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:bg-darkfs focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkfs active:shadow-lg transition duration-150 ease-in-out"
        data-mdb-ripple="true"
        onClick={triggerHandler}
      >
        {title}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center px-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-max">
                  {isLoading ? <Loader /> : childrenWithProps}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

export default TransitionModal;
