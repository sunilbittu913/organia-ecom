const AdminRegister = () => (
  <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
    <div className="layout-container flex h-full grow flex-col">
      <main className="flex-1">
        <div className="flex h-full min-h-screen">
          <div className="relative hidden lg:block lg:w-1/2">
            <img
              alt="Fresh organic produce laid out on a table, highlighting healthy natural ingredients."
              className="absolute h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmm5V8-fQK2usXl-HwxgWVST2Wkez6tlVaBJVtv8407NiIrvVfyKlTQoaXn71lD3LRaDmd7I3ERfPTIsuNkIaJUWgOslYVgpkstOX6pjCuoIZQCJm7K2WhlPuQu6IQYG9-Qjnh3EICFFAPVWI3jZ1PnRvu3tSaVh1gCCnMM7MEhWM4uR62PrpuLKKgkBPp7YFvQsEJj0TeAwefrqsZ2TY-f7ojc1IwtXFBwCJWKvyCBpVMcEDLJ0c8U99ACkr9B0-Eha_P29yFoQM"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-off-white dark:bg-background-dark p-6 md:p-12 lg:w-1/2">
            <div className="flex w-full max-w-md flex-col items-start gap-8">
              <header className="flex w-full flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-primary text-4xl">eco</span>
                  <span className="text-2xl font-bold text-charcoal dark:text-off-white">Organics Admin</span>
                </div>
                <div className="w-full">
                  <p className="text-charcoal dark:text-off-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    Create an Admin Account
                  </p>
                  <p className="text-charcoal/70 dark:text-off-white/70 mt-2">
                    Fill in the details below to get started managing the marketplace.
                  </p>
                </div>
              </header>
              <form className="flex w-full flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                <div className="flex flex-col min-w-40 flex-1">
                  <label className="text-charcoal dark:text-off-white text-base font-medium leading-normal pb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] text-base font-normal leading-normal"
                    id="fullName"
                    placeholder="e.g., Jane Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col min-w-40 flex-1">
                  <label className="text-charcoal dark:text-off-white text-base font-medium leading-normal pb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] text-base font-normal leading-normal"
                    id="email"
                    placeholder="e.g., jane.doe@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col min-w-40 flex-1">
                  <label className="text-charcoal dark:text-off-white text-base font-medium leading-normal pb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      id="password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <div className="text-charcoal/60 dark:text-off-white/60 flex border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col min-w-40 flex-1">
                  <label className="text-charcoal dark:text-off-white text-base font-medium leading-normal pb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-off-white focus:outline-0 focus:ring-2 focus:ring-green-primary/50 border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 h-14 placeholder:text-charcoal/50 dark:placeholder:text-off-white/50 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      type="password"
                    />
                    <div className="text-charcoal/60 dark:text-off-white/60 flex border border-beige-neutral dark:border-white/20 bg-white dark:bg-background-dark/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </div>
                  </div>
                </div>
                <button
                  className="flex h-14 w-full items-center justify-center rounded-lg bg-green-primary px-6 text-base font-semibold text-white transition-colors hover:bg-green-primary/90 focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <p className="text-sm text-charcoal/60 dark:text-off-white/60 text-center w-full">
                Already have an account? <a className="font-medium text-green-primary hover:underline" href="/">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminRegister;
