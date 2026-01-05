'use client';

import * as React from 'react';
import { ExamDataTable, ColumnDef } from '@/components/exam/exam-table';
import Image from 'next/image';
import * as Typography from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Check, ChevronsUpDown, PencilIcon, Trash2Icon, FilterIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
}

export default function TablesSection() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [products, setProducts] = React.useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const limit = 5;

  // Fetch categories on mount
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const skip = (currentPage - 1) * limit;

        const path =
          selectedCategory && !searchQuery
            ? `category/${selectedCategory}?`
            : `search?q=${searchQuery}&`;

        const response = await fetch(
          `https://dummyjson.com/products/${path}limit=${limit}&skip=${skip}&select=title,price,category,thumbnail,rating,stock`
        );
        const data = await response.json();

        // API doesn't support filter combined,
        // local filter on the results for UI consistency.
        if (searchQuery && selectedCategory) {
          const filteredProducts = data.products.filter(
            (p: ProductData) => p.category.toLowerCase() === selectedCategory.toLowerCase()
          );
          setProducts(filteredProducts);
          setTotalProducts(filteredProducts.length > 0 ? data.total : 0);
        } else {
          setProducts(data.products);
          setTotalProducts(data.total);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery, selectedCategory]);

  const columns: ColumnDef<ProductData>[] = [
    {
      header: 'Produk',
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-slate-100 shrink-0 overflow-hidden border border-slate-200 relative">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-slate-900 line-clamp-1">{item.title}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              {item.category}
            </span>
          </div>
        </div>
      ),
      className: 'min-w-[200px]',
    },
    {
      header: 'Kategori',
      accessorKey: 'category',
      className: 'text-slate-600 capitalize',
    },
    {
      header: 'Harga',
      cell: (item) => (
        <span className="font-semibold text-slate-700">\${item.price.toFixed(2)}</span>
      ),
    },
    {
      header: 'Stok',
      cell: (item) => (
        <Badge
          variant="outline"
          className={cn(
            'font-medium',
            item.stock < 20
              ? 'border-amber-200 bg-amber-50 text-amber-700'
              : 'border-slate-200 text-slate-600'
          )}
        >
          {item.stock} unit
        </Badge>
      ),
    },
    {
      header: 'Rating',
      cell: (item) => (
        <div className="flex items-center text-yellow-500 gap-1">
          <span className="text-sm font-bold">{item.rating}</span>
          <svg className="size-3.5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      ),
    },
    {
      header: 'Aksi',
      align: 'right',
      cell: (item) => <RowActions item={item} />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-12 py-20 px-4 bg-slate-50">
      <div className="text-center space-y-2">
        <Typography.H2>10. Data Tables</Typography.H2>
        <Typography.Muted>
          Clean and dense patterns for displaying tabular data and navigation.
        </Typography.Muted>
      </div>

      <div className="w-full max-w-5xl space-y-8">
        <ExamDataTable
          data={products}
          columns={columns}
          isLoading={isLoading}
          searchValue={searchQuery}
          onSearch={(val) => {
            setSearchQuery(val);
            setCurrentPage(1);
          }}
          filter={
            <AdvancedFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            />
          }
          extraActions={<AddProductDialog />}
          pagination={{
            currentPage,
            totalPages: Math.ceil(totalProducts / limit),
            onPageChange: setCurrentPage,
          }}
        />
      </div>
    </section>
  );
}
function RowActions({ item }: { item: ProductData }) {
  return (
    <div className="flex justify-end gap-1">
      {/* Edit Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-slate-400 hover:text-primary-600 p-2 rounded hover:bg-slate-100 h-9 w-9"
          >
            <PencilIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Produk</DialogTitle>
            <DialogDescription>
              Perbarui informasi produk di sini. Klik simpan saat selesai.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right text-sm font-medium text-slate-600">
                Judul
              </Label>
              <Input id="title" defaultValue={item.title} className="col-span-3 h-9" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right text-sm font-medium text-slate-600">
                Harga
              </Label>
              <Input id="price" defaultValue={item.price} className="col-span-3 h-9" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="text-slate-400 hover:text-red-600 p-2 rounded hover:bg-slate-100 h-9 w-9"
          >
            <Trash2Icon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apakah Anda yakin?</DialogTitle>
            <DialogDescription>
              Tindakan ini tidak dapat dibatalkan. Ini akan menghapus produk **{item.title}** secara
              permanen.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" variant="destructive">
              Hapus Data
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 h-10 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/10">
          Tambah Produk
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Produk Baru</DialogTitle>
          <DialogDescription>Masukkan detail produk baru di bawah ini.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new-title" className="text-right text-sm font-medium text-slate-600">
              Judul
            </Label>
            <Input id="new-title" placeholder="Nama Produk" className="col-span-3 h-9" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="new-price" className="text-right text-sm font-medium text-slate-600">
              Harga
            </Label>
            <Input id="new-price" placeholder="0.00" className="col-span-3 h-9" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
            Tambah Sekarang
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AdvancedFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className={cn(
              'gap-2 border-dashed h-10 px-4',
              selectedCategory
                ? 'border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100'
                : 'border-slate-300 text-slate-500 hover:text-primary-600 hover:border-primary-200'
            )}
          >
            <FilterIcon className="size-4" />
            {selectedCategory ? (
              <span className="capitalize">{selectedCategory}</span>
            ) : (
              'Filter Kategori'
            )}
            <ChevronsUpDown className="size-4 opacity-50" />
          </Button>
          {selectedCategory && (
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
              onClick={() => onCategoryChange(null)}
            >
              <XIcon className="size-4" />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Cari kategori..." />
          <CommandList>
            <CommandEmpty>Kategori tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  onCategoryChange(null);
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'size-4 border rounded-sm flex items-center justify-center',
                      !selectedCategory ? 'bg-primary-600 border-primary-600' : 'border-slate-300'
                    )}
                  >
                    {!selectedCategory && <Check className="size-3 text-white" />}
                  </div>
                  Semua Kategori
                </div>
              </CommandItem>
              {categories.map((cat) => (
                <CommandItem
                  key={cat}
                  onSelect={() => {
                    onCategoryChange(cat);
                    setOpen(false);
                  }}
                  className="cursor-pointer capitalize"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        'size-4 border rounded-sm flex items-center justify-center',
                        selectedCategory === cat
                          ? 'bg-primary-600 border-primary-600'
                          : 'border-slate-300'
                      )}
                    >
                      {selectedCategory === cat && <Check className="size-3 text-white" />}
                    </div>
                    {cat}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
