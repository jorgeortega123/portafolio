import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import ZoomableImage from "./ZoomComponenteProduct";
import { Icons } from "@llampukaq/icons";
import Img from "../html/Img";
export default function ZoomComponentWithModal({ item }: { item: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div onClick={() => onOpen()} className="relative">
        <svg
          className="z-[3] absolute left-4 bottom-4"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M208 48V16H16v192h32V70.627l160.687 160.686l22.626-22.626L70.627 48H208zm256 256v137.373L299.313 276.687l-22.626 22.626L441.373 464H304v32h192V304h-32z"
          />
        </svg>

        <Img
          link
          width="500"
          className=""
          //   draggable={false}
          //   onClick={() => imgSrc(imagesFrom[index].all[0])}
          src={item.img}
          loading="lazy"
          alt=""
        />
      </div>
      <Modal
        className="bg-white rounded-lg"
        size={"5xl"}
        isOpen={isOpen}
        scrollBehavior={"inside"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Zoom</ModalHeader>
              <ModalBody>
                <ZoomableImage
                  // @ts-ignore
                  imagen={item.img}
                  //   producto={{ title: producto.title ?? "" }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
