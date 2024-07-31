"use client";

import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PaginationCustomer from "../PaginationCustomer";
import { FaRegTrashAlt } from "react-icons/fa";
import { HoverCardDemo } from "../hoverCard/hoverCard";
const tableTitle = ["option", "Date", "Status", "Customer", "Purchase"];

const option3: DataObject[] = [
  {
    Invoice: "INV024",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Olivia Rhye",
      mail: "olivia@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV025",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$150.00",
    customer: {
      title: "Liam Smith",
      mail: "Liam Smith@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV004",
    date: "jan 5 ,2022",
    paymentStatus: "Cancelled",
    totalAmount: "$350.00",
    customer: {
      title: "Olivia Rhye",
      mail: "olivia@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV234",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    customer: {
      title: "Benjamin Jackson",
      mail: "BenjaminJackson@gmail.com",
      avatar: "@/assets/image/pic2.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV029",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    customer: {
      title: "Sophia Brown",
      mail: "olivia@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV031",
    date: "jan 5 ,2022",
    paymentStatus: "Refunded",
    totalAmount: "$200.00",
    customer: {
      title: "Isabella Davis",
      mail: "olivia@gmail.com",
      avatar: "@/assets/image/pic2.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV033",
    date: "jan 5 ,2022",
    paymentStatus: "Cancelled",
    totalAmount: "$300.00",
    customer: {
      title: "Olivia Rhye",
      mail: "olivia@gmail.com",
      avatar: "@/assets/image/pic2.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV044",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Benjamin Jackson",
      mail: "BenjaminJackson@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV043",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Benjamin Jackson",
      mail: "BenjaminJackson@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV042",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Benjamin Jackson",
      mail: "BenjaminJackson@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV041",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Benjamin Jackson",
      mail: "BenjaminJackson@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV039",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Lucas White",
      mail: "LucasWhite@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV037",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Lucas White",
      mail: "LucasWhite@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV036",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Benjamin ",
      mail: "Benjamin@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
  {
    Invoice: "INV035",
    date: "jan 5 ,2022",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    customer: {
      title: "Alexander",
      mail: "Alexander@gmail.com",
      avatar: "@/assets/image/pic1.png",
    },
    purchase: "Monthly subscription",
  },
];

interface Customer {
  title: string;
  mail: string;
  avatar: string;
}

interface DataObject {
  Invoice: string;
  date: string;
  paymentStatus: string;
  totalAmount: string;
  customer: Customer;
  purchase: string;
}
const ITEMS_PER_PAGE = 8;
const Customer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = option3.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [indexRow, setIndexRow] = useState(0);
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (
    e: React.TouchEvent<HTMLTableRowElement>,
    index: number
  ) => {
    setIndexRow(index);
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLTableRowElement>) => {
    touchEndX = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX < -75) {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
    if (touchStartX - touchEndX > 75) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    index: number
  ) => {
    setIndexRow(index);
    touchStartX = e.clientX;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    if (touchStartX !== 0) {
      touchEndX = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (touchStartX - touchEndX < -75) {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
    if (touchStartX - touchEndX > 75) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }

    touchStartX = 0;
    touchEndX = 0;
  };
  const handleClick = () => {
    setShowEdit(false);
    setShowDelete(false);
  };
  return (
    <div className=" mt-5  border-[#EAECF0]  border-2 rounded-xl ">
      <Table className=" table-auto  w-full">
        <TableHeader className=" ">
          <TableRow className="">
            <TableHead className="bg-gray-50 font-medium text-xs ">
              Invoice
            </TableHead>
            <TableHead className="bg-gray-50 font-medium text-xs ">
              Date
            </TableHead>
            <TableHead className="bg-gray-50 font-medium text-xs ">
              Status
            </TableHead>
            <TableHead className="bg-gray-50 font-medium text-xs hidden sm:table-cell">
              Customer
            </TableHead>
            <TableHead className="bg-gray-50 font-medium text-xs hidden sm:table-cell">
              Purchase
            </TableHead>
            <TableHead className="bg-gray-50 font-medium text-xs "></TableHead>
            <TableHead className="bg-gray-50 sm:hidden "></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems?.map((option, index) => (
            <TableRow
              className={`relative w-fix `}
              key={option.Invoice}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={(e) => handleMouseDown(e, index)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={handleClick}
            >
              {showEdit && indexRow === index && (
                <TableCell className="lg:hidden w-10 absolute left-0 top-0 h-full bg-blue-500 text-white flex items-center justify-center">
                  <p onClick={() => console.log("Edit")}>Edit</p>
                </TableCell>
              )}

              <TableCell className={`font-medium  text-sm text-[#101828] `}>
                {option.Invoice}
              </TableCell>
              <TableCell className={`font-normal text-sm text-[#475467]  ${showEdit && index === indexRow && "hidden"}`}>
                {option.date}
              </TableCell>
              <TableCell>
                <Badge
                  className={`${
                    option.paymentStatus === "Paid"
                      ? "bg-[#ECFDF3]  border-[#ABEFC6] text-[#087443]"
                      : option.paymentStatus === "Refunded"
                      ? "bg-[#F9FAFB]  border-[#EAECF0] text-[#344054] "
                      : option.paymentStatus === "Cancelled"
                      ? "bg-[#FEF3F2]  border-[#FECDCA] text-[#B42318] "
                      : ""
                  }`}
                  variant="outline"
                >
                  {option.paymentStatus}
                </Badge>
              </TableCell>
              <TableCell
                className={`  ${
                  (showDelete || showEdit === true) && index === indexRow
                    ? "hidden"
                    : "table-cell"
                }`}
              >
                <div className=" flex-row hidden sm:flex">
                  <Avatar>
                    <AvatarImage
                      src={option.customer.avatar}
                      alt={option.customer.title}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ml-3">
                    <p>{option.customer.title}</p>
                    <p>{option.customer.mail}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell
                className={`sm:hidden  ${
                  showDelete && index === indexRow && "hidden"
                }`}
              >
                <HoverCardDemo
                  purchase={option.purchase}
                  customer={option.customer}
                />
              </TableCell>
              <TableCell
                className={`hidden sm:table-cell font-normal text-sm text-[#475467]`}
              >
                {option.purchase}
              </TableCell>
              <TableCell className="hidden lg:table-cell ">
                <Button
                  className=" font-semibold text-sm text-[#475467] "
                  variant="ghost"
                >
                  Delete
                </Button>
                <Button
                  className="font-semibold text-sm text-[#285CC6] "
                  variant="ghost"
                >
                  Edit
                </Button>
              </TableCell>
              {showDelete && indexRow === index && (
                <TableCell className="lg:hidden h-full  absolute right-0 top-0  bg-red-500 text-white flex items-center justify-center">
                  <FaRegTrashAlt size={18} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>
              <PaginationCustomer
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={option3.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Customer;
