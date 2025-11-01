const AdminProductCategories = () => {
  const categories = [
    { name: "Vegetables", products: 34 },
    { name: "Fruits", products: 28 },
    { name: "Herbs", products: 15 },
    { name: "House Plants", products: 22 },
    { name: "Dairy & Eggs", products: 18 },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-charcoal dark:text-off-white min-h-screen">
      <div className="flex min-h-screen">
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-beige-neutral dark:border-white/20 flex flex-col">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2">
                <div className="bg-green-primary/15 rounded-lg p-2 text-green-primary">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-charcoal dark:text-off-white text-base font-bold leading-normal">Organia</h1>
                  <p className="text-charcoal/60 dark:text-off-white/70 text-sm leading-normal">Admin Panel</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2 mt-6">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="/dashboard"
                >
                  <span className="material-symbols-outlined">dashboard</span>
                  <p className="text-sm font-medium leading-normal">Dashboard</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="/products"
                >
                  <span className="material-symbols-outlined">inventory_2</span>
                  <p className="text-sm font-medium leading-normal">Products</p>
                </a>
                <a
                  aria-current="page"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-primary/15 text-green-primary font-semibold"
                  href="/products/categories"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    folder
                  </span>
                  <p className="text-sm leading-normal">Categories</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="#"
                >
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <p className="text-sm font-medium leading-normal">Orders</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="#"
                >
                  <span className="material-symbols-outlined">group</span>
                  <p className="text-sm font-medium leading-normal">Customers</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="#"
                >
                  <span className="material-symbols-outlined">bar_chart</span>
                  <p className="text-sm font-medium leading-normal">Analytics</p>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="#">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium leading-normal">Settings</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="#">
                <span className="material-symbols-outlined">logout</span>
                <p className="text-sm font-medium leading-normal">Logout</p>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-beige-neutral dark:border-white/20 px-6 lg:px-10 py-4 bg-white dark:bg-background-dark">
            <div className="flex-1 max-w-md">
              <label className="flex flex-col">
                <div className="flex w-full items-stretch rounded-lg h-10">
                  <div className="text-charcoal/60 dark:text-off-white/60 flex border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark items-center justify-center pl-3 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-1 focus:ring-green-primary border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark h-full placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 px-4 rounded-l-none border-l-0"
                    placeholder="Search for products, orders..."
                    type="search"
                  />
                </div>
              </label>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative flex cursor-pointer items-center justify-center rounded-full size-10 hover:bg-off-white dark:hover:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
                </span>
              </button>
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  data-alt="Admin user profile picture"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVyZa3MAfEH5isHYaeVwi_vu6x6V2FMdrQ4XVuAPGkBxKY925WqwbtZiqG8HTwV-F34Dpsa5lDmOAlrKZ6c2o9Z6lXNTsW1ymP9pQWqQdhqhte-ZckNN5xtErKV_tKUBTIsOnLbLPLWjvREzf7mIfAbhDTuY99KUtQrsYFqM23QIhGq317fFLof36ky1sOnuQzsDFrv1NaBUOtY9xLoHsVCW2wP3D0vYI9bgfkBLPkEX4NUXH2ccbRdGMt7Wiy9lT-V1YLwzh3bYk')",
                  }}
                />
                <div className="flex flex-col text-right">
                  <p className="text-charcoal dark:text-off-white text-sm font-semibold">Alex Doe</p>
                  <p className="text-charcoal/60 dark:text-off-white/60 text-xs">Administrator</p>
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-charcoal dark:text-off-white text-3xl font-bold tracking-tight">Product Categories</h1>
                <p className="text-charcoal/70 dark:text-off-white/70 text-base leading-normal">
                  Manage all product categories in your store.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-green-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-primary/90">
                <span className="material-symbols-outlined">add_circle</span>
                <span>Add New Category</span>
              </button>
            </div>
            <div className="mb-6 rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70 p-4">
              <div className="flex w-full items-stretch rounded-lg h-12">
                <div className="flex items-center justify-center rounded-l-lg border border-beige-neutral dark:border-white/10 bg-off-white dark:bg-background-dark/70 px-4 text-charcoal/60 dark:text-off-white/60">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-beige-neutral dark:border-white/10 bg-off-white dark:bg-background-dark/70 px-4 text-base text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary rounded-l-none"
                  placeholder="Search categories..."
                  type="search"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70">
              <table className="w-full">
                <thead className="bg-off-white dark:bg-background-dark/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-charcoal/70 dark:text-off-white/70">
                      Category Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-charcoal/70 dark:text-off-white/70">
                      No. of Products
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide text-charcoal/70 dark:text-off-white/70">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.name} className="border-t border-beige-neutral dark:border-white/10">
                      <td className="px-6 py-4 text-sm font-medium text-charcoal dark:text-off-white">{category.name}</td>
                      <td className="px-6 py-4 text-sm text-charcoal/70 dark:text-off-white/70">{category.products}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <button className="text-green-primary hover:text-green-primary/80 transition-colors" type="button">
                            <span className="material-symbols-outlined">edit</span>
                          </button>
                          <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors" type="button">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-center border-t border-beige-neutral dark:border-white/10 p-4">
                <nav className="flex items-center space-x-1 text-charcoal/70 dark:text-off-white/70">
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70" href="#">
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg bg-green-primary text-white text-sm font-bold" href="#">
                    1
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                    2
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                    3
                  </a>
                  <span className="flex size-10 items-center justify-center text-sm text-charcoal/50 dark:text-off-white/60">...</span>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                    8
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                    9
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                    10
                  </a>
                  <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70" href="#">
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProductCategories;
