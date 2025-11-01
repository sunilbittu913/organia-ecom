const AdminProductManagement = () => {
  const products = [
    {
      name: "Organic Spinach",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC2M1cIJKGjKX93xGWz7BALFhPVI_kslsP3x1s1ZLkV5KaUWFfw1puDA30eIIZFCPTccEYLV-VC5Y7MvEH-gP-H-rAZ8DrhSzQKYCNbu7Jrcfha9ZOmZ0NoIoZAV31DCTYKVTAHe9ETlddxf9cfEBdXu0XRUIfpQYp5Hprvj6a1kkuveHM5EqZDixzEmX5qtHpclGT-Mn7tzgs2tGDZX_kfzBBJM3nWEPzQ0_OHpYV1v5a7OFVlM7321Ii_nTGR74qus19eplgE9bg",
      category: "Leafy Greens",
      price: "$3.99",
      stock: "150",
      status: { label: "In Stock", badge: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300" },
    },
    {
      name: "Heirloom Tomatoes",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0F2C8CvCrv0LCLn2BP3HCPLeEwo0UwrihXcEsaawE8GKMtFxBlouGZcstoITMwzStcC4tBxhpGxnSdVJ4oXV4Bq212S4WEV4m9GJ6F2Xfxmn9O4vq6071TMO9fkepT8ADlZ_mm_XbQ05Ug5l-ljGeMfiDAJskJn4ZeozzL6LfbhPl3SLNbaFBX27Rb2-0yqDMp4hAE1YOvAdGopq9OP9Fopo2WaejF1D7larXsrOkqV7MEqdD67V0P_UZV3PghfyaGjeKcaomAoc",
      category: "Vegetables",
      price: "$4.50",
      stock: "80",
      status: { label: "In Stock", badge: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300" },
    },
    {
      name: "Fresh Basil",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuALDbb6tKVElXxFDqYSmRpP4ry9jA2ORRDiHieu466wnczIUT1Sr9UisDEaBmH6as6yeOlC65mmObO0ig6wPA7r8UH8qd2FeUZSota9phDgYw6NbIE798iNzK9e4obx2QGVnwcoflqXM08YKKeqer3VbsZQD4n8jpsBepXXRwev1JWt6Op2x3kQkLv-nrJF-uHB6f7cwb1XE-F7UzNUGOum_ruVfx-fZ3iTCfKaXgKAE52w2NMh4qU5xOVqZdEaesIqOaSGhrQp-hM",
      category: "Herbs",
      price: "$5.00",
      stock: "45",
      status: { label: "Low Stock", badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300" },
    },
    {
      name: "Sweet Strawberries",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFeoeZ78xdlDoNH62gtfFWR00VDOueDsMhOksgF0yCQEKYMga2pH-7Gzykf7GeL_njYEWROU2-EU5LOl4QcZbf4zgdO0cHmLdbiDILVN6e81s2ijMK1ZhuPsFFgjDjrJzt-Wg6iy9uqpkUF4Xu09hKEsyJ3CpJDAwKXuXkjL8sMxZ8ZXPxJE4rZO9tboZV-mD2dPUgZAdXtAPK8STO2uAtV_oRAZnLeYihrbfSKwctLswQKB5YbYZ3aZCd-lzOaEy9ZIs9IzPYYiU",
      category: "Fruits",
      price: "$2.50",
      stock: "200",
      status: { label: "In Stock", badge: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300" },
    },
    {
      name: "Organic Carrots",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBTeywCTKiTY7R21JKqFHR9rCyDAAC7z15C9fEUfR0TTKe5ClGW96A_-xACv8-8SWBtroC1P26DSVELZ7CVQ0ylckGxsxaKEwL-aZza09OW3LMMoQNaF17yo5INTgz1tk3iqjP7YfE7CnoENJl1fRZekhcgyQ2K5LhwfeCI5KebOKR6t5cj7GUenVBWqzMoXK9Fm8mGzXv7JAivBAsegEof0bPNuPKfArdK6J0jVFnS3PyMsqmt5qfxDvdYUiRyHjs1cTRJ9nEL0L4",
      category: "Root Vegetables",
      price: "$6.20",
      stock: "0",
      status: { label: "Out of Stock", badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300" },
    },
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
                aria-current="page"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-primary/15 text-green-primary font-semibold"
                href="/products"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  inventory_2
                </span>
                <p className="text-sm leading-normal">Products</p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                href="/products/categories"
              >
                <span className="material-symbols-outlined">folder</span>
                <p className="text-sm font-medium leading-normal">Categories</p>
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
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <p className="text-charcoal dark:text-off-white text-3xl font-bold tracking-tight">Product Management</p>
            </div>
            <div className="mb-6 bg-white dark:bg-background-dark/70 p-4 rounded-xl border border-beige-neutral dark:border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative w-full sm:max-w-xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/50 dark:text-off-white/60">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 pl-10 py-2.5 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:ring-green-primary focus:border-green-primary"
                    placeholder="Search by product name..."
                    type="text"
                  />
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <select className="w-full sm:w-auto rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white focus:ring-green-primary focus:border-green-primary">
                      <option>All Categories</option>
                      <option>Vegetables</option>
                      <option>Fruits</option>
                      <option>Herbs</option>
                    </select>
                    <select className="w-full sm:w-auto rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white focus:ring-green-primary focus:border-green-primary">
                      <option>All Statuses</option>
                      <option>In Stock</option>
                      <option>Low Stock</option>
                      <option>Out of Stock</option>
                    </select>
                  </div>
                  <a
                    className="flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap rounded-lg bg-green-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-primary/90"
                    href="/products/create"
                  >
                    <span className="material-symbols-outlined">add</span>
                    <span>Add New Product</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70">
                  <table className="min-w-full divide-y divide-beige-neutral dark:divide-white/10">
                    <thead className="bg-off-white dark:bg-background-dark/80">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Product Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-charcoal/70 dark:text-off-white/60">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige-neutral dark:divide-white/10">
                      {products.map((item) => (
                        <tr key={item.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal dark:text-off-white">
                            <div className="flex items-center gap-3">
                              <img alt={item.name} className="size-10 rounded-lg object-cover" src={item.image} />
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">{item.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">{item.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">{item.stock}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.status.badge}`}>
                              {item.status.label}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              <a
                                className="p-2 text-charcoal/60 hover:text-charcoal dark:text-off-white/60 dark:hover:text-off-white"
                                href="/products/edit"
                                title="Edit Product"
                              >
                                <span className="material-symbols-outlined text-base">edit</span>
                              </a>
                              <button className="p-2 text-red-500 hover:text-red-600 dark:hover:text-red-400" title="Delete Product">
                                <span className="material-symbols-outlined text-base">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <nav className="flex items-center space-x-1 text-charcoal/70 dark:text-off-white/70">
                <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70" href="#">
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
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
                <span className="flex size-10 items-center justify-center rounded-lg text-sm">...</span>
                <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-sm" href="#">
                  10
                </a>
                <a className="flex size-10 items-center justify-center rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70" href="#">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </a>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProductManagement;
