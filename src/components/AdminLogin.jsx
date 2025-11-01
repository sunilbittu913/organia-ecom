const AdminLogin = () => (
  <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
    <div className="layout-container flex h-full grow flex-col">
      <main className="flex-1">
        <div className="flex h-full min-h-screen">
          <div className="relative hidden lg:block lg:w-1/2">
            <img
              alt="A lush overhead view of various organic vegetables and herbs growing in a garden, symbolizing freshness and nature."
              className="absolute h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARCtv0Obcm9mt2_BsqzHqL4NRGgZi6Rpu1CZSQBqjayAD7FYgO9_aSc5ixPUnonnsgW7gPVpajzquOQu9JFZZij-vDc4lLPrSaQSYA9b41xlnzjmKiDNfNY2xSx4TQobGKudMXQA4BXyDvw91fiBU0j4xG-f1vxu6iKW99jglZdXMSgrlMIwgrQbDfQclrlIhQDCyn-tJ6xQoWPF1IgoKnqVqclPKbXVa8g7avE6JPPLaCDWSAFePre20cHasN8-eqDPZ4a0ZS3q4"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-off-white dark:bg-background-dark p-6 md:p-12 lg:w-1/2">
            <div className="flex w-full max-w-md flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-primary text-4xl">eco</span>
                  <span className="text-2xl font-bold text-charcoal dark:text-off-white">Organics Admin</span>
                </div>
                <div className="w-full">
                  <p className="text-charcoal dark:text-off-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Welcome Back
                  </p>
                  <p className="text-charcoal/70 dark:text-off-white/70 mt-2">
                    Enter your credentials to access the dashboard.
                  </p>
                </div>
              </div>
              <form className="flex w-full flex-col gap-6" onSubmit={(event) => event.preventDefault()}>
                <div className="flex flex-col min-w-40 flex-1">
                  <label
                    className="text-charcoal dark:text-off-white text-base font-medium leading-normal pb-2"
                    htmlFor="email"
                  >
                    Email Address / Username
                  </label>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <div className="text-charcoal/60 dark:text-off-white/60 flex border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col min-w-40 flex-1">
                  <div className="flex justify-between items-center pb-2">
                    <label className="text-charcoal dark:text-off-white text-base font-medium leading-normal" htmlFor="password">
                      Password
                    </label>
                    <a className="text-sm font-medium text-green-primary hover:underline" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      id="password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <div className="text-charcoal/60 dark:text-off-white/60 flex border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                      <span className="material-symbols-outlined">visibility</span>
                    </div>
                  </div>
                </div>
                <button
                  className="flex h-14 w-full items-center justify-center rounded-lg bg-green-primary px-6 text-base font-semibold text-white transition-colors hover:bg-green-primary/90 focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p className="text-sm text-charcoal/60 dark:text-off-white/60 text-center w-full">
                © 2024 Organics Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminLogin;
