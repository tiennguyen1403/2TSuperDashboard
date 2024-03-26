"use client";
import {
  Button,
  Pagination,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import withAuth from "@/HOCs/withAuth";
import numeral from "numeral";
import { Add, Edit2, Trash } from "iconsax-react";

const products = [
  {
    id: "1",
    name: "Watch Nike Series 7",
    img: "https://cdn.tgdd.vn/Products/Images/7077/254326/s16/apple-watch-series-7-gps-41mm-den-650x650.png",
    brand: "Apple",
    stock: 100,
    sales: 1234,
    price: 399,
    active: true,
  },
  {
    id: "2",
    name: "iPhone 13 Pro",
    img: "https://vuatao.vn/wp-content/uploads/2021/12/iphone-13-pro-max-blue-650x650-1.png",
    brand: "Apple",
    stock: 2,
    sales: 500,
    price: 2999,
    active: true,
  },
  {
    id: "3",
    name: "iPhone 12 Mini",
    img: "https://product.hstatic.net/1000300544/product/iphone-12-mini-purple-select-2021_a6825ab3188e424899696961cf20f51a.png",
    brand: "Apple",
    stock: 110,
    sales: 789,
    price: 2699,
    active: false,
  },
  {
    id: "4",
    name: "AirPods 3 Generation",
    img: "https://vuatao.vn/wp-content/uploads/2021/10/airpods-3-thumb-650x650-1.png",
    brand: "Apple",
    stock: 10,
    sales: 2342,
    price: 179,
    active: false,
  },
  {
    id: "5",
    name: "Galaxy Z Flip 5G",
    img: "https://images.samsung.com/is/image/samsung/au-galaxy-z-flip-5g-f707-sm-f707bznaxsa-frontmysticbronze-thumb-302686147",
    brand: "Samsung",
    stock: 245,
    sales: 90,
    price: 399,
    active: true,
  },
  {
    id: "6",
    name: "Samsung Galaxy A52 5G",
    img: "https://images.samsung.com/is/image/samsung/p6pim/hk_en/galaxy-a52/gallery/hk-en-galaxy-a52-5g-a526-sm-a5260zkhtgy-399623589?$624_624_PNG$",
    brand: "Samsung",
    stock: 100,
    sales: 1234,
    price: 399.99,
    active: false,
  },
  {
    id: "7",
    name: "Macbook Pro 14-inch",
    img: "https://techbook.vn/uploads/products/1654847177_macbook-pro-14-inch-m1-pro-2021-bac-650x650.png",
    brand: "Apple",
    stock: 5,
    sales: 3456,
    price: 2499.99,
    active: true,
  },
  {
    id: "8",
    name: "Macbook Air 13-inch",
    img: "https://vuatao.vn/wp-content/uploads/2021/06/macbook-air-m1-2020-8-core-gpu-silver-thumb-650x650-1.png",
    brand: "Apple",
    stock: 9,
    sales: 4156,
    price: 1249,
    active: true,
  },
  {
    id: "9",
    name: "iPhone 13 Pro Max",
    img: "https://vuatao.vn/wp-content/uploads/2021/12/iphone-13-pro-max-blue-650x650-1.png",
    brand: "Apple",
    stock: 999,
    sales: 234,
    price: 1099,
    active: true,
  },
  {
    id: "10",
    name: "Silver Aluminium Case White Sport Band",
    img: "https://thanhmobile.vn/uploads/plugin/product_items/586/apple-watch-series-4-silver-aluminum-case-with-white-sport-band-gps-apple-watch-alu-silver-sport-white-s4-gps-1.png",
    brand: "Apple",
    stock: 100,
    sales: 1234,
    price: 279,
    active: false,
  },
];

const Products = () => {
  return (
    <div className="bg-white h-full rounded-xl py-6 px-8 shadow-custom-1 flex flex-col gap-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">Product List</h3>
          <p className="text-grey-scale-400 text-sm">Detailed information about your products</p>
        </div>
        <Button className="gap-1" size="lg" color="primary" startContent={<Add color="#ffffff" />}>
          New Product
        </Button>
      </div>
      <Table
        isHeaderSticky
        removeWrapper
        color="primary"
        selectionMode="multiple"
        aria-label="Products table"
        classNames={{
          base: "max-h-[585px] overflow-scroll hidden-scrollbar",
          th: "text-base font-normal text-grey-scale-400",
          td: "text-base font-medium",
        }}
      >
        <TableHeader>
          <TableColumn className="text-base">Product name</TableColumn>
          <TableColumn>Brand</TableColumn>
          <TableColumn>Stock</TableColumn>
          <TableColumn>Sales</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell className="flex items-center gap-3">
                <img src={product.img} width={50} />
                <span>{product.name}</span>
              </TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell className={product.stock <= 10 ? "text-red-500" : ""}>
                {product.stock}
              </TableCell>
              <TableCell>{numeral(product.sales).format("0,0")}</TableCell>
              <TableCell>{"$" + numeral(product.price).format("0,0.00")}</TableCell>
              <TableCell>
                <Switch defaultSelected={product.active} />
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Button variant="light" isIconOnly>
                    <Edit2 color="#697689" />
                  </Button>
                  <Button variant="light" isIconOnly>
                    <Trash color="#f31260" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex w-full justify-end">
        <Pagination showShadow isCompact={false} showControls color="primary" page={1} total={5} />
      </div>
    </div>
  );
};

export default withAuth(Products);
