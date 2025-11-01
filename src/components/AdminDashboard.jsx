const AdminDashboard = () => (
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
                aria-current="page"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-primary/15 text-green-primary font-semibold"
                href="/dashboard"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm leading-normal">Dashboard</p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                href="/products"
              >
                <span className="material-symbols-outlined">grass</span>
                <p className="text-sm font-medium leading-normal">Products</p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                href="/products/categories"
              >
                <span className="material-symbols-outlined">folder</span>
                <p className="text-sm font-medium leading-normal">Categories</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="/orders">
                <span className="material-symbols-outlined">shopping_bag</span>
                <p className="text-sm font-medium leading-normal">Orders</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="#">
                <span className="material-symbols-outlined">group</span>
                <p className="text-sm font-medium leading-normal">Customers</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="#">
                <span className="material-symbols-outlined">bar_chart</span>
                <p className="text-sm font-medium leading-normal">Reports</p>
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80" href="/settings">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
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
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex flex-col gap-1">
              <p className="text-charcoal dark:text-off-white text-3xl font-bold leading-tight tracking-tight">
                Welcome back, Alex!
              </p>
              <p className="text-charcoal/70 dark:text-off-white/70 text-base leading-normal">
                Here's a snapshot of your store's performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-off-white dark:bg-background-dark/70">
              <p className="text-charcoal dark:text-off-white text-base font-medium leading-normal">Total Products</p>
              <p className="text-charcoal dark:text-off-white tracking-tight text-3xl font-bold leading-tight">1,204</p>
              <p className="text-green-primary text-sm font-medium leading-normal">+2.5% this month</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-off-white dark:bg-background-dark/70">
              <p className="text-charcoal dark:text-off-white text-base font-medium leading-normal">Pending Orders</p>
              <p className="text-charcoal dark:text-off-white tracking-tight text-3xl font-bold leading-tight">32</p>
              <p className="text-green-primary text-sm font-medium leading-normal">+5.2% this week</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-off-white dark:bg-background-dark/70">
              <p className="text-charcoal dark:text-off-white text-base font-medium leading-normal">New Customers</p>
              <p className="text-charcoal dark:text-off-white tracking-tight text-3xl font-bold leading-tight">18</p>
              <p className="text-green-primary text-sm font-medium leading-normal">+10% this month</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-off-white dark:bg-background-dark/70">
              <p className="text-charcoal dark:text-off-white text-base font-medium leading-normal">Total Sales (Today)</p>
              <p className="text-charcoal dark:text-off-white tracking-tight text-3xl font-bold leading-tight">$2,450.75</p>
              <p className="text-red-500 dark:text-red-400 text-sm font-medium leading-normal">-1.8% vs yesterday</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-charcoal dark:text-off-white text-xl font-bold leading-tight">Recent Orders</h2>
                <a className="text-green-primary text-sm font-semibold hover:underline" href="/orders">
                  View All Orders
                </a>
              </div>
              <div className="bg-white dark:bg-background-dark rounded-xl border border-beige-neutral dark:border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-off-white dark:bg-background-dark/70 border-b border-beige-neutral dark:border-white/10">
                      <tr>
                        <th className="px-6 py-3 text-xs font-semibold text-charcoal/70 dark:text-off-white/60 uppercase tracking-wider">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-charcoal/70 dark:text-off-white/60 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-charcoal/70 dark:text-off-white/60 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-charcoal/70 dark:text-off-white/60 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-charcoal/70 dark:text-off-white/60 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-beige-neutral dark:divide-white/10">
                      {[
                        { id: "#A345B", customer: "Jane Cooper", date: "May 20, 2024", total: "$128.50", status: "Shipped", badge: "bg-green-100 text-green-800" },
                        { id: "#C678D", customer: "Wade Warren", date: "May 20, 2024", total: "$75.00", status: "Processing", badge: "bg-yellow-100 text-yellow-800" },
                        { id: "#E912F", customer: "Esther Howard", date: "May 19, 2024", total: "$210.20", status: "Shipped", badge: "bg-green-100 text-green-800" },
                        { id: "#G345H", customer: "Cameron Williamson", date: "May 18, 2024", total: "$45.80", status: "Cancelled", badge: "bg-red-100 text-red-800" },
                        { id: "#I678J", customer: "Brooklyn Simmons", date: "May 17, 2024", total: "$89.99", status: "Shipped", badge: "bg-green-100 text-green-800" },
                      ].map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal dark:text-off-white">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal/70 dark:text-off-white/70">
                            {order.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.badge}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-charcoal dark:text-off-white text-xl font-bold leading-tight mb-4">Quick Actions</h2>
              <div className="flex flex-col gap-4">
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-primary px-5 py-4 text-white text-base font-bold shadow-sm transition-colors hover:bg-green-primary/90"
                  href="/products/create"
                >
                  <span className="material-symbols-outlined">add_circle</span> Add New Product
                </a>
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white dark:bg-background-dark px-5 py-4 text-charcoal dark:text-off-white text-base font-semibold border border-beige-neutral dark:border-white/10 transition-colors hover:bg-off-white dark:hover:bg-background-dark/70"
                  href="/products/categories"
                >
                  <span className="material-symbols-outlined">category</span> Manage Categories
                </a>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white dark:bg-background-dark px-5 py-4 text-charcoal dark:text-off-white text-base font-semibold border border-beige-neutral dark:border-white/10 hover:bg-off-white dark:hover:bg-background-dark/70 transition-colors">
                  <span className="material-symbols-outlined">ios_share</span> Export Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminDashboard;
