const AdminOrderProcessing = () => {
  const metrics = [
    { label: "Total Pending Orders", value: "42", delta: "+5.2%" },
    { label: "Orders to be Shipped", value: "15", delta: "+2.1%" },
    { label: "Today's Revenue", value: "$1,250.75", delta: "-1.5%" },
    { label: "Total Orders", value: "1,234", delta: "+10.0%" },
  ];

  const orders = [
    {
      id: "#ORD-001",
      customer: "Jane Cooper",
      date: "Oct 24, 2023",
      total: "$125.50",
      status: "Delivered",
    },
    {
      id: "#ORD-002",
      customer: "Wade Warren",
      date: "Oct 23, 2023",
      total: "$89.99",
      status: "Pending",
    },
    {
      id: "#ORD-003",
      customer: "Esther Howard",
      date: "Oct 23, 2023",
      total: "$204.00",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      customer: "Cameron Williamson",
      date: "Oct 22, 2023",
      total: "$32.50",
      status: "Cancelled",
    },
    {
      id: "#ORD-005",
      customer: "Brooklyn Simmons",
      date: "Oct 21, 2023",
      total: "$150.00",
      status: "Delivered",
    },
  ];

  const statusStyles = {
    Delivered: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    Shipped: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    Cancelled: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  };

  const deltaTone = (delta) => {
    if (delta.startsWith("-")) {
      return "text-red-500 dark:text-red-400";
    }
    if (delta.startsWith("+")) {
      return "text-green-600 dark:text-green-400";
    }
    return "text-charcoal/70 dark:text-off-white/70";
  };

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
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-primary/10 dark:hover:bg-background-dark/70 text-charcoal dark:text-off-white/80"
                  href="/products/categories"
                >
                  <span className="material-symbols-outlined">folder</span>
                  <p className="text-sm font-medium leading-normal">Categories</p>
                </a>
                <a
                  aria-current="page"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-green-primary/15 text-green-primary font-semibold"
                  href="/orders"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shopping_bag
                  </span>
                  <p className="text-sm leading-normal">Orders</p>
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
        <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
          <div className="flex-1 px-6 lg:px-10 py-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold leading-tight text-charcoal dark:text-off-white">Order Management</h1>
                <p className="text-sm text-charcoal/70 dark:text-off-white/70">
                  View, filter, and manage all customer orders.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-green-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-primary/90 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add New Order
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70 px-6 py-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-charcoal/70 dark:text-off-white/70">{item.label}</p>
                  <p className="text-3xl font-bold leading-tight text-charcoal dark:text-off-white">{item.value}</p>
                  <p className={`text-sm font-medium ${deltaTone(item.delta)}`}>{item.delta}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70 p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <label className="lg:col-span-2 flex flex-col">
                  <div className="flex h-10 items-stretch rounded-lg border border-beige-neutral dark:border-white/20 bg-background-light dark:bg-background-dark focus-within:border-green-primary focus-within:ring-2 focus-within:ring-green-primary/20">
                    <div className="flex items-center justify-center pl-3 text-charcoal/60 dark:text-off-white/60">
                      <span className="material-symbols-outlined text-xl">search</span>
                    </div>
                    <input
                      className="form-input w-full flex-1 border-0 bg-transparent px-3 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:outline-none focus:ring-0"
                      placeholder="Search by Order ID or Customer Name..."
                      type="search"
                    />
                  </div>
                </label>
                <label className="flex flex-col">
                  <select className="form-select h-10 rounded-lg border border-beige-neutral dark:border-white/20 bg-background-light dark:bg-background-dark text-sm text-charcoal dark:text-off-white focus:border-green-primary focus:outline-none focus:ring-2 focus:ring-green-primary/20">
                    <option>All Statuses</option>
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </label>
                <label className="flex flex-col">
                  <div className="flex h-10 items-stretch rounded-lg border border-beige-neutral dark:border-white/20 bg-background-light dark:bg-background-dark focus-within:border-green-primary focus-within:ring-2 focus-within:ring-green-primary/20">
                    <div className="flex items-center justify-center pl-3 text-charcoal/60 dark:text-off-white/60">
                      <span className="material-symbols-outlined text-xl">calendar_month</span>
                    </div>
                    <input
                      className="form-input w-full flex-1 border-0 bg-transparent px-3 text-sm text-charcoal dark:text-off-white placeholder:text-charcoal/50 dark:placeholder:text-off-white/60 focus:outline-none focus:ring-0"
                      onFocus={(event) => {
                        event.target.type = "date";
                      }}
                      onBlur={(event) => {
                        event.target.type = "text";
                      }}
                      placeholder="Select Date Range"
                      type="text"
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-beige-neutral dark:border-white/10 bg-white dark:bg-background-dark/70">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-beige-neutral dark:divide-white/10 text-left text-sm">
                  <thead className="bg-off-white dark:bg-background-dark/70 text-xs font-semibold uppercase tracking-wider text-charcoal/60 dark:text-off-white/60">
                    <tr>
                      <th className="px-6 py-3">
                        <input
                          className="form-checkbox rounded border-gray-400 text-green-primary focus:ring-green-primary dark:border-white/30 dark:bg-transparent"
                          type="checkbox"
                        />
                      </th>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beige-neutral dark:divide-white/10">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4">
                          <input
                            className="form-checkbox rounded border-gray-400 text-green-primary focus:ring-green-primary dark:border-white/30 dark:bg-transparent"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-charcoal dark:text-off-white">{order.id}</td>
                        <td className="px-6 py-4 text-charcoal/80 dark:text-off-white/70">{order.customer}</td>
                        <td className="px-6 py-4 text-charcoal/70 dark:text-off-white/70">{order.date}</td>
                        <td className="px-6 py-4 text-charcoal/80 dark:text-off-white/70">{order.total}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[order.status]}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-sm font-semibold text-green-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-charcoal/70 dark:text-off-white/70 sm:flex-row">
                <span>Showing 1 to 5 of 42 results</span>
                <div className="inline-flex items-center gap-2">
                  <button className="flex size-8 items-center justify-center rounded border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70 hover:bg-green-primary/10 hover:text-green-primary">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button className="flex size-8 items-center justify-center rounded border border-green-primary bg-green-primary text-white text-xs font-bold">
                    1
                  </button>
                  <button className="flex size-8 items-center justify-center rounded border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70 hover:bg-green-primary/10 hover:text-green-primary">
                    2
                  </button>
                  <button className="flex size-8 items-center justify-center rounded border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70 hover:bg-green-primary/10 hover:text-green-primary">
                    3
                  </button>
                  <button className="flex size-8 items-center justify-center rounded border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/70 text-charcoal/70 dark:text-off-white/70 hover:bg-green-primary/10 hover:text-green-primary">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminOrderProcessing;
