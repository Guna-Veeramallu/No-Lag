import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";
import "../../styles/GuestPage.css";


const TabsContext = createContext(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tab components must be used within <Tabs>");
  return ctx;
}

// Small helper so an optional extra className can still be merged in.
const cx = (...parts) => parts.filter(Boolean).join(" ");

export function Tabs({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
  className = "",
}) {
  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? controlledValue : uncontrolled;
  const baseId = useId();

  const setValue = useCallback(
    (next) => {
      if (!isControlled) setUncontrolled(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value, setValue, baseId }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className = "", "aria-label": ariaLabel }) {
  const { value } = useTabsContext();
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  // Position the sliding indicator under the active tab.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector('[data-state="active"]');
    if (!active) return;
    setIndicator({
      left: active.offsetLeft,
      width: active.offsetWidth,
      ready: true,
    });
  }, [value, children]);

  // Roving-tabindex keyboard navigation across enabled tabs.
  const onKeyDown = (e) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    const tabs = Array.from(
      listRef.current.querySelectorAll('[role="tab"]:not([disabled])')
    );
    const current = tabs.indexOf(document.activeElement);
    let next = current;
    if (e.key === "ArrowRight") next = (current + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    e.preventDefault();
    tabs[next]?.focus();
    tabs[next]?.click();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={cx("tab-list", className)}
    >
      {children}
    </div>
  );
}

export function Tab({ value, children, disabled = false, className = "" }) {
  const { value: active, setValue, baseId } = useTabsContext();
  const selected = active === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      data-state={selected ? "active" : "inactive"}
      onClick={() => setValue(value)}
      className={cx("tab", className)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children, className = "" }) {
  const { value: active, baseId } = useTabsContext();
  if (active !== value) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={cx("tab-panel", className)}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Demo
 * ------------------------------------------------------------------ */

export default function TabsPage() {
  return (
      <div className="shop_main">
        <h1 className="guests__title">Shop</h1>
        <Tabs defaultValue="timepackages">
         <div className="tabs_header">
          <div className="tabs_btns">
             <TabList aria-label="Product sections">
            <Tab value="timepackages">Time Packages</Tab>
            <Tab value="products">Products</Tab>
            <Tab value="prizes">Prizes</Tab>
          </TabList>
          </div>
           <div className="Filter-btn Position-relative">
            <button class="add-order-btn">
              Add Package
            </button>
        </div>
         </div>

          <TabPanel value="timepackages">
            <div class="stage">
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">30-Minute Pack</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">1-Hour Pack</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹100</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
               </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Membership Trial</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹0</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">30-Minute Pack</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
            </div>
          </TabPanel>

          <TabPanel value="products">
           <div class="stage">
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Product1</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Product2</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹100</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
               </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Product3</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹0</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Product4</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
            </div>
          </TabPanel>

          <TabPanel value="prizes">
            <div class="stage">
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Prize1</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Prize2</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹100</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
               </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Prize3</h1>
                        <p class="card__category">60min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹0</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card__top">
                        <div class="card__titles">
                        <h1 class="card__title">Prize4</h1>
                        <p class="card__category">30min</p>
                        </div>

                        <span class="badge badge_active">
                        <span class="badge__dot badge__dot-active" aria-hidden="true"></span>
                        Active
                        </span>
                    </div>
                    <p class="card__headline">
                        <span class="card__value">₹50</span>
                    </p>
                    <div class="actions">
                        <button type="button" class="actions__btn actions__btn_equal actions__btn--active">Edit</button>
                        <button type="button" class="actions__btn actions__btn_equal">Delete</button>
                    </div>
                </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
  );
}
