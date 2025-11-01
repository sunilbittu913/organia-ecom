const AdminCreateProduct = () => (
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
                href="/orders"
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <a
                  className="p-2 rounded-lg hover:bg-off-white dark:hover:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70"
                  href="/products"
                  aria-label="Back to product list"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </a>
                <h1 className="text-charcoal dark:text-off-white text-3xl font-bold tracking-tight">Create New Product</h1>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark/70 p-6 sm:p-8 rounded-xl border border-beige-neutral dark:border-white/10">
              <form className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="product-name">
                      Product Name
                    </label>
                    <input
                      className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                      id="product-name"
                      placeholder="e.g., Organic Heirloom Tomatoes"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                      id="description"
                      placeholder="Enter a detailed description of the product..."
                      rows={6}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="category">
                        Category
                      </label>
                      <select
                        className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white focus:border-green-primary focus:ring-green-primary"
                        id="category"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Herbs</option>
                        <option>Leafy Greens</option>
                        <option>Root Vegetables</option>
                      </select>
                    </div>
                    <div>
                      <span className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80">Status</span>
                      <div className="flex items-center gap-3 rounded-lg border border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 px-3 py-2.5">
                        <input defaultChecked className="switch-toggle" id="status" type="checkbox" />
                        <label className="text-sm text-charcoal dark:text-off-white" htmlFor="status">
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="price">
                        Price
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/60 dark:text-off-white/60 sm:text-sm">
                          $
                        </div>
                        <input
                          className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 pl-7 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                          id="price"
                          placeholder="0.00"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="stock">
                        Stock Quantity
                      </label>
                      <input
                        className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                        id="stock"
                        placeholder="0"
                        type="number"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 space-y-1.5">
                  <span className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80">Product Image</span>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 transition-colors hover:bg-off-white/80 dark:hover:bg-background-dark/60"
                      htmlFor="dropzone-file"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <span className="material-symbols-outlined text-4xl text-charcoal/40 dark:text-off-white/50">upload_file</span>
                        <p className="mb-2 text-sm text-charcoal/70 dark:text-off-white/70">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-charcoal/60 dark:text-off-white/60">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input className="hidden" id="dropzone-file" type="file" />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-3 mt-2 flex items-center justify-end gap-4 border-t border-beige-neutral pt-4 dark:border-white/10">
                  <a
                    className="rounded-lg border border-beige-neutral bg-white px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-off-white/80 focus:outline-none focus:ring-2 focus:ring-charcoal/10 dark:border-white/20 dark:bg-background-dark dark:text-off-white dark:hover:bg-background-dark/70"
                    href="/products"
                  >
                    Cancel
                  </a>
                  <button
                    className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-green-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-primary/90 focus:outline-none focus:ring-2 focus:ring-green-primary/40"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-base">save</span>
                    <span>Save Product</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminCreateProduct;
