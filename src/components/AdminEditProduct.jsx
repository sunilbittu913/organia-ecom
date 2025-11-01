const AdminEditProduct = () => (
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-charcoal dark:text-off-white text-3xl font-bold tracking-tight">Edit Product</h1>
              <p className="mt-1 text-charcoal/70 dark:text-off-white/70">
                Update the details for Heirloom Tomatoes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-background-dark/70 p-6 rounded-xl border border-beige-neutral dark:border-white/10">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="product-name">
                        Product Name
                      </label>
                      <input
                        className="mt-1 block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                        defaultValue="Heirloom Tomatoes"
                        id="product-name"
                        name="product-name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="category">
                        Category
                      </label>
                      <select
                        className="mt-1 block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white focus:border-green-primary focus:ring-green-primary"
                        defaultValue="Vegetables"
                        id="category"
                        name="category"
                      >
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Leafy Greens</option>
                        <option>Herbs</option>
                        <option>Root Vegetables</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        className="mt-1 block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                        defaultValue="Rich, juicy, and full of flavor, these heirloom tomatoes are grown using organic methods to bring the best of nature to your table."
                        id="description"
                        name="description"
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="price">
                          Price
                        </label>
                        <div className="relative mt-1 rounded-md">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/60 dark:text-off-white/60 sm:text-sm">
                            $
                          </div>
                          <input
                            className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 pl-7 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                            defaultValue="4.50"
                            id="price"
                            name="price"
                            type="text"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 dark:text-off-white/80" htmlFor="stock-quantity">
                          Stock Quantity
                        </label>
                        <input
                          className="mt-1 block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:border-green-primary focus:ring-green-primary"
                          defaultValue="80"
                          id="stock-quantity"
                          name="stock-quantity"
                          type="number"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white dark:bg-background-dark/70 p-6 rounded-xl border border-beige-neutral dark:border-white/10">
                  <h3 className="text-base font-medium text-charcoal dark:text-off-white mb-4">Product Image</h3>
                  <div className="space-y-4">
                    <img
                      alt="Heirloom Tomatoes"
                      className="w-full h-48 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0F2C8CvCrv0LCLn2BP3HCPLeEwo0UwrihXcEsaawE8GKMtFxBlouGZcstoITMwzStcC4tBxhpGxnSdVJ4oXV4Bq212S4WEV4m9GJ6F2Xfxmn9O4vq6071TMO9fkepT8ADlZ_mm_XbQ05Ug5l-ljGeMfiDAJskJn4ZeozzL6LfbhPl3SLNbaFBX27Rb2-0yqDMp4hAE1YOvAdGopq9OP9Fopo2WaejF1D7larXsrOkqV7MEqdD67V0P_UZV3PghfyaGjeKcaomAoc"
                    />
                    <button
                      className="w-full text-sm font-semibold text-green-primary hover:text-green-primary/90 dark:text-green-primary/80 dark:hover:text-green-primary"
                      type="button"
                    >
                      Change image
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-dark/70 p-6 rounded-xl border border-beige-neutral dark:border-white/10">
                  <h3 className="text-base font-medium text-charcoal dark:text-off-white mb-4">Status</h3>
                  <select
                    className="block w-full rounded-lg border-beige-neutral dark:border-white/20 bg-off-white dark:bg-background-dark/70 text-sm text-charcoal dark:text-off-white focus:border-green-primary focus:ring-green-primary"
                    defaultValue="In Stock"
                    id="status"
                    name="status"
                  >
                    <option>In Stock</option>
                    <option>Low Stock</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <a
                className="px-6 py-2.5 rounded-lg text-sm font-medium bg-off-white dark:bg-background-dark/70 text-charcoal/80 dark:text-off-white/80 hover:bg-off-white/80 dark:hover:bg-background-dark/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-neutral/80 dark:focus:ring-offset-background-dark"
                href="/products"
              >
                Cancel
              </a>
              <button
                className="px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-green-primary hover:bg-green-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-primary/50 dark:focus:ring-offset-background-dark"
                type="submit"
              >
                Update Product
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminEditProduct;
