const AdminSystemSettings = () => (
  <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
    <div className="relative flex min-h-screen w-full flex-col group/design-root text-text-light-primary dark:text-text-dark-primary">
      <div className="flex flex-1">
        <aside className="flex flex-col w-64 bg-white dark:bg-zinc-900 border-r border-border-light dark:border-border-dark">
          <div className="flex h-full min-h-0 flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center px-3 py-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  data-alt="Admin user avatar"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrDG8BCdxpiUDNfKyM20K-p4Sr-daA6_nCFNlPMECOIpD6i2mxC65PPnC5-deilGZsihyz6uxK56hS8PvhveygBp3WbdpdFtoeOQfn1cQk5zogCMjVQF6JjL2o2S4SiyMrnyMMJdQ5tviyO47bxcj4BGjQFZq__KmOBMLf6aJHcgVe7SVLAdFJ-S0VnnDdOjyea4rNTAw-A_2_Om1vOquNbRGkyE2SQArKofR1WsbRy6VA-ufmD-dtWaOz5hvhaJoCOp-sicT-N4g')",
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">
                    Admin Name
                  </h1>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                    Administrator
                  </p>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5"
                  href="/dashboard"
                >
                  <span className="material-symbols-outlined text-2xl">dashboard</span>
                  <p className="text-sm font-medium leading-normal">Dashboard</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5"
                  href="/products"
                >
                  <span className="material-symbols-outlined text-2xl">local_mall</span>
                  <p className="text-sm font-medium leading-normal">Products</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5"
                  href="#"
                >
                  <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  <p className="text-sm font-medium leading-normal">Orders</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5"
                  href="#"
                >
                  <span className="material-symbols-outlined text-2xl">group</span>
                  <p className="text-sm font-medium leading-normal">Customers</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="/settings">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    settings
                  </span>
                  <p className="text-sm font-medium leading-normal">Settings</p>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-1">
              <a
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5"
                href="#"
              >
                <span className="material-symbols-outlined text-2xl">logout</span>
                <p className="text-sm font-medium leading-normal">Logout</p>
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between gap-3 items-center">
              <p className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                System Settings
              </p>
            </div>
            <div className="mt-8 pb-3">
              <div className="flex border-b border-border-light dark:border-border-dark gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4" href="#">
                  <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">General</p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">
                    Notifications
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">
                    Integrations
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-normal tracking-[0.015em]">
                    Data Management
                  </p>
                </a>
              </div>
            </div>
            <div className="space-y-10">
              <section>
                <h2 className="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  General Settings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <label className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Application Name
                    </p>
                    <input
                      className="form-input w-full rounded-lg text-text-light-primary dark:text-text-dark-primary border-border-light dark:border-border-dark bg-white dark:bg-zinc-800 h-12 px-4 text-base font-normal leading-normal focus:ring-primary focus:border-primary"
                      defaultValue="Organic Foods & Plants"
                    />
                  </label>
                  <label className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Public Contact Email
                    </p>
                    <input
                      className="form-input w-full rounded-lg text-text-light-primary dark:text-text-dark-primary border-border-light dark:border-border-dark bg-white dark:bg-zinc-800 h-12 px-4 text-base font-normal leading-normal focus:ring-primary focus:border-primary"
                      defaultValue="contact@organicfoods.com"
                      type="email"
                    />
                  </label>
                  <label className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Default Currency
                    </p>
                    <select className="form-select w-full rounded-lg text-text-light-primary dark:text-text-dark-primary border-border-light dark:border-border-dark bg-white dark:bg-zinc-800 h-12 px-4 text-base font-normal leading-normal focus:ring-primary focus:border-primary">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                    </select>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Timezone
                    </p>
                    <select className="form-select w-full rounded-lg text-text-light-primary dark:text-text-dark-primary border-border-light dark:border-border-dark bg-white dark:bg-zinc-800 h-12 px-4 text-base font-normal leading-normal focus:ring-primary focus:border-primary">
                      <option>UTC-05:00 - Eastern Time</option>
                      <option>UTC+00:00 - Coordinated Universal Time</option>
                      <option>UTC+01:00 - Central European Time</option>
                    </select>
                  </label>
                </div>
              </section>
              <section>
                <h2 className="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  Notification Preferences
                </h2>
                <div className="space-y-6">
                  <label className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Admin Email for Notifications
                    </p>
                    <input
                      className="form-input max-w-md w-full rounded-lg text-text-light-primary dark:text-text-dark-primary border-border-light dark:border-border-dark bg-white dark:bg-zinc-800 h-12 px-4 text-base font-normal leading-normal focus:ring-primary focus:border-primary"
                      defaultValue="admin@organicfoods.com"
                      type="email"
                    />
                  </label>
                  <div className="flex items-center justify-between max-w-md">
                    <div>
                      <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">
                        Email alerts for new orders
                      </p>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                        Receive an email for every new order placed.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                    </label>
                  </div>
                  <div className="flex items-center justify-between max-w-md">
                    <div>
                      <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium">
                        Alerts for low stock
                      </p>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                        Get notified when product stock is low.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                    </label>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <footer className="sticky bottom-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-border-light dark:border-border-dark w-full z-10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-end py-4">
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default AdminSystemSettings;
